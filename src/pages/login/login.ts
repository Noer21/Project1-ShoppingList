import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { ShoppinglistPage } from '../shoppinglist/shoppinglist';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('uname') uname;
  @ViewChild('password') password; 

  constructor(private alert:AlertController , private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  showAlert() {
    let alert = this.alert.create({
      title: 'Succes!',
      subTitle: 'now you are logged in',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtrl.push(ShoppinglistPage);
          }
        }

      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginuser(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value);
    this.showAlert();
  }

}
