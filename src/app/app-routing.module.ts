import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component'
const routes: Routes = [
  {
    path: 'auth', children: [
      {
        path: 'login', component: ArticleComponent
      },
      {
        path: 'register', component: ArticleComponent
      }
    ]
  },
  {
    path: 'notes', children: [
      {
        path: '', component: ArticleComponent
      },
      {
        path: 'create', component: ArticleComponent
      },
      {
        path: ':id', component: ArticleComponent
      }
    ]
  },
  {
    path: 'upload', component: ArticleComponent
  },
  {
    path: 'trash', component: ArticleComponent
  },
  { path: '', redirectTo: 'auth/login', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
