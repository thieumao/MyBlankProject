import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public users: any[] = [];

  constructor(public route: ActivatedRoute, public navCtrl: NavController) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.users =  params["users"];
      console.log(this.users );
    });
  }

  onBack() {
    this.navCtrl.navigateBack('/home');
  }

}
