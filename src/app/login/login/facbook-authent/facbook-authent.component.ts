import {Component, OnInit} from '@angular/core';
import {FacebookLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {AccountService} from "../account.service";
import {environment} from "../../../../environments/environment";
import {finalize} from "rxjs/operators";
declare const FB: any;
@Component({
  selector: 'app-facbook-authent',
  templateUrl: './facbook-authent.component.html',
  styleUrls: ['./facbook-authent.component.scss']
})
export class FacebookAuthentComponent implements OnInit{
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  constructor(
      private accountService: AccountService,
      private socialAuthService : SocialAuthService

  ) {
  }
  loginWithFacebook(): void {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
  }

  ngOnInit(): void {

  }
}
