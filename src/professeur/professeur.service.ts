import { Injectable } from '@nestjs/common';
import { CreateProfesseurDto, EditProfesseurDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfesseurService {
  constructor(private prisma: PrismaService) {}

  getProfesseurs() {
    return this.prisma.professeur.findMany();
  }

  getProfesseurbyID(professeurId: number) {
    return this.prisma.professeur.findUnique({ where: { id: professeurId } });
  }

  async createProfesseur(userId: number, dto: CreateProfesseurDto) {
    const prof = await this.prisma.professeur.create({
      data: { userId, ...dto },
    });
    return prof;
  }

  async editProfesseur(professeurId: number, dto: EditProfesseurDto) {
    // const prof = await this.prisma.professeur.findUnique({ where: { id: professeurId } })
    return this.prisma.professeur.update({
      where: { id: professeurId },
      data: { ...dto },
    });
  }

  deleteProfesseur(professeurId: number) {
    return this.prisma.professeur.delete({ where: { id: professeurId } });
  }
}
