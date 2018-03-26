import { DomSanitizer } from "@angular/platform-browser";
import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/core";
import { LoadingService } from "../../services/loading/loading.service";

@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
  animations: [
    trigger("loadingState", [
      state(
        "inactive",
        style({
          opacity: 0,
          display: "none"
        })
      ),
      state(
        "active",
        style({
          opacity: 0.5
        })
      ),
      transition("active => inactive", animate("200ms ease-out")),
      transition("inactive => active", animate("0ms ease-in"))
    ])
  ]
})
export class LoadingComponent implements OnInit {
  loadingState: string = "inactive";

  constructor(private _loadingSvc: LoadingService) {}

  ngOnInit(): void {
    this._loadingSvc.getValue().subscribe((status: boolean) => {
      this.loadingState = status ? "active" : "inactive";
    });
  }
}
