import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';  
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from  '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),      
    AngularFirestoreModule,
    RouterModule.forRoot([        
      { path: '' , component: HomeComponent, pathMatch: 'full' },   
      { path: 'addpost', component: BlogEditorComponent },      
      { path: '**' , component: HomeComponent }       
    ]),
    FormsModule,
    CKEditorModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
