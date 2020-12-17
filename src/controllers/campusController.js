import Campus from "../models/campus.model.js";

export default {
  index(req, res) {
    res.render("index.ejs");
  },
  get(req, res) {
    Campus.find()
      .then((campi) => res.render("campus.ejs", { campi: campi }))
      .catch((err) => console.error(err));
  },
  post(req, res) {
    const nome = req.body.nome;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;

    const campus = new Campus({
      nome: nome,
      bairro: bairro,
      cidade: cidade,
    });

    campus
      .save()
      .then(() => {
        res.redirect("campus");
      })
      .catch((err) => console.error(err));
  },
  delete(req, res) {
    const id = req.params.id;
    Campus.findByIdAndDelete(id)
      .then(() => {
        res.redirect("/campus");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  },
  update(req, res) {
    const id = req.params.id;

    const nome = req.body.nome;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    Campus.updateOne(
      { _id: id },
      { nome: nome, bairro: bairro, cidade: cidade },
      function (err) {
        if (err) console.error(err);
        res.redirect("/campus");
      }
    );
  },
};
