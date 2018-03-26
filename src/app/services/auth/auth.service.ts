import { Injectable, Inject } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RequestOptions, Request, RequestMethod } from "@angular/http";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";

import { tap, catchError } from "rxjs/operators";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { switchMap } from "rxjs/operators";
import { IUser } from "../../models";
import { FirebaseApp } from "angularfire2";
import { LoadingService } from "../../modules/loading/services/loading/loading.service";

@Injectable()
export class AuthSrv {
  user: Observable<IUser>;
  routeSub: any;
  routeAfterLogin: string;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(AngularFireAuth) private afAuth: AngularFireAuth,
    @Inject(AngularFirestore) private afStore: AngularFirestore,
    @Inject(LoadingService) private loading: LoadingService
  ) {
    this.user = afAuth.authState.switchMap(user => {
      if (user) {
        return this.afStore.doc<IUser>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }

  private oAuthLogin(provider) {
    this.loading.setValue(true);
    return this.afAuth.auth.signInWithPopup(provider).then(credentials => {
      this.updateUserData(credentials.user);
      this.router.navigate(["/markets"]);
      this.loading.setValue(false);
    });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<IUser> = this.afStore.doc(
      `users/${user.uid}`
    );

    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL
    };

    return userRef.set(userData);
  }
}
