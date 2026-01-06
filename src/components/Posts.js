// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const API_URL = "https://jsonplaceholder.typicode.com/posts";

// function Posts() {
//     //create a state to store the data from URL
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   //create state to store the edit values
//   const [editId,setEditId]=useState(null);

//   useEffect(() => {
//     axios.get(API_URL)
//       .then(res => setPosts(res.data.slice(0, 5)));
//   }, []);

//   const addPost = () => {
//     if (!title || !body) {
//       alert("Field cannot be empty");
//       return;
//     }

//     axios.post(API_URL, { title, body, userId: 1 })
//       .then(res => {
//         setPosts([...posts, res.data]);
//         setTitle("");
//         setBody("");
//         alert("Post added successfully");
//       });
//   };
//   //start edit function
//   const startEdit=(post)=>{
//     //to store the slected Id
//     setEditId(post.id);
//     setTitle(post.title);
//     setBody(post.body);
//   };

//   //update post- put operation
//   const updatePost=()=>{
//     axios.put(`${API_URL}/${editId}`, {
//         title,body,userId:1
//     })
//     .then(()=>{
//         setPosts(
//             posts.map(p=>
//                 p.id===editId ? {...p,title,body} : p 
//             )
//         )
//         alert("Post updated successfully");
//     })
//   }
//   return (
//     <div>
//       <h3>Post List</h3>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {posts.map(post => (
//             <tr key={post.id}>
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//               <td>
//                 <button className='btn btn-warning' onClick={()=>startEdit(post)}>Edit</button>
//                 <button className='btn btn-warning'onClick={()=>deletePost(post.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//         <tfoot>
//           <tr>
//             <td></td>
//             <td>
//               <input
//                 className="form-control"
//                 placeholder="Enter title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </td>
//             <td>
//               <input
//                 className="form-control"
//                 placeholder="Enter body"
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//               />
//             </td>
//             <td>
//                 {editId?(
//                     <>
//                     <button className='btn btn-success' onClick={updatePost}>Update</button>
//                     <button className='btn btn-warning'onClcik={deletePost}>Cancel</button>
//                     </>
//                 ):
//               <button className="btn btn-primary" onClick={addPost}>
//                 ADD
//               </button>}
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// }

// export default Posts;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setPosts(res.data.slice(0, 5)));
  }, []);

  // ADD POST
  const addPost = () => {
    if (!title || !body) {
      alert("Field cannot be empty");
      return;
    }

    axios.post(API_URL, { title, body, userId: 1 })
      .then(res => {
        setPosts([...posts, res.data]);
        setTitle("");
        setBody("");
        alert("Post added successfully");
      });
  };

  // START EDIT
  const startEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  // UPDATE POST
  const updatePost = () => {
    axios.put(`${API_URL}/${editId}`, {
      title,
      body,
      userId: 1
    })
      .then(() => {
        setPosts(
          posts.map(p =>
            p.id === editId ? { ...p, title, body } : p
          )
        );
        setEditId(null);
        setTitle("");
        setBody("");
        alert("Post updated successfully");
      });
  };

  // DELETE POST ✅
  const deletePost = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setPosts(posts.filter(p => p.id !== id));
        alert("Post deleted successfully");
      });
  };

  // CANCEL EDIT
  const cancelEdit = () => {
    setEditId(null);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h3>Post List</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => startEdit(post)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                className="form-control"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
              {editId ? (
                <>
                  <button
                    className="btn btn-success me-2"
                    onClick={updatePost}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button className="btn btn-primary" onClick={addPost}>
                  ADD
                </button>
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Posts;
