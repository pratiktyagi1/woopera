import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibrettosPageRoutingModule } from './librettos-routing.module';

import { LibrettosPage } from './librettos.page';
import { HeaderComponent } from '../../components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrettosPageRoutingModule
    
  ],
  declarations: [LibrettosPage],
  exports:[HeaderComponent]
})
export class LibrettosPageModule {}
