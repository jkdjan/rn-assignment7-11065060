# rn-assignment7-11065060
# Screenshots
![alt text](<WhatsApp Image 2024-07-12 at 16.57.03_b40d9a71.jpg>)
![alt text](<WhatsApp Image 2024-07-12 at 16.57.03_4ac78ba6.jpg>)
![alt text](<WhatsApp Image 2024-07-12 at 16.57.03_51deca13.jpg>)
![alt text](<WhatsApp Image 2024-07-12 at 16.57.04_3e19054c.jpg>)
![alt text](<WhatsApp Image 2024-07-12 at 16.57.05_6c596caa.jpg>)
![alt text](<WhatsApp Image 2024-07-12 at 16.57.05_1ca84105.jpg>)

# Shopping Application
This is a shopping cart application created with React and JavaScript. Users can view available products, add them to their carts, delete them, and read item information.

# Features
The application includes three distinct screens with a drawer to ensure easy navigation:
Home Screen
Product Details Screen
Cart Screen
Drawer Navigation
Home Screen
View a list of products.
Products are displayed in a grid using FlatList.
Fetches products from https://fakestoreapi.com/products using axios.
Product Details Screen
View product details in a modal.
Displays product images, titles, descriptions, and prices.
Allows adding items to the cart.
Cart Screen
View and manage cart items.
See the total price of items in the cart.
Allows removing items from the cart.
Retrieves cart items from AsyncStorage to maintain state between sessions.
Drawer Navigation
Navigate between different sections of the app.
Utilizes React Navigation for smooth transitions.

# State Management
useState: Manages local state such as cart items, products, and loading status.
useEffect: Fetches data and performs side effects.
Data Storage
AsyncStorage: Saves cart items between sessions, ensuring persistence.
Navigation
React Navigation: Incorporates stack and drawer navigation for easy movement between screens.

# Components
Home Screen (HomeScreen.js):
Fetches products using axios.
Displays products in a grid using FlatList.
Displays product details in a modal.
Adds items to the cart.
Cart Screen (CartScreen.js):
Retrieves cart items from AsyncStorage.
Displays cart items and the total price.
Allows removing items from the cart.
ProductItem.js:
Displays product images, titles, descriptions, and prices.
Allows adding items to the cart.
App Component (App.js):
Enables navigation using DrawerNavigator and StackNavigator.