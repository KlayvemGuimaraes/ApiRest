import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common'; // Importa os decorators e tipos do NestJS
import User from './user.entity'; // Importa a interface User
import { UserRepository } from './user.repository'; // Importa o repositório UserRepository

@Controller('user') // Define o caminho base para este controlador
export class UserController {
  constructor(private repo: UserRepository) {} // Injeta o UserRepository no controlador

  @Post() // Define a rota POST para criar um novo usuário
  async CreateUser(@Body() user: User) {
    const newUser = await this.repo.create(user); // Chama o método create do UserRepository
    return newUser;
  }

  @Get() // Define a rota GET para buscar todos os usuários
  async GetAllUsers() {
    const users = await this.repo.findAll(); // Chama o método findAll do UserRepository
    return users;
  }

  @Patch(':id') // Define a rota PATCH para atualizar um usuário pelo ID
  async UpdateUser(@Param('id') id: string, @Body() user: User) {
    user.id = +id; // Converte o ID para número e atribui ao usuário
    const userUpdated = await this.repo.update({
      ...user,
      id: +id,
    }); // Chama o método update do UserRepository
    return userUpdated;
  }

  @Get(':id') // Define a rota GET para buscar um usuário pelo ID
  async GetUserById(@Param('id') id: string) {
    const user = await this.repo.findOne(+id); // Chama o método findOne do UserRepository
    return user;
  }

  @Delete(':id') // Define a rota DELETE para deletar um usuário pelo ID
  async ToDelete(@Param('id') id: string) {
    await this.repo.delete(+id); // Chama o método delete do UserRepository
  }
}