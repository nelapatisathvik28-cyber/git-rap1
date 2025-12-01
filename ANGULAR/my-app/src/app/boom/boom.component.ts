
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-boom',
  imports: [],
  templateUrl: './boom.component.html',
  styleUrl: './boom.component.css'
})
export class BoomComponent implements OnInit, OnDestroy{
  boom:any[]=[];
  constructor()
  {
    console.log('called 1')

  }
  ngOnInit(): void {
    this. satvik()
    console.log('called 2')
  }
  ngOnDestroy(): void {
    this. satvik()
    console.log('called 3')

  }

  satvik()
  {
    this.boom.push({
      animals:"elephant",
    },
    {name:"sunny",
    contactno:123456789
  },
{
  animals:"cat",
  contactno:123456789
},);
  }
}
