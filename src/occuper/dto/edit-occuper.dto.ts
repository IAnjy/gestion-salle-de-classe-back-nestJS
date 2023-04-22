import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class EditOccuperDto {
  @IsOptional()
  @IsString()
  codeprof?: string;

  @IsOptional()
  @IsString()
  codesal?: string;

  @IsOptional()
  @IsString()
  date?: string;

  @IsString()
  @IsOptional()
  username?: string;
}
