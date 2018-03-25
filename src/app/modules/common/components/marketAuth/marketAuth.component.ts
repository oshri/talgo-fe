import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { IMarketAuth } from "../../models";

@Component({
  selector: "tg-market-auth",
  styleUrls: ["./marketAuth.component.scss"],
  templateUrl: "./marketAuth.component.html"
})
export class TgMarketAuthComponent implements OnInit {
  form: FormGroup;
  @Output() onSubmit: EventEmitter<IMarketAuth> = new EventEmitter();

  ngOnInit() {
    this.form = new FormGroup({
      apiKey: new FormControl("0fMbfnBaPbP2qevMNHvt5YHhdyZ15CcTHiOKgqwmDeyq41JtyTUsB8EfBixWurNa", [Validators.required]),
      apiSecret: new FormControl("mnuklEVS3ygcpUlXaWaGwBTXRrBol6ZMHXRnN2LdtEwpLJbmYHcH5LQpu7TnqPPs", [Validators.required])
    });
  }

  emitForm() {
    this.onSubmit.emit(this.form.value);
  }
}
