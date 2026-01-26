# React CRUD Application using Axios

##  Overview
This project is a simple React application that demonstrates CRUD (Create, Read, Update, Delete) operations using Axios and a mock REST API. The application fetches posts from an API, displays them in a table, and allows users to add, edit, update, and delete posts.

##  Features
- Fetch posts from an API (Read)
- Add new posts (Create)
- Edit and update existing posts (Update)
- Delete posts (Delete)
- Controlled form inputs
- Conditional rendering for Add / Update modes
- Clean and simple UI using Bootstrap

## Technologies Used
- React (Functional Components)
- React Hooks (`useState`, `useEffect`)
- Axios (HTTP requests)
- JSONPlaceholder (Mock REST API)
- Bootstrap (Styling)

##  API Used


## How It Works
1. When the component loads, posts are fetched using `axios.get()`.
2. The first 5 posts are displayed in a table.
3. Users can:
   - Add a new post using `axios.post()`
   - Edit a post using `axios.put()`
   - Delete a post using `axios.delete()`
4. State is managed using React Hooks.
5. Conditional buttons are shown for Add and Update actions.

##  How to Run the Project
1. Clone the repository
   git clone <repository-url>

2. Install dependencies
   npm install
   
3. Start the application
   npm start



##  Output
- Displays a list of posts in a table
- Allows inline editing and deletion of posts

##  Learning Outcomes
- Understanding CRUD operations in React
- Working with REST APIs using Axios
- Managing state and side effects using hooks
- Building reusable and maintainable components

## Conclusion
This project is a beginner-friendly example to understand how React interacts with APIs and handles CRUD operations efficiently using modern React practices.
