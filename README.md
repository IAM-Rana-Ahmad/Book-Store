
I've created a book store web app with React, using Redux Toolkit for state management. The app fetches data from an API and displays it with pagination. It also includes functionality to search for books by their title, view full book reviews on another page, and add/remove books to/from the cart. The app is fully responsive and user-friendly.

Here's a brief overview of the components and features:

Home Page (/):

Displays a list of popular books fetched from an API with pagination.
Users can click on "View More" to see the full book review on a separate page.
Users can add books to their cart from this page.
Book Detail Page (/bookDetail):

Shows the full details and review of a selected book.
Users can go back to the home page from here.
Cart Page (/cart):

Lists the books added to the cart.
Users can remove books from the cart.
Displays the total price of the items in the cart.
Navbar Component:

Navigational links to home, about, and contact pages.
Displays the number of items in the cart.
Redux Toolkit:

Manages the app's state, including book data, cart items, and search query.
Uses Redux Toolkit's createSlice and createAsyncThunk for fetching data asynchronously.
Provides actions for adding, removing, and viewing full book details.
Responsive Design:

The app is designed to be fully responsive, ensuring an optimal user experience on various screen sizes.
User-Friendly Features:

The app includes hover effects on navigation links and a custom-styled scrollbar for a visually appealing user interface.
Search Functionality:

Users can search for books by their title, and the displayed results are updated dynamically.
This web app combines the power of React, Redux Toolkit, and responsive design to create an engaging and user-friendly book store experience. Users can browse, search, and manage their cart with ease.
