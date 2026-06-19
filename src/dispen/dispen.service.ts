import { Injectable } from '@nestjs/common';
import { CreateDispenDto } from './dto/create-dispen.dto';
import { UpdateDispenDto } from './dto/update-dispen.dto';

@Injectable()
export class DispenService {
  create(createDispenDto: CreateDispenDto) {
    return 'This action adds a new dispen';
  }

  findAll() {
    return `This action returns all dispen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dispen`;
  }

  update(id: number, updateDispenDto: UpdateDispenDto) {
    return `This action updates a #${id} dispen`;
  }

  remove(id: number) {
    return `This action removes a #${id} dispen`;
  }
}
