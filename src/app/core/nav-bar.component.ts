import { Component } from '@angular/core';

import { UserRepositoryService } from "../users/user-repository.service";

@Component({
  selector: 'nav-bar',
  styleUrls: [`../core/nav-bar.component.css`],
  templateUrl:'../core/nav-bar.component.html'
})

export class NavBarComponent  {
  constructor(private userRepository:UserRepositoryService) {}

  get currentUser() {
    return this.userRepository.currentUser;
  }

  handleSignOut() {
    this.userRepository.currentUser = null;
  }
}
