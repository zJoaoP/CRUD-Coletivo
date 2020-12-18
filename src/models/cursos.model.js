import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const cursosSchema = new Schema({
  nome: { type: String, required: true },
  departamento: { type: String, required: true},
  cargaHoraria: { type: Number, required: true},
  cidade: { type: String, required: true},
  area: { type: String, required: true},

  estado: { type: String, required: true},
  bairro: { type: String, required: true},
  turno: { type: String, required: true},
  tipo: { type: String, required: true},
  duracao: { type: Number, required: true},
});

const Curso = mongoose.model('cursos', cursosSchema);

export default Curso