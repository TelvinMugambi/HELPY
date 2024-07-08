# HELPY: A MOBILE APPLICATION THAT LINKS HOMEOWNERS TO SERVICE PROVIDERS

___

## DESCRIPTION
This project is a mobile application that bridges the gap between homeowners and service providers. The app provides a platform for transparent communication, upfront pricing, detailed service information, and efficient service delivery. It aims to enhance trust, efficiency, and satisfaction for both parties involved in home service transactions.

___

## DEPENDENCIES
Inorder to run this project you need to install the following dependencies
1. [npm](https://www.npmjs.com/)
2. [expo](https://expo.dev/)
3. [supabase](https://supabase.com/)
4. [react-native-calendars](https://www.npmjs.com/package/react-native-calendars)
5. [react-native-paper](https://www.npmjs.com/package/react-native-paper)

To install the above dependencies and others run the following command:
```bash
npm i
```

## REPOSITORY
Clone this github project to run the application
    ```bash
    git clone https://github.com/TelvinMugambi/HELPY.git
    cd HELPY
    ```
___

## USAGE INSTRUCTIONS

### How to run
    1. EXPO on your device
        To run this application on your device, you will need to install expo which is available for android and ios in the google play store and app store respectively.

    2. Launch the project
        To run the application in you local enviroment, you will need to run the command.
        ```bash
        npm start
        ```
        There will be a genereated QR Code.
        Open the expo app on you device and scan the QR code to start the project on your device
    ___


## PROJECT STRUCTURE
The structure below describes the main structure of the applicatiomn
```
📦 HELPY
├─ .gitignore
├─ App.js
├─ README.md
├─ android
│  ├─ .gitignore
│  ├─ app
│  │  ├─ build.gradle
│  │  ├─ debug.keystore
│  │  ├─ proguard-rules.pro
│  │  └─ src
│  │     ├─ debug
│  │     │  └─ AndroidManifest.xml
│  │     └─ main
│  │        ├─ AndroidManifest.xml
│  │        ├─ java
│  │        │  └─ bio
│  │        │     └─ telvin
│  │        │        └─ HELPY
│  │        │           ├─ MainActivity.kt
│  │        │           └─ MainApplication.kt
│  │        └─ res
│  │           ├─ drawable-hdpi
│  │           │  └─ splashscreen_image.png
│  │           ├─ drawable-mdpi
│  │           │  └─ splashscreen_image.png
│  │           ├─ drawable-xhdpi
│  │           │  └─ splashscreen_image.png
│  │           ├─ drawable-xxhdpi
│  │           │  └─ splashscreen_image.png
│  │           ├─ drawable-xxxhdpi
│  │           │  └─ splashscreen_image.png
│  │           ├─ drawable
│  │           │  ├─ rn_edit_text_material.xml
│  │           │  └─ splashscreen.xml
│  │           ├─ mipmap-anydpi-v26
│  │           │  ├─ ic_launcher.xml
│  │           │  └─ ic_launcher_round.xml
│  │           ├─ mipmap-hdpi
│  │           │  ├─ ic_launcher.png
│  │           │  ├─ ic_launcher_foreground.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-mdpi
│  │           │  ├─ ic_launcher.png
│  │           │  ├─ ic_launcher_foreground.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  ├─ ic_launcher_foreground.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  ├─ ic_launcher_foreground.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  ├─ ic_launcher_foreground.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ values-night
│  │           │  └─ colors.xml
│  │           └─ values
│  │              ├─ colors.xml
│  │              ├─ strings.xml
│  │              └─ styles.xml
│  ├─ build.gradle
│  ├─ gradle.properties
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradlew
│  ├─ gradlew.bat
│  └─ settings.gradle
├─ app.json
├─ app
│  ├─ (tabs)
│  │  ├─ Booking.js
│  │  ├─ Categories.js
│  │  ├─ Home.js
│  │  ├─ Profile.js
│  │  └─ _layout.js
│  ├─ Authentication.js
│  ├─ Login.js
│  ├─ Signup.js
│  ├─ Welcome.js
│  ├─ _layouts.js
│  ├─ index.tsx
│  └─ screens
│     ├─ BookingDetails.js
│     ├─ BookingDraft.js
│     ├─ BookingHistory.js
│     ├─ BookingUpcoming.js
│     ├─ ServiceProviders.js
│     └─ UserInfo.js
├─ assets
│  ├─ adaptive-icon.png
│  ├─ cleaning_services
│  │  └─ residential_cleaning.jpeg
│  ├─ favicon.png
│  ├─ handyman_services
│  │  ├─ furniture_assembly.jpeg
│  │  └─ small_projects.jpeg
│  ├─ icon.png
│  ├─ icons
│  │  ├─ cleaning_services.png
│  │  ├─ handyman.png
│  │  ├─ interior-design.png
│  │  ├─ landscaping.png
│  │  ├─ maintenance_and_repairs.png
│  │  ├─ moving.png
│  │  ├─ pest_control.png
│  │  ├─ remodeling.png
│  │  ├─ security.png
│  │  └─ speciality.png
│  ├─ interior_design_and_decorating
│  │  ├─ decorating_services.jpeg
│  │  └─ design_consultation.jpeg
│  ├─ landscaping _and_outdoor_services
│  │  ├─ Garden_Maintenance.jpeg
│  │  ├─ Hardscaping.jpeg
│  │  ├─ Lawn_care.jpeg
│  │  └─ Tree Services.jpeg
│  ├─ maintenance_and_repairs
│  │  ├─ Appliance .jpeg
│  │  ├─ Electrical.jpeg
│  │  ├─ HVAC.jpeg
│  │  └─ Plumbing.jpeg
│  ├─ moving_and_storage
│  │  ├─ moving_services.jpeg
│  │  └─ storage_solutions.jpeg
│  ├─ pest_control
│  │  └─ general_pest_control.jpeg
│  ├─ renovation_and_remodeling
│  │  ├─ Kitchen_remodeling.jpeg
│  │  └─ bathroom_remodeling.jpeg
│  ├─ security_and_technology
│  │  ├─ home_automation.jpeg
│  │  └─ home_security_systems.jpeg
│  ├─ splash.png
│  └─ welcome
│     ├─ hero1.jpg
│     ├─ hero2.jpg
│     └─ hero3.jpg
├─ babel.config.js
├─ components
│  ├─ Account.tsx
│  ├─ Auth.tsx
│  ├─ Avatar.tsx
│  ├─ Button.js
│  ├─ Cleaning_services.js
│  ├─ Handyman_services.js
│  ├─ Interior_design.js
│  ├─ Landscaping.js
│  ├─ Maintenance_and_repairs.js
│  ├─ Moving_and_storage.js
│  ├─ Pest_control.js
│  ├─ Renovation.js
│  ├─ Security_and_tech.js
│  └─ Services.js
├─ constants
│  └─ color.js
├─ hooks
│  └─ Authentication.tsx
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ utils
   └─ supabase.ts
```
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
The MIT License (MIT)

Copyright (c) 2024 NickoBeast

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


