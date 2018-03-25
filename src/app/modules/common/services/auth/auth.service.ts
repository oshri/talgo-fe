import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { IUser, IMarketAuth } from '../../models';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class AuthSrv {
  user: Observable<IUser>;

  constructor(
    @Inject(Router) private routes: Router,
    @Inject(AngularFireAuth) private afAuth: AngularFireAuth,
    @Inject(AngularFirestore) private afStore: AngularFirestore
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

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credentials) => {
        debugger;
        this.updateUserData(credentials.user);
      });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<IUser> = this.afStore.doc(`users/${user.uid}`);

    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoUrl
    };

    return userRef.set(user)

  }
}
