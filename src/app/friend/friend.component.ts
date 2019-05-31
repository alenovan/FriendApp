import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Friends } from './../friends';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  @ViewChild('myForm') fromValue;
  friendForm: FormGroup;
  isSubmitted = false;
  friend: Array<Friends>;

  constructor(private formBuilder: FormBuilder) {
    this.friend = [];
   }

  ngOnInit() {
    this.friendForm = this.formBuilder.group({
      name: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)]],
      email: ['', [Validators.email,
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      no_hp: ['', [Validators.required, 
      Validators.pattern('^[0-9]+$')]]
    });
  }

  get formControls() {return this.friendForm.controls;}

  addFriend(name, email, no_hp){
    let friendData = new Friends(name, email, no_hp);
    this.friend.push(friendData);
  }

  getFriend(){
    this.isSubmitted = true;
    let name = this.friendForm.controls.name.value;
    let email = this.friendForm.controls.email.value;
    let no_hp = this.friendForm.controls.no_hp.value;
    if (this.friendForm.invalid) {
      return;
    }
    this.addFriend(name, email, no_hp);
    this.fromValue.reset();
  }


}
