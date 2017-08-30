import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { SearchComponent } from './search/search.component';
import { EquipmentService } from './search/equipment.service';
import { NotificationService } from './notifications/notification.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationComponent } from './notifications/notification.component';
import { NotificationFilter } from './notifications/notifications.filter';
import { DetailsComponent } from './details/details.component';
import { SubscriberService } from './subscriber/subscriber.service';

@NgModule({
  declarations : [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    SettingsComponent,
    NotificationFilter,
    NotificationsComponent,
    NotificationComponent,
    DetailsComponent
  ],
  imports : [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap : [
    AppComponent
  ],
  providers : [
    EquipmentService,
    NotificationService,
    SubscriberService
  ]
})
export class AppModule {}
