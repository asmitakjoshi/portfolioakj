import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog=[
    {
      img:'../../assets/images/image_01.jpg',
      date:'Sep 16, 2019',
      ftext:'Design Conferences in 2019',
      stext:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      img:'../../assets/images/image_01.jpg',
      date:'Sep 16, 2019',
      ftext:'Design Conferences in 2019',
      stext:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      img:'../../assets/images/image_01.jpg',
      date:'Sep 16, 2019',
      ftext:'Design Conferences in 2019',
      stext:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      img:'../../assets/images/image_01.jpg',
      date:'Sep 16, 2019',
      ftext:'Design Conferences in 2019',
      stext:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      img:'../../assets/images/image_01.jpg',
      date:'Sep 16, 2019',
      ftext:'Design Conferences in 2019',
      stext:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      img:'../../assets/images/image_01.jpg',
      date:'Sep 16, 2019',
      ftext:'Design Conferences in 2019',
      stext:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
