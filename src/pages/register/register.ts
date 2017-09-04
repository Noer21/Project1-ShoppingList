import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('uname') uname;
  @ViewChild('password') password;

  constructor(private alert: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }


  showAlert() {
    let alert = this.alert.create({
      title: 'Succes!',
      subTitle: 'Now you could login to our awsomeness!',
      buttons: [
        {
          text: 'login',
          handler: () => {
            this.navCtrl.push(LoginPage);
          }
        }

      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registeruser(){
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value);
    this.showAlert();
    console.log('Would register user with ', this.uname.value, this.password.value);

  }

}
