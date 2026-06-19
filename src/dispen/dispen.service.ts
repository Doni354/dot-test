import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dispen } from '../entities/dispen.entity';

@Injectable()
export class DispenService {
  constructor(
    @InjectRepository(Dispen)
    private dispenRepository: Repository<Dispen>,
  ) {}

  // add dispen
  async createDispen(userId: number, alasan: string) {
    const newDispen = this.dispenRepository.create({
      id_user: userId,
      alasan: alasan,
      status: 'pending', // Default pas pertama kali bikin
    });
    return this.dispenRepository.save(newDispen);
  }

  // view data
  async findAll(userPayload: any) {
    if (userPayload.role === 'admin') {
      return this.dispenRepository.find();
    } else {
      return this.dispenRepository.find({
        where: { id_user: userPayload.sub },
      });
    }
  }

  // Admin acc
  async updateStatus(id: number, status: string) {
    const dispen = await this.dispenRepository.findOne({ where: { id } });
    if (!dispen) {
      throw new NotFoundException(`Data dispen ID ${id} nggak ketemu cuy`);
    }
    dispen.status = status;
    return this.dispenRepository.save(dispen);
  }

  // Hapus data dispen
  async remove(id: number) {
    const result = await this.dispenRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Data dispen ID ${id} nggak ketemu cuy`);
    }
    return { message: `Data dispen ID ${id} berhasil dihapus` };
  }
}
