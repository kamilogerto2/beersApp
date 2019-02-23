import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() label: string;
  @Output() options = new EventEmitter<any>();

  openOptions() {
    this.options.emit();
  }
}
