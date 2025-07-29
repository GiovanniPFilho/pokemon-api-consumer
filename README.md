// THIS APPLICATION IS FOR STUDY AND LEARNING PURPOSES //

🧠 How to Think and Structure Scalable APIs in Node.js

🔹 1. Start with the problem: “What does this API need to do?”

In this case:

- Consume the PokéAPI  
- Create custom endpoints (e.g., `/pokemon/:name`)  
- Return filtered data in JSON  

🧠 Thought process:  
"I'm not going to save or modify anything. Just fetch external data and return it formatted."

-------------------------------------------------------------------------------------------------


🔹 2. Use a layered architecture

This separation improves organization, testing, and maintainability.

| Folder         | Purpose                                                    |
|----------------|------------------------------------------------------------|
| `routes/`      | Defines API paths (e.g., `GET /pokemon/:name`)            |
| `controllers/` | Handle requests and send responses                         |
| `services/`    | Business logic (e.g., calling external APIs, formatting)   |
| `models/`      | Define the structure of the data being used                |
| `middlewares/` | Handle validation, errors, authentication, etc.           |

- `src/app.js`: Builds the Express app with routes and middleware  
- `index.js`: Entry point; initializes the app and starts the server  

🧠 Thought process:  
"Each layer has a specific responsibility. This helps keep code clean and scalable."


-------------------------------------------------------------------------------------------------


🔹 3. Entry Point: `index.js`

It performs three main tasks:

- Loads `.env` variables using `dotenv`  
- Imports the configured app from `src/`  
- Starts the server and listens on a port  

🧠 Thought process:  
"`index.js` just boots the app. All app setup lives in `src/`."


-------------------------------------------------------------------------------------------------


🔹 4. Application File: `src/app.js`

Here you:

- Create the Express instance  
- Set the root route (`/`)  
- Register custom routes (e.g., `/pokemon`)  
- Add the error-handling middleware at the end  

🧠 Thought process:  
"`app.js` is the brain that puts all parts of the app together."


-------------------------------------------------------------------------------------------------


🔹 5. Routing: `routes/pokemon.routes.js`

- Defines specific routes like `GET /pokemon/:name`  
- Connects each route to its controller  

🧠 Thought process:  
"Each route knows **who** to call (the controller), but not **how** to handle it — that's the controller’s and service’s job."


-------------------------------------------------------------------------------------------------


🔹 6. Controller: `controllers/pokemon.controller.js`

- Receives route parameters (e.g., `:name`)  
- Calls the related service  
- Sends the response to the client  
- Uses `try/catch` to handle errors and forward them to the error middleware  

🧠 Thought process:  
"The controller is the bridge between the request and the business logic."


-------------------------------------------------------------------------------------------------


🔹 7. Business Logic: `services/pokemon.service.js`

- Makes requests to the PokéAPI using `fetch`  
- Throws an error if the request fails  
- Filters and formats the response before returning it  

🧠 Thought process:  
"Heavy logic or external operations live in the services. The controller just calls and returns."


-------------------------------------------------------------------------------------------------


🔹 8. Data Structure: `models/pokemon.model.js`

Even without a database, it’s useful to define the expected data structure.

🧠 Thought process:  
"Models bring clarity and consistency, even without persistence."


-------------------------------------------------------------------------------------------------


🔹 9. Error Handling: `middlewares/errorHandler.middleware.js`

- Catches errors thrown by controllers or services  
- Logs them to the console  
- Sends a `404` or a generic message to the client  

🧠 Thought process:  
"I don’t want `try/catch` everywhere. Centralized error handling is cleaner."


-------------------------------------------------------------------------------------------------


🧠 How to Reason in Future Projects?

✅ Mental checklist:

1. **What’s the API’s goal?**  
   e.g., fetch weather, create users, retrieve products

2. **What are the endpoints?**  
   e.g., `GET /weather/:city`, `POST /user`

3. **What does each route need to do?**  
   Call an external API? Save to a database? Validate input?

4. **Organize into layers**  
   Route → Controller → Service → (optional: Model/DB)

5. **Centralize error handling**  
   Use a final error middleware in `app.js`
