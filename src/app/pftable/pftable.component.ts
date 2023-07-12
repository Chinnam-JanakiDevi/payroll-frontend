import { Component } from '@angular/core';
import { PfServiceService } from '../pf-service.service';
import { InsertedSuccess,PfInterface, UniqueConstraintError} from '../pf-interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pftable',
  templateUrl: './pftable.component.html',
  styleUrls: ['./pftable.component.css']
})
export class PftableComponent {
  constructor(private service: PfServiceService) { }
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  ipf: PfInterface = {
    catg: '',
    wef_date: new Date(),
    pf_per: 0,
    fpf_per:0,
    epf_per:0,
  };
  a=[];
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    alert("Inserted successfully");
    this.Subscription = this.service.Insert(this.ipf).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.ipf.wef_date} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.ipf.catg} Inserted Succesfully`;
        }

      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  // Delete() {
  //   this.ErrorMsg = '';
  //   this.SuccessMsg = '';

  //   this.Subscription = this.service.Delete(this.ipf.catg).subscribe(
  //     (data: any) => {
  //       if (data) {
  //         console.log(data);
        
  //         this.SuccessMsg = data.Message;
  //       }
  //       else {
  //         console.log("Failed");
  //       }
  //     }
  //   )
  // }

  // Read() {
  //   alert("read success")
  //     this.Subscription = this.service.Read(this.ipf.catg).subscribe(
  //       (data:any)=>{
  //         if(data){
  //           console.log(data);
  //           console.log(data.Result);
  //           this.a=data.Result[0];
  //           console.log(this.a);
            
  //         }
  //         else{
  //           console.log("Failed");
  //         }
  //       }
  //     )
  //   }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}


