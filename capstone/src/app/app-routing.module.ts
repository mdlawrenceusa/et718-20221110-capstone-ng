import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  
    { path: '', component: WelcomeComponent },
    { path: 'nations', component: QueryComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
