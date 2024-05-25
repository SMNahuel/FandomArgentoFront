import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'avatar',
  template: `
    <ng-content>
      <div class="avatar-name">
        <span>{{ getFirstharacter() }}</span>
      </div>
    </ng-content>
  `,
  host: {
    class: 'avatar',
  },
})
export class Avatar {
  name = input.required<string>();

  getFirstharacter(): string {
    return this.name().charAt(0);
  }
}

@Component({
  standalone: true,
  selector: 'old-avatar',
  template: `
    <div #ref>
      <ng-content></ng-content>
    </div>

    @if (!isEmpty(ref)) {
      <div class="avatar-name">
        <span>{{ getFirstharacter() }}</span>
      </div>
    }
  `,
  host: {
    class: 'avatar',
  },
})
export class OldAvatar {
  name = input.required<string>();

  isEmpty(ref: HTMLDivElement) {
    console.log(ref);
    return ref.children.length;
  }

  getFirstharacter(): string {
    return this.name().charAt(0);
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Avatar, OldAvatar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'default-content';
}
