import { Component, OnInit } from '@angular/core';

export interface contacts {
  full_name: string,
  email: string,
  mobile: number,
  comment: any
}


@Component({
  selector: 'app-appointmant',
  templateUrl: './appointmant.component.html',
  styleUrls: ['./appointmant.component.scss']
})
export class AppointmantComponent implements OnInit {

  private contact: contacts;

  constructor() { }


  ngOnInit() {

    this.contact = {
      full_name: "",
      email: "",
      mobile: null,
      comment: ""

    }
  }

  addContact(data) {
    console.log(data);

  }
}
