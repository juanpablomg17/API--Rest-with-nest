import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configEnv: ConfigType<typeof config>,
  ) { }

  getHello(): string {
    const apiKey = this.configEnv.apiKey;
    const dataBaseName = this.configEnv.database;
    console.log('holas', apiKey, dataBaseName)
    return `Hello World! ${apiKey} and ${dataBaseName.name}`;
  }
}
