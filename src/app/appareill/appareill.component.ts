import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareill',
  templateUrl: './appareill.component.html',
  styleUrls: ['./appareill.component.scss']
})
export class AppareillComponent implements OnInit {

  constructor(private appareilService : AppareilService) { }
  @Input () appareilName : string;
  @Input () appareilStatus : string;
  @Input () index : number;
  ngOnInit(): void {
  }

  getColor(){
    if(this.appareilStatus =='Off'){
        return 'red';
    }
    if(this.appareilStatus == 'On'){
        return 'green';
    }
  }

 swithStatus(){
   if(this.appareilStatus= 'On'){
    this.appareilService.switchOffOne(this.index);
   }
   if(this.appareilStatus= 'Off'){
    this.appareilService.switchOnOne(this.index);
   }
 }

}
