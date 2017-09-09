import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: FirebaseListObservable<any>
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.posts = db.list('/posts')
  }

}