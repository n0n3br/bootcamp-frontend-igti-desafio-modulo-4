import mongoose from "mongoose";

const GradesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: Number, required: true },
  lastModified: { type: Date },
});
const GradesModel = mongoose.model("grades", GradesSchema);

export { GradesModel };
