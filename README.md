# MERN User Authentication System

## Live Demo
[https://mern-auth-fawn.vercel.app/](#) <!-- Replace # with the actual live demo link -->

## Features
- User login and signup.
- Email verification via OTP.
- Password reset functionality via email OTP.

---

## Installation Instructions

1. Clone the repository:
```bash
git clone https://github.com/shozabali06/User-Authentication-MERN.git
```

2. Navigate to the project directory:
```bash
cd User-Authentication-MERN
```

### Server Setup

3. Navigate to the server folder:
```bash
cd server
```

4. Install dependencies:
```bash
npm install
```

5. Configure environment variables:
   Create a `.env` file in the `server` folder and add the following:
   ```env
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   NODE_ENV=development # or production
   SMTP_USER=<your-smtp-username>
   SMTP_PASS=<your-smtp-password>
   SENDER_EMAIL=<your-sender-email>
   PORT=3000 # optional, defaults to 3000
   ORIGIN=<url-for-client-side>
   ```

6. Start the server:
```bash
npm run server
```

### Client Setup

7. Navigate to the client folder:
```bash
cd client
```

8. Install dependencies:
```bash
npm install
```

9. Configure environment variables:
   Create a `.env` file in the `client` folder and add the following:
   ```env
   VITE_BACKEND_URL=<url-for-server-side>
   ```

10. Start the client:
```bash
npm run dev
```

---

## Commands Summary

### Server Commands
- **Install dependencies:** `npm install`
- **Run the server:** `npm run server`

### Client Commands
- **Install dependencies:** `npm install`
- **Run the client:** `npm run dev`

---

## Environment Variables Summary

### Server Folder
- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JSON Web Token.
- `NODE_ENV`: `development` or `production`.
- `SMTP_USER`: SMTP username for email service.
- `SMTP_PASS`: SMTP password for email service.
- `SENDER_EMAIL`: Email address used to send OTPs.
- `PORT`: (Optional) Server port, defaults to `3000`.
- `ORIGIN`: URL of the client application.

### Client Folder
- `VITE_BACKEND_URL`: URL of the server application.

---

Feel free to reach out for further assistance or feature suggestions!
