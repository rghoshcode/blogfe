import { Component, OnInit } from '@angular/core';
import {BlogService} from '../shared/blog.service';
import { NgForm } from '@angular/forms'
import {Blog} from '../shared/blog.model'
import {Comment} from '../shared/blog.model'


@Component({
  selector: 'app-full-blog',
  templateUrl: './full-blog.component.html',
  styleUrls: ['./full-blog.component.css']
})
export class FullBlogComponent implements OnInit {

  constructor(private blogService : BlogService) { }

  ngOnInit() {
    this.resetForm();
  }

  timeConverter(n:number ){
    var a = new Date(n * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours() ;
    var min =  a.getMinutes() ;
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + this.numconverter(hour) + ':' + this.numconverter(min) + ':' + this.numconverter(sec) ;
    return time;
  }

  numconverter( n:number){
    if(n<10)
      return '0' + n; 
    else
    return n;

  }

  onCommentSubmit(form: NgForm) {

    if (this.blogService.selectedBlog.comments == null)
    this.blogService.selectedBlog.comments = [];
    this.blogService.draftComment._ts = Math.round(+new Date()/1000);
      this.blogService.selectedBlog.comments.push(this.blogService.draftComment);
      this.blogService.putBlog(this.blogService.selectedBlog.id, this.blogService.selectedBlog)
       .subscribe(data => {  
        this.blogService.getBlogList();
        
      }); 
      this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.blogService.draftComment = {
        content: '',
        authorName: '',
        _ts: null
      }
    
  }
}
