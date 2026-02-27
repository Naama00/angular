import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-catring-menu',
  standalone: true,
  imports: [MatExpansionModule, MatCheckboxModule, FormsModule],
  templateUrl: './catring-menu.component.html',
  styleUrl: './catring-menu.component.css'
})
export class CatringMenuComponent {
menu = [
  { category: 'סלטים', items: [{name: 'חומוס', selected: false}, {name: 'סלט ירוק', selected: false}] },
  { category: 'מנת פתיחה', items: [{name: 'בורקס', selected: false}, {name: 'מרק', selected: false}] },
  { category: 'מנה עיקרית', items: [{name: 'עוף', selected: false}, {name: 'דג', selected: false}] },
  { category: 'תוספות', items: [{name: 'אורז', selected: false}, {name: 'תפו"א', selected: false}] },
  { category: 'מנה אחרונה', items: [{name: 'פלטת פירות', selected: false}, {name: 'מוס שוקולד', selected: false}] }
];
  get totalSelected() {
  return this.menu.reduce((acc, section) => 
    acc + section.items.filter(item => item.selected).length, 0
  );
}
}