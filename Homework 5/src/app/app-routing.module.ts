import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: "", component: HomeComponent, title: "Home page" },
  { path: "edit", component: EditComponent, title: "Edit page" },
  { path: "about", component: AboutComponent, title: "About page" },
  { path: "create", component: CreateComponent, title: "Create page" },
  { path: "delete", component: DeleteComponent, title: "Delete page" },
  { path: "**", component: CreateComponent, title: "Not found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
