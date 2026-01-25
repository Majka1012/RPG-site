import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import routeConfig from './app/routes';
// import { HeaderComponent } from './app/header/header';
// import { User } from './app/user/user';

bootstrapApplication(App, {
  providers: [provideRouter(routeConfig)],
}).catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent);
// bootstrapApplication(User);
