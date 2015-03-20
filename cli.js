var program = require('commander');
 
program
  .version('0.0.1')
  .option('-u, --username', 'Add the username')
  .option('-P, --password', 'Add password')
  .option('-s, --save', 'save the username and password')
  .option('-t, --talk', 'The message')
  .option('-w, --who', 'who to message')
  .parse(process.argv);