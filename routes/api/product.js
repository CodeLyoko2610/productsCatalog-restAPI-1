const express = require('express');
const {
    check,
    validationResult
} = require('express-validator');

const router = express.Router();


//@route    GET api/product
//@desc     Check 1 product
router.get('/', (req, res) => {
    res.send('Product route.');
})

//@route    POST api/product
//@desc     Create new product
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    console.log(req.body);
    res.send('Product route.');
})


module.exports = router;