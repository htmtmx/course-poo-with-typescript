//@ts-check

export interface Driver {
  database: string,
  password: string,
  port: number,
  connect(): void,
  disconnect(): void,
  isConnected(name:string):boolean
}

// const driver: Driver = {
//   database: 'root',
//   password: 'admin',
//   port: 352,
//   connect():void {
//     console.log('Connecting');
//   },
//   disconnect():void {
//     console.log('Disconnecting');
//   },
//   isConnected():void {
//     console.log('Is connected');
//   }
// }

class PostgresDriver implements Driver{
  constructor(
    public database: string = 'defaultDatabse',
    public password: string= '1234',
    public port: number = 939,
    private host: string
  ) { }
  connect(): void {

  }
  disconnect(): void {

  }
  isConnected(name: string): boolean {
    if (name) {
      return true;
    }
    return false;
  }
}