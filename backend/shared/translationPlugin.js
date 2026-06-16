import mongoose from "mongoose";
import { requestContext } from "./requestContext.js";

export const translationPlugin = (schema) => {
  // Add Translations field directly to Schema to accept updates and prevent stripping
  schema.add({
    Translations: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
      select: false,
    },
  });

  // Manual method to translate a single document instance
  schema.methods.translate = async function(lang) {
    if (!lang) return this;
    const entityType = this.constructor.modelName;
    if (entityType === "TableTranslation") return this;

    const TableTranslation = mongoose.model("TableTranslation");
    const translatableFields = ["Name", "Description", "Currency", "CurrencySymbol"];

    for (const field of translatableFields) {
      if (this[field] !== undefined) {
        const translation = await TableTranslation.findOne({
          EntityType: entityType,
          EntityId: this._id,
          FieldName: field,
          LanguageCode: lang,
        });
        if (translation && translation.Value) {
          this[field] = translation.Value;
        }
      }
    }
    return this;
  };

  // Helper function to bulk translate documents
  const bulkTranslate = async (docs, modelName, lang) => {
    if (!docs || docs.length === 0) return;
    const TableTranslation = mongoose.model("TableTranslation");
    const translatableFields = ["Name", "Description", "Currency", "CurrencySymbol"];
    const docIds = docs.map(d => d._id).filter(Boolean);
    if (docIds.length === 0) return;

    const dbTranslations = await TableTranslation.find({
      EntityType: modelName,
      EntityId: { $in: docIds },
      LanguageCode: lang,
      FieldName: { $in: translatableFields },
    }).lean();

    const translationMap = new Map();
    for (const t of dbTranslations) {
      const key = `${t.EntityId.toString()}_${t.FieldName}`;
      translationMap.set(key, t.Value);
    }

    for (const doc of docs) {
      if (!doc) continue;
      const isLean = !(doc instanceof mongoose.Document);
      for (const field of translatableFields) {
        const val = isLean ? doc[field] : doc.get(field);
        if (val !== undefined) {
          const key = `${doc._id.toString()}_${field}`;
          if (translationMap.has(key)) {
            const translatedValue = translationMap.get(key);
            if (isLean) {
              doc[field] = translatedValue;
            } else {
              doc.set(field, translatedValue);
            }
          }
        }
      }
    }
  };

  // Query middleware hooks to automatically translate if option lang is set
  // Falls back to the request-scoped lang stored in AsyncLocalStorage.
  // Skips the DB lookup entirely when lang resolves to 'en'.
  schema.post(["find", "findOne", "findOneAndUpdate"], async function(result) {
    const lang = this.getOptions().lang || requestContext.getStore()?.lang;
    if (!lang || lang === "en" || !result) return;

    const entityType = this.model.modelName;
    if (entityType === "TableTranslation") return;

    const isArray = Array.isArray(result);
    const docs = isArray ? result : [result];
    await bulkTranslate(docs, entityType, lang);
  });

  // Post save hooks to auto-save translations if provided
  schema.post("save", async function(doc) {
    const entityType = this.constructor.modelName;
    if (entityType === "TableTranslation") return;

    const TableTranslation = mongoose.model("TableTranslation");
    const translations = this.Translations || this._translations || doc.Translations || doc._translations;

    if (translations && Array.isArray(translations)) {
      for (const t of translations) {
        await TableTranslation.findOneAndUpdate(
          {
            EntityType: entityType,
            EntityId: doc._id,
            FieldName: t.FieldName,
            LanguageCode: t.LanguageCode,
          },
          { Value: t.Value },
          { upsert: true, new: true }
        );
      }
    }
  });

  // Post update hooks to auto-save translations if provided
  schema.post("findOneAndUpdate", async function(doc) {
    if (!doc) return;
    const entityType = this.model.modelName;
    if (entityType === "TableTranslation") return;

    const TableTranslation = mongoose.model("TableTranslation");
    const update = this.getUpdate();
    const translations = update.Translations || update._translations || update.$set?.Translations || update.$set?._translations;

    if (translations && Array.isArray(translations)) {
      for (const t of translations) {
        await TableTranslation.findOneAndUpdate(
          {
            EntityType: entityType,
            EntityId: doc._id,
            FieldName: t.FieldName,
            LanguageCode: t.LanguageCode,
          },
          { Value: t.Value },
          { upsert: true, new: true }
        );
      }
    }
  });

  // Auto delete translations when a document is deleted
  schema.post(["findOneAndDelete", "remove"], async function(doc) {
    if (!doc) return;
    const entityType = this.constructor.modelName || this.model.modelName;
    if (entityType === "TableTranslation") return;

    const TableTranslation = mongoose.model("TableTranslation");
    await TableTranslation.deleteMany({
      EntityType: entityType,
      EntityId: doc._id,
    });
  });
};
