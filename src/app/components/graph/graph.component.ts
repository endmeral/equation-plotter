import { AfterViewInit, Component } from '@angular/core';
import functionPlot from 'function-plot';
import { HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements AfterViewInit{

  gridEnabled = true;
  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    // Call the function here when the window is resized
    this.plotGraph();
  }
  plotGraph() {

    const container = document.querySelector(
      "#function-plot-container",
    ) as HTMLElement;

    const containerWidth = container.offsetWidth;

    // Calculate the height as 0.6 of the width
    const height = containerWidth * 0.6;


    functionPlot({
      target: '#function-plot-container',
      width: container.offsetWidth,
      height: container.offsetHeight,
      grid: this.gridEnabled,
      data: [
        {
          fn: 'x^2',
          derivative: {
            fn: '2*x',
            updateOnMouseMove: true
          }
        }
      ]
    })
  }

  ngAfterViewInit(): void {
    this.plotGraph()
  }
}
