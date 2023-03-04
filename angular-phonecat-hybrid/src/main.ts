import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import these globally to bring in their @types
import 'angular';
import 'angular-resource';
import 'angular-route';

// Import AngularJS module
import './app-ajs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
