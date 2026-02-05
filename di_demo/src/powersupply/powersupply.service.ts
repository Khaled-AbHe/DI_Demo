import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerSupplyService {

    private supply = 500;

    supplyPower(watts: number) {
        this.supply -= watts
        return `Supplying ${watts} watts of power.`
    }

    getSupply() {
        return this.supply
    }
}
