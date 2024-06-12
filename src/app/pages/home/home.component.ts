import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

// for modifying size
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GraphComponent } from '../../components/graph/graph.component';
import { EditTableComponent } from '../../components/edit-table/edit-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule,
    MatToolbarModule, MatGridListModule, MatCardModule,
    MatSlideToggleModule, MatTabsModule, ReactiveFormsModule,
    MatButtonToggleModule, MatFormFieldModule, MatSelectModule, 
    CommonModule, MatInputModule, MatExpansionModule, 
    GraphComponent, EditTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  equationTypes = [
    { value: 'linear', viewValue: 'Linear' },
    { value: 'parametric', viewValue: 'Parametric' },
    { value: 'polar', viewValue: 'Polar' }
  ];

  graphTypes = [
    { value: 'interval', viewValue: 'Interval' },
    { value: 'polyline', viewValue: 'Polyline' },
    { value: 'scatter', viewValue: 'Scatter'}
  ];

  equationForm = new FormGroup({
    equationType: new FormControl('linear'),
    graphType: new FormControl('interval'),
    fn: new FormControl(''),
    x: new FormControl(''),
    y: new FormControl(''),
    polar: new FormControl('')

  })

  onResize(){

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.equationForm.value);
  }
  equations: { id: number, equation: string, }[] = [];
}
