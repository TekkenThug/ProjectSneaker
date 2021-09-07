require('dotenv').config();
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.APP_URL);
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