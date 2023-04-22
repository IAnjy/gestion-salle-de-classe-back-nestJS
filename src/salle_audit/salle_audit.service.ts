import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalleAuditService {
  constructor(private prisma: PrismaService) {}

  getSalleAudit() {
    return this.prisma.salle_audit.findMany({
      orderBy: [{ id: 'asc' }],
    });
  }
}
