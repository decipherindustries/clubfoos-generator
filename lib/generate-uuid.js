(function() {
  'use strict';

  var cli = require('cli');
  var debug = require('debug')('clubfoos-qr-generator');
  var uuid = require('node-uuid').v4;
  var _ = require('lodash');
  var fs = require('fs');

  cli.parse({
    from: [ 'f', 'Number to start generating codes from', 'number', 1 ],
    number: [ 'n', 'Number of codes to generate, starting at <from>', 'number', 10 ],
    prefix: [ 'p', 'Prefix for each code', 'string', 'cf' ],
    outfile: [ 'o', 'Filename write the CSV to', 'string', 'codes.csv' ]
  });

  cli.main(function(args, options) {
    debug('From: ' + options.from);
    debug('Number: ' + options.number);
    debug('Prefix: ' + options.prefix);

    var count = 0;
    var index = options.from;
    var codes = {};
    var lines = ['Tafelnummer,UUID'];

    do {
      var code = (options.prefix + ':' + uuid() + ':').toUpperCase();

      if(typeof codes[index] === 'undefined') {
        codes[index] = [];
      }

      codes[index].push(code + 'A');
      codes[index].push(code + 'B');
      codes[index].push(code + 'C');
      codes[index].push(code + 'D');

      ++index;
      ++count;
    } while(count < options.number);

    _.forEach(codes, function(uuids, index) {
      uuids.forEach(function(uuid) {
        lines.push([index, uuid].join(','));
      });
    });    

    var data = lines.join('\n');
    var out = options.outfile;

    if(out.charAt(0) !== '/' && out.charAt(0) !== '.') {
      out = './' + out;
    } 

    fs.writeFile(out, lines.join('\n'), 'utf8', function(err) {
      if(err) {
        throw err;
      }

      console.log('--> Saved ' + options.number + ' new codes to ' + out);
      process.exit(0);
    });
  });

})();