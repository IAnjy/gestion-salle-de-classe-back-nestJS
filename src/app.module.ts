import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfesseurModule } from './professeur/professeur.module';
import { PrismaModule } from './prisma/prisma.module';
import { SalleModule } from './salle/salle.module';
import { OccuperModule } from './occuper/occuper.module';
import { ProfesseurAuditModule } from './professeur_audit/professeur_audit.module';
import { SalleAuditModule } from './salle_audit/salle_audit.module';
import { OccuperAuditModule } from './occuper_audit/occuper_audit.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    ProfesseurModule,
    PrismaModule,
    SalleModule,
    OccuperModule,
    ProfesseurAuditModule,
    SalleAuditModule,
    OccuperAuditModule,
  ],
})
export class AppModule {}
