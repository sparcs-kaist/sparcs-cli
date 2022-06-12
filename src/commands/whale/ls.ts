import {CliUx, Command} from "@oclif/core";
import {services} from "../../services";
import {Container} from "../../services/whale/types";
import chalk, {Chalk} from "chalk";

interface ContainerRows extends Container, Record<any, any> {
}

export default class Ls extends Command {
  static description = "List all containers in whale";

  async run() {
    const data = await services.whale.getContainers();

    CliUx.ux.table<ContainerRows>(data, {
      index: {
        header: "index",
      },
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
      Ports: {
        header: "ports",
        get: ({Ports}) => Ports
          .filter((value, index, self) =>
              index === self.findIndex((port) => port.PublicPort === value.PublicPort),
          )
          .map(({PrivatePort, PublicPort}) => `${PublicPort || "-"}:${PrivatePort}`)
          .join(" ") || "-",
      },
    });
  }
}

const colorState = (state: string) => {
  const colors = {
    "running": chalk.bold.green,
    "exited": chalk.bold.red,
  } as { [key: string]: Chalk };
  return (colors[state] || chalk.bold.yellow)(state);
};
