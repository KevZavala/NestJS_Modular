import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('Task') private task: any[],
    @Inject('API_KEY_GLOBAL') private apiKeyGlobal: string,
    private configS: ConfigService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello() {
    return {
      message: 'Hello World',
      apikey_one: this.apiKey,
      apikey_global: this.apiKeyGlobal,
      configS: this.configS.get('DATABASE_NAME'),
      task: this.task,
    };
  }
  getConfig() {
    const apiKey = this.configService.apiKey;
    const databaseName = this.configService.database.name;
    const databasePort = this.configService.database.port;
    return {
      message: 'Configuracion con tipado',
      apiKey,
      databasePort,
      databaseName,
    };
  }
}
