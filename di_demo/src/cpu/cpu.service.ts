import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from 'src/powersupply/powersupply.service';

@Injectable()
export class CpuService {

    constructor(private psService : PowerSupplyService) {}

    compute(a: number, b: number) {
        this.psService.supplyPower(100)
        return a + b
    }

}
