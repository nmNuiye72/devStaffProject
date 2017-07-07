import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProfileComponent } from './profile/profile.component';
import { PhonebookComponent } from './phonebook/phonebook.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'main', component: TimelineComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'phonebook', component: PhonebookComponent },
      { path: '**', redirectTo: 'main', pathMatch: 'full' },
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
