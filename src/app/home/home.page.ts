import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  text: string = "Start with Ionic";
  name: string = "";
  number: number = null;
  list = [
    {
      name: "Adriano",
      number: 77272,
    },
  ];

  constructor(private alertController: AlertController) {}

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
    if (this.name === '' || this.number === null) {
      this.presentAlert();
      return
    }
    this.list.push({ name: this.name, number: this.number });
    console.log(this.list);
    this.onClear();
  }
  onClear() {
    this.name = "";
    this.number = null;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Invalid inputs',
      subHeader: 'Subtitle',
      message: 'Inpts are not filled or are with invalid values.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
