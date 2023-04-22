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
import { SalleService } from './salle.service';
import { EditProfesseurDto } from 'src/professeur/dto';
import { EditSalleDto } from './dto/edit-salle.dto';
import { CreateSalleDto } from './dto/create-salle.dto';
import { GetUser } from 'src/auth/decorator/get-user.decorator';

@UseGuards(JwtGuard)
@Controller('salles')
export class SalleController {
  constructor(private salleService: SalleService) {}
  @Get()
  getSalles() {
    return this.salleService.getSalles();
  }

  @Get(':id')
  getSallebyID(@Param('id', ParseIntPipe) salleId: number) {
    return this.salleService.getSallebyID(salleId);
  }

  @Post()
  createSalle(
    @GetUser('username') username: string,
    @Body() dto: CreateSalleDto,
  ) {
    return this.salleService.createSalle(username, dto);
  }

  @Put(':id')
  editSalle(
    @Body() dto: EditSalleDto,
    @GetUser('username') username: string,
    @Param('id', ParseIntPipe) salleId: number,
  ) {
    return this.salleService.editSalle(salleId, username, dto);
  }

  @Delete(':id')
  deleteSalle(
    @Param('id', ParseIntPipe) salleId: number,
    @GetUser('username') username: string,
    @Body() dto: EditProfesseurDto,
  ) {
    return this.salleService.deleteSalle(salleId, username, dto);
  }
}
