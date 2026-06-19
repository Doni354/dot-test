import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { DispenService } from './dispen.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('dispen')
@UseGuards(AuthGuard('jwt'))
export class DispenController {
  constructor(private readonly dispenService: DispenService) {}

  // POST: create surat Dispen
  @Post()
  create(@Request() req, @Body() body: { alasan: string }) {
    return this.dispenService.createDispen(req.user.sub, body.alasan);
  }

  // GET: get data dispen by user
  @Get()
  findAll(@Request() req) {
    return this.dispenService.findAll(req.user);
  }

  // PATCH: update status
  @Patch(':id/status')
  updateStatus(
    @Request() req,
    @Param('id') id: number,
    @Body() body: { status: string },
  ) {
    if (req.user.role !== 'admin') {
      return { message: 'admin only!!!' };
    }
    return this.dispenService.updateStatus(id, body.status);
  }
  // DELETE: Hapus data
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.dispenService.remove(id);
  }
}
