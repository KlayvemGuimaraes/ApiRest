import { Controller, Body, Get, Post, Param, Delete, Patch } from '@nestjs/common';
import User from './user.entity';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {
  constructor(private repo: UserRepository) {}

  @Post()
  async CreateUser(@Body() user: User) {
    const newUser = await this.repo.create(user)
    return newUser;
  }

  @Get()
  async GetAllUsers() {
    const users = await this.repo.findAll();
    return users;
  }

  @Patch(':id')
  async UpdateUser(@Param('id') id: string, @Body() user: User) {
    user.id = +id;
    const userUpdated = await this.repo.update({
      ...user,
      id: +id,
    }); // o repo.update vem do arquivo user.repository.ts, no qual tem o método update
    return userUpdated;
  }

  @Get(':id')
  async GetUserById(@Param('id') id: string) {
    const user = await this.repo.findOne(+id);
    return user;
  }

  @Delete(':id')
  async ToDelete(@Param('id') id: string) {
    await this.repo.delete(+id); // o repo.delete vem do arquivo user.repository.ts, no qual tem o método delete
  }
}