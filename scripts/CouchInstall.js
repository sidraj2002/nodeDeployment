var shell = require('shelljs');

shell.echo('Now installing Dependencies');

  if(shell.exec('sudo apt-get update').code !== 0){
   shell.echo('Failed to update');
   shell.exit(1);
  }

shell.echo('Now Installing CouchDb dependencies');

  if(shell.exec('sudo apt-get install build-essential && sudo apt-get install erlang-base-hipe && sudo apt-get install erlang-dev').code !== 0){

   shell.echo('Failed to install dependencies');

  }
