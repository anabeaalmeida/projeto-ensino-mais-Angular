import { Component, ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'projeto-universidade-ensino-mais';

  constructor(){}

  ngOnInit(){}
}


