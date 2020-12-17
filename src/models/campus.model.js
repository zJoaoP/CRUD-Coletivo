import mongoose from "mongoose";

const Schema = mongoose.Schema;

const campusSchema = new Schema({
  nome: { type: String, required: true },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
});

const Campus = mongoose.model("Campus", campusSchema);

export default Campus;
