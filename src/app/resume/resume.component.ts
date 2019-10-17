import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  number=[{
    eiei:'80',
    fte: 'Web Design',
    ste: '80%'
  }];
  education=[
    {
      text1: 'University School of the Arts',
      text2: '2007 — 2009',
      text3: `Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque
      corrupti, quos dolores et quas molestias exceptur.`,
    },
    {
      text1: 'University School of the Arts',
      text2: '2007 — 2009',
      text3: `Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque
      corrupti, quos dolores et quas molestias exceptur.`,
    },
    {
      text1: 'University School of the Arts',
      text2: '2007 — 2009',
      text3: `Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque
      corrupti, quos dolores et quas molestias exceptur.`,
    },
  ];
  experience=[
    {
      text1: 'Creative Director',
      text2: '2015 — Present',
      text3: `Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque
      corrupti, quos dolores et qvuas molestias exceptur.`,
    },
    {
      text1: 'Creative Director',
      text2: '2015 — Present',
      text3: `Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque
      corrupti, quos dolores et qvuas molestias exceptur.`,
    },
    {
      text1: 'Creative Director',
      text2: '2015 — Present',
      text3: `Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque
      corrupti, quos dolores et qvuas molestias exceptur.`,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
