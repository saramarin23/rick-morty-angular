import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CharacterListComponent } from "./components/character-list/character-list.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, CharacterListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
