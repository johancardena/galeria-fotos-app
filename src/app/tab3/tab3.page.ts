import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  photos: string[] = [];

  constructor() {}

  ionViewWillEnter() {
    const saved = localStorage.getItem('photos');

    if (saved) {
      this.photos = JSON.parse(saved);
    }
  }
}