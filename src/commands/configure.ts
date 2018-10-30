import {Command, flags} from '@oclif/command'
import { help } from '@oclif/command/lib/flags';
import { Semaphore } from "prex";
import color from '@oclif/color'
import { white, green, yellow, cyan } from 'colors'

export default class Configure extends Command {
  static description = 'Configure the cellery context that you are working on'

  static examples = [
    `$ cellery configure`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const {args, flags} = this.parse(Configure)
    const inquirer = require('inquirer');
    const ora = require('ora');
    const colors = require('colors');

    var questions = [
      {
        type: 'list',
        name: 'context',
        message: 'Please select a cellery context to configure',
        choices: ['Local', 'GKE', 'AWS'],
        filter: function(val) {
          return val;
        }
      }
    ];
    var spinner;
    inquirer.prompt(questions).then(answers => {
      spinner = ora({
        text:`Configuring ` + answers.context.bold.cyan,
        color: 'yellow',
        spinner: 'dots5',
      }).start();
    });

    await delay(5000);
    spinner.succeed(['Configuration is completed succesfully']);

    async function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }
    
  }
}
