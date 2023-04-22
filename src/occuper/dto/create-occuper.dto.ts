import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOccuperDto {
  @IsNotEmpty()
  @IsInt()
  idprof: number;

  @IsNotEmpty()
  @IsInt()
  idsal: number;

  @IsNotEmpty()
  @IsString()
  date: string;
}
