import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage,  NavParams } from 'ionic-angular';
import { AnadirPage } from '../anadir/anadir'



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {
    params: Object;
  pushPage: any;


    /* creo el array */
    juegos:any[];
    juegoE:any;
    nombre:any;
    descripcion:any;

  constructor(public navParams: NavParams, public modal: ModalController) {


    /* ahora creo los juegos en si */
    this.juegos=[
        {
            nombre:"LoL",
            descripcion:"un juego tipo MOBA",
        },
        {
            nombre:"Dota2",
            descripcion:"es el padre de los MOBA",
        },
    ];
      this.pushPage = AnadirPage;
  }


    openModal(juego){
        let infoJuego = this.modal.create('InfoPage', { item:juego });
        infoJuego.present();
    }

ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
