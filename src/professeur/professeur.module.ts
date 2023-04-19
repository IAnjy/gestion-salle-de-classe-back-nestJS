import { Module } from '@nestjs/common';
import { ProfesseurService } from './professeur.service';

@Module({
  providers: [ProfesseurService]
})
export class ProfesseurModule {}
