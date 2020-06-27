import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  imageDetailList:AngularFireList<any>;


  //to save to firebase
  constructor(private firebase :AngularFireDatabase) { }

  getImageDetailList(){
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails){
    this.imageDetailList.push(imageDetails);
  }
  }
