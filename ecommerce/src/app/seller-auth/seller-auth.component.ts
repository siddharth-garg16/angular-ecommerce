import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {

  constructor(){}

  sellerRegistrationForm = new FormGroup({
    sellerName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gst: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  sellerLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  showSignupForm:boolean = true;

  signUp():void{
    console.log(this.sellerRegistrationForm.value.sellerName);
    console.log(this.sellerRegistrationForm.value.email);
    console.log(this.sellerRegistrationForm.value.gst);
    console.log(this.sellerRegistrationForm.value.password);
    //make a http post request after confirming that the password and confirm password are same.
  }

  login():void{
    console.log(this.sellerLoginForm.value.email);
    console.log(this.sellerLoginForm.value.password);
    //redirect to seller portal after confirming the credentials
  }

  toggleForms(){
    this.showSignupForm = !this.showSignupForm;
  }
}
