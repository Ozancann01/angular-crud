import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Pages } from 'src/app/pages.model';


@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {

  public  pages ?: Pages[];
  currentPage: Pages = {};
  currentIndex = -1;
  title = '';
  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
    this.getAllPages()
  }
 
  getAllPages(): void{
    this.apiService.getPages().subscribe(
        data => {
          this.pages = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  removePages(id:any): void {
 
      this.apiService.delete(id)
        .subscribe(
          response => {
            console.log(response);
            this.getAllPages();
          },
          error => {
            console.log(error);
          });
    
  }

  setActivePage(page:Pages, index:number): void {
    this.currentPage = page;
    this.currentIndex = index;
  }

}
