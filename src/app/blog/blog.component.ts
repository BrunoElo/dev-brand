import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
})
export class BlogComponent implements OnInit {
  currentYear = new Date().getFullYear();
  ngOnInit() {}

  constructor() {}
}
