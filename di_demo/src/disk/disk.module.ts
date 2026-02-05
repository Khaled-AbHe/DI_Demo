import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerSupplyModule } from 'src/powersupply/powersupply.module';

@Module({
  imports: [PowerSupplyModule],
  exports: [DiskService],
  providers: [DiskService]
})
export class DiskModule {}
