import Disciplinas from '../models/disciplinas.model.js'

export default {
    
    get(req, res) {
        Disciplinas.find()
        .then(disciplina => res.render('disciplinas.ejs', { disciplinas: disciplina }))
        .catch(err => res.status(400).json('Error: ' + err));
    },

    post(req, res) {
        const nome = req.body.nome
        const cargaHoraria = req.body.cargaHoraria
        const professor = req.body.professor
        const limiteAlunos = req.body.limiteAlunos
    
        const newDisciplina = new Disciplinas({
            nome: nome,
            cargaHoraria: cargaHoraria,
            professor: professor,
            limiteAlunos: limiteAlunos
        })
    
        newDisciplina.save()
            .then(() => { 
                console.log("Salvo no BD")
                res.redirect('/disciplinas')
            })
            .catch((err) => console.error(err))
    },

    delete(req, res) {
        Disciplinas.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/disciplinas'))
        .catch(err => res.status(400).json('Error: ' + err));
    },

    update(req, res) {
        const id = req.params.id;

        const nome = req.body.nome
        const cargaHoraria = req.body.cargaHoraria
        const professor = req.body.professor
        const limiteAlunos = req.body.limiteAlunos
        Disciplinas.updateOne(
          { _id: id },
          { nome: nome, cargaHoraria: cargaHoraria, professor: professor, limiteAlunos: limiteAlunos },
          function (err) {
            if (err) console.error(err);
            res.redirect("/disciplinas");
          }
        );
    }

}