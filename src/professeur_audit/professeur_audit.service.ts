import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfesseurAuditService {
  constructor(private prisma: PrismaService) {}
  getProfesseurAudit() {
    return this.prisma.professeur_audit.findMany({
      orderBy: [{ id: 'asc' }],
    });
  }
}
