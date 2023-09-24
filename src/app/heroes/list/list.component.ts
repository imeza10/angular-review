import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public nameHeroes: string[] = ['spiderman','hulk', 'thor', 'Capitan America']
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.nameHeroes.pop();
  }
}
