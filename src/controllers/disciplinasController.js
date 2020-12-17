import Disciplinas from '../models/disciplinas.model.js'

export default {
    
    get(req, res) {
        res.render('disciplinas/disciplinasPost.ejs');
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
                res.redirect('/teste/disciplinas/show')
            })
            .catch((err) => console.error(err))
    },

    show(req, res){
        Disciplinas.find()
        .then(disciplina => res.render('disciplinas/disciplinas.ejs', { disciplinas: disciplina }))
        .catch(err => res.status(400).json('Error: ' + err));
    }

}