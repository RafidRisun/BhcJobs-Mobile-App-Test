# BhcJobs Mobile App

Expo-based mobile app for BhcJobs.

## Prerequisites

- Node.js 18 or newer
- npm
- Android Studio and an emulator, or a physical Android device
- EAS CLI if you want to build an APK

## Setup

Install dependencies:

```bash
npm install
```

If you add or update native packages, install them with Expo so the versions stay aligned:

```bash
npx expo install <package-name>
```

## How to run

Start the Expo development server:

```bash
npx expo start
```

From the Expo menu, you can open the app in:

- Expo Go for JavaScript-only work
- an Android emulator
- a physical Android device
- a web browser

## How to run a development build

This project uses native modules, so for anything that depends on them, use a development build instead of Expo Go.

1. Install the dev client dependency if it is not already installed:

```bash
npx expo install expo-dev-client
```

2. Create and install the native development build on Android:

```bash
npx expo run:android
```

3. Start Metro for the dev client:

```bash
npx expo start --dev-client
```

Use the installed development build app on your device or emulator to open the project.

## How to build APK

To build an APK, use EAS Build.

1. Install EAS CLI:

```bash
npm install -g eas-cli
```

2. Log in and configure EAS if needed:

```bash
eas login
eas build:configure
```

3. Make sure your EAS config uses an APK profile for Android. In `eas.json`, your profile should look similar to this:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

4. Build the APK:

```bash
eas build -p android --profile preview
```

If you already have a configured `eas.json`, use the profile that is set to generate an APK.

## Useful scripts

```bash
npm run start
npm run android
npm run ios
npm run web
npm run lint
```

## Project structure

- `src/app` contains the Expo Router routes
- `src/screens` contains the screen implementations
- `src/components` contains shared UI components
- `src/hooks` contains data and mutation hooks
- `src/api` contains API helpers

## Notes

- The app uses Expo Router for file-based routing.
- Native features require a development build, not Expo Go.
