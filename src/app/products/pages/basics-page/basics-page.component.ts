import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'FerNanDO HerrERa';

  //da hora actual
  public customDate: Date = new Date();
}
