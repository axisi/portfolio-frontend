import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent  {

  fileName = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {

    // @ts-ignore
    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("multipartFile", file,this.fileName);


      const upload$ = this.http.post("http://localhost:8080/api/image", formData);

      upload$.subscribe();
    }
  }

}
