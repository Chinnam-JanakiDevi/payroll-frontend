import { Component,OnInit,OnDestroy } from '@angular/core';
import { exampleinterface,Read } from '../hra-interface';
import { HraServiceService } from '../hra-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit{
  ngOnInit(): void {}
  constructor(private service:HraServiceService){}
  Subscription:Subscription=new Subscription();
  a:any[any]=[];
  show=false;
  seasons:string='summer';
  flower:exampleinterface={
    id:0,
    url:'',
    names:'',
    season:'',
  }
  Read(){
    this.Subscription=this.service.Read1(this.seasons).subscribe(
      (Data:any)=>{
        if(Data){
          console.log(Data);
          this.a = Data;
          this.show=true;
        }
        else{
          console.log("error");
          
        }
    }
    )
  }
  OnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}

