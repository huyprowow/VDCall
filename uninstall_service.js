var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'VDCall WebService',
  description: 'The nodejs.org example web server.',
  script: 'E:\\WebRTC\\VDCall\\server.js',
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "uninstall" event, which indicates the
// process is available as a service.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

svc.uninstall();