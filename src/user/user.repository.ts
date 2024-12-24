import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service'; // Importa o serviço PrismaService para interagir com o banco de dados
import User from './user.entity'; // Importa a interface User

@Injectable() // Marca a classe como um provedor injetável
export class UserRepository {
  constructor(private prismaService: PrismaService) {} // Injeta o PrismaService no repositório

  // Método para buscar todos os usuários
  async findAll() {
    return this.prismaService.user.findMany(); // Usa o PrismaService para buscar todos os usuários
  }

  // Método para buscar um usuário pelo ID
  async findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id, // Condição de busca pelo ID
      },
    });
  }

  // Método para criar um novo usuário
  async create(usuario: User) {
    return this.prismaService.user.create({
      data: usuario as any, // Usa o PrismaService para criar um novo usuário
    });
  }

  // Método para atualizar um usuário existente
  async update(usuario: User) {
    if (!usuario.id) {
      throw new Error('Usuário sem id'); // Lança um erro se o usuário não tiver ID
    }
    return this.prismaService.user.update({
      where: {
        id: usuario.id, // Condição de busca pelo ID
      },
      data: usuario as any, // Dados atualizados do usuário
    });
  }

  // Método para deletar um usuário pelo ID
  async delete(id: number) {
    return this.prismaService.user.delete({
      where: {
        id, // Condição de busca pelo ID
      },
    });
  }
}