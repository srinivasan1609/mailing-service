import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'app-forgot-pass-dialog',
  templateUrl: './forgot-pass-dialog.component.html',
  styleUrls: ['./forgot-pass-dialog.component.css']
})
export class ForgotPassDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}
