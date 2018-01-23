import { Component, OnInit } from '@angular/core';
import {BlogService} from '../shared/blog.service';
import { NgForm } from '@angular/forms'
import {Blog} from '../shared/blog.model'

@Component({
  selector: 'app-full-blog',
  templateUrl: './full-blog.component.html',
  styleUrls: ['./full-blog.component.css']
})
export class FullBlogComponent implements OnInit {

  constructor(private blogService : BlogService) { }

  ngOnInit() {
    
  }
  timeConverter(n:number ){
    var a = new Date(n * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
}
