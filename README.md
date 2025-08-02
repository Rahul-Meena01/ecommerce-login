# 🛍️ Shopper - E-commerce Login Page

A modern, responsive login page built with **React** and **pure CSS** for the "Shopper" e-commerce website. Features a stunning glassmorphism design with smooth animations and intuitive user experience.

## ✨ Features

- 🎨 **Modern Glassmorphism UI** - Beautiful glass-effect card with backdrop blur and shimmer effects
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔄 **Toggle Authentication** - Seamlessly switch between Sign In and Sign Up forms
- 👁️ **Password Visibility Toggle** - Show/hide password with eye icon
- 🔑 **Forgot Password Flow** - Complete forgot password functionality with email reset
- 🌐 **Social Login Integration** - Ready-to-implement Google, Facebook, and X (Twitter) login
- 🎭 **Smooth Animations** - Interactive hover effects, transitions, and loading states
- 🖼️ **Beautiful Background** - High-quality shopping background image
- ✅ **Form Validation** - Built-in HTML5 form validation with confirmation fields
- ⚡ **Loading States** - Professional loading spinner and button states
- 🎯 **Clean Code** - Well-structured React components with hooks
- 🎪 **Enhanced UX** - Shimmer effects, pulse animations, and micro-interactions

## 🎨 Design Elements

- **Color Scheme**: Blue gradient theme with enhanced glass morphism effects
- **Typography**: Inter font with gradient text effects for modern appeal
- **Background**: High-quality Unsplash image of people shopping with overlay
- **Card Design**: Enhanced glassmorphism with shimmer effects and animated borders
- **Buttons**: Blue gradient styling with scale hover effects and loading states
- **Inputs**: Clean fields with enhanced focus states and smooth transitions
- **Animations**: Slide-in effects, pulse animations, and micro-interactions
- **Loading States**: Professional spinner animations and disabled states

## 🚀 Live Demo

[View Live Demo](https://rahul-meena01.github.io/ecommerce-login) _(Will be available after deployment)_

## 📸 Screenshots

### Sign In View

- Clean login form with email and password fields
- "Forgot Password?" link for account recovery
- Social login options with Google, Facebook, and X
- Enhanced hover effects and loading states

### Sign Up View

- Registration form with name, email, password, and confirmation fields
- Account creation with smooth form transition
- Consistent social login integration
- Form validation and error handling

### Forgot Password View

- Dedicated password reset form
- Email input with validation
- "Back to Sign In" navigation
- Professional loading states and feedback

## 💪 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Pure CSS 3** - Custom CSS without any frameworks for complete control
- **CSS3 Features** - Flexbox, Grid, Transitions, Backdrop-filter, and more
- **Google Fonts** - Inter font family for modern typography
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
│   └── index.css             # Global styles and custom CSS classes
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

- **State Management**: Toggle between sign-in/sign-up/forgot-password, form data, password visibility, loading states
- **Form Handling**: Input validation, form submission, field management, async operations
- **UI Logic**: Dynamic content rendering, smooth transitions, responsive design, loading feedback
- **Enhanced Features**: Password confirmation, forgot password flow, loading spinners

### Custom CSS Classes

- `.glass-card` - Enhanced glassmorphism effect with shimmer animations and backdrop blur
- `.input-field` - Advanced input styling with focus states, transitions, and validation feedback
- `.btn-primary` - Primary button with gradient background, hover effects, and loading states
- `.social-btn` - Social login buttons with glass effect and enhanced animations
- `.password-toggle` - Eye icon button for password visibility toggle
- `.loading-spinner` - Professional loading animation with spinner
- `.form-transition` - Smooth form transition animations

## 🔧 Customization

### Colors

Modify colors directly in the CSS file (`src/index.css`):

```css
.btn-primary {
  background: linear-gradient(to right, #your-color, #your-color);
}
```

### Background Image

Update the background image URL in CSS:

```css
.background-image {
  background-image: url("your-image-url");
}
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
- Built with love using React and pure CSS

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

⭐ **Star this repository if you found it helpful!** ⭐
