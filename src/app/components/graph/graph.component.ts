import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import functionPlot from 'function-plot';
import { HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { After } from 'node:v8';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements AfterViewInit{

  @ViewChild('hello', { static: true }) hello!: ElementRef<HTMLDivElement>;

  gridEnabled = true;
  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    // Call the function here when the window is resized
    this.plotGraph();
  }

  constructor(private elementRef: ElementRef) {
    console.log(elementRef.nativeElement.querySelector("#function-plot-container"));
  }
  
  plotGraph() {

    const test = this.elementRef.nativeElement;
    const container = this.hello.nativeElement;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // this check is done because when the page initially renders navigator doesn't exist
    // probably an easier fix somehow but idk how
    if (typeof navigator !== 'undefined') {
      functionPlot({
        target: container,
        width: containerWidth,
        height:containerHeight,
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
      });
    } else {
      console.warn('Initial plot with no navigator, skipping..');
    }


    // functionPlot({
    //   target: container,
    //   width: containerWidth,
    //   height:containerHeight,
    //   grid: this.gridEnabled,
    //   data: [
    //     // {
    //     //   fn: 'x^2',
    //     //   derivative: {
    //     //     fn: '2*x',
    //     //     updateOnMouseMove: true
    //     //   }
    //     // }
    //   ]
    // })
  }

  ngAfterViewInit(): void {
    this.plotGraph()
  }
}
