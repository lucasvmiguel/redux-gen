#!/usr/bin/env node

var program = require('commander');
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');
var colors = require('colors');
var terminal = require('./terminal');


function createFolderWithFiles(folder, ownPath, projPath) {
  fs.readdirSync(path.join(ownPath, '../templates/init/', folder)).forEach(function(file) {
    var result = fs.readFileSync(path.join(ownPath, '../templates/init/', folder, file));
    fs.writeFileSync(path.join(projPath, '/src/', folder, file), result.toString());
  });
}

function initProject(name, ownPath, projPath) {
  if (!fs.existsSync(path.join(projPath, '/src/actions'))) fs.mkdirSync(path.join(projPath + '/src/actions'));
  if (!fs.existsSync(path.join(projPath, '/src/components'))) fs.mkdirSync(path.join(projPath + '/src/components'));
  if (!fs.existsSync(path.join(projPath, '/src/constants'))) fs.mkdirSync(path.join(projPath + '/src/constants'));
  if (!fs.existsSync(path.join(projPath, '/src/containers'))) fs.mkdirSync(path.join(projPath + '/src/containers'));
  if (!fs.existsSync(path.join(projPath, '/src/middlewares'))) fs.mkdirSync(path.join(projPath + '/src/middlewares'));
  if (!fs.existsSync(path.join(projPath, '/src/reducers'))) fs.mkdirSync(path.join(projPath + '/src/reducers'));
  if (!fs.existsSync(path.join(projPath, '/src/styles'))) fs.mkdirSync(path.join(projPath + '/src/styles'));

  createFolderWithFiles('actions', ownPath, projPath);
  createFolderWithFiles('components', ownPath, projPath);
  createFolderWithFiles('constants', ownPath, projPath);
  createFolderWithFiles('containers', ownPath, projPath);
  createFolderWithFiles('middlewares', ownPath, projPath);
  createFolderWithFiles('reducers', ownPath, projPath);
  createFolderWithFiles('styles', ownPath, projPath);

  var pkgFileResult = fs.readFileSync(path.join(ownPath, '../templates/init/package.json'));
  pkgFileResultReplaced = pkgFileResult.toString().replace(/__NAME__/g, name);
  fs.writeFileSync(path.join(projPath, '/package.json'), pkgFileResultReplaced);

  var indexResult = fs.readFileSync(path.join(ownPath, '../templates/init/index.js'));
  fs.writeFileSync(path.join(projPath, '/src/index.js'), indexResult.toString());
}

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
      initProject(name, __dirname, path.join(process.cwd(), name));
      console.info(stdout);
    });
  });


program
  .command('init')
  .description('init redux in create-react-app project')
  .action(function () {
    terminal.ask('This command overwrite ' + 'index.js'.red + ' and ' + 'package.json'.red + ', Are you sure? (yes)', function() {
      console.info('\n\nModifying project to use redux...');
      initProject('', __dirname, process.cwd());
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