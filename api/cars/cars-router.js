// DO YOUR MAGIC
const router = require('express').Router()

const Cars = require('./cars-model')

// const { checkCarId, checkCarPayload, checkVinNumberUnique,checkVinNumberValid } = require('./cars-middleware')

router.get('/', (req, res, next) => {
   
    Cars.getAll()
        .then(cars => { 
            console.log(cars)
            res.status(200).json(cars)
        })
        .catch(err => {
            next(err)
        })

})

// router.get('/:id', checkCarId, (req, res, next)=> {
// Cars.getById(req.params.id)
// .then(result=> {
//     res.status(200).json(result)
// })
// .catch(err=> {
//     next(err)
// })
// })

// router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, (req, res, next)=> {
//     Cars.create(req.body)
//     .then(newcar => {
//         res.status(201).json(newcar)
//     })
//     .catch(err=> {
//         next(err)
//     })
    
// })


// router.use((err, req, res, next) => {
//     res.status(err.status || 500).json({
//         message: err.message,
//     })
// })
module.exports = router;