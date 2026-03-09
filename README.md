# Connect Four

A modern, interactive **Connect Four** game built with vanilla JavaScript, featuring a polished UI, smooth animations, and a responsive design. Perfect portfolio project showcasing front-end development skills.

🎮 **[Play Live Demo](https://connect-four-vanilla.vercel.app/)** — Try it now!

## 🎮 Features

- **Smooth Piece Drop Animation** — CSS keyframe animations with cubic-bezier easing for a polished bounce effect
- **Real-time Turn Indicator** — Dynamic UI that updates with glowing indicators showing whose turn it is
- **Beautiful Dark Theme** — Gradient backgrounds, radial-gradient tokens, and glassmorphism effects
- **Win Detection** — Checks all four directions (horizontal, vertical, diagonal) for winning patterns
- **Instant Game Restart** — Modal overlay replaces alerts, resets board with one click
- **Responsive Design** — Optimized for desktop and mobile devices
- **Modern Tooling** — Built with Vite for fast development and optimized production builds

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript (ES6 Modules)
- **Styling:** Pure CSS3 (no frameworks)
  - Animations & transitions
  - Flexbox & CSS Grid layouts
  - Radial gradients, shadows, backdrop filters
- **Build Tool:** Vite v5
- **Fonts:** Google Fonts (Poppins)

## 📦 Project Structure

```
4 in a line - vanilla js/
├── index.html              # Entry point with modal & turn indicator
├── package.json            # Dependencies & scripts
├── vite.config.js         # Vite configuration
├── css/
│   └── game4inarow.css    # All styling (135 lines, well-commented)
├── js/
│   ├── Controller.js      # Game logic & event handling
│   ├── Data.js            # Board model, Cell & Row classes
│   └── View.js            # DOM manipulation & animations
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone or download the project
cd "4 in a line - vanilla js"

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```
Starts a local dev server (typically on `http://localhost:3000` or `3001`). The page reloads automatically when you save changes.

### Build for Production

```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```
Test the production build locally before deployment.

## 🎯 How to Play

1. **Blue goes first** — Click any column to drop a piece
2. **Alternate turns** — Red follows, then back to Blue
3. **Connect four** — Line up 4 pieces horizontally, vertically, or diagonally to win
4. **Restart** — Click "Play Again" on the win modal to reset the board

## ✨ Key Technical Highlights

### CSS Animations
The drop animation uses `@keyframes` with a smooth bounce effect:
```css
@keyframes dropIn {
  0%   { transform: translateY(-280px) scale(0.9); opacity: 0.5; }
  60%  { transform: translateY(8px) scale(1.04); opacity: 1; }
  80%  { transform: translateY(-4px) scale(0.98); }
  100% { transform: translateY(0) scale(1); }
}
```
- Uses `cubic-bezier` easing for smooth deceleration
- `transform` + `opacity` for 60fps performance
- 0.45s duration for satisfying visual feedback

### Game Logic
- **Board Model:** 6 rows × 7 columns grid with Cell and Row classes
- **Win Detection:** Checks all 4 directions without rechecking the entire board each time
- **Event Handling:** Click handlers on each cell with hover effects for each column

### UI/UX
- **Glassmorphism Modal:** Smooth overlay with backdrop blur for win announcements
- **Dynamic Turn Indicator:** Real-time updates with colored glowing dot
- **Responsive Layout:** Mobile-optimized with media queries
- **No External UI Libraries** — Pure CSS & JavaScript

## 📱 Responsive Design

- Desktop: Full 64px × 64px cells with generous gaps
- Mobile (<560px): Scaled down to 44px × 44px for smaller screens
- Maintains playability across all screen sizes

## 🔄 State Management

The game maintains clean separation of concerns:
- **Data.js** — Board state (grid, win detection logic)
- **View.js** — DOM updates, animations, modal display
- **Controller.js** — Event handling, game flow, restart logic

## 🎨 Design Features

- **Color Scheme:** Deep purple-blue gradient background (#0f0c29 → #302b63)
- **Board:** Metallic dark blue with 3D cell styling
- **Pieces:** Radial gradients with glowing shadows for depth
- **Modal:** Frosted glass effect with blur backdrop
- **Typography:** Poppins font for modern, clean appearance

## 🚀 Deployment

Ready for deployment to:
- **Netlify** — Drag & drop the `dist/` folder
- **Vercel** — Connect GitHub repo for auto-deploys
- **GitHub Pages** — Build and push to `gh-pages` branch
- Any static hosting service

## 📝 Code Quality

- **Modular Structure** — Clear separation between data, view, and controller
- **Well-Commented CSS** — Every section labeled and organized
- **No Dependencies** — Only Vite for bundling (fully configurable)
- **ES6 Modules** — Clean import/export syntax

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Vanilla JavaScript (ES6) — modules, classes, event handling
- ✅ CSS3 — animations, gradients, transforms, media queries
- ✅ DOM manipulation — efficient selection and updates
- ✅ Game logic — win detection algorithms
- ✅ Build tooling — Vite configuration & optimization
- ✅ Responsive design — mobile-first thinking
- ✅ State management — clean architecture patterns

## 🔮 Future Enhancements

- Add AI opponent (minimax algorithm)
- Score tracking across multiple games
- Sound effects & haptic feedback
- Multiplayer over WebSocket
- Dark/Light theme toggle
- Local storage for game history

## 📄 License

Open source — feel free to use and modify.

---

**Made with ❤️ in vanilla JavaScript**

**Live:** https://connect-four-vanilla.vercel.app/
