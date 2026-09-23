# Firebase deployment

1. Create a Firebase project in the [Firebase console](https://console.firebase.google.com/) and upgrade it to the Blaze plan. Cloud Functions and the email extension require billing.
2. Install the Firebase CLI, sign in, and select the new project:

   ```powershell
   npm install -g firebase-tools
   firebase login
   firebase use --add
   ```

3. In the Firebase console, create a Firestore database in production mode.
4. Install Firebase's **Trigger Email** extension. Configure its mail collection as `mail`, its sender address, and the SMTP credentials for the mailbox that will send the notification emails.
5. From this project directory, install the Function dependencies and deploy:

   ```powershell
   npm --prefix functions install
   npm run build
   firebase deploy
   ```

The `submitInquiry` function stores each form submission in the private `inquiries` collection, then writes an email job to `mail`. The Trigger Email extension sends that job to `ryuuonyxyt@gmail.com`.
