import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOccuperDto, EditOccuperDto } from './dto';

@Injectable()
export class OccuperService {
  constructor(private prisma: PrismaService) {}

  getOccuper() {
    return this.prisma.occuper.findMany({ orderBy: [{ id: 'asc' }] });
  }

  getOccuperbyID(occuperId: number) {
    return this.prisma.occuper.findUnique({ where: { id: occuperId } });
  }

  async createOccuper(username: string, dto: CreateOccuperDto) {
    const occuper = this.prisma.occuper.create({ data: { username, ...dto } });
    return occuper;
  }

  async editOccuper(occuperId: number, username: string, dto: EditOccuperDto) {
    // const prof = await this.prisma.professeur.findUnique({ where: { id: professeurId } })
    dto.username = username;
    return this.prisma.occuper.update({
      where: { id: occuperId },
      data: { ...dto },
    });
  }

  deleteOccuper(occuperId: number) {
    return this.prisma.occuper.delete({ where: { id: occuperId } });
  }
}
