//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

// contact list
const delete_contact_list = async(req, res, next) => {
    

    try {
        const result = await knex("public.contact_list")
            .delete()
            .where("id", "=", req.query.id)
        return res
            .status(200)
            .send({ status: 'Successfully Deteted' });
    } catch (error) {
        console.error(error.message);
        res.status(500);

    }
 
}

//get contact list api
router.delete('/api/delete_contact_list', delete_contact_list);

module.exports = router;