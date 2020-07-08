import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

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

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.navigateBack('/home');
  }

}
