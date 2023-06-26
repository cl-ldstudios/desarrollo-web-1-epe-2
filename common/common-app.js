var mysql = require('mysql2/promise');

var credentialDataBase = {
	host: "data.ldwsstudios.com",
	user: "dw_epe",
	password: "Dw2023.,",
	database: "dw_epe2",
	ssl: false,
	waitForConnections: true,
	connectionLimit: 3,
	queueLimit: 0
}

function viewRequestInfo(req) {
	let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
	console.log("Remote IP -> ", ip);
}

async function getConnection() {
	return await mysql.createConnection(credentialDataBase);
}

function closeConnection(connection) {
	if (connection != null) {
		connection.end();
		console.log("connection close .... [OK]");
	}
}

module.exports = {
	credentialDataBase,
	closeConnection,
	getConnection,
	viewRequestInfo
}
