const { Router } = require('express')
const route = Router()

route.get('/',(req, res)=>{
    res.render('Main/Index', {title : "Citas ITI - Registra Tu Cita Hoy!!"})
})

route.get('/nextType', (req, res) => {
    console.log(req.query.nC);
    res.render('View/CitesType', {nombreCitante: req.query.nC })
})


module.exports = route