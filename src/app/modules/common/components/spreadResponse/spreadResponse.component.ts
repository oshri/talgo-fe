import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Inject,
  Input
} from "@angular/core";
import { ISpreadForm } from "../../models";

@Component({
  selector: "tg-spread-response",
  styleUrls: ["./spreadResponse.component.scss"],
  templateUrl: "./spreadResponse.component.html"
})
export class TgSpreadResponseComponent {
  @Input() response: [string];
}
