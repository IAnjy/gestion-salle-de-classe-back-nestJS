import { Module } from '@nestjs/common';
import { SalleAuditService } from './salle_audit.service';
import { SalleAuditController } from './salle_audit.controller';

@Module({
  providers: [SalleAuditService],
  controllers: [SalleAuditController]
})
export class SalleAuditModule {}
