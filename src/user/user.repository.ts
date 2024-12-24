import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import User from './user.entity';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(usuario: User) {
    return this.prismaService.user.create({
      data: usuario as any,
    });
  }

  async update(usuario: User) {
    if (!usuario.id) {
      throw new Error('Usuário sem id');
    }
    return this.prismaService.user.update({
      where: {
        id: usuario.id,
      },
      data: usuario as any,
    });
  }

  async delete(id: number) {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}