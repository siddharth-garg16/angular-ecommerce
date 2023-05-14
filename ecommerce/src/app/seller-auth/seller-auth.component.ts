import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { SellerInfo, SellerLogin } from '../models/seller';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {
  @ViewChild('regForm') regForm;
  @ViewChild('logForm') logForm;

  arePasswordsDifferent:boolean = false;

  constructor(
    private sellerService: SellerService,
    private snackBar: MatSnackBar,
    private router: Router){}

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

  signUp(regForm):void{
    if(this.sellerRegistrationForm.value.password === this.sellerRegistrationForm.value.confirmPassword){
      this.arePasswordsDifferent = false;
    } else {
      this.arePasswordsDifferent = true;
    }

    delete this.sellerRegistrationForm.value.confirmPassword;

    if(this.sellerRegistrationForm.valid && !this.arePasswordsDifferent){
      let newUser:SellerInfo = {
        sellerName:this.sellerRegistrationForm.value.sellerName,
        email:this.sellerRegistrationForm.value.email,
        gst:this.sellerRegistrationForm.value.gst,
        password:this.sellerRegistrationForm.value.password,
      }

      this.sellerService.sellerSignup(newUser)
      .subscribe((result)=>{
        this.regForm.resetForm();
        this.showSignupForm = false;
      })
      this.snackBar.open("You have successfully registered with us.", "OK");
    } else {
      this.snackBar.open("Unable to register. Please try again.", "Dismiss");
    }
  }

  login(logForm):void{
    let activeSeller:SellerLogin = {
      email: this.sellerLoginForm.value.email,
      password: this.sellerLoginForm.value.password
    }
    this.sellerService.sellerLogin(activeSeller).subscribe((result)=>{
      if(result.length){
        localStorage.setItem("seller", result[0].sellerName);
        this.router.navigate(["seller-home"])

      } else {
        this.snackBar.open("Please check the credentials and try again.", "Dismiss");
      }
    })
  }

  toggleForms(){
    this.showSignupForm = !this.showSignupForm;
  }
}
