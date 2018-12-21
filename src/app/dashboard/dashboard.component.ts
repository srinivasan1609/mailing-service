import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail-model';
import {MAIL} from '../mock-mail';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mails: Mail[];
  constructor() { }

  ngOnInit() {
    this.mails = MAIL; 
    
  }

}
