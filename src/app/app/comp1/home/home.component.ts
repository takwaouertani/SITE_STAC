import { AfterViewInit, Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Gallery } from '../../classes/gallery';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  private _size: number = 350; // Valeur par défaut
  galleryData: any;
  hoveredImage: Gallery | null = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private membreservice: MembersService) { }

  ngOnInit(): void {
    this.membreservice.getGallery().subscribe(datag => {
      this.lesimages = datag;
    });
    
  }

  ngAfterViewInit() {
    // Your JavaScript code that executes on page load
    // For example:
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    var x = setInterval(() => {
      // ... (rest of your code)
    }, 1000);
  }

  lesimages: Gallery[] = [];
  showItem: any = null;

  onMouseOver(item: any) {
    this.showItem = item;
  }

  onMouseOut() {
    this.showItem = null;
  }
}



