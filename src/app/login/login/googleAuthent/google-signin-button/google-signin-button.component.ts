import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StorageService} from "../../storage.service";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-google-signin-button',
  templateUrl: './google-signin-button.component.html',
  styleUrls: ['./google-signin-button.component.scss']
})
export class GoogleSigninButtonComponent implements OnInit {
  @ViewChild('googleBtnRef')
  googleBtn?: ElementRef;
  constructor(private storageService: StorageService, private router: Router, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user: any) => {
      console.log('user', user);
      if (user) {
        this.storageService.saveUser(user);
        this.router.navigate(['']);
      }

    });
  }
  clickGoogleBtn() {
    console.log(this.googleBtn);
    const event = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    })
    this.googleBtn?.nativeElement.dispatchEvent(event);

  }
}
