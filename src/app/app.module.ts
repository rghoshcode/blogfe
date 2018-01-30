import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { FullBlogComponent } from './blogs/full-blog/full-blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogComponent,
    BlogListComponent,
    FullBlogComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
