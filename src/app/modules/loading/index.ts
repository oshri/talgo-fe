import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./components/loading/loading.component";
import { LoadingService } from "./services/loading/loading.service";

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  exports: [LoadingComponent],
  providers: [LoadingService]
})
export class LoadingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingModule,
      providers: [LoadingService]
    };
  }
}
