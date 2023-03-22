const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req,res) =>{
    const sqlText = `SELECT * FROM creatures ORDER BY name, origin DESC;`;
    pool.query(sqlText)
    .then((result) => {
        console.log(`Got stuff brack from the database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})
// POST
router.post('/', (req, res) => {
    const creature = req.body;
    const sqlText = `INSERT Into creatures (name, origin)
                    VALUES ($1, $2)`;
        pool.query(sqlText, [creature.name, creature.origin])
            .then((resurl) => {
                console.log (`Added creature to the database`, creature);
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log(`Error making database query ${sqlText}`, error);
                res.sendStatus(500);
            })
})
// PUT

// DELETE

module.exports = router;
