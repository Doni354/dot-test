import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // CREATE: akun
  async create(userData: any) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userData.pass, salt);

    const newUser = this.userRepository.create({
      ...userData,
      pass: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  // READ: akun
  async findAll() {
    return this.userRepository.find({
      select: ['id', 'name', 'email', 'kelas', 'role'],
    });
  }
}
