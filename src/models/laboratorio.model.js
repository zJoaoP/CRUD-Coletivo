import mongoose from "mongoose";

const Schema = mongoose.Schema;

const laboratorioSchema = new Schema({
  sala: { type: String, required: true },
  professor: { type: String, required: true },
  turno: { type: String, required: true },
});

const Laboratorio = mongoose.model("Laboratorio", laboratorioSchema);

export default Laboratorio;