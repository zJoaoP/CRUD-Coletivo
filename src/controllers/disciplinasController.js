import Disciplinas from '../models/disciplinas.model.js'

export default {
    
    get(req, res) {
        res.render('disciplinas/disciplinasPost.ejs');
    }

}