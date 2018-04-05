import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Inject,
  Input
} from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Observable, Subscriber } from "rxjs";
import { ISpreadForm } from "../../models";

@Component({
  selector: "tg-spread",
  styleUrls: ["./spread.component.scss"],
  templateUrl: "./spread.component.html"
})
export class TgSpreadComponent implements OnInit {
  form: FormGroup;
  dry_mode_status: boolean = false;
  dry_mode_disabled: boolean = true;
  labelFloat: boolean = false;
  sides = ["Buy", "Sell"];

  @Input() tickers: [any];
  @Output() submit: EventEmitter<ISpreadForm> = new EventEmitter(null);

  ngOnInit() {
    this.form = new FormGroup({
      symbol: new FormControl("", [Validators.required]),
      amount: new FormControl("", [Validators.required]),
      side: new FormControl("", [Validators.required]),
      first_order_percentage: new FormControl("", [Validators.required]),
      spread: new FormControl("", [Validators.required]),
      spread_step_size_percentage: new FormControl("", [Validators.required]),
      dry_mode: new FormControl(false, [Validators.required])
    });
  }

  emitForm() {
    this.submit.emit(this.form.value);
  }
}
