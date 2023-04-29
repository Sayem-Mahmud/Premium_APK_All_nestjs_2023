import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CodesService } from './codes.service';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';

interface QueryData {
  page?: string,
  limit?: string
}
@Controller('codes')
export class CodesController {
  constructor(private readonly codesService: CodesService) { }

  @Post('/postCodes')
  postCodes() {
    return this.codesService.createCodeDatas();
  }

  @Get('/findAllCodes')
  findAllCodes(@Query() queries: { page: number }) {
    console.log("🚀 ~ file: codes.controller.ts:21 ~ CodesController ~ findAllCodes ~ queries:", queries)
    return this.codesService.findAllCodeDatas(queries);
  }

  @Get('/findOneCode/:id')
  findOneCode(@Param('id') id: string) {
    return this.codesService.findOneCodeData(id);
  }

  @Post()
  create(@Body() createCodeDto: CreateCodeDto) {
    return this.codesService.create(createCodeDto);
  }



  @Get()
  findAll() {
    return this.codesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodeDto: UpdateCodeDto) {
    return this.codesService.update(+id, updateCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codesService.remove(+id);
  }
}
