const XT = require('@cogsmith/xt').Init();
const App = XT.App; const LOG = XT.LOG;
App.Main = function () { LOG.INFO('XTNODE'); };
App.Run();