import { HttpModule, HttpService, Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'API_KEY',
      useValue: 'local_typeORM',
    },
    {
      provide: 'Task',
      useFactory: async (http: HttpService) => {
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
  exports: ['API_KEY', 'Task'],
})
export class DatatestModule {}
