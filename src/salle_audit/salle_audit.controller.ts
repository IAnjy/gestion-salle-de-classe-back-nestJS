import { Controller, Get } from '@nestjs/common';
import { SalleAuditService } from './salle_audit.service';

@Controller('salle-audit')
export class SalleAuditController {
  constructor(private salleAuditService: SalleAuditService) {}

  @Get()
  getSalleAudit() {
    return this.salleAuditService.getSalleAudit();
  }
}
