exports.up = function(knex) {
	return knex.schema
		.createTable("species", tbl => {
			tbl.increments(); // the type of primary key is integer, also called unsigned

			tbl.string("name", 255).notNullable();
		})
		.createTable("animals", tbl => {
			tbl.increments();

			tbl.string("name", 255).notNullable();

			//define our foreign key
			tbl
				.integer("species_id")
				.unsigned()
				.references("id")
				.inTable("species")
				.onDelete("RESTRICT") // about deleting the record from the primary key table. Could be 'RESTRICT', 'CASCADE', 'No ACTION', and 'SET NULL'.
				.onUpdate("CASCADE"); // about changing the value of the primary key table.
		})
		.createTable("animal_zoos", tbl => {
			tbl.increments();

			tbl.string("from", 255).notNullable();
			tbl.sting("to", 255);
		})
		.createTable("zoos", tbl => {
			tbl.increment();

			tbl.string("name", 255).notNullable();
			tbl.string("address", 255);
		});
};

exports.down = function(knex) {};
