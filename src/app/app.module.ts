import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { ListasComponent } from './listas/listas.component';
import {createCustomElement} from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  entryComponents: [ListasComponent],
  providers: [],
  bootstrap: [AppComponent,ListasComponent]
})
export class AppModule { 
  constructor(private injector:Injector){
    const customList = createCustomElement(ListasComponent,{ injector });
    customElements.define('custom-listas',customList);
  }
  ngDoBootstrap(){}
}
