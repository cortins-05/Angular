import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import './topics/01-basic-types';
import './topics/02-object-interface';
import './topics/03-function';
import './topics/04-homework-types';
import './topics/05-basic-destructuring';
import './topics/06-function-destructure';
import './topics/07-import-export';
import './topics/08-clases';
import './topics/09-generics';
//import './topics/10-decorators';
import './topics/11-optional-chaining';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
