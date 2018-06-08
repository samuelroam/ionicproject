import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnadirPage } from '../anadir/anadir';
import { HomePage } from '../home/home';

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    welcome(){
  this.navCtrl.push(AnadirPage);
  }
    regret(){
        this.navCtrl.push(HomePage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

}
