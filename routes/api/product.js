const express = require('express');
const router = express.Router();

//@route    GET api/product
//@desc     Check 1 product
router.get('/', (req, res) => {
    res.send('Product route.');
})


module.exports = router;