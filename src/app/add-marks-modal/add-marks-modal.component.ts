import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-add-marks-modal',
  templateUrl: './add-marks-modal.component.html',
  styleUrls: ['./add-marks-modal.component.scss'],
  // standalone: true,
  // imports: [MatDialogModule, NgIf],
})
export class AddMarksModalComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);

  }

}
