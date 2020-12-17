import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const cursosSchema = new Schema({
  nome: { type: String, required: true },
  departamento: { type: String, required: true},
  cargaHoraria: { type: Number, required: true},
  localidade: { type: String, required: true},
  area: { type: String, required: true},
});

const Curso = mongoose.model('cursos', cursosSchema);

export default Curso