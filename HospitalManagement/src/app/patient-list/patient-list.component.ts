import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PatientServiceService } from '../patient-service.service';

// export interface PeriodicElement {
//   Id: number;
//   Name: string;
//   PhoneNo: number;
//   Location: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {Id: 1, Name: 'Captain America', PhoneNo: 6398520147, Location: 'Coimbatore'},
//     {Id: 2, Name: 'Iron Man', PhoneNo: 6935287410, Location: 'Chennai'},
//     {Id: 3, Name: 'Thor', PhoneNo: 6239854710, Location: 'Bangalore'},
//     {Id: 4, Name: 'Hulk', PhoneNo: 9632587410, Location: 'Dharmapuri'},
//     {Id: 5, Name: 'Spider Man', PhoneNo: 7896325841, Location: 'Salem'},
//     {Id: 6, Name: 'Black Panther', PhoneNo: 8205413697, Location: 'Hyderabad'},
//     {Id: 7, Name: 'Wolverine', PhoneNo: 8883513189, Location: 'Trichy'},
//     {Id: 8, Name: 'Deadpool', PhoneNo: 7333562410, Location: 'Pondicherry'},
//     {Id: 9, Name: 'Doctor Strange', PhoneNo: 6521047890, Location: 'Andhra Pradesh'},
//     {Id: 10, Name: 'Ant-Man', PhoneNo: 6387451209, Location: 'Krinshnagiri'},
// ];

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent implements OnInit,AfterViewInit{

  constructor(private service:PatientServiceService){}

  ELEMENT_DATA:any=[]
  ngOnInit(): void {
    this.ELEMENT_DATA = this.service.getPatientData() 
    this.dataSource = this.ELEMENT_DATA    
  }

  private _liveAnnouncer = inject(LiveAnnouncer)
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['Id', 'name', 'phoneNo', 'city'];
  // dataSource:any = [
  //   {Id: 1, Name: 'Captain America', PhoneNo: 6398520147, Location: 'Coimbatore'},
  //   {Id: 2, Name: 'Iron Man', PhoneNo: 6935287410, Location: 'Chennai'},
  //   {Id: 3, Name: 'Thor', PhoneNo: 6239854710, Location: 'Bangalore'},
  //   {Id: 4, Name: 'Hulk', PhoneNo: 9632587410, Location: 'Dharmapuri'},
  //   {Id: 5, Name: 'Spider Man', PhoneNo: 7896325841, Location: 'Salem'},
  //   {Id: 6, Name: 'Black Panther', PhoneNo: 8205413697, Location: 'Hyderabad'},
  //   {Id: 7, Name: 'Wolverine', PhoneNo: 8883513189, Location: 'Trichy'},
  //   {Id: 8, Name: 'Deadpool', PhoneNo: 7333562410, Location: 'Pondicherry'},
  //   {Id: 9, Name: 'Doctor Strange', PhoneNo: 6521047890, Location: 'Andhra Pradesh'},
  //   {Id: 10, Name: 'Ant-Man', PhoneNo: 6387451209, Location: 'Krinshnagiri'},
  // ];

  IsCurrData:boolean = false
  arrayData:any[]=[]
  showDetails(id: number) {
    this.service.setId(id)
    this.arrayData = this.ELEMENT_DATA.filter((data:any) => data.Id === id )
    this.IsCurrData = true
  }

  selectedElement:any
  Sort(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}