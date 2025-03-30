## **ShoppyCart**
Responsive and Dynamic eCommerce Add to Cart Single Page Application.

## Features
#### 1. Product Display
Fetching and Displaying a list of products from the Fake Store API.
Each Product Card shows Key Information's such as:
- Product Image
- Title
- Price
- Add to Cart button
  
####  2. Add to Cart Functionality
- Users can Add Products to their cart by clicking the "Add to Cart" button.
- If a product is already in the cart, an alert is displayed with the message: **"Item already added to the cart."**
  
#### 3. Cart Management
The current cart item count is displayed in a Navbar component.
Clicking the Cart button in the Navbar opens a modal that contains:
- A list of all products in the cart.
- A "Remove from Cart" button for each product, allowing users to remove items individually.
  
#### 4. Dynamic Cart Updates
- The cart value and item count are updated dynamically when products are added or removed.
- State management ensures seamless updates and efficient data flow across components.
   
####  5. Responsive Design
Optimized for both Desktop and Mobile Devices.
A clean and user-friendly layout ensures a consistent user experience on various screen sizes.

## Tech Stack
- React
- Tailwind CSS
- Javascript

## Deployed - URL
https://sami-shoppycart.netlify.app/

## Project Configurations

### React Project Creation
```bash
 npm create vite@latest
```

### To Install Tailwind CSS
##### Install tailwindcss and @tailwindcss/vite via npm.
```bash
npm install tailwindcss @tailwindcss/vite
```
### To Configure the Vite Plugin
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
### To Install React Router Dom
```bash
 npm install react-router-dom
```

### To Install React Loading Indicators
```bash
 npm install react-loading-indicators
```

### To Import Tailwind CSS
##### Add an @import to your CSS file that imports Tailwind CSS.
```bash
@import "tailwindcss";
```
### To Develop the Project
##### Run Build process with 'npm run dev' 
```bash
  npm run dev
```
