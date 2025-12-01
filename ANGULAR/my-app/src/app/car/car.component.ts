import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit,OnDestroy{
  cars:any[]=[];
  constructor()
  {
    console.log('boom1')

  }
  ngOnInit(): void {
    this.push()
    console.log('boom2')
    
  }
  ngOnDestroy(): void {
    this.push()
    console.log('boom3')
    

  }
  push(){
    this.cars.push({
      color:"red",
      contactno:12345678090,
      name:"summy"
    },
  {
    color:"pink",
    contactno:987654321

  },{
    color:"boom",
    contactno:567899876500000
  });
  }
}