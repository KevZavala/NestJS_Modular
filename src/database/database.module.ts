import { Global, Module } from '@nestjs/common';
@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY_GLOBAL',
      useValue: 'TypeORM_Global',
    },
  ],
  exports: ['API_KEY_GLOBAL'],
})
export class DatabaseModule {}
