import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  Inject
} from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { IUser } from "../../models";
import { AuthSrv } from "../../services/auth/auth.service";
import { UserProfileDialogComponent } from "../userProfileDIalog/userProfileDialog.component";

@Component({
  selector: "tg-user",
  templateUrl: "user.component.html",
  styleUrls: ["user.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TgUserComponent {
  @Input() authenticated: boolean;
  @Input() user: IUser;

  constructor(
    @Inject(AuthSrv) public authSrv: AuthSrv,
    @Inject(MatDialog) public dialog: MatDialog
  ) {
    // this.user = this.authSrv.user;
  }

  openDialog() {
    let dialogRef = this.dialog.open(UserProfileDialogComponent, {
      width: "400px",
      height: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("after closed", result);
    });
  }
}
