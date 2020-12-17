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
    const localidade = req.body.localidade
    const area = req.body.area

    const newCurso = new Curso({
        nome: nome,
        departamento: departamento,
        cargaHoraria: cargaHoraria,
        localidade: localidade,
        area: area,
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
    const nome = req.body.nome;
    const departamento = req.body.departamento;
    const cargaHoraria = req.body.cargaHoraria;
    const localidade = req.body.localidade;
    const area = req.body.area;
    Curso.updateOne(
      { _id: id },
      { nome: nome, departamento: departamento, cargaHoraria: cargaHoraria, localidade: localidade, area: area },
      function (err) {
        if (err) console.error(err);
        res.redirect("/cursos");
      }
    );
  },
};
