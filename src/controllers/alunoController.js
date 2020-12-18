import Aluno from '../models/aluno.model.js'

export default {

    get(req, res) {
        Aluno.find().then(alunos => res.render('alunos.ejs', { alunos: alunos }))
        .catch(err => console.error(err))
    },

    post(req, res) {
        
        const { 
                nome, 
                matricula, 
                curso, 
                dataDeNascimento, 
                semestreDeIngresso, 
                CPF, 
                RG, 
                tituloEleitor, 
                estadoCivil,
                UF, 
                cidade, 
                endereco
            } = req.body

        const newAluno = new Aluno({
            nome,
            matricula,
            curso,
            dataDeNascimento,
            semestreDeIngresso,
            CPF,
            RG,
            tituloEleitor,
            estadoCivil,
            UF,
            cidade,
            endereco
        })
    
        newAluno.save()
            .then(() => { 
                console.log("Salvo no BD")
                res.redirect('/alunos')
            })
            .catch((err) => console.error(err))
    },

    update(req, res) {
        Aluno.findById(req.params.id)
          .then(aluno => {
            aluno.nome = req.body.nome
            aluno.matricula = req.body.matricula
            aluno.dataDeNascimento = req.body.dataDeNascimento ? req.body.dataDeNascimento : aluno.dataDeNascimento
            aluno.curso = req.body.curso
            aluno.semestreDeIngresso = Number(req.body.semestreDeIngresso)
            aluno.CPF = req.body.CPF,
            aluno.RG = req.body.RG,
            aluno.tituloEleitor = req.body.tituloEleitor,
            aluno.estadoCivil = req.body.estadoCivil,
            aluno.UF = req.body.UF,
            aluno.cidade = req.body.cidade,
            aluno.endereco = req.body.endereco

            aluno.save()
              .then(() => res.redirect('/alunos'))
              .catch(err => res.status(400).json('Error: ' + err));
          })
          .catch(err => res.status(400).json('Error: ' + err));
    },
    
    delete(req, res) {
        Aluno.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/alunos'))
        .catch(err => res.status(400).json('Error: ' + err));
    }

}