import axios, {AxiosInstance} from "axios";

import {Config} from "../../core/constants";

export class HTTPService {
  instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: Config.MAX_TIMEOUT,
    });
  }
}
