import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartData, ChartEvent, Color,  } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Ventas';


  @Input( 'labels' ) doughnutChartLabels: string[] = [ 'label1', 'label2', 'label3' ];
  @Input( 'data' ) doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
       { data: [ 350, 450, 100 ] }
      ]
  };

  

}
