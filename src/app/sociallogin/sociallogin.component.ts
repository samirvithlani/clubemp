import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-sociallogin',
  templateUrl: './sociallogin.component.html',
  styleUrls: ['./sociallogin.component.css']
})
export class SocialloginComponent implements OnInit {

  constructor(private loginService:SocialAuthService) { }
  user:SocialUser;


  ngOnInit(): void {

    this.loginService.authState.subscribe(res=>{

      this.user = res;
    })
  }
  signout(){

    this.loginService.signOut();
    
  }
  signinwithFb(){

    this.loginService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
