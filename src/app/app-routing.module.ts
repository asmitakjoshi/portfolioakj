import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '', 
    component: AboutComponent
  },
  {
    path: 'resume', 
    component: ResumeComponent
  },
  {
    path: 'portfolio', 
    component: PortfolioComponent
  },
  {
    path: 'blog', 
    component: BlogComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
