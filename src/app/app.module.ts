import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { CategoryService } from './services/category.service'; // Ajout de CategoryService
import { PostListComponent } from './component/post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './component/post-item/post-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCreateComponent } from './component/post-create/post-create.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create-post', component: PostCreateComponent } // Ajout de la route pour PostCreateComponent
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
    PostItemComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostService,
    CategoryService // Assurez-vous que CategoryService est inclus dans les providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
