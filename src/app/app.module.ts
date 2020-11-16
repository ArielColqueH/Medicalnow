import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";
import {
  StyleUtils,
  StylesheetMap,
  MediaMarshaller,
  ɵMatchMedia,
  BreakPointRegistry,
  PrintHook,
  LayoutStyleBuilder,
  FlexStyleBuilder,
  ShowHideStyleBuilder,
  FlexOrderStyleBuilder,
  FlexAlignDirective,
  FlexAlignStyleBuilder,
  DefaultFlexAlignDirective,
  DefaultLayoutAlignDirective,
  LayoutAlignDirective,
  LayoutAlignStyleBuilder,
  FlexFillDirective,
  FlexFillStyleBuilder,
  LayoutGapStyleBuilder,
  LayoutGapDirective,
} from "@angular/flex-layout";

import { DialogsModule } from "./modules/dialogs/dialogs.module";
import { AuthService } from "./core/auth/auth.service";
import { AuthGuard } from "./core/auth/guards/auth.guard";
import { RandomGuard } from "./core/auth/guards/random.guard";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./core/auth/token.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RatingModule } from "ng-starrating";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DialogsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RatingModule,
  ],
  providers: [
    StyleUtils,
    StylesheetMap,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    PrintHook,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    ShowHideStyleBuilder,
    FlexOrderStyleBuilder,
    FlexAlignDirective,
    FlexAlignStyleBuilder,
    DefaultFlexAlignDirective,
    DefaultLayoutAlignDirective,
    LayoutAlignDirective,
    LayoutAlignStyleBuilder,
    FlexFillDirective,
    FlexFillStyleBuilder,
    LayoutGapStyleBuilder,
    LayoutGapDirective,
    AuthGuard,
    AuthService,
    RandomGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
