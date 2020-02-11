import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from "@angular/core";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CabinetModule } from './cabinet/cabinet.module';

import * as Sentry from "@sentry/browser";
import { HttpIntercept } from './services/http-interceptor';

// Init sentry with your dsn key
Sentry.init({
  dsn: "https://d80b7f77058747b1abdcf5c578162441@sentry.io/2433145",
  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ 
        eventId: event.event_id,
        title: 'Мы видим, что произошла ошибка.',
        subtitle: 'Какой-то текст.',
        subtitle2: 'Еще текста.',
       });
    }
    return event;
  }
  // debug: true,
});

// setup custom config to capture details about user
Sentry.configureScope((scope) => {
  scope.setUser({
    'email': 'sspashnin@mail.ru'
  });
})

@Injectable()
// pass angular inbuilt errorhandler to sentry 
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CabinetModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercept, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
