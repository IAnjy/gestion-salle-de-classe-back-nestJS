import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ProfesseurService } from './professeur.service';
import { CreateProfesseurDto, EditProfesseurDto } from './dto';
import { GetUser } from 'src/auth/decorator/get-user.decorator';

@UseGuards(JwtGuard)
@Controller('professeurs')
export class ProfesseurController {
  constructor(private professeurService: ProfesseurService) {}
  @Get()
  getProfesseurs() {
    return this.professeurService.getProfesseurs();
  }

  @Get(':id')
  getProfesseurbyID(@Param('id', ParseIntPipe) professeurId: number) {
    return this.professeurService.getProfesseurbyID(professeurId);
  }

  @Post()
  createProfesseur(
    @GetUser('username') username: string,
    @Body() dto: CreateProfesseurDto,
  ) {
    return this.professeurService.createProfesseur(username, dto);
  }

  @Put(':id')
  editProfesseur(
    @Param('id', ParseIntPipe) professeurId: number,
    @GetUser('username') username: string,
    @Body() dto: EditProfesseurDto,
  ) {
    return this.professeurService.editProfesseur(professeurId, username, dto);
  }

  @Delete(':id')
  deleteProfesseur(@Param('id', ParseIntPipe) professeurId: number) {
    return this.professeurService.deleteProfesseur(professeurId);
  }
}
