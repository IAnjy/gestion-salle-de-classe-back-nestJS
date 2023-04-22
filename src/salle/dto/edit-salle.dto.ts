import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EditSalleDto {
  @IsString()
  @IsOptional()
  codesal?: string;

  @IsString()
  @IsOptional()
  designation?: string;

  @IsString()
  @IsOptional()
  username?: string;
}
