import { Controller, Get } from '@nestjs/common';
import { ProfesseurAuditService } from './professeur_audit.service';

@Controller('professeur-audit')
export class ProfesseurAuditController {
  constructor(private professeurAuditService: ProfesseurAuditService) {}

  @Get()
  getProfesseurAudit() {
    return this.professeurAuditService.getProfesseurAudit();
  }
}
