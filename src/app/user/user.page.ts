import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public user: any = {};

  constructor(public navCtrl: NavController, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user =  params["user"];
    });
  }

  onBack() {
    this.navCtrl.pop();
  }

  backToHome() {
    // console.log('Back to Home Screen');
    this.navCtrl.navigateRoot('/home');
  }

}
