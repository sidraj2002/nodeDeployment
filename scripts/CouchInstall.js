var shell = require('shelljs');
var couch_version = "http://ftp.fau.de/apache/couchdb/source/1.6.1/apache-couchdb-1.6.1.tar.gz";

if(shell.exec('node -v').code !==0){
  shell.echo('NodeJS not found');
  shell.echo('NodeJS installation begin');
  if(shell.exec('sudo apt-get install nodejs -y').code !==0){
    shell.echo('Unable to install NodeJS');
    shell.exit(1);
  }
  if(shell.exec('sudo apt-get install npm -g -y').code !==0){
    shell.echo('Unable to install npm');
    exit(1);
  }
  shell.echo('Setting symbolic link for node');
  shell.exec('sudo ln -s /usr/bin/nodejs usr/bin/node');
}

shell.echo('Now installing Dependencies');

  if(shell.exec('sudo apt-get update ').code !== 0){
   shell.echo('Failed to update');
   shell.exit(1);
  }

shell.echo('Now Installing CouchDb dependencies');


  if(shell.exec('sudo apt-get install build-essential -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);

  }
  if(shell.exec('sudo apt-get install erlang-base-hipe -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);

  }
  if(shell.exec('sudo apt-get install erlang-dev -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);

  }
  if(shell.exec('sudo apt-get install erlang-manpages -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);

  }
  if(shell.exec('sudo apt-get install erlang-eunit -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);

  }
  if(shell.exec('sudo apt-get install erlang-nox -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);

  }
  if(shell.exec('sudo apt-get install libicu-dev -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);

  }
  if(shell.exec('sudo aptitude install libmozjs-dev -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);


  }

  if(shell.exec('sudo aptitude install libcurl14-openssl-dev -y').code !== 0){

   shell.echo('Failed to install dependencies');
   shell.exit(1);

  }

  shell.echo('Fetching Couchdb package from Apache ftp into tmp');
  shell.exec('cd /tmp');
  if(shell.exec('wget $couch_version').code !==0){
    shell.echo('Failed to fetch couchdb, please check the link address');
    shell.exit(1);
  }

shell.echo('Installing Couchdb');
  shell.exec('tar xvzf apache-couchdb-* -y');
  shell.exec('cd apache-couchdb-*');
  shell.exec('./configure && make -y');
  shell.exec('sudo make install -y');



shell.exit(0);
