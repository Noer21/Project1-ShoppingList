import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database'
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface'
/**
 * Generated class for the ShoppinglistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shoppinglist',
  templateUrl: 'shoppinglist.html',
})
export class ShoppinglistPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  
    this.shoppingListRef$ = this.database.list('shopping-list')
    

    //this.shoppingListRef$.subscribe(x => console.log(x));
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppinglistPage');
  }

  movetoaddlist() {
    this.navCtrl.push(ProfilePage);
  }
}
