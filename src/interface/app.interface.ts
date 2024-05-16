// global
export interface Res<T> {
  RC: number;
  RCM: string;
  DATA?: T;
}

// db.seeder
export interface DataJson {
  [key: string]: any;
}

// logger.middleware
export interface requestData {
  method: string;
  protocol: string;
  hostname: string;
  url: string;
  query: any;
  body: any;
  remoteAddress: string;
  remotePort: number;
}

export interface responseData {
  statusCode: number;
}


