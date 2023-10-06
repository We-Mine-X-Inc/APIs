export enum Environment {
  UNKNOWN_ENVIRONMENT = 0,
  DEV = 1,
  TEST = 2,
  PROD = 3,
}

export interface EnvironmentInfo {
  type: Environment;
  dbName: string;
}
