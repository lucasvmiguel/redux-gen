#!/usr/bin/env node

var program = require('commander');
var exec = require('child_process').exec;

program
  .version('0.1.0')
  .description('react/redux code generator');

program
  .command('new <name>')
  .description('creates a react project using create-react-app and adds redux')
  .action(function (name) {
    console.info('creating...');
    exec("create-react-app " + name, function(error, stdout, stderr) {
      if (error) return console.error('error to create project, you must have create-react-app installed');
      console.info(stdout);
    });
  });


program
  .command('init')
  .description('init redux in create-react-app project')
  .action(function (name) {
    console.info('modifying...');
  });

program
  .command('crud <name> [params...]')
  .description('scaffold some entity quickly')
  .action(function (name, params) {
    console.log('crud %s - %s', name, params);
  });

program.parse(process.argv);