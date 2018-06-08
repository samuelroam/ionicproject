import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InfoPage } from '../info/info'

/**
 * Generated class for the AnadirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir',
  templateUrl: 'anadir.html',
})
export class AnadirPage {
    //crear variables para inputs
  nombre: string;
  jugadores: string;
  descripcion: string;

    // array de juegos vacio + todos los juegos en json
	juegos: Array<any> = [

		{
          nombre: "League of Legends",
          foto: "../../assets/imgs/moussedechocolate.jpg",
          jugadores: "Partidas normales de dos equipos de 5 miembros cada uno",
          descripcion: "es un juego tipo MOBA"

      } ,
      {
      	nombre: "Dota2",
      	foto: "../../assets/imgs/garbanzos.jpg",
      	jugadores: "Partidas normales de dos equipos de 5 miembros cada uno",
      	descripcion: "es el padre de los MOBA"
      },
      {
      	nombre:"Paladins",
      	foto:"../../assets/imgs/fingers.jpg",
      	jugadores:"Dos equipos de 5 miembros cada uno",
      	descripcion: "Juego tipo shooter de fantasia con habilidades unicas"
      }

	]

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {


  }

  // pasar un juego a la descripcion para que se abra la description page y lel juego en si
  // haciendo le click al juego elegido
  juegoElegido(item){
  	this.navCtrl.push( InfoPage, {item: item});

  }

  //crear el juego con las variables para los inputs creadas anteriormente a los cuales se les asignan valores y
  //se les añade a la lista del array
  crearJuego(){
    console.log(this.juegos);
    this.juegos.push({
      nombre: this.nombre,
      jugadores: this.jugadores,
      descripcion: this.descripcion
    });
    console.log(this.juegos);

  }

  //creamos una alerta con los siguientes parametros dentro
  //para poder utilizarla después al añadir juego
  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Añadido!',
    subTitle: 'El nuevo juego se ha añadido correctamente',
    buttons: ['Aceptar']
  });
  alert.present();
}

  //con index of elegimos el item de this.juegos que es el array
  //con splice le decimos que queremos borrar ese item al que le hemos llamado index y que solo ese
  eliminarJuego(item){
    const index: number=this.juegos.indexOf(item);
    (this.juegos).splice(index, 1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnadirPage');
  }

}
