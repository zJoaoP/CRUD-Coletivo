import Curso from '../models/cursos.model.js'

export default {
  index(req, res) {
    res.render("index.ejs");
  },
  get(req, res) {
    Curso.find().then(cursos => res.render('cursos.ejs', { cursos: cursos }))
    .catch(err => console.error(err))
  },
  post(req, res) {
    const nome = req.body.nome
    const departamento = req.body.departamento
    const cargaHoraria = req.body.cargaHoraria
    const cidade = req.body.cidade
    const estado = req.body.estado
    const area = req.body.area

    
    const bairro = req.body.bairro
    const tipo = req.body.tipo
    const turno = req.body.turno
    const duracao = req.body.duracao

    const newCurso = new Curso({
        nome: nome,
        departamento: departamento,
        cargaHoraria: cargaHoraria,
        cidade: cidade,
        estado: estado,
        area: area,
        bairro: bairro,
        
        tipo: tipo,
        turno: turno,
        duracao: duracao,
    })

    newCurso.save()
        .then(() => { 
            console.log("Salvo no BD")
            res.redirect('cursos')
        })
        .catch((err) => console.error(err))
  },
  delete(req, res) {
    const id = req.params.id;
    Curso.findByIdAndDelete(id)
      .then(() => {
        res.redirect("/cursos");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  },
  update(req, res) {
    const id = req.params.id;
    const nome = req.body.nome
    const departamento = req.body.departamento
    const cargaHoraria = req.body.cargaHoraria
    const cidade = req.body.cidade
    const area = req.body.area

    const estado = req.body.estado
    const bairro = req.body.bairro
    const tipo = req.body.tipo
    const turno = req.body.turno
    const duracao = req.body.duracao
    Curso.updateOne(
      { _id: id },
      { nome: nome,
        departamento: departamento,
        cargaHoraria: cargaHoraria,
        cidade: cidade,
        area: area,
        bairro: bairro,
        estado: estado,
        tipo: tipo,
        turno: turno,
        duracao: duracao, },
      function (err) {
        if (err) console.error(err);
        res.redirect("/cursos");
      }
    );
  },
};
