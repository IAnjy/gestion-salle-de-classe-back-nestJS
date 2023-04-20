import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOccuperDto {
  @IsNotEmpty()
  @IsNumber()
  idprof: number;

  @IsNotEmpty()
  @IsNumber()
  idsal: number;

  @IsNotEmpty()
  @IsDate()
  date: Date;
}
