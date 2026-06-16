import mongoose from "mongoose";

const TableTranslationSchema = new mongoose.Schema({
  EntityType: {
    type: String,
    required: true,
    trim: true,
  },
  EntityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  FieldName: {
    type: String,
    required: true,
    trim: true,
  },
  LanguageCode: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Value: {
    type: String,
    required: true,
    trim: true,
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: false,
  },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },
  UpdatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  UpdatedDate: {
    type: Date,
  },
});

TableTranslationSchema.index(
  { EntityType: 1, EntityId: 1, FieldName: 1, LanguageCode: 1 },
  { unique: true }
);

export default mongoose.model(
  "TableTranslation",
  TableTranslationSchema,
  "TableTranslations"
);

