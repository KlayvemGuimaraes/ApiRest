import { Module } from '@nestjs/common'; // Importa o decorator Module do NestJS
import { PrismaService } from './prisma.service'; // Importa o serviço PrismaService

@Module({
  providers: [PrismaService], // Declara PrismaService como um provedor disponível no módulo
  exports: [PrismaService], // Exporta PrismaService para que possa ser usado em outros módulos
})
export class DbModule {} // Define a classe DbModule como um módulo do NestJS