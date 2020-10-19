import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NgxCurrencyModule } from "ngx-currency";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [BrowserModule, FormsModule, NgxCurrencyModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
