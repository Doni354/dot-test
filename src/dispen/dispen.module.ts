import { Module } from '@nestjs/common';
import { DispenService } from './dispen.service';
import { DispenController } from './dispen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispen } from '../entities/dispen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dispen])],
  controllers: [DispenController],
  providers: [DispenService],
})
export class DispenModule {}
