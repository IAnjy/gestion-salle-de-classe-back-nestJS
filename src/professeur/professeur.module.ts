import { Module } from '@nestjs/common';
import { ProfesseurService } from './professeur.service';
import { ProfesseurController } from './professeur.controller';

@Module({
  providers: [ProfesseurService],
  controllers: [ProfesseurController],
})
export class ProfesseurModule {}
