import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { PowerSupplyService } from 'src/powersupply/powersupply.service';

@Controller('computer')
export class ComputerController {
    
    constructor(
        private cpuServ : CpuService,
        private diskServ : DiskService,
        private psServ : PowerSupplyService
    ) {}

    @Get()
    run() {
        return [
            'CPU Info: ' + this.cpuServ.compute(9, 10),
            'Disk Info: ' + this.diskServ.getData(),
            'PU Info: ' + this.psServ.getSupply()
        ]
    }
}
