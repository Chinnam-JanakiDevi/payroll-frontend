import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PfServiceService } from '../pf-service.service';
import { InsertedSuccess, PfInterface, UniqueConstraintError, Read } from '../pf-interface';

@Component({
  selector: 'app-pfupdate',
  templateUrl: './pfupdate.component.html',
  styleUrls: ['./pfupdate.component.css']
})
export class PfupdateComponent implements OnInit,OnDestroy{
  constructor(private service: PfServiceService) { }
  ngOnInit(): void { }
  canShowData:boolean=false;
  Subscription: Subscription = new Subscription();
  ipf: PfInterface = {
    catg: '',
    wef_date: new Date(),
    pf_per: 0,
    fpf_per: 0,
    epf_per: 0,
  };
  a = [];
  SuccessMsg = '';
  ErrorMsg = '';
  Read() {
    alert("read success")
    this.Subscription = this.service.Read(this.ipf.catg).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          console.log(data.Result);
          this.a = data.Result[0];
          console.log(this.a);
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
    this.Subscription = this.service.Update(this.ipf.catg,this.ipf).subscribe(
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