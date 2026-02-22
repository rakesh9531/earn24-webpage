import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Change this line to match

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));