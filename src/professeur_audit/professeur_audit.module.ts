import { Module } from '@nestjs/common';
import { ProfesseurAuditController } from './professeur_audit.controller';
import { ProfesseurAuditService } from './professeur_audit.service';

@Module({
  controllers: [ProfesseurAuditController],
  providers: [ProfesseurAuditService]
})
export class ProfesseurAuditModule {}
