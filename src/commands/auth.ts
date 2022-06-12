import {Command} from "@oclif/core";
import * as inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";

import {services} from "../services";

export default class Auth extends Command {
  static description = "Login with SPARCS account";

  public async run(): Promise<void> {
    this.log(`Logging in with ${chalk.bold.yellow("SPARCS")} account`);

    const {username, password} = await inquirer.prompt([
      {name: "username", type: "input"},
      {name: "password", type: "password"},
    ]);

    const spinner = ora("Logging in").start();

    if (await services.whale.authenticate(username, password)) {
      spinner.succeed(`Successfully logged in as ${chalk.cyan(username)}`);
      this.exit(0);

    } else {
      spinner.fail("Incorrect username or password");
      this.exit(1);
    }
  }
}
