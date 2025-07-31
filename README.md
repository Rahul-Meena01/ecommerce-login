# 🛍️ Shopper - E-commerce Login Page

A modern, responsive login page built with **React** and **Tailwind CSS** for the "Shopper" e-commerce website. Features a stunning glassmorphism design with smooth animations and intuitive user experience.

## ✨ Features

- 🎨 **Modern Glassmorphism UI** - Beautiful glass-effect card with backdrop blur
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔄 **Toggle Authentication** - Seamlessly switch between Sign In and Sign Up forms
- 👁️ **Password Visibility Toggle** - Show/hide password with eye icon
- 🌐 **Social Login Integration** - Ready-to-implement Google, Facebook, and X (Twitter) login
- 🎭 **Smooth Animations** - Interactive hover effects and transitions
- 🖼️ **Beautiful Background** - High-quality shopping background image
- ✅ **Form Validation** - Built-in HTML5 form validation
- 🎯 **Clean Code** - Well-structured React components with hooks

## 🎨 Design Elements

- **Color Scheme**: Blue and white theme with gradient accents
- **Typography**: Inter font for modern, clean text
- **Background**: High-quality Unsplash image of people shopping
- **Card Design**: Glassmorphism effect with white border and rounded corners
- **Buttons**: Blue gradient styling with scale hover effects
- **Inputs**: Clean fields with focus states and smooth transitions

## 🚀 Live Demo

[View Live Demo](https://rahul-meena01.github.io/ecommerce-login) *(Will be available after deployment)*

## 📸 Screenshots

### Sign In View

- Clean login form with email and password fields
- "Forgot Password?" link for account recovery
- Social login options with Google, Facebook, and X

### Sign Up View

- Registration form with name, email, and password fields
- Account creation with smooth form transition
- Consistent social login integration

## 💪 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS 3** - Utility-first CSS framework for rapid styling
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing
- **Create React App** - Standard React application setup

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rahul-Meena01/ecommerce-login.git
   cd ecommerce-login
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open in browser**

   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
ecommerce-login/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── LoginForm.js      # Main login/signup component
│   ├── App.js                # Root component
│   ├── index.js              # React DOM entry point
│   └── index.css             # Global styles and Tailwind imports
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## ⚙️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (⚠️ one-way operation)

## 🎯 Key Components

### LoginForm Component

- **State Management**: Toggle between sign-in/sign-up, form data, password visibility
- **Form Handling**: Input validation, form submission, field management
- **UI Logic**: Dynamic content rendering, smooth transitions, responsive design

### Custom CSS Classes

- `.glass` - Glassmorphism effect with backdrop blur
- `.input-field` - Consistent input styling with focus states
- `.btn-primary` - Primary button with gradient and hover effects

## 🔧 Customization

### Colors

Modify colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Background Image

Update the background image URL in `LoginForm.js`:

```javascript
backgroundImage: `url('your-image-url')`;
```

### Social Login

Add functionality to social login buttons by implementing authentication logic.

## 🚀 Deployment

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📍 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💼 Author

**Rahul Meena**

- GitHub: [@Rahul-Meena01](https://github.com/Rahul-Meena01)

## 🙏 Acknowledgments

- Background image from [Unsplash](https://unsplash.com)
- Icons and design inspiration from modern UI/UX trends
- Built with love using React and Tailwind CSS

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

⭐ **Star this repository if you found it helpful!** ⭐
