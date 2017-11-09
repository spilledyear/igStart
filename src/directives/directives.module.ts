import { NgModule } from '@angular/core';
import { SxylightDirective } from './sxylight/sxylight';
import { SxyunlessDirective } from './unless/sxyunless';
@NgModule({
	declarations: [SxylightDirective,
    SxyunlessDirective],
	imports: [],
	exports: [SxylightDirective,
    SxyunlessDirective]
})
export class DirectivesModule {}
