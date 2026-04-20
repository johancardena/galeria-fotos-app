import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  // 📸 TOMAR FOTO
  async tomarFoto() {

    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      saveToGallery: true,
    });

    const apellido = "Cárdenas"; // 👈 CAMBIA ESTO POR TU APELLIDO

    const fileName = `${apellido}_${Date.now()}.jpeg`;

    // Guardar fotos en memoria (para Tab3)
    const photos = JSON.parse(localStorage.getItem('photos') || '[]');

    photos.unshift(capturedPhoto.webPath);

    localStorage.setItem('photos', JSON.stringify(photos));
  }

  // 🔔 ALERTA
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Este es un mensaje predeterminado',
      buttons: ['OK'],
    });

    await alert.present();
  }

}