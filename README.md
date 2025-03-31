## **ShoppyCart 🛒**
Responsive and Dynamic eCommerce Add to Cart Application with Multiple Pages Such as **HOME** , **PRODUCTS** , **ABOUT US** , **CART** .

## Features ⚡
#### 1. Product Display
Fetching and Displaying a list of products from the Fake Store API.
Each Product Card shows Key Information's such as:
- Product Image
- Title
- Product Description
- Price
- Add to Cart button
  
####  2. Add to Cart Functionality
- Users can Add Products to their cart by clicking the "Add to Cart" button.
- If a product is already in the cart, Add to Cart Button will be Disabled with Message Product **Already In Cart**.
  
#### 3. Cart Management
The Total Product Count is displayed in a Navbar Component.
Clicking the Cart Button in the Navbar Navigates to Cart Page and it Shows:
- A list of all products in the cart.
- A "Remove" & "Clear Cart" Button for each Product, Allowing users to Remove Items Individually as well as All Items using Clear Cart Button.
- Each Product Contains "ADD & DECREASE" Buttons to Increase and Decrease Each Product Quandity & When Quandity Changes the Price getting updated dynamically.
- Total Price all Products getting Updated Dynamically with 10% Discount.
  
#### 4. Dynamic Cart Updates
- The cart value and item count are updated dynamically when products are added or removed.
- State management ensures seamless updates and efficient data flow across components.
   
####  5. Responsive Design
Optimized for both Desktop and Mobile Devices.
A clean and user-friendly layout ensures a consistent user experience on various screen sizes.

## Tech Stack 💫
- ReactJs
- React Router
- HTML
- Tailwind CSS for styling
- JavaScript for Functionality

## Deployed - URL 🌐 
Below is the Deployed URL
<p> https://samy-shoppycart.netlify.app/ </p>

## Project Configurations

### React Project Creation with Vite Building Tool
```bash
 npm create vite@latest
```

### To Install Tailwind CSS
##### Install tailwindcss and @tailwindcss/vite via npm.
```bash
npm install tailwindcss @tailwindcss/vite
```

### To Configure Tailwind as Vite Plugin
##### Add the @tailwindcss/vite plugin to your Vite configuration.
```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### To Import Tailwind CSS
##### Add an @import to your CSS file that imports Tailwind CSS.
```bash
@import "tailwindcss";
```

### To Install React Router Dom
```bash
 npm install react-router-dom
```

### To Install React Loading Indicators
```bash
 npm install react-loading-indicators
```

### To Develop the Project
##### Run Build process with 'npm run dev' 
```bash
  npm run dev
```
