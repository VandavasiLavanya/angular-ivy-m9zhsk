import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, AdminModule],
  declarations: [AppComponent, HelloComponent, HighlightPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
