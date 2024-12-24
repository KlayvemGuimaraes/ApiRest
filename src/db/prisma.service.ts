import {
  Global, // Decorator que torna o serviço disponível globalmente no módulo
  Injectable, // Decorator que marca a classe como um provedor injetável
  OnModuleInit, // Interface para executar lógica quando o módulo é inicializado
  OnModuleDestroy, // Interface para executar lógica quando o módulo é destruído
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // Importa o cliente Prisma para interagir com o banco de dados

@Global() // Torna o serviço disponível globalmente no módulo
@Injectable() // Marca a classe como um provedor injetável
export class PrismaService
  extends PrismaClient // Extende a classe PrismaClient para herdar suas funcionalidades
  implements OnModuleInit, OnModuleDestroy // Implementa as interfaces OnModuleInit e OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect(); // Conecta ao banco de dados quando o módulo é inicializado
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Desconecta do banco de dados quando o módulo é destruído
  }
}