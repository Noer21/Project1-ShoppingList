import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

import { ShoppinglistPage } from '../shoppinglist/shoppinglist';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  shoppingItem = {} as ShoppingItem

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  
    this.shoppingItemRef$ = this.database.list('shopping-list');
  
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Your item added to the cart!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(ShoppinglistPage);
          }
        }
      ]
    });
    alert.present();
  }

  addshoppingitem(shoppingItem: ShoppingItem){
    this.shoppingItemRef$.push({
      itemName : this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    })
    console.log(shoppingItem );
    this.showAlert();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
