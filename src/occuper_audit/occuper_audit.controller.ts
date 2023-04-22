import { Controller, Get } from '@nestjs/common';
import { OccuperAuditService } from './occuper_audit.service';

@Controller('occuper-audit')
export class OccuperAuditController {
  constructor(private occuperAuditService: OccuperAuditService) {}

  @Get()
  getOccuperAudit() {
    return this.occuperAuditService.getOccuperAudit();
  }
}
