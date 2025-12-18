# 🧇 Wafflet - Premium Waffle Brand Website

A stunning, modern, and fully animated website for **Wafflet**, a premium waffle brand showcasing 35+ waffle varieties across 30+ locations in 9+ states.

https://snippykid.github.io/Wafflet/

![Wafflet](https://img.shields.io/badge/Wafflet-Premium%20Waffles-FF5555?style=for-the-badge&logo=waffle)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

## ✨ Features

- 🎬 **Full-screen video background** with parallax effects
- 🎨 **Modern glassmorphism design** with smooth animations
- 📱 **Fully responsive** - works perfectly on all devices
- ⚡ **GSAP animations** with ScrollTrigger for smooth scroll effects
- 🎯 **Interactive elements** with hover effects and transitions
- 🎭 **Custom fonts** - Biscotti & Melodrama for unique branding
- 🌈 **Beautiful color scheme** - carefully curated palette

## 🎨 Color Theme

The website uses a carefully selected color palette that creates a warm, inviting, and premium feel:

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Red** | `#FF5555` | Main brand color, CTAs, headings |
| **Peach** | `#FF937E` | Secondary accents, buttons, highlights |
| **Light Green** | `#C1E59F` | Stats, highlights, positive elements |
| **Green** | `#A3D78A` | Locations section, success states |

### Color Variables
```css
--primary-red: #FF5555
--primary-peach: #FF937E
--primary-light-green: #C1E59F
--primary-green: #A3D78A
```

## 🔤 Typography

The website uses two custom fonts to create a unique and memorable brand identity:

### 1. **Biscotti** (Display Font)
- **Usage**: Logo, main headings, section titles, stat numbers
- **Style**: Playful, food-themed, perfect for brand identity
- **File**: `./assets/fonts/biscotti-food-font/biscotti.ttf`
- **Font Family**: `'Biscotti', cursive`

### 2. **Melodrama** (Body Font)
- **Usage**: Body text, descriptions, buttons, navigation
- **Style**: Clean, modern, elegant
- **File**: `./assets/fonts/Melodrama_Complete/Melodrama_Complete/Fonts/OTF/Melodrama-Regular.otf`
- **Font Family**: `'Melodrama', sans-serif`

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for video playback)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Wafflet
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
Wafflet/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # GSAP animations and interactions
├── README.md           # This file
├── doc.txt             # Project documentation
└── assets/
    ├── fonts/
    │   ├── biscotti-food-font/
    │   │   └── biscotti.ttf
    │   └── Melodrama_Complete/
    │       └── Melodrama-Regular.otf
    ├── images/
    │   ├── Candy-Waffle-Home.jpg
    │   ├── menu.jpg
    │   ├── menu2.jpg
    │   ├── poster2.jpg
    │   ├── poster3.jpg
    │   ├── poster4.jpg
    │   └── products.jpg
    └── videos/
        ├── edit.mp4              # Hero section video
        └── cheesecakeEDIT.mp4    # Parallax section video
```

## 🎯 Sections

1. **Hero Section** - Full-screen video background with animated title and CTAs
2. **About Section** - Brand story with feature highlights
3. **Menu Section** - Showcase of signature waffle creations
4. **Video Section** - Parallax video with overlay text
5. **Locations Section** - Stats and location finder
6. **Footer** - Contact information and social links

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, flexbox, grid
- **JavaScript (ES6+)** - Interactive functionality
- **GSAP 3.12.5** - Professional animations
- **ScrollTrigger** - Scroll-based animations

## 🎬 Animations & Effects

- ✨ Smooth fade-in animations on scroll
- 🎭 Staggered text reveals
- 📊 Animated stat counters
- 🎥 Parallax video effects
- 🖱️ Interactive hover states
- 📱 Mobile-responsive menu animations
- 🎨 Glassmorphism effects on navigation

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📝 Key Features Breakdown

### Navigation
- Fixed glassmorphism navbar
- Smooth scroll to sections
- Active link highlighting
- Mobile hamburger menu

### Hero Section
- Full-screen video background
- Animated multi-line title
- Call-to-action buttons
- Smooth scroll indicators

### Animations
- GSAP timeline animations
- ScrollTrigger for scroll-based effects
- Staggered card reveals
- Smooth transitions

## 🎨 Design Philosophy

The design focuses on:
- **Premium feel** - High-quality visuals and smooth animations
- **Warmth** - Color palette that evokes comfort and deliciousness
- **Modern** - Contemporary design trends (glassmorphism, smooth animations)
- **Accessibility** - Clear typography and readable contrast

## 📊 Statistics Showcase

- **35+** Waffle Varieties
- **30+** Locations
- **9+** States

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-red: #FF5555;
    --primary-peach: #FF937E;
    --primary-light-green: #C1E59F;
    --primary-green: #A3D78A;
}
```

### Modifying Animations
Adjust GSAP animations in `script.js`:
```javascript
gsap.from('.element', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power2.out'
});
```

## 📄 License

This project is created for Wafflet brand. All rights reserved.

## 👨‍💻 Development

Built with ❤️ using modern web technologies.

---

**Wafflet** - *Crafted Perfection in Every Bite* 🧇✨
