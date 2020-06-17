exports.up = function(knex) {
    return knex.schema.createTable('tb_user_game', function (table) {
        table.increments();
        table.decimal('number').notNullable();
		table.integer('game_id').notNullable();
        table.foreign('game_id').references('id').inTable('tb_games'); 
		table.integer('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('tb_users');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_user_game');
};



