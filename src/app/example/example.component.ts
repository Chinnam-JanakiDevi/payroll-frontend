import { Component,OnInit,OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit{
  ngOnInit(): void {}
  constructor(){}
  Subscription:Subscription=new Subscription();
  
  OnDestroy(): void {
    // this.Subscription.unsubscribe();
  }
}

