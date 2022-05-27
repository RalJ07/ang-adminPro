import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  public labels2: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  public data1 = {
    labels: this.labels2,
    datasets: [
      { data: [ 50, 60, 100 ] }
     ]};
 

}
