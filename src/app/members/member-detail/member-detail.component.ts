import { User } from './../../_models/User';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { NgxGalleryOptions } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();
    this.route.data.subscribe(data => {
      this.user = data['user'];
    })

    this.galleryOptions = [{
      width: '500px',
      height: '500px',
      imagePercent:100,
      thumbnailsColumns:4,
      imageAnimation:NgxGalleryAnimation.Slide,
      preview:false
    }    ];

    this.galleryImages=this.getImages();
    
  }

  getImages(){  
    const ImageUrls=[];
    for (let i = 0; i < this.user.photos.length ; i++) {
      ImageUrls.push({
        small:this.user.photos[i].url,
        medium:this.user.photos[i].url,
        big:this.user.photos[i].url,
        description:this.user.photos[i].description,
      })
      
    }
    return ImageUrls;
  }

  

  //members/id
  // loadUser() {
  //   this.userService.getUser(this.route.snapshot.params['id']).subscribe((user: User) => {
  //     this.user = user;
  //   },error=>{
  //     this.alertify.error(error);
  //   });
  // }
}
