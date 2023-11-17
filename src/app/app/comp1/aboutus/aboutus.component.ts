import { Component, OnInit } from '@angular/core';
import { Members } from '../../classes/members';
import { MembersService } from '../../services/members.service';
import { Gallery } from '../../classes/gallery';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent  implements OnInit{
  text: boolean = false;

  lesimages: Gallery[] = [];
  lesmembres: Members[] = [];

  constructor(private membreservice:MembersService){}
    ngOnInit(): void {
     this.membreservice.getMembres().subscribe(
      data=>{
        this.lesmembres=data;
      }
     );
     this.membreservice.getGallery().subscribe(datag => {
      this.lesimages = datag;
    });
     
    }

    afficherTitre(item : Gallery) {
      this.text = true;
    }
  
    cacherTitre(item:Gallery) {
      this.text = false;
    }
}
