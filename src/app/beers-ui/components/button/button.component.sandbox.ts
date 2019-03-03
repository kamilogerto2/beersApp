import { sandboxOf } from 'angular-playground';
import { ButtonComponent } from './button.component';

export default sandboxOf(ButtonComponent)
  .add('default', {
    template: `<app-button [label]="text"></app-button>`,
    context: {
      text: 'Sample button',
    }
  })
  .add('dark', {
    template: `<div class="dark"><app-button [label]="text"></app-button></div>`,
    context: {
      text: 'Sample button',
    }
  });

