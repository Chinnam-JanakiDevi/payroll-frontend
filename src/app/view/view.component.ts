import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HraServiceService } from '../hra-service.service';
import { InsertedSuccess, HraInterface, UniqueConstraintError,Read } from '../hra-interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private service: HraServiceService) { }
  canShowData:boolean=false;
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  ihra: HraInterface = {
    catg: '',
    wef_date: new Date(),
    hra_per: 0,
  };
  a=[];
  Read() { 
      this.Subscription = this.service.Read(this.ihra.catg).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            console.log(data.Result);
            this.a=data.Result[0];
            console.log(this.a);
            this.canShowData=true;
            this.ihra = {
              catg: this.a[0],
              wef_date: this.a[1],
              hra_per: this.a[2],
            }
          }
          else{
            console.log("Failed");
          }
        }
      )
    }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
