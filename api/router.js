const express = require('express')
const router = express.Router()

router.get('/sneakers', function (req, res) {
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