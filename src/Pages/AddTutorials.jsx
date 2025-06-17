import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const AddTutorials = () => {
  const {user} = use(AuthContext)
  const handleAddTutorials = e => {
      e.preventDefault()
  const form = e.target;

  const formData = new FormData(form)
  const newtutorials = Object.fromEntries(formData.entries())
  newtutorials.email = user?.email
  newtutorials.likedBy = []
  //save tutorials data 
  fetch(`${import.meta.env.VITE_API_URL}/add-tutorials`,{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(newtutorials),
  }).then(res=> res.json())
  .then(data => {
    console.log(data);
    form.reset();
  })
  .catch(err => {
    console.log('Failed to add tutorial:', err.message);
  })

  console.log(newtutorials);
  }
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf4ff] via-[#fae8ff] to-[#f0abfc] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-fuchsia-600">Add New Tutorial</h2>

        <form onSubmit={handleAddTutorials} className="space-y-6">

          {/* 1st Line: User Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-fuchsia-700">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="Your name"
                value={user?.displayName || ''}
                className="w-full border border-fuchsia-400 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                 readOnly
                
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-fuchsia-700">Email</label>
              <input
                type="email"
                name="email"
                value={user?.email || ''}
                placeholder="Your email"
                className="w-full border border-fuchsia-400 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                readOnly
                
              />
            </div>
          </div>

          {/* 2nd Line: Image */}
          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Tutorial Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full border border-fuchsia-400 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              required
            />
          </div>

          {/* 3rd Line: Language + Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-fuchsia-700">Language</label>
              <input
                type="text"
                name="language"
                placeholder="E.g. JavaScript"
                className="w-full border border-fuchsia-400 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-fuchsia-700">Price (USD)</label>
              <input
                type="number"
                name="price"
                placeholder="$99"
                className="w-full border border-fuchsia-400 px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Description</label>
            <textarea
              name="description"
              placeholder="Write tutorial description..."
              rows="4"
              className="w-full border border-fuchsia-400 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              required
            />
          </div>

          {/* Review */}
          {/* <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Review</label>
            <input
              type="number"
              name="review"
              value="0"
              readOnly
              className="w-full border border-fuchsia-400 px-4 py-2 rounded-md shadow-md bg-gray-100"
            />
          </div> */}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 rounded-md shadow-lg transition cursor-pointer"
            >
              Add Tutorial
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
