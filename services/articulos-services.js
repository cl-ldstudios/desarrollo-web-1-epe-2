var commonApp = require("../common/common-app");

async function listArticulos() {
	let ret = [];
	let connection = null;
	try {
		connection = await commonApp.getConnection();
		var sql = "SELECT * FROM articulo";
		const result = await connection.query(sql);
		ret = result[0];
		if (ret != null) {
			console.log("total register -> ", ret.length);
		}
	} catch (e) {
		console.error(e);
		throw new Error(e);
	} finally {
		commonApp.closeConnection(connection);
	}
	return ret;
}

async function getArticulosPorProducto(producto) {
	let ret = {};
	let connection = null;
	try {
		connection = await commonApp.getConnection();
		var sql = `SELECT * FROM articulo where upper(producto) like upper('%${producto}%')`;
		const result = await connection.query(sql);
		ret = result[0];
		if (ret != null) {
			console.log("total register -> ", ret.length);
		}
	} catch (e) {
		console.error(e);
		throw new Error(e);
	} finally {
		commonApp.closeConnection(connection);
	}
	return ret;
}

async function add(obj) {
	let connection = null;
	try {
		connection = await commonApp.getConnection();
		if (obj.producto === undefined || obj.marca === undefined || obj.precio == undefined || obj.presentacion == undefined) {
			throw new Error("Los parametros no son correctos en el cuerpo del JSon.");
		}
		var sql = `
		insert into articulo 
			(producto,marca,precio,presentacion) 
		values 
			('${obj.producto}','${obj.marca}',${obj.precio},'${obj.presentacion}')
		`;
		await connection.execute(sql);
	} catch (e) {
		console.error(e);
		throw new Error(e);
	} finally {
		commonApp.closeConnection(connection);
	}
}

module.exports = {
	listArticulos,
	getArticulosPorProducto,
	add
}