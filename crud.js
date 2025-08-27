const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 8848;

let items = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'}
];

app.get('/',(req, res) => {
   res.send('welcome to crud application');
});

app.get('/api/items',(req,res)=> {
    res.json(items);
});
 
app.get('/api/items/:id',(req,res)=> {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

app.post('/api/items',(req,res)=> {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/api/items/:id',(req,res)=> {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.name = req.body.name;
    res.json(item);
});

app.delete('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    
    const index = items.indexOf(item);
    items.splice(index, 1);
    res.json(item);
});

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});