const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    return res.json({message: 'Hello from Nodejs Container'});
})

app.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`));