import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'dev-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  user: User;

  constructor() { 
    this.user = {
      id: 1,
      name: "Pedro"
    }
  }

  ngOnInit() {
  }

}
