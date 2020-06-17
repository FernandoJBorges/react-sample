exports.up = function(knex) {
    return knex.schema.createTable('tb_product', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('image').notNullable();
        table.decimal('price').notNullable();
        table.decimal('url').notNullable();

       })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_product');
};