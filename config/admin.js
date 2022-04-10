module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c8378958a7a02e1124481f5a430420b9'),
  },
});
