async function connection(){
	
	let mysql = require('mysql2/promise');

	let connection = await mysql.createConnection({
		user: 'root',
		password: 'Saf!023c*8q9e_c382c0c3d_c5fa3e_058a6d',
		database: 'jaguar_db'
	});

	return connection;
};

module.exports = connection();




