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

  usertype = "patient";

  publishEvent(data:any){
    this.eventSub.next(data);
  }

  getObservable(): Subject<any> {
    return this.eventSub;
  }


  constructor( public router:Router) { }


  createInteract(date, time, location, topic, words, tone, feel, pros, edit) {
    var self = this;
    var iid = null;
    if(firebase.auth().currentUser != null &&  this.usertype =="patient"){
      iid = firebase.auth().currentUser.uid;
      var dab = firebase.firestore();
      dab.collection("interactions").add({
        'date': date,
        'time': time,
        'location': location,
        'topic': topic,
        'words': words,
        'tone': tone,
        'feel': feel,
        'pros':pros,
        'edit':edit,
        'linkid': iid
      }).then(function(docRef){
        console.log("Document written with ID :", docRef.id );
      }).catch(function(error){
        console.error("Error adding document to dab: ", error);
      });
    }
    else{
      console.log("User not logged in");
    }

  }
  
  getInteractions(): any {
    var self = this;
    if(firebase.auth().currentUser != null){
      console.log("Getting user info");
      let curr_uid = firebase.auth().currentUser.uid;
      self.users.forEach(function(u_val){
        if(u_val.uid == curr_uid){
          self.current_user = u_val;
        }
      })
      self.publishEvent({})
      console.log("Current user Set in Service");
    }
    if(this.current_user != null && this.interactions != null){
      console.log("Setting User Info and Loading Interactions");
      // let user_ints = {
      // }
    }
  }

  // async refresh() {
  //   let self = this;
  //   await self.db.collection("interactions")
  // }



}
