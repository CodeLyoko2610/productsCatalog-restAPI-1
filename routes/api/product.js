const express = require('express');
const {
    check,
    validationResult
} = require('express-validator');

//Bring in models
const Product = require('../../models/Product');

const router = express.Router();

//@route    GET api/product
//@desc     Check all product
router.get('/', (req, res) => {
    res.send('Product route.');
});

//@route    POST api/product
//@desc     Create new product
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('category', 'Category is  required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const {
            name,
            category,
            description
        } = req.body;

        try {
            //See if product already exists
            let product = await Product.findOne({
                name
            });

            //Return error if exists
            if (product) {
                return res
                    .status(400)
                    .json({
                        errors: [{
                            msg: 'Product already exists.'
                        }]
                    });
            }

            //Create new product if not
            let newProduct = new Product({
                name,
                category,
                description,
            });

            await newProduct.save();
            res.send('New product created. ' + newProduct);
        } catch (error) {
            res.status(500).send('Server error.');
            console.error(error.message);
        }
    }
);

//@route    GET api/product/:productId
//@desc     Check 1 product
router.get('/:productId', async (req, res) => {
    try {
        let product = await Product
            .findOne({
                _id: req.params.productId
            })
            .populate('Category', ['name', 'description']);

        if (!product) {
            return res.status(400).send('Product not found.');
        }

        res.json(product);
    } catch (error) {
        res.status(500).send('Server error.');
        console.error('[product.js] ' + error.message);
    }
});

module.exports = router;