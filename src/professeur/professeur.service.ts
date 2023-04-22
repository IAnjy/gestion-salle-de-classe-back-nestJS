import { Injectable } from '@nestjs/common';
import { CreateProfesseurDto, EditProfesseurDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfesseurService {
  constructor(private prisma: PrismaService) {}

  getProfesseurs() {
    return this.prisma.professeur.findMany({
      orderBy: [{ id: 'asc' }],
    });
  }

  getProfesseurbyID(professeurId: number) {
    return this.prisma.professeur.findUnique({ where: { id: professeurId } });
  }

  async createProfesseur(username: string, dto: CreateProfesseurDto) {
    const prof = await this.prisma.professeur.create({
      data: { username, ...dto },
    });
    return prof;
  }

  async editProfesseur(
    professeurId: number,
    username: string,
    dto: EditProfesseurDto,
  ) {
    dto.username = username;
    // const prof = await this.prisma.professeur.findUnique({ where: { id: professeurId } })
    return this.prisma.professeur.update({
      where: { id: professeurId },
      data: { ...dto },
    });
  }

  deleteProfesseur(profid: number) {
    // const prof = this.prisma.professeur.findUnique({ where: { id: profid } });
    return this.prisma.professeur.delete({ where: { id: profid } });
  }
}
