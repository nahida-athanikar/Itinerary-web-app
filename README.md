# Itinerary-web-app 


# Travel Itinerary Web App

A **mobile-responsive** travel planning web application built using **React.js** and **TailwindCSS**. It allows users to plan their trip easily with beautiful UI components and smooth transitions.

---

## ✨ Features

- **Onboarding Screen**: Collects destination, trip duration, and group type (Solo, Couple, Family, Friends) from the user.
- **Dashboard**:
  - Welcome Header with username and avatar.
  - "Upcoming Trip" card showing destination image, trip dates, and other trip metrics.
  - "Flight Details" card with origin, destination, and timings.
  - "Accommodation Section" listing hotels with status indicators (green for Confirmed, red for Pending).
  - "Activities Section" showing day-wise activity plan.
- **Bottom Navigation Bar** with hover and animation effects.
- **Fully Mobile Responsive** layout.
- **Beautiful Hover Effects** (lift-up, ring effects).

---

## 👉 Quick Demo Snapshots

### 1. Onboarding Screen
![Onboarding Screen](./public/Screenshot_2025-04-28_215553.png)

### 2. Dashboard - Upcoming Trip + Flights
![Main Dashboard Screen 1](./public/Screenshot_2025-04-28_215603.png)

### 3. Dashboard - Accommodation + Activities
![Main Dashboard Screen 2](./public/Screenshot_2025-04-28_215626.png)



## 🚀 How to Run Locally

```bash
# Step 1: Install all dependencies
npm install

# Step 2: Start the development server
npm run dev

# Open your browser and navigate to:
http://localhost:5173/
```



## 🌐 Tech Stack
- **React.js** (Frontend Framework)
- **TailwindCSS** (Styling)
- **Vite** (Development Build Tool)



## 💡 Key Details

| Page | Description |
|-----|-------------|
| **Onboarding Page** | Collects basic trip info with icon inputs and animated buttons. |
| **Main Dashboard** | Shows the full itinerary: trip, flight, accommodation, activities. |
| **Mobile Responsive** | 100% Mobile-first design |

---

## 📆 Future Improvements
- API Integration for flights and hotels.
- User authentication and saved itineraries.
- Dark/Light theme toggle.

---

## 📍 Project Folder Structure
```
/src
  /assets      # All images/icons
  /components
    /common
    /dashboard
    /onboarding
  App.jsx
  main.jsx
```





