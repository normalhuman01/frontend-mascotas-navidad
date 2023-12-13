import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   providers: [
//     importProvidersFrom(HttpClientModule),
//   ]
// })
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule)],
});
