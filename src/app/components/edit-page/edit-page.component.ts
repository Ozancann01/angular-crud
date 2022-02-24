import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Pages } from 'src/app/pages.model';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  
 
  page: Pages = {
    title: '',
    published: false,
    status:'',
    excerpt:''
  };

  submitted = false;

  constructor(private apiService:ApiService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.editPage(this.route.snapshot.params['id']);
  }
 
  savePage(): void {
    const data = {
      title: this.page.title,
      status:this.page.status,
      excerpt:this.page.excerpt
    };

    this.apiService.update( this.route.snapshot.params['id'],data)
    .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  editPage(id: string): void {
    this.apiService.getPage(id)
      .subscribe(
        data => {
          this.page.title = data.title.rendered;
          this.page.status =data.status;
          this.page.excerpt = data.excerpt.rendered;
        },
        error => {
          console.log(error);
        });
  }

}
