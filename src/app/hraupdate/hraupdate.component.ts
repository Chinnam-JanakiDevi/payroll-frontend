import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HraServiceService } from '../hra-service.service';
import { InsertedSuccess, HraInterface, UniqueConstraintError, Read } from '../hra-interface';

@Component({
  selector: 'app-hraupdate',
  templateUrl: './hraupdate.component.html',
  styleUrls: ['./hraupdate.component.css']
})
export class HraupdateComponent implements OnInit {
  constructor(private service: HraServiceService) { }
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  ihra: HraInterface = {
    catg: '',
    wef_date: new Date(),
    hra_per: 0,
  };
  SuccessMsg = '';
  ErrorMsg = '';
  a = [];
   canShowData=false;
  Read() {
    
    this.Subscription = this.service.Read(this.ihra.catg).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          console.log(data.Result);
          this.a = data.Result[0];
          console.log(this.a);
          this.ihra = {
            catg: this.a[0],
            wef_date: this.a[1],
            hra_per: this.a[2],
          }
          this.canShowData=true;
        }
        else {
          console.log("Failed");
        }
      }
    )
  }
  Update() {
    alert("updated success")
    this.Subscription = this.service.Update(this.ihra.catg, this.ihra).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          this.SuccessMsg = data.Message;
        }
        else {
          console.log("Failed");
        }
      }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
