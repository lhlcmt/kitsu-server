/*module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'ID338780_kitsu.db.webhosting.be'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'ID338780_kitsu'),
      user: env('DATABASE_USERNAME', 'ID338780_kitsu'),
      password: env('DATABASE_PASSWORD', 'Léah1252002'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});*/
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
