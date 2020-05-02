/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'test', password: 'password' },
      ]);
    });
};
