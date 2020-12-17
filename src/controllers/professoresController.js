import Professor from "../models/professor.model.js";

export default {
  get(req, res) {
    Professor.find()
      .then((professores) =>
        res.render("professores.ejs", { professores: professores })
      )
      .catch((err) => console.error(err));
  },
  post(req, res) {
    const nome = req.body.nome;
    const titulo = req.body.titulo;
    const departamento = req.body.departamento;
    const especialidade = req.body.especialidade;

    const professor = new Professor({
      nome: nome,
      titulo: titulo,
      departamento: departamento,
      especialidade: especialidade,
    });

    professor
      .save()
      .then(() => {
        res.redirect("professores");
      })
      .catch((err) => console.error(err));
  },
  delete(req, res) {
    const id = req.params.id;
    Professor.findByIdAndDelete(id)
      .then(() => {
        res.redirect("/professores");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  },
  update(req, res) {
    const id = req.params.id;

    const nome = req.body.nome;
    const titulo = req.body.titulo;
    const departamento = req.body.departamento;
    const especialidade = req.body.especialidade;
    Professor.updateOne(
      { _id: id },
      {
        nome: nome,
        titulo: titulo,
        departamento: departamento,
        especialidade: especialidade,
      },
      function (err) {
        if (err) console.error(err);
        res.redirect("/professores");
      }
    );
  },
};
