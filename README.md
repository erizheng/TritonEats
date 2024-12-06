# **Triton Eats**
*Triton Eats* is a food rating web application to provide menus, busyness information, and reviews for UC San Diego's on-campus dining hall options. 



## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Architecture and Design](#architecture-and-design)



## **Project Overview**
*Triton Eats* aims to enhance the UCSD dining experience by allowing users to:
- View a collection of detailed dining hall menus.
- Receive live updates on the busyness and distance of dining halls. 
- Query menu choices by allergen, distance, and wait time preferences. 
- Set and save dietary preferences.
- Share and read reviews of dining hall food.



## **Features**
- **Live Menus and Dining Hall Operational Status:** Menus updated quarterly from UCSD HDH, busyness retrieved from Waitz.io API.
- **Dietary Filters:** Filter options by price, dietary preferences, allergens, food wait times, and distance.
- **User Reviews:** Submit and browse reviews for menu items.
- **Accessible UI:** User-friendly navigation designed with responsiveness and simplicity in mind.


## **Tech Stack**
- **Frontend:** React, TypeScript, React Router for routing, Materials-UI for symbols, slider, and menu item cards. 
- **Backend:** Node.js, Express.js.
- **Database:** Firebase Realtime Database (NoSQL).
- **Testing Tools:** Jest and React Testing Library for frontend tests, Supertest for backend tests.


## **Architecture and Design**
This section goes over both key design and architecture decisions made throughout the development of this project. 

### **Architecture**


![Architecture Diagram](Architecture%20Diagram%20TritonEats%20.png)


- **Client-Server Architecture was chosen primarily because**:
  - **Separation of Concerns**: Client-server architecture  divides responsibilities between the two, with the client handling frontend user interaction and the server handling data processing and storage.
  - **Scalability and Flexibility**: The server can be scaled independently of the client due to this modular design.
  - **Performance Optimization**: Complex tasks can be delegated to the server to ensure better performance and resource usage. 
- **Firebase:** Firebase provides a simple and secure authentication system via email, and also supports a NoSQL database for real-time data synchronization. Firebase also offers a generous free tier, which allows a high number of reads and writes during development, and can also scale well as the project grows.
  - **Database Structure**: A NoSQL database was chosen over a SQL database because of its more flexible structure and simplicity, as well as being readily available in Firebase. 
- **RESTful API**: A RESTful architecture was utilized for communication between the frontend and backend to ensure stateless, clear interactions. 


### **Key Design Choices**
#### **Overall Design**
- **React:** React enables the creation of dynamic and responsive user interfaces with fast rendering through its virtual DOM. This ensures a smooth user experience, even as the application grows and handles more data.
- **Component Design:** Adopted reusable functional components in React to simplify code maintenance.
- **Extensibility:** The API is designed with future integrations and modifications in mind, such as adding new menu items and new reviews. 

### **Assumptions**
- **Reliance on Firebase:** It is assumed that authentication will be handled securely and reliably via Firebase, and that the Firebase database will have high uptime and efficiency during peak hours.  
- **Reliance on External Websites:** The web application relies on the Waitz.io services and UCSD HDH's webpage for accurate realtime busyness data and accurate menus. 
- **Scale:** The application primarily serves UC San Diego students and campus affiliates, and it is assumed and intended to not go beyond that scope. 

### Pages

| **Page**  | **Description**                                |
|----------------|------------------------------------------------|
| `Login Page`       | Allows the user to Login    |
| `Home Page`     | Displays UCSD Dining halls and their current busyness/capacity.   |
| `Preferences`  | Allows users to set dietary, busyness, and distance preferences for dining halls and menus.      |
| `Menu`  | Displays the menu for all UCSD Dining Halls. Allows the user to sort and query by dining hall, price, rating, and name.      |
| `Dish Details`  | Displays more detailed information about a specific menu item. Allows the user to view and sort existing reviews, as well as leave their own review.      |


### **Internal API Endpoints**
| **Method** | **Endpoint**           | **Description**                  |
|------------|------------------------|----------------------------------|
| `GET`      | `/api/dishes`           | Retrieves all dishes from the database|
| `GET`      | `/api/dishes/:dish_id`           | Retrieves a dish from the database by ID |
| `GET`     | `/api/dishes/:dish_id/reviews`     | Retrieves the reviews associated with the dish with dish_id. |
| `POST`      | `"/api/dishes/:dish_id/review"`     | Adds a review to the database.      |
