import { Injectable, Inject } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { RequestOptions, Request, RequestMethod } from "@angular/http";
import { Router, ActivatedRoute, Params } from "@angular/router";
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
  firebaseUrl = "https://us-central1-talgo-f783b.cloudfunctions.net/confirmEmail";

  constructor(
    @Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(AngularFireAuth) private afAuth: AngularFireAuth,
    @Inject(AngularFirestore) private afStore: AngularFirestore,
    @Inject(LoadingService) private loading: LoadingService,
    @Inject(HttpClient) private http: HttpClient
  ) {
    this.user = afAuth.authState.switchMap(user => {
      if (user) {
        return this.afStore.doc<IUser>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  public facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }

  public confirmEmail(email: string, uid: string): Observable<any> {
    this.loading.setValue(true);
    const body = JSON.stringify({
      email,
      token: uid
    });

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };

    return this.http.post(this.firebaseUrl, body, httpOptions);
  }

  private handleError(erros?: HttpErrorResponse) {
    this.loading.setValue(false);
    if (erros.error instanceof Error) {
      console.log("Client-side error occured.");
    } else {
      console.log("Server-side error occured.");
    }
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
      photoUrl: user.photoURL,
      emailConfirm: false
    };

    return userRef.set(userData);
  }
}
