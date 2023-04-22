import { Module } from '@nestjs/common';
import { OccuperAuditService } from './occuper_audit.service';
import { OccuperAuditController } from './occuper_audit.controller';

@Module({
  providers: [OccuperAuditService],
  controllers: [OccuperAuditController]
})
export class OccuperAuditModule {}
