import Campus from "../models/campus.model.js";

export default {
  index(req, res) {
    res.render("index.ejs");
  },
  get(req, res) {
    res.render("campus.ejs");
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
};
