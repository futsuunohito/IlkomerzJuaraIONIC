import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KomunitasPage } from './komunitas';

@NgModule({
  declarations: [
    KomunitasPage,
  ],
  imports: [
    IonicPageModule.forChild(KomunitasPage),
  ],
})
export class KomunitasPageModule {}
