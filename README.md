# Implementacion de splash screen (se intento)

### 1. Instalar el Capacitor de Splash Screen

Se ejecuta el comando: npm install @capacitor/splash-screen

<img width="723" height="200" alt="image" src="https://github.com/user-attachments/assets/f94d5214-226e-4043-b22b-fcf83e164f13" />

Este comando instala el plugin oficial de Capacitor que maneja la pantalla de carga o inicio (el splash screen) de la aplicación creada con Ionic.

### 2. Instalar Capacitor Assets

Se ejecuta el comando: npm install @capacitor/assets --save-dev

<img width="814" height="333" alt="image" src="https://github.com/user-attachments/assets/45978760-7bb1-4bbd-8bf4-c55200ab4382" />

Esto sirve para generar automáticamente todos los tamaños de íconos y splash screen para Android e iOS a partir de las imágenes principales. 

### 3. Generar los Assets

Dentro del proyecto se crea una carpeta llamada resources/ y se agregan las imágenes (icon.png) y (splash.png)

<img width="186" height="224" alt="image" src="https://github.com/user-attachments/assets/ffdab283-b293-46ea-be06-f87f7e200e2e" />

Luego ejecutar:

npx @capacitor/assets generate

<img width="809" height="468" alt="image" src="https://github.com/user-attachments/assets/eed85066-11e4-45d5-a569-45e391d3db54" />

Esto va a generar automáticamente las versiones para Android e iOS con los tamaños correctos.

### 4. Configurar capacitor.config.ts

<img width="669" height="375" alt="image" src="https://github.com/user-attachments/assets/7f941b37-084c-4b45-b6b3-5bfbbab67722" />

Se le añaden funcionalidades como las siguientes:
- launchShowDuration: Duración del splash al iniciar la app, en milisegundos (3 segundos).
- backgroundColor: Color de fondo del splash mientras se carga la app.
- showSpinner: Decide si mostrar o no el spinner (círculo de carga) en el splash.

### 5. Configurar app.component.ts

<img width="664" height="472" alt="image" src="https://github.com/user-attachments/assets/8c54a194-0497-4ca8-a5e0-e1132df4c015" />

Las funcionalidades que se agregaron fueron las siguientes:
- showDuration: mantiene el splash visible 5 segundos.
- autoHide: Se oculta solo después de ese tiempo o cuando la app termine de cargar.

Esto permite controlar cuánto dura el splash según la carga real de la app. Es útil para mostrar animaciones o cargar datos iniciales antes de que el usuario vea la app.

### Sincronizar cambios 
Cada vez que se actualicen los assets o config ejecutar: npx cap sync para copiar íconos, splash y configuración a Android e iOS.

### Verificar los assets generados

Los assets generados (icon, splash) se guardan en las siguientes rutas:
android/app/src/main/res/mipmap-hdpi/icon.png
android/app/src/main/res/drawable/splash.png

A veces las imágenes no se generan correctamente por lo que es necesario forzar la regeneración eliminando los archivos antiguos del proyecto y volviendo a compilar la aplicación.

En la raíz del proyecto ejecutar en Windows Powershell:
- Remove-Item -Recurse -Force android\app\src\main\res\mipmap-*
- Remove-Item -Recurse -Force android\app\src\main\res\drawable-*

Y se vuelve a ejecutar: npx @capacitor/assets generate

### Configurar AndroidManifest.xml

<img width="709" height="445" alt="image" src="https://github.com/user-attachments/assets/2b236694-4161-4a3e-af0d-68833079f16a" />

Este AndroidManifest.xml define el ícono de la app y el nombre que se muestra. 
- Aplica un tema general que incluye cómo se ve el splash screen por defecto.
- Mantiene la orientación y configuración de pantalla sin reiniciarse al girar el teléfono.
- Permite que el sistema Android la reconozca como “launcher” para abrir la app desde el icono.

### Funcionamiento de la aplicación
Al crear la APK con Android Studio el resultado que dio fue el siguiente:
<img width="1220" height="2712" alt="image" src="https://github.com/user-attachments/assets/b7933090-8158-4214-a4ef-8fa56637c346" />
<img width="610" height="1356" alt="image" src="https://github.com/user-attachments/assets/809b0728-c5e8-4370-92fa-4a347bf2eb40" />
<img width="610" height="1356" alt="image" src="https://github.com/user-attachments/assets/8bd71ef6-27cc-44f5-835e-bb7eb7a977b2" />


