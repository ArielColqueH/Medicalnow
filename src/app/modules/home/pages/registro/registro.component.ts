import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { User } from 'src/app/models/user';
import { RegistroService } from 'src/app/core/http/services/registro.service';

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"],
})
export class RegistroComponent implements OnInit {
  mylogo: string = "assets/images/Logo.png";
  
  ciudad_combo: String[] = ["La Paz", "Cochabamba", "Santa Cruz"];
  
  user = new User();


  constructor(private _service: RegistroService, private _router: Router, private route: ActivatedRoute) {}
  ngOnInit() {}
  registerUser() {

    this._service.conexionBackend(this.user).subscribe(
      data=>{
        console.log("registrar");
        this._router.navigate(['/home'])
      },
      error =>{
        console.log("exception ocurred");
      }
    )
  }
  irIngreso() {
    this._router.navigate([""], { relativeTo: this.route });
  }
}
