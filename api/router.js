const express = require('express')
const router = express.Router()

/**
 * TODO:
 * Resolve env variables for set right CORS policy
 */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    next();
});

router.get('/api/sneakers', function (req, res) {
    res.status(200).send([
        {
            image: '/images/tmp-sneaker.jpeg',
            name: 'Adidas Streetball',
            vendorCode: '123',
            averagePrice: 12000
        },
    ]);
})

module.exports = router