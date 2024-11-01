# 🏏 Galaxy 11 Cricket Team Builder - [Click here](https://galaxyxi.netlify.app/)
A dynamic web application that allows users to build their dream cricket team by selecting players within a credit budget system. Craft your ultimate cricket squad with an intuitive interface and real-time team management features.
Show Image

## ✨ Features
**1. Advanced Player Selection System**

Build a team of up to 6 players
Smart duplicate player prevention
Real-time credit management system
Instant feedback through toast notifications
Player removal with automatic credit refund

**2. Interactive User Interface**

Toggle between available and selected players
Detailed player cards with comprehensive information

Player ratings with visual indicators
Batting and bowling styles
Country of origin
Player role
Bidding price


Responsive design for all screen sizes
Modern, clean aesthetic with Tailwind CSS

**3. Credit Management**

Initial credit system of 85,000,000 coins
Real-time credit balance display
Automatic credit adjustments on player selection/removal
Visual credit tracking in the navigation bar

## 🛠️ Technologies Used

1. **React.js** - Frontend library
2. **Tailwind CSS** - Styling framework
3. **React Toastify** - Toast notifications
4. **PropTypes** - Type checking
5. **Font Awesome** - Icons and visual elements

## 💻 Component Structure

```bash 
Copysrc/
├── components/
│   ├── Banner.jsx
│   ├── Navbar.jsx
│   ├── Toggle.jsx
│   ├── Selected.jsx
│   └── PlayersCard.jsx
```
## 🚀 Getting Started


### Install dependencies:

```bash
npm install
```
## Run the development server:

```bash
npm run dev
```
Open http://localhost:5173 to view it in your browser.

## 🎯 Key Features Implementation
***Player Selection Logic**
```bash
javascriptCopyconst handleSelected = (player, price, id) => {
  if (selected.length >= 6) {
    toast.error("cannot select more than 6 players");
    return;
  }
  // Additional selection logic...
};
Credit Management
javascriptCopy<button onClick={() => freeCredit(coins)} className="btn btn-primary">
  Claim Free Credit
</button>
```
## 🎨 UI Features

1. Backdrop blur effect in navigation
2. Responsive hero section with overlay
3. Interactive player cards with hover effects
3. Toast notifications for user feedback
4. Dynamic team size tracking

## Live Site 
[Click here](https://galaxyxi.netlify.app/)