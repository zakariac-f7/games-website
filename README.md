# 🎮 APK Gaming Hub

A modern, creative gaming website for hosting and listing APK games. Built with pure HTML, CSS, and JavaScript, ready to deploy on GitHub Pages.

## ✨ Features

### 🎨 Modern UI Design
- **Dark Theme**: Professional dark color scheme with neon accents (#e94560, #00d9ff)
- **Smooth Animations**: CSS animations including hover effects, fade-ins, and slide-ins
- **Gaming Aesthetic**: Gradient effects, glowing borders, and modern typography (Orbitron, Poppins)
- **Professional Navigation**: Fixed navbar with smooth transitions and mobile hamburger menu

### 📱 Fully Responsive
- **Mobile-First Design**: Optimized for mobile devices first
- **Flexible Layouts**: CSS Grid and Flexbox for responsive game cards
- **Adaptive Grid System**: 
  - 1 column on mobile
  - 2 columns on tablets
  - 3-4 columns on desktop
- **Hamburger Menu**: Clean mobile navigation experience

### 🎮 Game Listing Features
- **Game Cards**: Beautiful cards with thumbnails, titles, descriptions, file sizes, and download buttons
- **Category Filtering**: Filter games by Action, Racing, Puzzle, Adventure, Sports, and Strategy
- **Search Functionality**: Real-time search through game titles and descriptions
- **9+ Sample Games**: Pre-loaded with diverse game examples
- **Game Detail Pages**: Individual pages with full game information and installation guides

### 🚀 GitHub Pages Ready
- No build process required
- Pure HTML, CSS, and JavaScript
- All files in root directory
- Clean, deployable structure

## 📂 File Structure

```
├── index.html              # Main landing page with hero section
├── games.html              # Game listing page with filters
├── game-detail.html        # Game detail page template
├── css/
│   └── style.css          # Complete stylesheet with dark theme
├── js/
│   └── main.js            # JavaScript for navigation, filters, animations
├── images/                # Image directory (favicon, game images)
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/zakariac-f7/games-website.git
   cd games-website
   ```

2. **Open in browser**
   Simply open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

3. **Use a local server (optional but recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```
   Then visit `http://localhost:8000`

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (main/master)
   - Choose root directory
   - Save and wait for deployment

3. **Access your site**
   Your site will be available at: `https://yourusername.github.io/games-website/`

## 🎨 Color Scheme

```css
Primary Background: #0f0f1e
Secondary Background: #1a1a2e
Tertiary Background: #16213e
Accent Primary: #e94560 (Pink/Red)
Accent Secondary: #0f3460 (Dark Blue)
Neon Blue: #00d9ff
Neon Purple: #b537f2
Text Primary: #ffffff
Text Secondary: #a8a8b3
```

## 🎯 Pages Overview

### 1. Landing Page (index.html)
- Hero section with animated elements
- Statistics section
- Featured games grid
- Category browsing
- About section with features
- Footer with links

### 2. Games Page (games.html)
- Complete game library
- Search bar for filtering
- Category filter buttons
- Responsive game grid
- 9+ sample games included

### 3. Game Detail Page (game-detail.html)
- Full game information
- Image gallery with thumbnails
- Download specifications
- Installation guide
- Key features section
- Related games

## 🛠️ Customization

### Adding New Games

Edit the game cards in `games.html`:

```html
<div class="game-card" data-category="action">
    <div class="game-image">
        <div class="game-badge">NEW</div>
        <div class="game-placeholder">
            <i class="fas fa-gun"></i>
        </div>
    </div>
    <div class="game-info">
        <h3 class="game-title">Your Game Title</h3>
        <p class="game-description">Your game description</p>
        <div class="game-meta">
            <span class="game-size"><i class="fas fa-hdd"></i> 120 MB</span>
            <span class="game-category">Action</span>
        </div>
        <a href="game-detail.html" class="btn-download">
            <i class="fas fa-download"></i> Download APK
        </a>
    </div>
</div>
```

### Modifying Colors

Update CSS variables in `css/style.css`:

```css
:root {
    --primary-bg: #0f0f1e;
    --accent-primary: #e94560;
    /* Modify as needed */
}
```

### Adding Game Images

1. Add images to the `images/` directory
2. Replace `game-placeholder` div with:
   ```html
   <img src="images/your-game.jpg" alt="Game Title">
   ```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript (ES6+)**: Vanilla JS for interactions
- **Font Awesome 6**: Icon library
- **Google Fonts**: Orbitron and Poppins fonts

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📞 Support

For issues or questions, please open an issue in the GitHub repository.

---

Made with ❤️ for the gaming community
