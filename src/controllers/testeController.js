// import Teste from '../models/teste.model.js'

// export default {
    
//     get(req, res) {
//       res.render('teste/testePost.ejs');
//     },

//     post(req, res) {
//         const nome = req.body.nome
//         const curso = req.body.curso
    
//         const newTeste = new Teste({
//             nome: nome,
//             curso: curso
//         })
    
//         newTeste.save()
//             .then(() => { 
//                 console.log("Salvo no BD")
//                 res.redirect('/teste/show')
//             })
//             .catch((err) => console.error(err))
//     },

//     show(req, res){
//         Teste.find()
//         .then(testes => res.render('teste/teste.ejs', { teste: testes }))
//         .catch(err => res.status(400).json('Error: ' + err));
//     }

// }