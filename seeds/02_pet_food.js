/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex.schema.raw('TRUNCATE pet_food CASCADE')
    await knex('pet_food').del()
    await knex('pet_food').insert([
      {id: 1, name: 'Bird Seed', description: 'Delicious Bird Food'},
      {id: 2, name: 'Meow Mix', description: 'Delicious Cat Food'},
      {id: 3, name: 'Purina', description: 'Delicious Dog Food'},
      {id: 4, name: 'Fish Food', description: 'Delicious Fish Food'}
    ]);
  };
