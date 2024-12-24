import { Module } from '@nestjs/common';
import { UserController } from './user.controller'; // Importa o controlador UserController
import { DbModule } from 'src/db/db.module'; // Importa o módulo DbModule para acesso ao banco de dados
import { UserRepository } from './user.repository'; // Importa o repositório UserRepository

@Module({
  imports: [DbModule], // Importa o módulo DbModule para que os serviços de banco de dados estejam disponíveis
  controllers: [UserController], // Declara UserController como o controlador deste módulo
  providers: [UserRepository], // Declara UserRepository como um provedor disponível no módulo
})
export class UserModule {} // Define a classe UserModule como um módulo do NestJS