const express = require('express');
const router = express.Router();
const articulosService = require("../services/articulos-services");
const commonApp = require("../common/common-app");
router.get('/', async function(req, res) {
	try {
		commonApp.viewRequestInfo(req);
		let list = await articulosService.listArticulos();
		res.status(200).json(list);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ error: err.message });
	}
});
router.put('/', async function(req, res) {
	try {
		commonApp.viewRequestInfo(req);
		const obj = req.body;
		await articulosService.add(obj);
		console.log("obj [body request] -> ", obj);
		res.status(200).json(obj);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ error: err.message });
	}
});
router.post('/buscar-por-producto', async function(req, res) {
	try {
		commonApp.viewRequestInfo(req);
		const obj = req.body;
		console.log(req.body);
		let list = await articulosService.getArticulosPorProducto(obj.producto);
		res.status(200).json(list);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ error: err.message });
	}
});
module.exports = router;