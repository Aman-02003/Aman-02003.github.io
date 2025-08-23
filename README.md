# Professional Portfolio Website

A modern, responsive, and interactive portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, dark/light theme toggle, and mobile-responsive layout.

## ✨ Features

### 🎨 Design & Layout
- **Modern & Clean Design**: Professional appearance with smooth gradients and shadows
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Professional Typography**: Uses Inter font family for excellent readability

### 🚀 Interactive Elements
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Hover Effects**: Interactive hover animations on cards, buttons, and links
- **Scroll Animations**: Elements fade in as you scroll down the page
- **Typing Effect**: Animated typing effect for the hero section name
- **Parallax Effects**: Subtle parallax scrolling in the hero section
- **Counter Animations**: Animated counters for statistics

### 📱 Mobile Experience
- **Hamburger Menu**: Collapsible mobile navigation
- **Touch-Friendly**: Optimized for touch devices
- **Responsive Grid**: Adapts layout for different screen sizes
- **Mobile-First**: Designed with mobile users in mind

### 🎯 Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Professional bio with skills and statistics
3. **Experience Section**: Timeline of work and education history
4. **Projects Section**: Showcase of featured projects with technology tags
5. **Contact Section**: Contact form and contact information
6. **Footer**: Social links and copyright information

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS variables and Flexbox/Grid
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Inter font family for typography

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **Nodemailer**: Email sending functionality
- **CORS**: Cross-origin resource sharing
- **Helmet**: Security headers middleware
- **Rate Limiting**: Spam prevention

## 📁 File Structure

```
Portfolio/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── script.js               # JavaScript functionality
├── server.js               # Backend server (Node.js/Express)
├── package.json            # Node.js dependencies
├── env.example             # Environment variables template
├── BACKEND_SETUP.md        # Backend setup guide
├── start.bat               # Windows startup script
├── start.sh                # Unix/Linux startup script
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. **Clone or Download**: Download the portfolio files to your local machine
2. **Open in Browser**: Double-click `index.html` or open it in your preferred browser
3. **Customize**: Edit the HTML, CSS, and JavaScript files to personalize your portfolio
4. **Deploy**: Upload to your web hosting service (GitHub Pages, Netlify, Vercel, etc.)

### Local Development
If you want to make changes and see them in real-time:
1. Open the project folder in your code editor
2. Use a local development server (VS Code Live Server extension, Python's `http.server`, etc.)
3. Make changes and refresh your browser to see updates

## 🔧 Backend Setup (Contact Form)

The portfolio includes a fully functional contact form that sends emails to your inbox.

### Quick Start
1. **Install Node.js** (version 14 or higher)
2. **Install dependencies**: `npm install`
3. **Configure email**: Copy `env.example` to `.env` and add your email credentials
4. **Start server**: `npm start` or use `start.bat` (Windows) / `start.sh` (Unix)

### Detailed Setup
See [BACKEND_SETUP.md](./BACKEND_SETUP.md) for complete setup instructions, including:
- Gmail configuration
- Environment variables
- Security features
- Troubleshooting guide
- Production deployment

## 🎨 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

#### Hero Section
```html
<span class="name">Your Name</span>
<span class="title">Your Title</span>
<p class="hero-description">Your professional description</p>
```

#### About Section
```html
<p>Your personal bio and background</p>
<div class="skill-tags">
    <span class="skill-tag">Your Skill 1</span>
    <span class="skill-tag">Your Skill 2</span>
    <!-- Add more skills -->
</div>
```

#### Experience Section
```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <span class="company">Company Name</span>
        <span class="period">2020 - Present</span>
        <p>Job description and achievements</p>
    </div>
</div>
```

#### Projects Section
```html
<div class="project-card">
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-live-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

#### Contact Section
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
<a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a>
```

### Styling Customization
Edit `styles.css` to customize colors, fonts, and layout:

#### Color Scheme
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade for hover */
    --accent-color: #f59e0b;       /* Accent color */
    --text-primary: #1e293b;       /* Main text color */
    --text-secondary: #64748b;     /* Secondary text color */
    --bg-primary: #ffffff;         /* Main background */
    --bg-secondary: #f8fafc;      /* Secondary background */
}
```

#### Typography
```css
body {
    font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Adding Your Own Images
1. Replace the placeholder icons in project cards with your project screenshots
2. Add your profile picture by replacing the profile placeholder
3. Use appropriate image formats (WebP, PNG, JPG) for optimal performance

## 🌟 Advanced Customization

### Adding New Sections
1. Add new HTML section in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Add JavaScript functionality in `script.js` if needed

### Custom Animations
The portfolio includes several animation classes you can use:
- `.fade-in`: Fade in animation for elements
- `.slide-in`: Slide in from left/right
- `.scale-in`: Scale up animation

### Theme Customization
To add more themes or modify existing ones:
1. Add new CSS variables in `styles.css`
2. Modify the theme toggle logic in `script.js`
3. Add theme-specific styles using `[data-theme="your-theme"]`

## 📱 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+
- **Fallbacks**: Graceful degradation for older browsers

## 🚀 Performance Features

- **Optimized Animations**: Uses CSS transforms and opacity for smooth 60fps animations
- **Lazy Loading**: Intersection Observer for scroll-triggered animations
- **Throttled Events**: Scroll events are throttled for better performance
- **CSS Variables**: Efficient theme switching without repaints
- **Minimal Dependencies**: Only external dependencies are Font Awesome and Google Fonts

## 🔧 Troubleshooting

### Common Issues

#### Animations Not Working
- Ensure JavaScript is enabled in your browser
- Check browser console for any JavaScript errors
- Verify that all files are in the same directory

#### Theme Not Persisting
- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Ensure JavaScript is running properly

#### Mobile Menu Not Working
- Check if the hamburger menu icon is visible
- Ensure JavaScript is loaded and running
- Try refreshing the page

#### Styling Issues
- Clear browser cache
- Check if CSS file is properly linked
- Verify file paths are correct

### Browser Compatibility
If you experience issues in specific browsers:
- **Internet Explorer**: Not supported - use a modern browser
- **Old Mobile Browsers**: May have limited CSS support
- **Safari**: Ensure you're using a recent version

## 📄 License

This portfolio template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this portfolio template.

## 📞 Support

If you need help customizing or have questions:
1. Check the troubleshooting section above
2. Review the code comments for guidance
3. Search for similar issues online
4. Consider reaching out to the developer community

## 🎯 Next Steps

After customizing your portfolio:
1. **Add Real Content**: Replace placeholder text with your actual information
2. **Optimize Images**: Compress images for web use
3. **Test Responsiveness**: Check on various devices and screen sizes
4. **SEO Optimization**: Add meta tags and descriptions
5. **Analytics**: Consider adding Google Analytics or similar
6. **Deploy**: Host your portfolio online for the world to see!

---

**Happy coding! 🚀**

Your portfolio is now ready to showcase your skills and impress potential employers or clients.
