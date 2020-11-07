import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-historial-lista",
  templateUrl: "./historial-lista.component.html",
  styleUrls: ["./historial-lista.component.scss"],
})
export class HistorialListaComponent implements OnInit {
  constructor(private _router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  irHistorialGeneral() {
    //this._router.navigate(["historial-completo"], { relativeTo: this.route });
  }
}
