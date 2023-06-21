import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  userName!:string;
  listOfUsers:any;
  studentData:any;

  constructor() { }
}
