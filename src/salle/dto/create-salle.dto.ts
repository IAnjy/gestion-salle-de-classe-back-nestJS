import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSalleDto {
  @IsNotEmpty()
  @IsString()
  codesal: string;

  @IsNotEmpty()
  @IsString()
  designation: string;
}
