import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from 'src/powersupply/powersupply.service';

@Injectable()
export class DiskService {

    constructor(private psService : PowerSupplyService) {}

    getData() {
        this.psService.supplyPower(50)
        return "Data"
    }
}
