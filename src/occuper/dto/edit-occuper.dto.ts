import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class EditOccuperDto {
  @IsOptional()
  @IsNumber()
  idprof?: number;

  @IsOptional()
  @IsNumber()
  idsal?: number;

  @IsOptional()
  @IsDate()
  date?: Date;
}
