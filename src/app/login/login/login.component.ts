import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {StorageService} from "./storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authSubscription!: Subscription;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private storageService: StorageService, private router: Router, private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
  }

  googleSignin(googleWrapper: any) {
    //googleWrapper.click();
    // @ts-ignore

  }

}
