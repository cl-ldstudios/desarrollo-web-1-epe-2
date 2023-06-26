const express = require('express');
const app = express();
const port = 3000;
const epe2 = require("./routes/epe-2");
app.use(express.json());
app.get('/', (req, res) => {
	let data = {
		descripcion: 'IP Chile, Desarrollo WEB 1, EPE 2, Junio 2023',
		fecha: new Date(),
		integrantes: [
			{
				nombre: 'Marcela Olmos'
			}, {
				nombre: 'Luis Millahual'
			}, {
				nombre: 'Darwin Hermosilla'
			}, {
				nombre: 'Rolando Duarte'
			}
		]
	};
	res.json(data);
});
app.use("/epe2", epe2);
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});