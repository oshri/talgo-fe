import { Component, Input, OnInit, OnDestroy, Inject } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import {
  Router,
  ActivatedRoute,
  Params,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { AuthSrv } from "../../services/auth/auth.service";
import { LoadingService } from "../../modules/loading/services/loading/loading.service";
import {
  fadeInAnimation,
  slideInOutAnimation
} from "../../utils/routerTransition/routerTransition";

@Component({
  selector: "tg-confirm",
  styleUrls: ["confirm.component.scss"],
  templateUrl: "confirm.component.html"
})
export class TgConfirmComponent implements OnInit, OnDestroy {
  form: FormGroup;
  paramsSubscription: Subscription;
  uid: string;

  constructor(
    @Inject(AuthSrv) public authSrv: AuthSrv,
    @Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(LoadingService) private loadingService: LoadingService
  ) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.uid = params["id"];
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email])
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  emitForm() {
    this.authSrv
      .confirmEmail(this.form.value.email, this.uid)
      .subscribe(res => {
        console.log(res);
        this.loadingService.setValue(false);
        this.router.navigate(["/markets"]);
      });
  }
}
