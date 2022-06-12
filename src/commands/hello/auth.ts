import {Command} from "@oclif/core";

export default class Auth extends Command {
  static description = "authentication";

  async run(): Promise<void> {
    this.log("querwey");
  }
}
