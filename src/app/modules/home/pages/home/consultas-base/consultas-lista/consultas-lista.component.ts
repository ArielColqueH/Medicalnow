import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-consultas-lista",
  templateUrl: "./consultas-lista.component.html",
  styleUrls: ["./consultas-lista.component.scss"],
})
export class ConsultasListaComponent implements OnInit {
  constructor(private _router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  irAChat() {
    this._router.navigate(["consulta-individual"], { relativeTo: this.route });
  }
}
