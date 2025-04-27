# 🎯 Wishlist App - Angular

This is a simple **Wishlist** application built using **Angular 16+** and **Bootstrap 5**.  
It lets you add, check off, and filter wishes right in your browser!

![Wishlist Screenshot](./wishlist-screenshot.png) <!-- (Optional: Replace with real screenshot) -->

## 🚀 Live Demo
Simply run the project locally and access it through your browser.

## 📂 Project Structure
```
/wishlist
├── src
│   ├── app
│   │   ├── add-wish-form
│   │   ├── wish-filter
│   │   ├── wish-list
│   │   ├── shared/models/wishItem.ts
│   │   ├── app.component.ts / html / css
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🎮 Features
- ✅ Add new wishes
- ✅ Mark wishes as fulfilled or unfulfilled
- ✅ Filter wishes (All, Fulfilled, Unfulfilled)
- ✅ Responsive Bootstrap design
- ✅ Full use of Angular Standalone Components
- ✅ Organized and reusable components

## 📋 How It Works

### Components:
- **AddWishFormComponent**:  
  - Handles adding new wishes.
  - Uses two-way binding with `ngModel`.
- **WishListComponent**:  
  - Displays the list of wishes.
  - Handles toggling wish fulfillment status.
- **WishFilterComponent**:  
  - Filters wishes by "All", "Fulfilled", and "Unfulfilled" using a dropdown.
- **AppComponent**:  
  - Central place to manage wish items and current filter.

### Models:
- **wishItem**:
  ```ts
  export class wishItem {
    constructor(
      public wishText: string,
      public isComplete: boolean = false
    ) {}
  }
  ```

### Main Logic:
- New wishes are added to an array of `wishItem` objects.
- Items are filtered by a selected condition (`All`, `Fulfilled`, `Unfulfilled`).
- Changes immediately reflect on the page without reloads.

## 🛠️ Built With
- **Angular 16+ (with Standalone Components)**
- **TypeScript**
- **Bootstrap 5**
- **Vite** (for super fast builds and hot reloads)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/wishlist-angular.git
   cd wishlist-angular
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm run dev
   ```
   Then open your browser at: `http://localhost:4200/`

## 📸 Screenshots
> *(Add screenshots of your app in action!)*  
Example:

![Wishlist Example](./wishlist-example.png)

## 🚧 Future Improvements
- Add persistent storage (localStorage or a backend)
- Add edit/delete functionality for wishes
- Sort wishes by date added or completed status
- Improve mobile responsiveness even more

## 🧹 License
This project is for learning and practicing Angular.  
Feel free to fork, modify, and share!

---

> Made with ❤️ using Angular and Bootstrap.
