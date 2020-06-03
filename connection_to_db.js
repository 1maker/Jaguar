!(() => {

'use strict';

	var mysql = require('mysql2');

	let connection = mysql.createConnection({
		user: 'root',
		password: 'Saf!023c*8q9e_c382c0c3d_c5fa3e_058a6d',
		database: 'jaguar_db'
	});

	connection.connect();

	connection.query('SELECT * from cars_models', function (error, results, fields) {
		if (error) throw error;

		console.log('results = ', results);

		console.log('The solution is: ', results[0].solution);
	});

	connection.end();
	
})();

