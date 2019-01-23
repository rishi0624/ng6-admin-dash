import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@NgModule({
  imports: [
    CommonModule, 
  ],
  declarations: []
})
export class ModshareModule { 

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModshareModule,
      providers: [ 
      ]
    };
  }
}
