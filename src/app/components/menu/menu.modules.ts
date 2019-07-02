import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    declarations: [MenuComponent],
    exports: [MenuComponent],
    providers: []
})

export class MenuModule {
}