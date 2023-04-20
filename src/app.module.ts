import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfesseurModule } from './professeur/professeur.module';
import { PrismaModule } from './prisma/prisma.module';
import { SalleModule } from './salle/salle.module';
import { OccuperModule } from './occuper/occuper.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    ProfesseurModule,
    PrismaModule,
    SalleModule,
    OccuperModule,
  ],
})
export class AppModule {}
