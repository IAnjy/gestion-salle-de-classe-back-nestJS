import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class EditOccuperDto {
  @IsOptional()
  @IsInt()
  idprof?: number;

  @IsOptional()
  @IsInt()
  idsal?: number;

  @IsOptional()
  @IsString()
  date?: string;
}
