# Blog Website API

A simple Node.js and Express.js API for managing posts, likes and comments on a blog website.

## Features

- Create a new post associated with a user.
- Retrieve all blogs posts.
- Like and unlike a post.
- Comment on a post.
- Delete a to-do item.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB Compass installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sargunkohli152/BlogApp-Backend.git
   cd BlogApp-Backend

2. Install Dependencies

   ```bash
   npm install

3. Configure your environment variables, if not already defined. Create a .env file in the root directory and define the following variables:
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost/BlogApp-db
   #Adjust the values as needed for your environment.

4. Start the server
   ```bash
   npm run dev

## Usage
### Create a Blog Post

- **Endpoint:** `POST /api/v1/posts/create`
- **Request Body:**

  ```json
  {
    "title": "your title",
    "body": "Blog description goes here"
  }

- **Response:**
  ```json
  {
    "title": "your title",
    "task": "Blog description goes here",
    "like": [],
    "comments": [],
    "id": "your unique id",
  }


#### Get All Blog Posts

- **Endpoint:** `GET api/v1/posts`
- **Response:**

  ```json
    {
      "id": "unique blog id",
      "title": "your title",
      "body": "Blog description goes here",
      "like": [],
      "comments": [],
    },
    {
      "id": "unique blog id",
      "title": "your title",
      "body": "Blog description goes here",
      "like": [],
      "comments": [],
    }


#### Like a Post
- **Endpoint:** `POST api/v1/likes/like`
- **Request Body:**

  ```json
  {
    "post": "unique post id",
    "user": "user name"
  }
- **Response:**

  ```json
  {
    "id": "unique blog id",
    "title": "your title",
    "body": "Blog description goes here",
    "like": [],
    "comments": [],
  }

#### Unlike a Post
- **Endpoint:** `POST api/v1/likes/unlike`
- **Request Body:**

  ```json
  {
    "post": "unique post id",
    "like": "like id"
  }
- **Response:**

  ```json
  {
    "deletedLike": {
        "id": "unique like id",
        "post": "unique post id",
        "user": "username"
    },
    "updatedPost": {
        "id": "unique blog id",
        "title": "your title",
        "body": "Blog description goes here",
        "like": [],
        "comments": [],
    }
  }

#### Comment on a Post
- **Endpoint:** `POST api/v1/comments/create`
- **Request Body:**

  ```json
  {
    "post": "unique post id",
    "user": "user name",
    "body": "body of the comment"
  }
- **Response:**

  ```json
  {
    "id": "unique blog id",
    "title": "your title",
    "body": "Blog description goes here",
    "like": [],
    "comments": [],
  }

## Contributing
Contributions are welcome! Please fork the project and create a pull request with your changes.

## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
