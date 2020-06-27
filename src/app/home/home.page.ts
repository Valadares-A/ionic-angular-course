import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  text: string = "Start with Ionic";
  name: string = "";
  number: number;
  list = [
    {
      name: "Adriano",
      number: 77272,
    },
  ];

  constructor() {}

  onClickBoy() {
    this.text = "Ha ha! Bruh!!!";
  }

  onNamechange(value) {
    this.name = value;
  }
  onNumberChange(value) {
    this.number = value;
  }
  onAdd() {
    this.list.push({ name: this.name, number: this.number });
    console.log(this.list);
    this.onClear();
  }
  onClear() {
    this.name = "";
    this.number = null;
  }
}
