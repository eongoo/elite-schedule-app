import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage, TeamsPage, TeamDetailPage, TournamentsPage, GamePage} from '../pages/pages'

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    GamePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    GamePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
