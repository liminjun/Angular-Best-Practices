import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'account-menu',
  styleUrls: ['../core/account-menu.component.css'],
  templateUrl:"../core/account-menu.component.html"
})
export class AccountMenuComponent {
  @Input() user;
  @Output() signedOut:EventEmitter<any> = new EventEmitter<any>();
  showMenu:boolean;

  signOut() {
    this.showMenu = false;
    this.signedOut.emit();
  }

}
