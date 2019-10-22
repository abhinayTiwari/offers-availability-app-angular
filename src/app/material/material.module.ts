import { NgModule } from '@angular/core';

import { MatButtonModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatTabsModule, MatIconModule } from '@angular/material';

const MaterialComponents = [MatButtonModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatTabsModule, MatIconModule]

@NgModule({
  imports: [MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
