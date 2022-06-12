import {CliUx, Command} from "@oclif/core";
import {services} from "../../services";
import {Container} from "../../services/whale/types";
import chalk, {Chalk} from "chalk";

export default class Ls extends Command {
  static description = "List all containers in whale";

  async run() {
    const data = await services.whale.getContainers();

    CliUx.ux.table<Record<any, any>>(data, {
      Names: {
        header: "name",
        get: ({Names}) => Names[0].substring(1),
        minWidth: 25,
      },
      State: {
        header: "state",
        get: ({State}) => colorState(State),
        minWidth: 10,
      },
    });
  }
}

const colorState = (state: string) => {
  const colors = {
    "running": chalk.bold.green,
    "exited": chalk.bold.red,
  } as {[key: string]: Chalk};
  return (colors[state] || chalk.bold.yellow)(state)
};
