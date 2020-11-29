/*modules*/
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*components*/
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FooterComponent } from './component/footer/footer.component';

/*services*/
import { Resource } from './service/resource';
import { EnvService } from './service/env.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    Resource,
    EnvService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
