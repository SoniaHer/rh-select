import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';
/**
 * Generated class for the TerminosCondicionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminos-condiciones',
  templateUrl: 'terminos-condiciones.html',
})
export class TerminosCondicionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private document: DocumentViewer) {
    const options: DocumentViewerOptions = {
      title: 'Terminos y Condiciones'
    }
    this.document.viewDocument('assets/pdf/terminosycondiciones.pdf', 'application/pdf', options)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminosCondicionesPage');
  }

}
