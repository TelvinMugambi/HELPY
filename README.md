# HELPY: A MOBILE APPLICATION THAT LINKS HOMEOWNERS TO SERVICE PROVIDERS

___

## DESCRIPTION
This project is a mobile application that bridges the gap between homeowners and service providers. The app provides a platform for transparent communication, upfront pricing, detailed service information, and efficient service delivery. It aims to enhance trust, efficiency, and satisfaction for both parties involved in home service transactions.

___

## DEPENDENCIES
Inorder to run this project you need to install the following dependencies
1. NPM
    1. On Windows and Mac:
        Follow through [this] (https://positiwise.com/blog/how-to-install-npm-and-node-js-on-mac-and-windows) guide to download nodejs on windows and mac environment
    2. On Linux:
        To download the latest version of npm, on the command line, run the following command:
        `npm install -g npm`
2. EXPO
    After installing npm, run this command to install expo:
        `npm install expo`
3. SUPABASE
    You need to have the supabase CLI: 
        `npm install @supabase/supabase-js`

## REPOSITORY
Clone this github project to run the application
    `git clone https://github.com/TelvinMugambi/HELPY.git`
    `cd HELPY`
___

## USAGE INSTRUCTIONS

### How to run
    1. EXPO on your device
        To run this application on your device, you will need to install expo which is available for android and ios in the google play store and app store respectively.

    2. Launch the project
        To run the application in you local enviroment, you will need to run the command.
        `npm start`
        There will be a genereated QR Code.
        Open the expo app on you device and scan the QR code to start the project on your device
    ___


## PROJECT STRUCTURE
The structure below describes the main structure of the applicatiomn
├── app
│ ├── tabs
│ │ ├── Home.js
│ │ ├── Categories.js
│ │ ├── Booking.js
│ │ ├── Profile.js
│ │ └── _layout.js
│ ├── screens
│ │ ├── BookingDetails.js
│ │ ├── BookingDraft.js
│ │ ├── BookingHistory.js
│ │ ├── BookingUpcoming.js
│ │ └── ServiceProviders.js
│ ├── index.js
│ ├── Welcome.js
│ ├── Signup.js
│ ├── Login.js
│ └── _layout.js


