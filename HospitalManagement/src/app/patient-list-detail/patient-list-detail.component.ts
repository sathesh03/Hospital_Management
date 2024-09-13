import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patient-list-detail',
  templateUrl: './patient-list-detail.component.html',
  styleUrl: './patient-list-detail.component.scss',
})
export class PatientListDetailComponent implements OnInit {

  IdDetial: any = [];
  Date: string = '';
  name: string = '';
  address: string = '';
  address2: string = '';
  city: string = '';
  state: string = '';
  pincode: number = 0;
  country: string = '';
  phoneNo: number = 0;
  email: string = '';
  gender: string = '';
  age: number = 0;
  maritalStatus: string = '';
  emergContPer: string = '';
  relationship: string = '';
  contactNo: number = 0;
  reasForReg: string = '';
  addNotes: string = '';
  isMedications: string = '';
  insComp: string = '';
  insId: string = '';
  polHolderName: string = '';

  Isdata: boolean = false;

  constructor(private service: PatientServiceService) {}

  ngOnInit(): void {
    this.IdDetial = this.service.getId();
    this.Isdata = this.IdDetial.length ? true : false;
    if (this.Isdata) {
      this.Date = this.IdDetial[0].Date;
      this.name = this.IdDetial[0].name;
      this.address = this.IdDetial[0].address;
      this.address2 = this.IdDetial[0].address2;
      this.city = this.IdDetial[0].city;
      this.state = this.IdDetial[0].state;
      this.pincode = this.IdDetial[0].pincode;
      this.country = this.IdDetial[0].country;
      this.phoneNo = this.IdDetial[0].phoneNo;
      this.email = this.IdDetial[0].email;
      this.gender = this.IdDetial[0].gender;
      this.age = this.IdDetial[0].age;
      this.maritalStatus = this.IdDetial[0].maritalStatus;
      this.emergContPer = this.IdDetial[0].emergContPer;
      this.relationship = this.IdDetial[0].relationship;
      this.contactNo = this.IdDetial[0].contactNo;
      this.reasForReg = this.IdDetial[0].reasForReg;
      this.addNotes = this.IdDetial[0].addNotes;
      this.isMedications = this.IdDetial[0].isMedications;
      this.insComp = this.IdDetial[0].insComp;
      this.insId = this.IdDetial[0].insId;
      this.polHolderName = this.IdDetial[0].polHolderName;
    }
  }
}
