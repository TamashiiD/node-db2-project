// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make:'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'

    },
    {
        vin: '1111111111111',
        make:'toyota',
        model: 'corola',
        mileage: 115000,
        title: 'salvage',

    },
    {
        vin: '1111111111111',
        make:'ford',
        model: 'focus',
        mileage: 15000,

    }
]
exports.seeds = function(knex){
    return knex('cars').truncate().then(()=>{
        return knex('cars').insert(cars)
    })
}