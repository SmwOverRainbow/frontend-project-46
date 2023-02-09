#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filePath1>')
  .argument('<filePath2>')
  .action((filePath1, filePath2) => {
    genDiff(filePath1, filePath2, `${program.opts().format}`);
  });

program.parse(process.argv);

if (!program.args.length) program.help();

// const opts = program.opts();

// console.log(opts);
// console.log(program.args);
