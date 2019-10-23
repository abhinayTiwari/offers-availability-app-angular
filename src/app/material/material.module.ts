import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatDividerModule,

} from "@angular/material";

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatDividerModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
