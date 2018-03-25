import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import { AuthSrv } from "../../services/auth/auth.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "user-profile-dialog",
  styleUrls: ["userProfileDialog.component.scss"],
  templateUrl: "userProfileDialog.component.html"
})
export class UserProfileDialogComponent {
  @Input() authenticated: boolean;
  user: any;

  constructor(
    public authSrv: AuthSrv,
    public dialogRef: MatDialogRef<UserProfileDialogComponent>
  ) {}

  logout() {
    this.authSrv.signOut();
    this.dialogRef.close();
  }
}
