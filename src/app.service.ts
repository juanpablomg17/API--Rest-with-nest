import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { rejects } from 'assert';
import { resolve } from 'path';
import { Client } from 'pg';
import config from '../config';


@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configEnv: ConfigType<typeof config>,
    @Inject('PG') private clientPG: Client
  ) { }

  getHello(): string {
    const apiKey = this.configEnv.apiKey;
    const dataBaseName = this.configEnv.database;
    console.log('holas', apiKey, dataBaseName)
    return `Hello World! ${apiKey} and ${dataBaseName.name}`;
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPG.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows)
      })
    })
  }
}
