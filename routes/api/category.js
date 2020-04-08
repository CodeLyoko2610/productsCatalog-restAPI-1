const express = require('express');
const {
    check,
    validationResult
} = require('express-validator');
const Category = require('../../models/Category');

const router = express.Router();

//@route    GET api/category
//@desc     Check 1 category
router.get('/', (req, res) => {
    res.send('Category route.');
})

//@route    POST api/category
//@desc     Create new category
router.post('/', [
    check('name', 'Name is required.').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        })
    }

    const {
        name,
        description
    } = req.body;

    try {
        //Check if category already exists
        let category = await Category.findOne({
            name
        });

        //If exists, return error
        if (category) {
            return res.status(400).json({
                errors: [{
                    msg: 'Category already exists.'
                }]
            })
        }

        //If not, create new category
        let newCategory = new Category({
            name,
            description
        })

        await newCategory.save();
        res.send('New category created. ' + newCategory);
    } catch (error) {
        res.status(500).send('Server error.');
        console.error(error.message);
    }
})


module.exports = router;