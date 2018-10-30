import {Command, flags} from '@oclif/command'
import { help } from '@oclif/command/lib/flags';
import { Semaphore } from "prex";
import color from '@oclif/color'
import { white, green, yellow, cyan } from 'colors'

export default class Images extends Command {
  static description = 'List cell images'

  static examples = [
    `$ cellery images`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const {args, flags} = this.parse(Images)
    const inquirer = require('inquirer');
    const ora = require('ora');
    const colors = require('colors');
    const cli = require('heroku-cli-util');
    
    cli.table([
      {cell: 'hr-app',  version: 'v1.0.0', cell_image_id: '17d9da9odaw5', size: '128MB'},
      {cell: 'time-app', version: 'v1.2.0', cell_image_id: 'jdh3yf6s3ke3', size: '30MB'},
      {cell: 'my-app', version: 'v1.0.0', cell_image_id: 'k9ig3j5n2bza', size: '13MB'},
      {cell: 'stock-app', version: '1.0.0', cell_image_id: 'a70ad572a50f', size: '450MB'},
      {cell: 'salary', version: 'v1', cell_image_id: 'pw4fh7ji7cs7', size: '789MB'},
      {cell: 'loan', version: 'v1.1', cell_image_id: 'pi4hcm84z2kh', size: '15MB'},

    ], {
      columns: [
        {key: 'cell', label: 'Cell'},
        {key: 'version', label: 'Version'},
        {key: 'cell_image_id', label: 'Image ID', format: language => cli.color.cyan(language)},
        {key: 'size', label: 'Size'},
      ]
    });
    
  }
}
