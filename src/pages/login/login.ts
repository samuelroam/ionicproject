import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TermsPage } from '../terms/terms';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
@ViewChild('username') user;
@ViewChild('password') password;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
  if(this.user.value == "admin" && this.password.value == "admin"){
  this.navCtrl.push(TermsPage);
  }else{
  let alert = this.alertCtrl.create({
  title: 'Datos incorrectos',
  subTitle: 'Los datos ingresados son incorrectos.',
  buttons: ['OK']
  });
  alert.present();
  }
  }

}
