import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../claims.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss'],
})
export class ClaimsComponent implements OnInit {
  headings: any;
  claims: any;
  keys: any;
  constructor(private uiservice: ClaimsService, public router: Router) { }
  ngOnInit() {
    this.uiservice.getclaims().subscribe((data: any) => {
      this.headings = data.heading;
      this.claims = data.claims
      // console.log(this.headings)
      // console.log(this.claims)
      this.uiservice.getdocuments().subscribe((data: any) => {
        data.forEach(element => {
          let status = '';
          let icon = '';
          let color='';
          let empty=true;
          let full=true;
          Object.keys(element.uploadeddocument).forEach((item, i) => {
            // console.log(element.uploadeddocument[item])
            // console.log(item)
            if(element.uploadeddocument[item].value.length == 0){
              full=false
            }
            if(element.uploadeddocument[item].value.length != 0){
              empty=false
            }
            if(empty){
              status = "Not Recieved"
              icon = "close-circle"
              color="danger"
            }
            else if(full){
              status = "Completed"
              icon = "checkmark-circle"
              color="success"
            }
            else{
              status = "Additional info required"
              icon = "alert-circle"
              color="warning"
            }
          })
          this.uiservice.documents[element.id] = { "status": status, 'icon': icon,'color':color, 'uploadeddocument': element.uploadeddocument }
        });
      })
      console.log(this.uiservice.documents)
    });
  }
  public cardclick(data) {
    //console.log(data);
    this.uiservice._claim_id = data;
    this.router.navigate(['home/fileupload']);
  }
}
