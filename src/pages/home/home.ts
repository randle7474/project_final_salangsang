import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DashboardPage } from '../dashboard/dashboard';
import { TaskerPage } from '../tasker/tasker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any = {};
  Okay:any;

  constructor(public navCtrl: NavController, public http: Http) {
  	this.data.username = '';
 	this.data.response = '';
 	this.http = http;
  }
  submit() {
    this.navCtrl.push(TaskerPage);

  }
  pushOver()
  {
  	this.navCtrl.setRoot(DashboardPage);
//	this.navCtrl.push(DashboardPage);
  }
}
