const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
    res.send('API is runing...')
})

// creating a root to get data by _id
app.get('/api/products', (req, res) => {
    res.json(products)
})
// creating a routes to get data by _id
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('server listening on port 5000'))