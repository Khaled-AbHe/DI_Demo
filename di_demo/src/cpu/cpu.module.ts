import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerSupplyModule } from 'src/powersupply/powersupply.module';

@Module({
  imports: [PowerSupplyModule],
  exports: [CpuService],
  providers: [CpuService]
})
export class CpuModule {}
