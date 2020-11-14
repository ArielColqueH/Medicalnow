import { Component, OnInit } from "@angular/core";
import { StarRatingComponent } from "ng-starrating";
@Component({
  selector: "app-dar-puntuacion",
  templateUrl: "./dar-puntuacion.component.html",
  styleUrls: ["./dar-puntuacion.component.scss"],
})
export class DarPuntuacionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    console.log("Puntuacion : " + $event.newValue);
    // alert(`Old Value:${$event.oldValue},
    //   New Value: ${$event.newValue},
    //   Checked Color: ${$event.starRating.checkedcolor},
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
