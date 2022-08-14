import {  Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemanFile : true
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
