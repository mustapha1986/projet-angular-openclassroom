import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuthDisable = false;
  appareils : any[];

  lastUpdate =  new Promise((resolve, reject) => {
    console.log(resolve);
    const date = new Date();
    setTimeout(
      () => {
        resolve(date)
    },3000);
  });



  appareilOne :string =  'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

  constructor(private appareilService : AppareilService){
    
    setTimeout(() => {
      this.isAuthDisable = true;
    },2000);
  }

  onAllumer(){
    this.appareilService.switchOnAll();
   }

   onEteindre(){
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
   }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }
}
