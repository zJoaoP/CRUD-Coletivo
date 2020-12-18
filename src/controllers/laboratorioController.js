import Laboratorio from "../models/laboratorio.model.js";

export default {
  get(req, res) {
    Laboratorio.find()
      .then((lab) =>
        res.render("laboratorio.ejs", { lab: lab })
      )
      .catch((err) => console.error(err));
  },
  post(req, res) {
    const sala = req.body.sala;
    const professor = req.body.professor;
    const turno = req.body.turno;

    const laboratorio = new Laboratorio({
      sala: sala,
      professor: professor,
      turno: turno
    });

    laboratorio
      .save()
      .then(() => {
        res.redirect("laboratorio");
      })
      .catch((err) => console.error(err));
  },
  delete(req, res) {
    const id = req.params.id;
    Laboratorio.findByIdAndDelete(id)
      .then(() => {
        res.redirect("/laboratorio");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  },
  update(req, res) {
    const id = req.params.id;

    const sala = req.body.sala;
    const professor = req.body.professor;
    const turno = req.body.turno;
    Laboratorio.updateOne(
      { _id: id },
      {
        sala: sala,
        professor: professor,
        turno: turno,
      },
      function (err) {
        if (err) console.error(err);
        res.redirect("/laboratorio");
      }
    );
  },
};