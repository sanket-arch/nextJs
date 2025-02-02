# Next.js Project Documentation

## 📌 Next.js Documentation

- Official Docs: [Next.js Documentation](https://nextjs.org/docs)

## 📁 Folder Structure & Routing

- The **folder structure** determines the routing of the app.
- **Layout** defines the overall layout of the application.
- `page.jsx` is considered **dynamic content** that will be loaded in place of `{children}` in `layout.jsx`.
- You can define **separate layouts** for each route (i.e., folder).
- You can use `loading.jsx` inside any route to display a loader while the component is being loaded.
- A common error layout can be defined at the **app level** to display errors across all routes.

---

## 🔗 Making API in Next.js

1. **Create an ****\`\`**** folder** inside the `app` folder.
2. Inside the `api` folder, create subfolders with route names.
3. Inside each route folder, create a `route.js` file to handle requests.

### Example API Route:

```javascript
export function GET(request) {
    return new Response(JSON.stringify({ message: "Hello, API!" }), {
        headers: { "Content-Type": "application/json" },
    });
}
```

### Dynamic Routes:

- To create a **dynamic route**, use a dynamic folder, e.g., `[id]`.
- Example:
  - `/app/api/products/[id]/route.js` will handle requests to `/api/products/123`.

### Parameters in API Routes:
- NextRequest: [NextRequest Docs](https://nextjs.org/docs/app/api-reference/functions/next-request)
- NextResponse: [NextResponse Docs](https://nextjs.org/docs/app/api-reference/functions/next-response)
```javascript
/**
 * @param {NextRequest} request - Provides access to headers, method, body, cookies, etc.
 * @param {Object} params - Contains dynamic route parameters.
 */
export function GET(request, { params }) {
    return new Response(`Product ID: ${params.id}`);
}
```

---

## 🛠 Connecting to MongoDB

- Official Docs: [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- Steps to connect MongoDB with Next.js:
  1. Install Mongoose: `npm install mongoose`
  2. Setting Up Mongoose Connection
    Create a `db.js` file to handle MongoDB connection.

    ```javascript
    const mongoose = require('mongoose');

    const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("MongoDB Connected");
        } catch (error) {
            console.error("MongoDB Connection Failed", error);
            process.exit(1);
        }
    };
    
    module.exports = connectDB;
    ```
  3. Define a schema:
     ```javascript
     import mongoose from 'mongoose';

     const UserSchema = new mongoose.Schema({
         name: String,
         email: {
            type: String,
            required: true
         },
     });

     export default mongoose.models.User || mongoose.model("User", UserSchema);
     ```

## 🔄 CRUD Operations

### ➕ Create (Insert a User)
```javascript
const User = require('./models/User');

const createUser = async () => {
    try {
        const user = new User({ name: "John Doe", email: "john@example.com", age: 30 });
        await user.save();
        console.log("User Created:", user);
    } catch (error) {
        console.error("Error creating user:", error);
    }
};
```

### 📖 Read (Fetch Users)
```javascript
const getUsers = async () => {
    try {
        const users = await User.find();
        console.log("Users:", users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};
```

### ✏️ Update (Modify User Data)
```javascript
const updateUser = async (id) => {
    try {
        const user = await User.findByIdAndUpdate(id, { age: 35 }, { new: true });
        console.log("User Updated:", user);
    } catch (error) {
        console.error("Error updating user:", error);
    }
};
```

### ❌ Delete (Remove a User)
```javascript
const deleteUser = async (id) => {
    try {
        await User.findByIdAndDelete(id);
        console.log("User Deleted");
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};
```

## 🎯 Summary
- Connect MongoDB using Mongoose.
- Define a Schema and Model.
- Perform Create, Read, Update, and Delete operations.
---

## 🚀 Git Commands

```sh
git push -u origin main
```

This command pushes changes to the main branch and sets upstream tracking.

---

## 🎯 Summary

- Next.js routing is folder-based.
- Define layouts and loaders at route or app level.
- APIs are structured inside the `api` folder.
- Use dynamic folders for dynamic routes.
- Connect Next.js to MongoDB using Mongoose.

Happy Coding! 🚀

