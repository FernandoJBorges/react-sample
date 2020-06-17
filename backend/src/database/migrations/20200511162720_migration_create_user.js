exports.up = function(knex) {
    return knex.schema.createTable('tb_user', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('lastName').notNullable();
        table.string('email').notNullable();
        table.string('pwd').notNullable();
        table.string('pwdlast').notNullable();
		table.timestamp('create').notNullable().defaultTo(knex.fn.now());
        table.string('role').notNullable().defaultTo('Normal');
       })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_user');
};


