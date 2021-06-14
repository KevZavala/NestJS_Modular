import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { DatatestModule } from './datatest/datatest.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

import { environments } from './environments';
import config from './config';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    DatabaseModule,
    HttpModule,
    DatatestModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
