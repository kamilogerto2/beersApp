import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: any;
  @Input() displayedProperties: string[] = [];

  placeholderPath = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZ3Fo6lvvr9t9hi1hs_dG6MnQRmaNh5qO-jdPeWAj8eiGW6mO';
  isImageError = false;

  constructor(public dialog: MatDialog) {}

  setDefaultPic() {
    this.isImageError = true;
  }

  previewImage() {
    if (!this.isImageError) {
      this.dialog.open(ImagePreviewComponent, {
        data: {
          imageUrl: this.item.image_url,
        },
      });
    }
  }
}
