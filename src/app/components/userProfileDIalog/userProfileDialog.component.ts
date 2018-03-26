import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  Inject
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
    @Inject(AuthSrv) public authSrv: AuthSrv,
    @Inject(MatDialogRef)
    public dialogRef: MatDialogRef<UserProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  logout() {
    this.authSrv.signOut();
    this.dialogRef.close();
  }
}
