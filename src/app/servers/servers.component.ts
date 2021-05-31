import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  isReset = true;
  serverCreationStatus = 'No server was created!';
  serverName: string;
  userName: string;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  };

  onUpdateServer( events: Event) {
    console.log(events);
    this.serverName = (<HTMLInputElement>events.target).value;
  }



  onReset() {
    if (this.userName === '') {
      this.isReset = false;
    }
    if (this.userName !== '') {
      this.userName = '';
      this.isReset = true;
    }
  }

  onCheck() {
    if (this.userName === '') {
      this.isReset = true;
    }
    if (this.userName !== '') {
      this.isReset = false;
    }
  }
}
