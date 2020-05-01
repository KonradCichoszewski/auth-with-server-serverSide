module.exports = function (app) {
  app.get('/', function (req, res, next) {
    res.send(['glass bottle', 'paper', 'phone']);
  })
}