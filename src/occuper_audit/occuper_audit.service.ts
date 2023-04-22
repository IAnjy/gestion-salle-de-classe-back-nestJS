import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OccuperAuditService {
  constructor(private prisma: PrismaService) {}

  getOccuperAudit() {
    return this.prisma.occuper_audit.findMany({
      orderBy: [{ id: 'asc' }],
    });
  }
}
