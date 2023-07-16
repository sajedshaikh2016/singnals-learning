import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { UpdateSignalComponent } from './update-signal/update-signal.component';
import { MutateSignalComponent } from './mutate-signal/mutate-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputedSignalComponent,
    UpdateSignalComponent,
    MutateSignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
