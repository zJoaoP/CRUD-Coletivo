import mongoose from "mongoose";

const Schema = mongoose.Schema;

const professorSchema = new Schema({
  nome: { type: String, required: true },
  titulo: { type: String, required: true },
  nacionalidade: { type: String, required: true },
  departamento: { type: String, required: true },
  especialidade: { type: String, required: true },
});

const Professor = mongoose.model("Professor", professorSchema);

export default Professor;
