import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'Projects',
		component: ProjectsComponent
	},
	{
		path: 'Profile',
		component: ProfileComponent
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
