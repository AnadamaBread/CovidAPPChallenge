import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
// import { Storage } from '@ionic/storage';

import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  db = firebase.firestore();
  private eventSub = new Subject<any>();
  interactions:Array<any> = [];
  routines:Array<any> = [];
  users:Array<any> = [];
  current_user: any = null;

  publishEvent(data:any){
    this.eventSub.next(data);
  }

  getObservable(): Subject<any> {
    return this.eventSub;
  }


  constructor( public router:Router) { }

  getInteractions(): any {
    var self = this;
    if(firebase.auth().currentUser != null){
      console.log("Getting user info");
      
    }
  }


}
