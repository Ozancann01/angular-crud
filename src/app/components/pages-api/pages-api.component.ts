import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Pages } from 'src/app/pages.model';

@Component({
  selector: 'app-pages-api',
  templateUrl: './pages-api.component.html',
  styleUrls: ['./pages-api.component.css']
})
export class PagesApiComponent implements OnInit {

 

  page: Pages = {
    title: '',
    published: false,
    status:'',
    excerpt:''
  };

   submitted = false;


  title = '';
  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
  }


  
  savePages(): void {
    const data = {
      title: this.page.title,
      status:this.page.status,
      excerpt:this.page.excerpt
    };

    this.apiService.createPage(data)
    .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPages(): void {
    this.submitted = false;
    this.page = {
      title: '',
      status:'',
      published: false,
      excerpt:''
    };
  }
 

}
