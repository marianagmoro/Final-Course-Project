# Mariana González-Moro Portfolio

**Live Site**: [https://your-portfolio-url.com](https://your-portfolio-url.com)

## About This Project

A modern, responsive portfolio website showcasing creative design work in 3D animation, visual storytelling, and innovative design solutions. Built with clean HTML, CSS, and JavaScript, featuring glassmorphism design elements, organic animations, and seamless dark/light mode switching.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dark/Light Mode**: Seamless theme switching with automatic image swapping
- **Glassmorphism UI**: Modern glass-effect buttons and interactive elements
- **Organic Animations**: Fluid, morphing gradient backgrounds
- **Custom 404 Page**: Branded error page with navigation back to home
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Lightweight, fast-loading with optimized assets

## Tech Stack

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Custom properties, Grid/Flexbox, animations, glassmorphism effects
- **Vanilla JavaScript**: Theme switching, smooth scrolling, responsive navigation
- **Fonts**: Google Fonts (Montserrat, Georgia)
- **Icons**: Custom SVG icons for consistent styling

## Setup Instructions

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/marianagmoro/Final-Course-Project.git
   cd Final-Course-Project
   ```

2. **Open locally**

   ```bash
   # Option 1: Simple file opening
   open index.html

   # Option 2: Using Python's built-in server
   python -m http.server 8000
   # Then visit http://localhost:8000

   # Option 3: Using Node.js live-server (if installed)
   npx live-server
   ```

3. **Start developing**
   - Edit HTML files for content changes
   - Modify `assets/css/index.css` for styling
   - Update `assets/js/main.js` for functionality

## Customization Guide

### Colors and Themes

- **CSS Variables**: Located in `:root` section of `assets/css/index.css`
- **Theme Colors**: Modify `--color-text`, `--color-background`, `--color-accent`
- **Gradients**: Update hero gradient colors in `.hero-gradient` class

### Content Updates

- **Images**: Replace files in `assets/images/` directory
- **Projects**: Update project sections in `index.html`
- **Contact Info**: Modify contact section and form action URL
- **Personal Info**: Update meta descriptions, titles, and footer

### Adding New Sections

1. Add HTML structure to `index.html`
2. Add corresponding CSS styles to `assets/css/index.css`
3. Update navigation links if needed
4. Test responsiveness across devices

### Dark Mode Images

Ensure you have both light and dark versions of images:

- `image.png` (light mode)
- `image white.png` (dark mode)

The theme switcher will automatically handle the swapping.

## Screenshots

### Desktop View

![Desktop Light Mode](assets/images/light%20mode.png)
![Desktop Dark Mode](assets/images/dark%20mode.png)

### Mobile View

![Mobile Light Mode](assets/images/phone%20white.PNG)
![Mobile Dark Mode](assets/images/phone%20dark.PNG)

## Project Structure

```
Final-Course-Project/
├── index.html              # Main portfolio page
├── 404.html               # Custom error page
├── assets/
│   ├── css/
│   │   └── index.css       # All styles and animations
│   ├── js/
│   │   └── main.js         # Interactive functionality
│   ├── images/             # All images and media
│   └── fonts/              # Custom fonts (if any)
├── docs/
│   └── plan.md            # Project planning document
├── .gitignore             # Git ignore rules
├── LICENSE                # Project license
└── README.md              # This file
```

## Performance Features

- **CSS Custom Properties**: Efficient theming and maintenance
- **Optimized Images**: Responsive images with proper alt text
- **Smooth Animations**: Hardware-accelerated CSS animations
- **Minimal JavaScript**: Vanilla JS for fast loading
- **Semantic HTML**: Better SEO and accessibility

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits and Acknowledgments

- **Design**: Mariana González-Moro
- **Development**: Built with modern web standards
- **Fonts**: [Google Fonts](https://fonts.google.com/) - Montserrat & Georgia
- **Icons**: Custom SVG icons for theme switching
- **Inspiration**: Modern glassmorphism and organic design trends
- **Tools**: VS Code, Git, GitHub

---

## Contributing

Feel free to submit issues and enhancement requests! This portfolio template can serve as inspiration for other creative professionals.

## Contact

For questions about this project or collaboration opportunities:

- **Portfolio**: [Live Site Link](https://marianagmoro.github.io/Final-Course-Project/)
- **GitHub**: [@marianagmoro](https://github.com/marianagmoro)

---

_Last updated: January 2026_
