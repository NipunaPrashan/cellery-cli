import {Command, flags} from '@oclif/command'
import { help } from '@oclif/command/lib/flags';
import { Semaphore } from "prex";
import color from '@oclif/color'
import { white, green, yellow, cyan } from 'colors'

export default class Build extends Command {
  static description = 'Build an immutable cell image with required dependencies'

  static examples = [
    `$ cellery build my-project`,
    `$ cellery build my-project -t 1.0.0`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-t, --name=VALUE)
    tag: flags.string({char: 't', description: 'Image tag in the \'name:tag\' format'}),
  }

  static args = [{name: 'name'}, {name: 'options', required: false,}]

  async run() {
    const {args, flags} = this.parse(Build)
    const Listr = require('listr');
    const ora = require('ora');
    const colors = require('colors');
    const figures = require('figures');
    const foolock = new Semaphore(1);

    if (!args.name) {
      const tasks = new Listr([
        {
            title: 'Please provide a project name.',
            task: () => {
                throw new Error('cellery build my-project')
            }
        }
      ]);
      tasks.run().catch(err => {});
      // await Build.run(['--help'])
      this.exit(1);   
    }

    var spinner;

    await foolock.wait(); // statement suspends until foolock becomes available
    try {
      spinner = await ora({
        text:`Generating project ` + args.name.bold,
        color: 'yellow',
        spinner: 'dots5',
      }).start();
     
      await delay(2000);
      spinner.stopAndPersist({});
    }
    finally {
      foolock.release();
    }

    await foolock.wait(); // statement suspends until foolock becomes available
    try {
      const gateway = await new ora({
        text:'Building'.white + ' Gateway'.green,
        color: 'green',
      }).start();
  
      await delay(3000);
      gateway.succeed(['Build success'.white + ' Gateway'.green]);
    }
    finally {
      foolock.release();
    }

    await foolock.wait(); // statement suspends until foolock becomes available
    try {
      const sts = await new ora({
        text:'Building'.white + ' STS'.cyan,
        color: 'cyan',
      }).start();
  
      await delay(3000);
      sts.succeed(['Build success'.white + ' STS'.cyan]);
    }
    finally {
      foolock.release();
    }

    await foolock.wait(); // statement suspends until foolock becomes available
    try {
      const emp = await new ora({
        text:'Building'.white + ' employee-service'.yellow,
        color: 'yellow',
      }).start();
  
      await delay(4000);
      emp.succeed(['Build success'.white + ' employee-service'.yellow]);
    }
    finally {
      foolock.release();
    }

    await foolock.wait(); // statement suspends until foolock becomes available
    try {
      const salary = await new ora({
        text:'Building'.white + ' salary-service'.yellow,
        color: 'yellow',
      }).start();
  
      await delay(2000);
      salary.succeed(['Build success'.white + ' salary-service'.yellow]);
    }
    finally {
      foolock.release();
    }

    await foolock.wait(); // statement suspends until foolock becomes available
    try {
      const hr = await new ora({
        text:'Building'.white + ' hr-service'.yellow,
        color: 'yellow',
      }).start();
  
      await delay(3000);
      hr.succeed(['Build success'.white + ' hr-service'.yellow]);
    }
    finally {
      foolock.release();
    }
    spinner.stopAndPersist({text: 'Generated cell image ' + args.name + ':a70ad572a50f'});

      
    async function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }


    

  }
  
}
