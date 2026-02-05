import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { PowerSupplyModule } from 'src/powersupply/powersupply.module';

@Module({
  imports: [CpuModule, DiskModule, PowerSupplyModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
