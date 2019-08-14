import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyloadingimg';

  counter:number[] = [10,20,-1,30,40,-2,50,60,70,80,90,100];
  images:string[] = [];
  constructor(){
      this.counter.forEach(i => {
        this.images.push(`https://picsum.photos/id/${i}/300`);
      })
  }
}
