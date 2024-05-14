export interface Response<T> {
  RC: number;
  RCM: string;
  DATA?: T;
}
