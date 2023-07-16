import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { UpdateSignalComponent } from './update-signal/update-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputedSignalComponent,
    UpdateSignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
