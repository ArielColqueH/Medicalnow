import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  mylogo: string = "assets/images/Logo.png";
  contrasenia: string;
  correo: string;
  loginForm: FormGroup;

  user = new User();
  msg = "";
  id: string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private _route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this._route.snapshot.paramMap.get("id");
  }

  irRegistro() {
    this.router.navigate(["registro"]);
  }

  login() {
    this.authService.login(this.user).subscribe(
      (data) => {
        //localStorage.setItem("userId", data.userId);

        if (data) {
          console.log("data : " + data);
          //this.router.navigate(["/asistencia-medica/" + data.userId]);
        }
      },
      (error) => {
        console.log("exception ocurred");
        this.msg = "Enter valid  email and password";
      }
    );
  }
}
