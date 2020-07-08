import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public users: any[] = [];

  constructor(public navCtrl: NavController, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.users =  params["users"];
      console.log(this.users );
    });
  }

  onBack() {
    this.navCtrl.pop();
  }

  onNavigateToDetailUser(user) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        user: user,
      }
    };
    this.navCtrl.navigateForward('/user', navigationExtras);
  }

}
