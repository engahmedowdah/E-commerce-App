import TableTranslationModel from "../modules/data/TableTranslation/TableTranslation.model.js";

export const AddTranslation = ({
 entityType,
 entityId,
 fieldName,
 languageCode,
 value
}) => ({
 EntityType: entityType,
 EntityId: entityId,
 FieldName: fieldName,
 LanguageCode: languageCode,
 Value: value,
});

export const GetTranslatedValue = async (
 entityType,
 entityId,
 field,
 lang,
 fallback
) => {
 const translation = await TableTranslationModel.findOne({
   EntityType: entityType,
   EntityId: entityId,
   FieldName: field,
   LanguageCode: lang
 });
 return translation?.Value || fallback;
};
