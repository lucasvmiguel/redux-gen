var rl = require('readline');

function ask(question, callback) {
  var r = rl.createInterface({
    input: process.stdin,
    output: process.stdout});
  r.question(question + '\n', function(answer) {
    r.close();
    if (answer === 'yes' || answer === 'y') return callback();
  });
}

module.exports = {
  ask: ask
}