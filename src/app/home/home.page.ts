import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public users: any[] = [
    {
      name: 'Thieu Mao',
      age: 28,
    },
    {
      name: 'Thu Ha',
      age: 24,
    }
  ];

  constructor(public navCtrl: NavController) {}

  onNavigateToUsers() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        users: this.users,
      }
    };
    this.navCtrl.navigateForward('/users', navigationExtras);
  }

}
