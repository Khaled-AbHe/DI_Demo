import { Module } from '@nestjs/common';
import { PowersupplyController } from './powersupply.controller';
import { PowersupplyService } from './powersupply.service';

@Module({
  controllers: [PowersupplyController],
  providers: [PowersupplyService]
})
export class PowersupplyModule {}
