# NoSQL: Social Network API

### Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Deployed Application Link](#deployed-application-link)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

### Description
In this project we build an API for a social network web application that allows users to share their thoughts, react to friends' thoughts, and manage their friend lists. The application is powered by Express.js for routing, MongoDB for data storage and Mongoose for object-document mapping. This API is designed to handle large amounts of unstructured data efficiently.

### User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

### Acceptance Criteria
- The server is started, and Mongoose models are synced with the MongoDB database.
- API routes are available for users and thoughts, supporting GET, POST, PUT, and DELETE operations.
- Users can view data for users and thoughts in formatted JSON.
- Users can create, update, and delete users and thoughts.
- Users can create and delete reactions to thoughts.
- Users can add and remove friends from their friend lists.

### Deployed Application Link
- The following video shows GET, POST PUT and DEL routes from Users being tested in Insomnia:
[https://drive.google.com/file/d/1wDL1OHk6qn1iSmKlvpRU8qmbngwHe0aA/view](https://drive.google.com/file/d/1wDL1OHk6qn1iSmKlvpRU8qmbngwHe0aA/view)

- The following video shows GET, POST PUT and DEL routes from Thoughts being tested in Insomnia:
[https://drive.google.com/file/d/1vrtMrEX_RuwWgKy05bR2id8UQ_SXNOAk/view](https://drive.google.com/file/d/1vrtMrEX_RuwWgKy05bR2id8UQ_SXNOAk/view)

- The following video shows POST and DEL routes from Friends being tested in Insomnia:
[https://drive.google.com/file/d/1hiMFQbRPACQUQNk2GVli_x9IgiMpwaZY/view](https://drive.google.com/file/d/1hiMFQbRPACQUQNk2GVli_x9IgiMpwaZY/view)

- The following video shows POST and DEL routes from Reactions being tested in Insomnia:
[https://drive.google.com/file/d/1WCSX5Xz_kflJsB4pFOAOHg1LXPqogTka/view](https://drive.google.com/file/d/1WCSX5Xz_kflJsB4pFOAOHg1LXPqogTka/view)

### Getting Started
Before you begin, ensure you have MongoDB installed on your machine. You can follow the MongoDB installation guide on The Full-Stack Blog to install MongoDB locally.

### Installation
1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.

### Usage
1. Ensure MongoDB is running locally on your machine.
2. Run the application using `npm start`.
3. Use Insomnia or a similar tool to test the API routes.

### Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit an issue or a pull request.

### Questions
If you have any questions, feel free to reach out to the project maintainers:

- Maintainer Name: Juan Cruz Garcia
- GitHub: [https://github.com/juanx198522](https://github.com/juanx198522)