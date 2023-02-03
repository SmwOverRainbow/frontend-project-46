#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .argument('<type>')
  .option('-f, --format <type>', 'output format');

program.parse(process.argv);

if (!program.args.length) program.help();
