import { AuthService } from './../../_services/auth.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload'
import { Photo } from '../../_models/Photo';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {

  @Input() photos: Photo[];
  uploader: FileUploader = new FileUploader({});
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateadded: res.dateadded,
          description: res.description,
          ismain: res.ismain
        }
        this.photos.push(photo);
        
      };
    }

  }

}
