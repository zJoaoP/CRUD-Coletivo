import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const alunoSchema = new Schema({
  nome: { type: String, required: true },
  matricula: { type: Number, required: true},
  curso: { type: String, required: true},
  dataDeNascimento: { type: String, required: true },
  semestreDeIngresso: { type: Number }
});

const Aluno = mongoose.model('Aluno', alunoSchema);

export default Aluno