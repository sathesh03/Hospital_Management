import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor() { }

  patientList:any[]=[
    {Id: 1, name: 'Captain America', phoneNo: 6398520147, city: 'Coimbatore'},
      {Id: 2, name: 'Iron Man', phoneNo: 6935287410, city: 'Chennai'},
      {Id: 3, name: 'Thor', phoneNo: 6239854710, city: 'Bangalore'},
      {Id: 4, name: 'Hulk', phoneNo: 9632587410, city: 'Dharmapuri'},
      {Id: 5, name: 'Spider Man', phoneNo: 7896325841, city: 'Salem'},
      {Id: 6, name: 'Black Panther', phoneNo: 8205413697, city: 'Hyderabad'},
      {Id: 7, name: 'Wolverine', phoneNo: 8883513189, city: 'Trichy'},
      {Id: 8, name: 'Deadpool', phoneNo: 7333562410, city: 'Pondicherry'},
      {Id: 9, name: 'Doctor Strange', phoneNo: 6521047890, city: 'Andhra Pradesh'},
      {Id: 10, name: 'Ant-Man', phoneNo: 6387451209, city: 'Krinshnagiri'},
  ];

  getPatientData(){
    return this.patientList
  }

  Id:number = 0
  setId(id:any){
    this.Id = id
  }

  getId(){
    return this.patientList.filter((data:any) => data.Id === this.Id )
  }

  setRegister(data:any){
    this.patientList.push(data)
    console.log(this.patientList);
    
  }
}
