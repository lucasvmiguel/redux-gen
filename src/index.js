#!/usr/bin/env node

var program = require('commander');
var exec = require('child_process').exec;
var path = require('path');
var colors = require('colors');

var terminal = require('./terminal');
var generator = require('./generator');

program
  .version('0.1.0')
  .description('react/redux code generator');

program
  .command('new <name>')
  .description('creates a react project using create-react-app and adds redux')
  .action(function (name) {
    console.info('creating ' + name + '... (take a few minutes)');
    exec('create-react-app ' + name, function(error, stdout, stderr) {
      if (error) return console.error('ERROR: error to create project, you must have create-react-app installed'.red);
      generator.initProject(name, __dirname, path.join(process.cwd(), name));
      console.info(stdout);
    });
  });

program
  .command('init')
  .description('init redux in create-react-app project')
  .action(function () {
    terminal.ask('This command overwrite ' + 'index.js'.red + ' and ' + 'package.json'.red + ', Are you sure? (yes)', function() {
      console.info('\n\nModifying project to use redux...');
      generator.initProject('', __dirname, process.cwd());
      console.info('\n\nnpm install'.blue + ' to install all packages.\n\n');
    });
  });

program
  .command('crud <name> [params...]')
  .description('scaffold some entity quickly')
  .action(function (name, params) {
    terminal.ask('This command creates a entity with all operations (Create, Read, Update and Delete), Are you sure? (yes)', function() {
      console.info('\n\nCreating CRUD of ' + name + '...');
      console.log('crud %s - %s', name, params);
      console.log('\n\nfinished!\n\n');
    });
  });

program.parse(process.argv);