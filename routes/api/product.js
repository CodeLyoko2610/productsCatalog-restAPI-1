const express = require('express');
const router = express.Router();

//@route    GET api/product
//@desc     Check 1 product
router.get('/', (req, res) => {
    res.send('Product route.');
})

//@route    POST api/product
//@desc     Create new product
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Product route.');
})


module.exports = router;