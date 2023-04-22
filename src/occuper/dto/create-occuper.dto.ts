import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOccuperDto {
  @IsNotEmpty()
  @IsString()
  codeprof: string;

  @IsNotEmpty()
  @IsString()
  codesal: string;

  @IsNotEmpty()
  @IsString()
  date: string;
}
