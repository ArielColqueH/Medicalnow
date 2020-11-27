import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { StarRatingComponent } from "ng-starrating";
import { DarPuntuacionService } from "src/app/core/http/services/dar-puntuacion.service";
import { QualificationModel } from "src/app/models/qualification-model";
@Component({
  selector: "app-dar-puntuacion",
  templateUrl: "./dar-puntuacion.component.html",
  styleUrls: ["./dar-puntuacion.component.scss"],
})
export class DarPuntuacionComponent implements OnInit {
  puntuacion = new QualificationModel();
  aux = this.data.consultId;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DarPuntuacionComponent>,
    private _service: DarPuntuacionService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    console.log("Puntuacion : " + $event.newValue);
    this.puntuacion.qualification = $event.newValue;
    this._service
      .sendQualification(this.aux, this.puntuacion)
      .subscribe((data: any) => window.location.reload());
    this.dialogRef.close();
  }
}
