import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { PersonalIntroComponent } from './components/personal-intro/personal-intro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TechToolsComponent } from './components/tech-tools/tech-tools.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProjectsComponent,
    AboutComponent,
    PersonalIntroComponent,
    SkillsComponent,
    TechToolsComponent,
    FooterComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
