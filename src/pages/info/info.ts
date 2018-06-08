import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
    juego;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
      this.juego = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
dismiss(){
    this.viewCtrl.dismiss();
}

}
