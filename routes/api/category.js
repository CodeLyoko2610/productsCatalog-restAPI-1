const express = require('express');
const router = express.Router();

//@route    GET api/category
//@desc     Check 1 category
router.get('/', (req, res) => {
    res.send('Category route.');
})


module.exports = router;