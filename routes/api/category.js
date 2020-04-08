const express = require('express');
const {
    check,
    validationResult
} = require('express-validator');
const Category = require('../../models/Category');

const router = express.Router();

//@route    GET api/category
//@desc     Check all categories
router.get('/', (req, res) => {
    res.send('Category route.');
})

//@route    POST api/category
//@desc     Create new category
router.post('/', [
    check('cateName', 'Name is required.').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        })
    }

    const {
        cateName,
        cateDescription
    } = req.body;

    try {
        //Check if category already exists
        let category = await Category.findOne({
            cateName
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
            cateName,
            cateDescription
        })

        await newCategory.save();
        res.send('New category created. ' + newCategory);
    } catch (error) {
        res.status(500).send('Server error.');
        console.error('[category.js] ' + error.message);
    }
})


module.exports = router;