import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../claims.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
})
export class FileuploadComponent implements OnInit {

  constructor(private uiservice: ClaimsService, public router: Router) { }
  uploadeddocument: any;
  keys: any;
  ngOnInit(){
    if (this.uiservice._claim_id == ""){
      this.router.navigate(['home/claims']);
      }
    this.uploadeddocument = this.uiservice.documents[this.uiservice._claim_id].uploadeddocument
  }
   getKeys(data) {
    this.keys = Object.keys(data);
    return true;
  }
  addFile($event, category): void {
    let file = $event.target.files[0];
    //console.log(file.name);
    this.uploadeddocument[category].value.push(file.name);
  }
  removefile(filename, category): void {
    var index = this.uploadeddocument[category].value.indexOf(filename);
    if (index >= 0) {
      this.uploadeddocument[category].value.splice(index, 1);
    }
  }
  updatestatus() {
    let full = true;
    let empty = true;
    Object.keys(this.uploadeddocument).forEach((item, i) => {
      if (this.uploadeddocument[item].value.length == 0) {
        full = false
      }
      if (this.uploadeddocument[item].value.length != 0) {
        empty = false
      }
      if (empty) {
        this.uiservice.documents[this.uiservice._claim_id].status = "Not Recieved"
        this.uiservice.documents[this.uiservice._claim_id].icon = "close-circle"
        this.uiservice.documents[this.uiservice._claim_id].color = "danger"
      }
      else if (full) {
        this.uiservice.documents[this.uiservice._claim_id].status = "Completed"
        this.uiservice.documents[this.uiservice._claim_id].icon = "checkmark-circle"
        this.uiservice.documents[this.uiservice._claim_id].color = "success"
      }
      else {
        this.uiservice.documents[this.uiservice._claim_id].status = "Additional info required"
        this.uiservice.documents[this.uiservice._claim_id].icon = "alert-circle"
        this.uiservice.documents[this.uiservice._claim_id].color = "warning"
      }
    })
    this.uiservice.documents[this.uiservice._claim_id].uploadeddocument = this.uploadeddocument
    this.uiservice._claim_id = "";
    this.router.navigate(['home/claims']);
  }
}
