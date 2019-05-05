import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Firebase } from '@ionic-native/firebase/ngx';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { ProfilePage } from './profile/profile.page';
import { ProfilePageModule } from './profile/profile.module';
import { CommunityPage } from './community/community.page';
import { CommunityPageModule } from './community/community.module';


const appRoutes: Routes = [
  {path: 'home', component: HomePage },
  {path: 'profile', component: ProfilePage},
  {path: 'community', component: CommunityPage}
] 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
   BrowserModule, 
   IonicModule.forRoot(), 
   AppRoutingModule,
   AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule,
   AngularFireAuthModule,
   AngularFireFunctionsModule,
   HomePageModule,
   ProfilePageModule,
   CommunityPageModule,
   AngularFireStorageModule
  ],
  providers: [
    Firebase,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
