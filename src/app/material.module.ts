import {NgModule} from '@angular/core';
import {MatToolbarModule,MatButtonModule,MatCardModule,MatProgressSpinnerModule
,MatIconModule,MatFormFieldModule,MatDialogModule,MatInputModule,
MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from "@angular/material";


const data = [MatToolbarModule,
  MatButtonModule, MatCardModule, MatProgressSpinnerModule,
  MatIconModule, MatFormFieldModule, MatDialogModule, MatInputModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: data,
  exports: data
})
export class MaterialModule {
}
