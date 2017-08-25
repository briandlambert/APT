import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

const buildEnv = process.env.NODE_ENV || 'development';

if (buildEnv === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
