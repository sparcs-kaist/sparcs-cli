import {AxiosError, AxiosRequestHeaders} from "axios";
import {HTTPService} from "../base/http";
import {CLIError} from "@oclif/core/lib/errors";
import {Container} from "./types";
import Conf from "conf";

interface AuthorizedHeader extends AxiosRequestHeaders {
  Authorization: string;
}

export class WhaleServce extends HTTPService {
  // session: {
  //   jwt: string | null;
  // };
  // private _jwt?: string;
  config: Conf<Record<string, string>>;

  constructor() {
    super("https://whale.sparcs.org/api");
    this.config = new Conf<Record<string, string>>();

    this.instance.interceptors.request.use(config => {
      if (this._jwt) {
        config.headers = {
          ...config.headers,
          "Authorization": `Bearer ${this._jwt}`,
        } as AuthorizedHeader;
      }

      return config;
    });
  }

  private get _jwt(): string {
    return this.config.get("jwt");
  }

  private set _jwt(value: string) {
    this.config.set("jwt", value);
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    interface Response {
      jwt: string;
    }

    try {
      const {data: {jwt}} = await this.instance.post<Response>("/auth", {
        username,
        password,
      });
      this._jwt = jwt;
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;

      if (error.response?.status === 403) {
        return false;
      } else {
        throw new CLIError("Login failed");
      }
    }
    //
    // console.log(this.header);
    // console.log(this.instance.defaults.headers);

    return true;
  }

  // authenticated(): boolean {
  //   if (!this.session.jwt) return false;
  //
  //   // TODO : decode expiry date
  //
  //   return this.session.jwt !== null;
  // }

  async getContainers() {
    const {data} = await this.instance.get<Container[]>("/endpoints/2/docker/containers/json?all=1");
    // return data.map(container => ({
    //   id: container.Id,
    //   name: container.Names[0].substring(1),
    //   status: container.Status,
    //
    // }));
    return data;
  }

}
