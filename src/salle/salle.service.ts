import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalleDto } from './dto/create-salle.dto';
import { EditSalleDto } from './dto/edit-salle.dto';

@Injectable()
export class SalleService {
  constructor(private prisma: PrismaService) {}

  getSalles() {
    return this.prisma.salle.findMany({ orderBy: [{ id: 'asc' }] });
  }

  getSallebyID(salleId: number) {
    return this.prisma.salle.findUnique({ where: { id: salleId } });
  }

  async createSalle(username: string, dto: CreateSalleDto) {
    const salle = await this.prisma.salle.create({
      data: { username, ...dto },
    });
    return salle;
  }

  async editSalle(salleId: number, username: string, dto: EditSalleDto) {
    // const prof = await this.prisma.professeur.findUnique({ where: { id: professeurId } })
    dto.username = username;
    return this.prisma.salle.update({
      where: { id: salleId },
      data: { ...dto },
    });
  }

  async deleteSalle(salleId: number, username: string, dto: EditSalleDto) {
    const salle = await this.prisma.salle.findUnique({
      where: { id: salleId },
    });
    if (salle['username'] != username) {
      await this.editSalle(salleId, username, dto);
    }
    return await this.prisma.salle.delete({ where: { id: salleId } });
  }
}
