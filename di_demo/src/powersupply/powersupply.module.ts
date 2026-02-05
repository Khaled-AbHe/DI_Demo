import { Module } from '@nestjs/common';
import { PowerSupplyService } from './powersupply.service';

@Module({
  exports: [PowerSupplyService],
  providers: [PowerSupplyService]
})
export class PowerSupplyModule {}
