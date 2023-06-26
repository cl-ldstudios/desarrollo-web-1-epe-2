# desarrollo-web-1-epe-2



## Pasos para ejecucion

1.- Se debe tener NodeJS version 20, eso se logra con la sintaxis:

```
nvm install 20
```

2.- Para instalar dependencias con la sintaxis:

```
npm install
```

3.- Para ejecutar el proyecto es con la sintaxis en consola:

```
node index.js
```

## Metodos WEB del servicio REST


1.- Metodo GET del servicio que entrega los resultados de los productos.

```
curl --location 'https://epe-2.desarrollo-web-1.ipchile.ldwsstudios.dev/epe2'
```

2.- Metodo POST del servicio, un ejemplo es que el cuerpo de la petición busca todos los productos con el texto "detergente".

```
curl --location 'https://epe-2.desarrollo-web-1.ipchile.ldwsstudios.dev/epe2/buscar-por-producto' \
--header 'Content-Type: application/json' \
--data '{
    "producto": "detergente"
}'
```

3.- Metodo PUT del servicio, Un ejemplo es que en el cuerpo del JSon hace un insert de producto al servicio.

```
curl --location --request PUT 'https://epe-2.desarrollo-web-1.ipchile.ldwsstudios.dev/epe2/' \
--header 'Content-Type: application/json' \
--data '{
    "producto": "Cafe Tradicion Tarro",s
    "marca": "Nestlé",
    "precio": 5000,
    "presentacion": "450 gr"
  }'
```

4.- Un servicio que entrega los integrantes de los construimos el servicio.

```
curl --location 'https://epe-2.desarrollo-web-1.ipchile.ldwsstudios.dev/'
```