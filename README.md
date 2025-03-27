# Mutify Frontend

Mutify is a web application that allows users to register businesses, create and manage receipts, and leverage an admin assistant for transaction insights. The application provides a seamless user experience with an intuitive dashboard for handling receipts and financial data.

## 🚀 Features

- **User Authentication:** Sign in and sign out securely using access tokens.
- **Business Registration:** Users can register businesses within the platform.
- **Receipt Management:** Create, view, and manage receipts easily.
- **QR Code Generation:** Generate QR codes for receipts and convert them to images.
- **Admin Assistant:** Get transaction insights through voice commands.
- **Responsive Design:** Fully optimized for desktop and mobile devices.

## 🛠️ Technologies Used

- **React.js** - Frontend framework for building user interfaces
- **React Router** - Handles client-side navigation
- **Axios** - Handles HTTP requests to the backend
- **Custom CSS** - Styles the UI components
- **LocalStorage** - Stores user authentication tokens

## 🔧 Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nnam-droid12/mutify-frontend.git
   cd mutify-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file and configure environment variables:**
   ```env
   REACT_APP_API_BASE_URL=https://mutify.onrender.com/api/v1
   ```

4. **Run the development server:**
   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in your browser.

## 🖥️ Project Structure

```
mutify-frontend/
│-- src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── services/      # API services
│   ├── App.js         # Main entry point
│   ├── index.js       # Renders the app
│-- public/            # Static assets
│-- package.json       # Project dependencies
│-- README.md          # Documentation
```

## 📌 Usage Guide

- **Sign In:** Use your registered email and password.
- **Register Business:** Navigate to "Register Business" from the dashboard.
- **Create Receipt:** Fill in the necessary details and generate receipts.
- **View Receipts:** Access the list of all created receipts.
- **Generate QR Code:** Click the QR code button on a receipt.
- **Use Admin Assistant:** Navigate to "Admin Assistant" for transaction insights.

## 🚀 Deployment

The application can be deployed on platforms like **Render** or **Netlify**.

To build for production:
```bash
npm run build
```

## 🛠 API Endpoints Used

The frontend interacts with the following API endpoints:

- **User Authentication:**
  - `POST /api/v1/auth/signin` - Sign in users
  
- **Receipts:**
  - `POST /api/v1/receipts` - Create a receipt
  - `GET /api/v1/receipts` - Fetch all receipts
  - `GET /api/v1/receipts/:receiptId` - Fetch receipt details
  - `GET /api/v1/receipts/generate-qr/:receiptId` - Generate QR code for receipt
  - `GET /api/v1/receipts/image` - Convert receipt QR code to image
  
- **Admin Assistant:**
  - `GET /api/v1/admin/assistant/voice-command` - Fetch transaction insights



## 📞 Contact

For support or inquiries, please reach out to **williamekene700@gmail.com** or open an issue in the repository.


