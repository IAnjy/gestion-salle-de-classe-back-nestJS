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
import { OccuperService } from './occuper.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { CreateOccuperDto, EditOccuperDto } from './dto';

@UseGuards(JwtGuard)
@Controller('occuper')
export class OccuperController {
  constructor(private occuperService: OccuperService) {}

  @Get()
  getOccuper() {
    return this.occuperService.getOccuper();
  }

  @Get(':id')
  getOccuperbyID(@Param('id', ParseIntPipe) occuperId: number) {
    return this.occuperService.getOccuperbyID(occuperId);
  }

  @Post()
  createOccuper(@GetUser('id') id: number, @Body() dto: CreateOccuperDto) {
    // return this.occuperService.createOccuper(id, dto);
  }

  @Put(':id')
  editOccuper(
    @Body() dto: EditOccuperDto,
    @Param('id', ParseIntPipe) occuperId: number,
  ) {
    return this.occuperService.editOccuper(occuperId, dto);
  }

  @Delete(':id')
  deleteProfesseur(@Param('id', ParseIntPipe) occuperId: number) {
    return this.occuperService.deleteOccuper(occuperId);
  }
}
