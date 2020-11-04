import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-historial-completo",
  templateUrl: "./historial-completo.component.html",
  styleUrls: ["./historial-completo.component.scss"],
})
export class HistorialCompletoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @HostListener("window:beforeunload", ["$event"])
  clearLocalStorage(event) {
    localStorage.clear();
  }
}
