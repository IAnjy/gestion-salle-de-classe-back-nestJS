import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProfesseurDto {
  @IsString()
  @IsNotEmpty()
  codeprof: string;

  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsString()
  @IsNotEmpty()
  grade: string;
}
