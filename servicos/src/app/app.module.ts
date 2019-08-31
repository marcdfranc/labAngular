import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './shared/services/log.service';


@NgModule({
	declarations: [
		AppComponent		
	],
	imports: [
		BrowserModule,
		CriarCursoModule,
		CursosModule
	],
	providers: [LogService],
	bootstrap: [AppComponent]
})
export class AppModule { }
