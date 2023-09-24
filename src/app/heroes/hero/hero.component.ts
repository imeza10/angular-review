import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = "Ironman";
  public age:number = 45;
  changeAgeSuccess = false;
  changeNameSuccess = false;

  get capitalizedName(){
    return this.name.toUpperCase();
  }

  getDescription(){
    return `${ this.name } - ${ this.age }`
  }

  changeHero(){
    this.name = "Spiderman";
    this.changeNameSuccess = true;
  }

  changeAge(){
    this.age = 32;
    this.changeAgeSuccess = true;
  }

  resetForm(){
    this.changeAgeSuccess = false;
    this.changeNameSuccess = false;
    this.name = "Ironman";
    this.age = 45;
  }
}
