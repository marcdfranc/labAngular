import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ROUTING } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		PaginaNaoEncontradaComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		//ROUTING
		AppRoutingModule
	],
	providers: [
		AuthService,
		AuthGuard,
		CursosGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
