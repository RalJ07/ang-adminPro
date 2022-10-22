import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NopageComponent } from './nopage/nopage.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';







@NgModule({
  declarations: [
    AppComponent,
    NopageComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    PagesModule,
    ComponentsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
