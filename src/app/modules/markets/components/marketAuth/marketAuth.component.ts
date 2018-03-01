import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { IMarketAuth } from "../../models/marketAuth.interface";

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
      apiKey: new FormControl("", [Validators.required]),
      apiSecret: new FormControl("", [Validators.required])
    });
  }

  emitForm() {
    this.onSubmit.emit(this.form.value);
  }
}
