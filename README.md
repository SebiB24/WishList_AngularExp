# 🎯 Wishlist App - Angular

This is a simple **Wishlist** application built using **Angular 16+** and **Bootstrap 5**.  
It lets you add, check off, and filter wishes right in your browser!

![image](https://github.com/user-attachments/assets/acdb41eb-4c33-465a-ba66-8e58173a498c)
 <!-- (Optional: Replace with real screenshot) -->

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

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/3ab14051-264f-444a-a419-0988d9a63b12)
![image](https://github.com/user-attachments/assets/4d29fe2c-88ee-49b5-84c5-753352062b7a)
![image](https://github.com/user-attachments/assets/7a0dd1c2-6209-427e-9535-07f73b73814a)

## 🚧 Future Improvements
- Add persistent storage (localStorage or a backend)
- Add edit/delete functionality for wishes
- Sort wishes by date added or completed status
- Improve mobile responsiveness even more

