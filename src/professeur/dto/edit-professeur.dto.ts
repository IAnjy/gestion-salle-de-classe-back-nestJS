import { IsOptional, IsString } from 'class-validator';

export class EditProfesseurDto {
  @IsString()
  @IsOptional()
  codeprof?: string;

  @IsString()
  @IsOptional()
  nom?: string;

  @IsString()
  @IsOptional()
  prenom?: string;

  @IsString()
  @IsOptional()
  grade?: string;

  @IsString()
  @IsOptional()
  username?: string;
}
