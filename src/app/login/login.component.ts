import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HraServiceService } from '../hra-service.service';
import { InsertedSuccess, HraInterface, UniqueConstraintError, Read } from '../hra-interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: HraServiceService) { }
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  ihra: HraInterface = {  
    catg: '',
    wef_date: new Date(),
    hra_per: 0,
  };
  a = [];
  SuccessMsg = '';
  ErrorMsg = '';
  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.ihra.wef_date} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.ihra.catg} Inserted Succesfully`;
          Form.reset();
        }
       
      }
    }
    )
  }

  //     )
  //   }
  // Insert() {
  //   this.ErrorMsg = '';
  //   this.SuccessMsg = '';
  //   alert("Inserted successfully! Please continue..!");
  //   this.Subscription = this.service.Insert(this.ihra).subscribe({
  //     next: (Data: InsertedSuccess | UniqueConstraintError) => {
  //       if ('errorNum' in Data) {
  //         this.ErrorMsg = `${this.ihra.wef_date} alredy Exists`;
  //       } else {
  //         this.SuccessMsg = `${this.ihra.catg} Inserted Succesfully`;
  //       }

  //     },
  //     error: (Error) => {
  //       console.log(Error);
  //     },
  //   });
  //   // this the another syntax for the Subscribe Its advanced Handling everything
  // }

  // Delete() {
  //   this.ErrorMsg = '';
  //   this.SuccessMsg = '';

  //   this.Subscription = this.service.Delete(this.ihra.hra_per).subscribe(
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
  //     this.Subscription = this.service.Read(this.ihra.catg).subscribe(
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
  //   Update() {
  //     this.Subscription = this.service.Update(this.ihra.hra_per,this.ihra).subscribe(
  //       (data: any) => {
  //         if (data) {
  //           console.log(data);
  //           this.SuccessMsg = data.Message;
  //         }
  //         else {
  //           console.log("Failed");
  //         }
  //       }
  //     )
  //   }
  ngOnDestroy() {
        this.Subscription.unsubscribe();
      }
    }
