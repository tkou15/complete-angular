import { Component } from '@angular/core';
import { IconButton } from '../../components/button/icon-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [IconButton, RouterLink],
  template: `<main
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100 mr-8 ml-8"
  >
    <div class="text-center">
      <div class="mb-8">
        <img src="logo.webp" alt="Logo" class="angular-logo h-32" />
      </div>
      <h1>{{ title }}</h1>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-8">
      <icon-button
        title="Style Guides"
        routerLink="/style-guides"
      ></icon-button>
      <icon-button></icon-button>
      <icon-button></icon-button>
    </div>
  </main>`,
})
export class HomeComponent {
  title = 'complete-angular';
}
