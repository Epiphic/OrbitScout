Router.route('/', function () {
  this.render('home');
});

Router.route('/match', function () {
  this.render('matchDataInsert');
});

Router.route('/settings', function () {
  this.render('settings');
});
        
Router.route('/data', function () {
  this.render('data');
});

Router.route('/teamlookup', function () {
  this.render('teamlookup');
});

Router.route('/strategy', function () {
  this.render('strategy');
});

Router.route('/scouted', function () {
  this.render('scouted');
});

Router.route('/strategyAuto', function () {
  this.render('strategyAuto');
});
Router.route('/strategyTele', function () {
  this.render('strategyTele');
});
Router.route('/strategyEnd', function () {
  this.render('strategyEnd');
});
Router.route('/strategyOld', function () {
  this.render('strategyOld');
});

Router.route('/picklist', function () {
  this.render('picklist');
});