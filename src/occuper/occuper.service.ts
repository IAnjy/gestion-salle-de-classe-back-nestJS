import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOccuperDto, EditOccuperDto } from './dto';

@Injectable()
export class OccuperService {
  constructor(private prisma: PrismaService) {}

  getOccuper() {
    return this.prisma.occuper.findMany();
  }

  getOccuperbyID(occuperId: number) {
    return this.prisma.occuper.findUnique({ where: { id: occuperId } });
  }

  //   async createOccuper(userId: number, dto: CreateOccuperDto) {
  //     const occuper = this.prisma.occuper.create({ data: { userId, ...dto } });
  //     return occuper;
  //   }

  async editOccuper(occuperId: number, dto: EditOccuperDto) {
    // const prof = await this.prisma.professeur.findUnique({ where: { id: professeurId } })
    return this.prisma.occuper.update({
      where: { id: occuperId },
      data: { ...dto },
    });
  }

  deleteOccuper(occuperId: number) {
    return this.prisma.occuper.delete({ where: { id: occuperId } });
  }
}
