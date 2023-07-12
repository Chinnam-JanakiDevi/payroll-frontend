import { Component ,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { HraServiceService } from '../hra-service.service';
import { InsertedSuccess, HraInterface, UniqueConstraintError,Read } from '../hra-interface';

@Component({
  selector: 'app-hradelete',
  templateUrl: './hradelete.component.html',
  styleUrls: ['./hradelete.component.css']
})
export class HradeleteComponent implements OnInit {
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
  a=[];
  Read() {
      this.Subscription = this.service.Read(this.ihra.catg).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            console.log(data.Result);
            this.a=data.Result[0];
            console.log(this.a);
            
          }
          else{
            console.log("Failed");
          }
        }
      )
    }
    Delete() {
      this.ErrorMsg = '';
      this.SuccessMsg = '';
  
      this.Subscription = this.service.Delete(this.ihra.catg).subscribe(
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
  }
