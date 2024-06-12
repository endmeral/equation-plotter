import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-edit-table',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './edit-table.component.html',
  styleUrl: './edit-table.component.scss'
})
export class EditTableComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
