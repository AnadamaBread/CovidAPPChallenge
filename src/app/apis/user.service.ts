import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
// import { Storage } from '@ionic/storage';
// import { Events } from '@ionic/angular';
// import { Events } from '@ionic/angular';

import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { isUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  db = firebase.firestore();
  private eventSub = new Subject<any>();

  public interactions:Array<any> = [];
  public routines:Array<any> = [];
  
  users:Array<any> = [];
  current_user: any = null;

  usertype = "client";

  publishEvent(data:any){
    this.eventSub.next(data);
  }

  getObservable(): Subject<any> {
    return this.eventSub;
  }


  constructor( private afs: AngularFirestore, public router:Router) { 
  var self = this;
  var user = firebase.auth().currentUser;
  console.log("getting user specific Routines and Interactions")

  // if (user != null) {
  //   self.interactions = [];
  //   this.db.collection("interactions").where("iuid", "==", firebase.auth().currentUser.uid).onSnapshot(function (querySnapshot) {
  //     console.log("Interactions loading for client............");
  //     self.interactions = [];
  //     querySnapshot.forEach(function (doc) {
  //       var i= doc.data();
  //       self.interactions.push({
  //         date: i.date,
  //         time: i.time,
  //         location: i.location,
  //         topic: i.topic,
  //         words: i.words,
  //         tone: i.tone,
  //         feel: i.feel,
  //         pros: i.pros,
  //         edit: i.edit 
  //       })
  //     });
  //       console.log("Interactions loaded for Client user!!")
  //   })
  // }

  //   if (user != null) {
  //     self.routines = [];
  //     this.db.collection("routines").where("ruid", "==", firebase.auth().currentUser.uid).onSnapshot(function (querySnapshot) {
  //       console.log(" Routines loading for client............");
  //       self.routines = [];
  //       querySnapshot.forEach(function (doc) {
  //         var r= doc.data();
  //         self.routines.push({
  //           date: r.date,
  //           wake: r.wake,
  //           exercise: r.exercise,
  //           money_spent: r.money_spent,
  //           activities: r.activities
  //         })
  //       });
  //         console.log("Routines loaded for Client user!!")
  //     })
  //   }
    // this.products.push({"id":1,"name":"VR Headset","category":"Toy","price":100,"img":"assets/gear-vr.jpg","description":"virtual reality headset!"});

    // DEFAULT INTERACTIONS
    console.log("Pushing Default Interactions");
    this.interactions.push({
        "date" : "October 10th 2020",
        "time" : "12:05 PM",
        "location" : "Local Shopping Mall",
        "topic" : "Business",
        "words": "Critical, Important, Necessary",
        "tone": "Formal",
        "feel": "Made me feel rushed, busy, and disorganized.",
        "pros": "I understood the importance of what I needed to do and that it needed to be done ASAP.",
        "edit": "I wish Jeff told me before hand that there would be a lot of people in the Mall."
    });
    this.interactions.push({
      "date" : "August 4th 2020",
      "time" : "1:30 PM",
      "location" : "McDonalds",
      "topic" : "Ordering Food",
      "words": "Please, Thank You, I'm Sorry",
      "tone": "Casual",
      "feel": "I felt like I was doing nothing wrong while ordering food inside instead of the drive through.",
      "pros": "I was able to hold conversation face to face with both parties wearing a mask.",
      "edit": "I would change nothing about this interaction."
    });
    this.interactions.push({
      "date" : "September 10th 2020",
      "time" : "9:05 AM",
      "location" : "Outside Home",
      "topic" : "Walking my dog wearing a mask",
      "words": "Why, Stupid, Pointless, Liberal",
      "tone": "Threatening",
      "feel": "Unsafe, threatened, hurtful, and confused",
      "pros": "Nothing, my neighbor went out of her way to hurt my feelings for wearing a mask outside my own house.",
      "edit": "I would try to avoid the situation next time. Steer clear of that neighbor."
    });
    this.interactions.push({
      "date" : "July 4th 2020",
      "time" : "10:15 PM",
      "location" : "Beach",
      "topic" : "Holiday Ruined",
      "words": "Leave, Spread-Out, Social Distance",
      "tone": "Formal",
      "feel": "I realized what I was doing was wrong. I felt bad and sorry for it.",
      "pros": "Even though for the holiday and having fun, I realized what is protocol for next time.",
      "edit": "I would have thought about bringing a mask and being more aware of COVID City guidelines."
    });

    // DEFAULT ROUTINES
    console.log("Pushing Default Routines");
    this.routines.push({
      "date" : "August 2nd 2020",
      "wake" : "9:30 AM",
      "exercise" : "Yes, went on a slight jog",
      "money_spent" : "$45",
      "activities" : "Food shopped, worked from home, made breakfast and dinner at my own apartment."
    });
    this.routines.push({
      "date" : "June 21st 2020",
      "wake" : "6:45 AM",
      "exercise" : "Not Today",
      "money_spent" : "$0",
      "activities" : "Didn't leave the house. Made leftovers for lunch and dinner. Sat and watched TV for most of the day."
    });
    this.routines.push({
      "date" : "April 14th 2020",
      "wake" : "7:30 AM",
      "exercise" : "Sort of, did things without the purpose of getting a workout. Lifted boxes, moved furniture, and some jogging.",
      "money_spent" : "$2250",
      "activities" : "Heavy food shopping, bought a handgun for personal safety, moved things into and out of the attic."
    });
    

}


  createInteract(date, time, location, topic, words, tone, feel, pros, edit) {
    var self = this;
    var iid = null;
    if(firebase.auth().currentUser != null &&  this.usertype =="client"){
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
