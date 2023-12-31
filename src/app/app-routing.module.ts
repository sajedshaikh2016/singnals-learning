import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { UpdateSignalComponent } from './update-signal/update-signal.component';
import { MutateSignalComponent } from './mutate-signal/mutate-signal.component';

const routes: Routes = [
  { path: "computed-signal", component: ComputedSignalComponent },
  { path: "update-signal", component: UpdateSignalComponent },
  { path: "mutate-signal", component: MutateSignalComponent },
  { path: "**", component: ComputedSignalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
