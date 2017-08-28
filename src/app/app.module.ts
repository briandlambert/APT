import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { EquipmentService } from './search/equipment.service';
import { SearchComponent } from './search/search.component';
import { NotificationService } from './services/notification.service';
import { NotificationsComponent } from './notifications/notifications.component';

import { NotificationComponent } from './notifications/notification.component';

import { NotificationFilter } from './notifications/notifications.filter';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations : [NotificationFilter, AppComponent, HeaderComponent,HomeComponent,SearchComponent,SettingsComponent, NotificationsComponent, NotificationComponent, DetailsComponent  ],
  imports : [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, AppRoutingModule ],
  bootstrap : [ AppComponent ],
  providers : [ EquipmentService, NotificationService ]
})
export class AppModule {

}
