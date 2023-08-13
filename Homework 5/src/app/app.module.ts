import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    HomeComponent,
    EditComponent,
    NotFoundComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
