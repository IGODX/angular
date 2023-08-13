import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { PhotoComponent } from './photo/photo.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    SkillsComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  // providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
