import { Module } from '@nestjs/common';
import { OccuperController } from './occuper.controller';
import { OccuperService } from './occuper.service';

@Module({
  controllers: [OccuperController],
  providers: [OccuperService]
})
export class OccuperModule {}
