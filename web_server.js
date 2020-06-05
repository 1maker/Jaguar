const express = require('express');
const app = express();
const http = require('http').createServer(app);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	
	res.sendFile(__dirname + '\\public\\index.html');
});

app.get('/get_badges', async (req, res) => {
	
	res.set({
		'Access-Control-Allow-Methods':'GET,POST,PATCH',
		'Access-Control-Allow-Headers':'the_key_to_the_apartment_where_the_money_is,Content-Type',
	});
	
	const connection = await require('./scripts/connection_to_db.js');
	
	let [cars_models_count] = await connection.execute('SELECT COUNT(*) as cars_models_count FROM cars_models');
	let [cars_models_available_count] = await connection.execute('SELECT COUNT(*) as cars_models_available_count FROM cars_models_available');
	
	//connection.end();
	
	cars_models_count = cars_models_count[0].cars_models_count;
	cars_models_available_count = cars_models_available_count[0].cars_models_available_count;
	
	res.send(JSON.stringify({cars_models_count, cars_models_available_count}));
});

let listen_id = http.listen(8989, () => {
  console.log('listening on *:8989');
});


//res.sendFile(__dirname.slice(0, __dirname.lastIndexOf('\\'))+ '\\public\\index.html');

