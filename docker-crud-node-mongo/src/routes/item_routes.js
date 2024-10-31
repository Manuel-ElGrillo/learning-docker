const express = require('express');
const router = express.Router();
const Item_model = require('../models/Item.js');

// Crear un nuevo item
router.post('/create', async (req, res) => {

    const { name, quantity } = req.body;

    console.log("FORMATO DEl REQ: ", req.body)
    console.log("HEADERS: ", req.headers);

    if (!name || !quantity) {
        return res.status(400).json({
            message: "Both 'name' and 'quantity' are required.",
            log: "Faltan campos en la solicitud"
        });
    }
    
    try {
        const item = new Item_model(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ message: err.message,
            log: "Ha ocurrido un error, lo siento :(" });
    }
});

// Leer todos los items
router.get('/', async (req, res) => {
    try {
        const items = await Item_model.find({});
        res.json(items);
    } catch (err) {
        res.status(500).json({ 
            message: err.message,
            log: "Ha ocurrido un error en el servidor" 
        });
    }
});

// Actualizar un item
router.put('/item/:id', async (req, res) => {

    const {id} = req.params;
    const { name, quantity } = req.body;

    try {
        console.log("ID del item: ", id);
        console.log("Data: ", name, quantity);
        const item = await Item_model.findOneAndUpdate({_id: id}, {name, quantity}, { new: true });
        console.log("UPDATED ITEM: ", item);
        if (!item) return res.status(404).json({ message: 'Item no encontrado' });
        res.json(item);
    } catch (err) {
        console.log("No sé qué carajos pasa");
        res.status(400).json({ message: err.message });
    }
});

// Eliminar un item
router.delete('/item/:id', async (req, res) => {
    try {
        const item = await Item_model.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item no encontrado' });
        res.json({ message: 'Item eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
