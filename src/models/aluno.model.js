import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const alunoSchema = new Schema({
  nome: { type: String, required: true },
  matricula: { type: Number, required: true},
  curso: { type: String, required: true},
  dataDeNascimento: { type: String, required: true },
  semestreDeIngresso: { type: Number },
  CPF: { type: String, required: true },
  RG: { type: String, required: true },
  tituloEleitor: { type: String },
  estadoCivil: { type: String },
  UF: { type: String, required: true },
  cidade: { type: String, required: true },
  endereco: { type: String, required: true }
});

const Aluno = mongoose.model('Aluno', alunoSchema);

export default Aluno