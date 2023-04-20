import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalleDto } from './dto/create-salle.dto';
import { EditSalleDto } from './dto/edit-salle.dto';

@Injectable()
export class SalleService {
  constructor(private prisma: PrismaService) {}

  getSalles() {
    return this.prisma.salle.findMany();
  }

  getSallebyID(salleId: number) {
    return this.prisma.salle.findUnique({ where: { id: salleId } });
  }

  async createSalle(userId: number, dto: CreateSalleDto) {
    const salle = await this.prisma.salle.create({ data: { userId, ...dto } });
    return salle;
  }

  async editSalle(salleId: number, dto: EditSalleDto) {
    // const prof = await this.prisma.professeur.findUnique({ where: { id: professeurId } })
    return this.prisma.salle.update({
      where: { id: salleId },
      data: { ...dto },
    });
  }

  deleteSalle(salleId: number) {
    return this.prisma.salle.delete({ where: { id: salleId } });
  }
}
