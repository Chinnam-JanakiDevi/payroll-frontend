import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PfServiceService } from '../pf-service.service';
import { InsertedSuccess, PfInterface, UniqueConstraintError, Read } from '../pf-interface';

@Component({
  selector: 'app-pfread',
  templateUrl: './pfread.component.html',
  styleUrls: ['./pfread.component.css']
})
export class PfreadComponent implements OnInit, OnDestroy {
  constructor(private service: PfServiceService) { }
  canShowData: boolean = false;
  ngOnInit(): void { }
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
          this.canShowData = true;
          this.ipf = {
            catg: this.a[0],
            wef_date: this.a[1],
            pf_per: this.a[2],
            fpf_per: this.a[3],
            epf_per: this.a[4],
          }
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
