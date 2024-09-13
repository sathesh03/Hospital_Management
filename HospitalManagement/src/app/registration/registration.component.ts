import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientServiceService } from '../patient-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit{

  todayDate:any= ''
  register:FormGroup

  constructor(private date:DatePipe,private fb:FormBuilder,private toastr:ToastrService,private service:PatientServiceService,
    private route:Router){
    this.todayDate = this.date.transform(new Date(),'yyyy-MM-dd')

    this.register = this.fb.group({
      Id:[''],
      date: [this.todayDate,Validators.required],
      name: ['',Validators.required],
      address: ['',Validators.required],
      address2: [''],
      city: ['',Validators.required],
      state: ['',Validators.required],
      pincode: ['',Validators.required],
      country: ['',Validators.required],
      phoneNo: ['',Validators.required],
      email: ['',Validators.required],
      gender: ['',Validators.required],
      age: ['',Validators.required],
      maritalStatus: ['',Validators.required],
      emergContPer: ['',Validators.required],
      relationship: ['',Validators.required],
      contactNo: ['',Validators.required],
      reasForReg: ['',Validators.required],
      addNotes: [''],
      isMedications: ['',Validators.required],
      insComp: [''],
      insId: [''],
      polHolderName: ['']
    })

    console.log(this.register.controls['date'].value);
    
  }

  Id:number = 0
  ngOnInit(): void {
    const a = this.service.getPatientData()
    this.Id = a[a.length - 1].Id
  }
  
  submit:boolean = false
  onSubmit(){
    if(this.register.invalid){
   
    }else {
      this.service.setRegister({
        Id: this.Id+1,
        Date: this.register.controls['date'].value,
      name: this.register.controls['name'].value,
      address: this.register.controls['address'].value,
      address2: this.register.controls['address2'].value,
      city: this.register.controls['city'].value,
      state: this.register.controls['state'].value,
      pincode: this.register.controls['pincode'].value,
      country: this.register.controls['country'].value,
      phoneNo: this.register.controls['phoneNo'].value,
      email: this.register.controls['email'].value,
      gender: this.register.controls['gender'].value,
      age: this.register.controls['age'].value,
      maritalStatus: this.register.controls['maritalStatus'].value,
      emergContPer: this.register.controls['emergContPer'].value,
      relationship: this.register.controls['relationship'].value,
      contactNo: this.register.controls['contactNo'].value,
      reasForReg: this.register.controls['reasForReg'].value,
      addNotes: this.register.controls['addNotes'].value,
      isMedications: this.register.controls['isMedications'].value,
      insComp: this.register.controls['insComp'].value,
      insId: this.register.controls['insId'].value,
      polHolderName: this.register.controls['polHolderName'].value
      })
      this.toastr.success('Registered Successfully')
      this.register.reset()
      this.register.markAsUntouched()
      this.register.reset()
      this.register.controls['date'].setValue(this.todayDate);
      this.register.controls['name'].markAsUntouched();
      this.register.controls['address'].markAsUntouched();
      this.register.controls['address2'].markAsUntouched();
      this.register.controls['city'].markAsUntouched();
      this.register.controls['state'].markAsUntouched();
      this.register.controls['pincode'].markAsUntouched();
      this.register.controls['country'].markAsUntouched();
      this.register.controls['phoneNo'].markAsUntouched();
      this.register.controls['email'].markAsUntouched();
      this.register.controls['gender'].markAsUntouched();
      this.register.controls['age'].markAsUntouched();
      this.register.controls['maritalStatus'].markAsUntouched();
      this.register.controls['emergContPer'].markAsUntouched();
      this.register.controls['relationship'].markAsUntouched();
      this.register.controls['contactNo'].markAsUntouched();
      this.register.controls['reasForReg'].markAsUntouched();
      this.register.controls['addNotes'].markAsUntouched();
      this.register.controls['isMedications'].markAsUntouched();
      this.register.controls['insComp'].markAsUntouched();
      this.register.controls['insId'].markAsUntouched();
      this.register.controls['polHolderName'].markAsUntouched();
      setTimeout(() => {
        this.route.navigate([''])
       }, 3000);
    }
  }
}