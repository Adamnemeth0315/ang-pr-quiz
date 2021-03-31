import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';
import { QuestioneditorComponent } from './page/questioneditor/questioneditor.component';
import { QuizComponent } from './page/quiz/quiz.component';
import { QuizeditorComponent } from './page/quizeditor/quizeditor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'quiz/:id',
    component: QuizeditorComponent,
  },
  {
    path: 'question/:id',
    component: QuestioneditorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
