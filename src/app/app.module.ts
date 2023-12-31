import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { GalleriaModule } from 'primeng/galleria';
import { SkeletonModule } from 'primeng/skeleton';
import { AnimateModule } from 'primeng/animate';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { ContactComponent } from './components/contact/contact.component';
import { DynamicDialogComponent } from './components/dynamic-dialog/dynamic-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    AboutComponent,
    ProjectsComponent,
    HabilitiesComponent,
    ContactComponent,
    DynamicDialogComponent





  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabMenuModule,
    AppRoutingModule,
    CardModule,
    MenubarModule,
    GalleriaModule,
    SkeletonModule,
    AnimateModule,
    DynamicDialogModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
