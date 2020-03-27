import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { NotificationItem } from "../../data/NotificationItem";

@IonicPage()
@Component({
  selector: "page-notifications",
  templateUrl: "notifications.html"
})
export class NotificationsPage {
  notifications: NotificationItem[] = [];

  constructor() {
    this.initialiseNotifications();
  }

  initialiseNotifications() {
    this.notifications.push(
      new NotificationItem(
        "Material de distintos generos educativos en camino!",
        "Proximamente..!",
        "assets/imgs/logo.png",
        true
      )
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NotificationsPage");
  }
}
