import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const disciplinasSchema = new Schema({
  nome: { type: String, required: true },
  cargaHoraria: { type: String, required: true},
  professor: {type: String, required: true},
  limiteAlunos: {type: Number, required: true}
});

const Disciplinas = mongoose.model('Disciplinas', testeSchema);

export default Disciplinas