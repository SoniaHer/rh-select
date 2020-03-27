import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminosCondicionesPage } from './terminos-condiciones';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    TerminosCondicionesPage,
    
  ],
  imports: [
    IonicPageModule.forChild(TerminosCondicionesPage),
  ],
  providers: [
    DocumentViewer,
  ]
})
export class TerminosCondicionesPageModule {}
