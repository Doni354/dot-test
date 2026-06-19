import { PartialType } from '@nestjs/mapped-types';
import { CreateDispenDto } from './create-dispen.dto';

export class UpdateDispenDto extends PartialType(CreateDispenDto) {}
