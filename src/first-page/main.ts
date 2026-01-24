import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app/app';
// import { HeaderComponent } from './app/header/header';
// import { User } from './app/user/user';

bootstrapApplication(App).catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent);
// bootstrapApplication(User);
