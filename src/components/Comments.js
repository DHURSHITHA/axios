import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_URL="https://jsonplaceholder.typicode.com/comments";
//above is the mock api url
function Comments() {
    //create a state to store the data from url
    const[comments,setComments]=useState([]);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[body,setBody]=useState("");
    //useEffect runs when the component is loaded
    useEffect(()=>{
        axios.get(API_URL)
        .then(res=>{
            setComments(res.data.slice(0,5));
        })
    },[]);
    const addComments=()=>{
        if(!name||!email||!body)
        {
            alert("Field cannot be empty");
            return;
        }
    
    axios.post(API_URL,{name,email,body,postId:1})
    .then(res=>{
        setComments([...comments,res.data]);
        setName("");
        setEmail("");
        setBody("");
        alert("Comments added successfully");
    });
};

    return (
    <div>
        <h3>Comments List</h3>
        <table className='table table-bordered'>
            <thead>
                <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>BODY</td>
                </tr>
            </thead>
            <tbody>
                {comments.map(comment=>(
                    <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <input
                className="form-control"
                placeholder="Enter body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </td>
            <td>
              <button className="btn btn-primary" onClick={addComments}>
                ADD
              </button>
            </td>
          </tr>
        </tfoot>
        </table>
    </div>
  )
}

export default Comments

// 1️⃣ Importing required things
// import axios from 'axios';


// Imports Axios, a library used to make HTTP requests (GET, POST, etc.) to APIs.

// import React, { useEffect, useState } from 'react'


// Imports React

// useState → to store data (state)

// useEffect → to run code when the component loads

// 2️⃣ API URL
// const API_URL = "https://jsonplaceholder.typicode.com/comments";


// Stores the API link in a constant variable

// This is a mock API that returns comments data

// 3️⃣ Component creation
// function Comments() {


// Creates a functional component named Comments

// 4️⃣ State declaration
// const [comments, setComments] = useState([]);


// comments → variable that holds comments data

// setComments → function to update comments

// [] → initial value (empty array)

// 5️⃣ useEffect hook
// useEffect(() => {


// Runs once when the component is loaded (because dependency array is empty)

// 6️⃣ API call using Axios
// axios.get(API_URL)


// Sends a GET request to the API URL

// .then(res => {


// Runs when the API successfully responds

// res contains the response from the server

// setComments(res.data.slice(0,5));


// res.data → full comments list

// slice(0,5) → takes only the first 5 comments

// setComments() → stores those 5 comments in state

// })


// Ends the then block

// }, []);


// Empty array [] means:

// useEffect runs only once

// Prevents infinite API calls

// 7️⃣ JSX return (UI)
// return (


// Returns the UI of the component

// 8️⃣ Container and heading
// <div>
//     <h3>Comments List</h3>


// div → wrapper

// h3 → heading text

// 9️⃣ Table structure
// <table className='table table-bordered'>


// Creates a table

// Uses Bootstrap classes:

// table → styled table

// table-bordered → adds borders

// 🔟 Table header
// <thead>
//     <td>ID</td>
//     <td>NAME</td>
//     <td>EMAIL</td>
//     <td>BODY</td>
// </thead>


// <thead> → table heading section

// <td> → column names (ID, Name, Email, Body)

// (Note: normally <th> is better than <td> here)

// 1️⃣1️⃣ Table body with data
// <tbody>


// Contains table rows with actual data

// {comments.map(comment => (


// Loops through each comment in comments array

// map() converts data into JSX

// <tr key={comment.id}>


// Creates a new row for each comment

// key helps React track list items efficiently

// <td>{comment.id}</td>
// <td>{comment.name}</td>
// <td>{comment.email}</td>
// <td>{comment.body}</td>


// Displays individual comment details in table cells

// </tr>
// ))}


// Ends row and map() loop

// 1️⃣2️⃣ Closing tags
// </tbody>
// </table>
// </div>
// )


// Closes table, div, and return

// 1️⃣3️⃣ Exporting component
// export default Comments;


// Makes this component available for use in other files

// 🔑 Simple summary

// useState → stores comments data

// useEffect → calls API once when page loads

// axios.get() → fetches data

// map() → displays data in table format

// slice(0,5) → shows only first 5 comments