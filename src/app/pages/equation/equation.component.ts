import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equation',
  standalone: true,
  imports: [],
  templateUrl: './equation.component.html',
  styleUrl: './equation.component.scss'
})
export class EquationComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  equationId = 0;

  constructor() {
    this.equationId = Number(this.route.snapshot.params["id"])
  }
}
