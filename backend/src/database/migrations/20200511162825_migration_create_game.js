exports.up = function(knex) {
    return knex.schema.createTable('tb_game', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('dateprocess');
        table.decimal('price').notNullable();
		table.string('user_id')
        table.foreign('user_id').references('id').inTable('tb_user'); 
		table.string('product_id').notNullable();
        table.foreign('product_id').references('id').inTable('tb_product'); 
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_game');
};