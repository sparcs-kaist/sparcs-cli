export interface Container {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  Port: Port[];
  SizeRw: number;
  SizeRootFs: number;
  Labels: any[];
  State: string;
  Status: string;
  HostConfig: HostConfig;
  NetworkSettings: any;
  Mounts: any;
  // TODO : implement typedefs for networksettings/mounts - https://docs.docker.com/engine/api/v1.41/#operation/ContainerList
}

export interface Port {
  IP: string;
  PrivatePort: number;
  PublicPort: number;
  Type: "tcp" | "udp" | "sctp"
}

export interface HostConfig {
  NetworkMode: string;
}
