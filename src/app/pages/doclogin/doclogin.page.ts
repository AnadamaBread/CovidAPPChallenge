import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.page.html',
  styleUrls: ['./doclogin.page.scss'],
})
export class DocloginPage implements OnInit {

  new_user_form: FormGroup;

  db = firebase.firestore();
  curr_user : any = [];

  constructor(public router:Router, public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.new_user_form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  
  signUp() {
    this.router.navigate(['signup'])
  }

  login(user) {
    let self = this;
    let email = user.email;
    let pass = user.password; 
    let newUser:string = "false";

    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("Error Code:", errorCode);
      console.log("Error Message: ", errorMessage);
      
      if(errorCode === "auth/wrong-password"){
        alert("Incorrect Password");
      }
      else if (errorCode === "auth/user-not-found") {
        alert("User doe not exist");
      }
      console.log(error);
    }). then(function(result){
      let user = firebase.auth().currentUser;
      self.db.collection("users").where("uid", "==", user.uid).get().then(function(querySnap){
        querySnap.forEach(function(doc){
          console.log(doc.id, "=>", doc.data());
          let firstName = doc.data().firstName;
          console.log("First Name:", firstName)
        })

      }).catch(function(error){
        console.log("Error getting document: ", error);
        alert("Login failed, try again.")
      })

      console.log("login Successful");
      alert("Login Successful");
      self.router.navigate(['/home']);
      
    })
  }

  loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    firebase.auth().signInWithPopup(provider).then(function(result) {
      let token = result.credential.providerId;
      let user = result.user;
      this.router.navigate(['routine'])
    })
  }

}
