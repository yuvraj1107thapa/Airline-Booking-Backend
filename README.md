<p align="center">
  <strong>
    <h1 align="center">Airline Booking Backend</h1>
  </strong>
  <p align="center">
    A robust and scalable backend system built for an airline booking platform.
    <br />
  </p>
</p>

---

### About the Project

The Airline Booking Backend is a microservices-based system that provides a seamless experience for users booking flights and querying flight details. It includes high-performance flight search, secure booking and payment processing, advanced concurrency controls, and real-time notifications. The system is designed to be scalable, maintainable, and capable of handling complex airline operations with ease.

---

### Features & Microservices

#### 1. Search & Flight Service
- **Flight Search:**  
  Users can query flights based on source, destination, journey date, and additional filters.
- **Pagination & Sorting:**  
  Results are paginated and sorted by best available flights (based on departure time and price).
- **City & Airport Management:**  
  Provides routes to create, update, delete, and fetch details for cities and airports.

#### 2. Booking Service
- **Seat Reservation & Payment:**  
  Ensures that once a booking process begins, the price remains locked.
- **Concurrency Control:**  
  Implements mechanisms to handle multiple concurrent booking attempts for the same seat.
- **Asynchronous Processing:**  
  Publishes messages to RabbitMQ for tasks like sending confirmation emails and SMS.

#### 3. Reminder Service
- **Automated Reminders:**  
  Sends timely notifications for online check-in and boarding passes.
- **Scheduling:**  
  Uses Cron Jobs to schedule tasks (e.g., notifications 48 hours prior to departure).

#### 4. API Gateway & Notification Service
- **API Gateway:**  
  Aggregates responses from various microservices and handles tasks such as rate limiting and authentication.
- **Notification Service:**  
  Sends real-time email and SMS notifications using third-party integrations (e.g., Twilio, SendGrid).

---

### High-Level System Design

#### Architecture Diagram
![High-Level Architecture Diagram](https://github.com/user-attachments/assets/52be1a7e-ad1a-444e-a87a-a4c8879cc0ba)

#### Workflow
1. **Client Interaction:**  
   - Clients (web or mobile applications) initiate requests to the system.
   - These requests enter the system via the Load Balancer, not directly to the backend services.

2. **Load Balancer:**  
   - Distributes incoming requests across multiple backend servers based on server health, load, and request type.
   - Ensures high availability and optimal resource utilization.

3. **API Gateway:**  
   - Serves as the single entry point for all client requests.
   - Performs critical functions such as:
     - **Authentication & Authorization:** Verifies user credentials and permissions.
     - **Rate Limiting:** Controls the number of requests to prevent abuse.
     - **Request Routing:** Forwards requests to the appropriate microservices.
     - **Response Aggregation:** Combines responses from multiple services if needed.

4. **Microservices Layer:**  
   - **Search & Flight Service:**  
     Processes flight search queries with advanced filtering and manages city/airport data.
   - **Booking Service:**  
     Manages flight bookings, seat reservations, and payment processing with strong concurrency controls.
   - **Reminder Service:**  
     Handles asynchronous operations like sending reminders using scheduled Cron Jobs.
   - **Notification Service:**  
     Delivers real-time alerts via email and SMS through third-party integrations.

5. **Orchestration & Asynchronous Communication:**  
   - Utilizes a Message Queue (RabbitMQ) to decouple services and handle background tasks.
   - The Orchestration Layer coordinates multi-step processes (e.g., booking followed by notification).

6. **Data Storage & Scalability:**  
   - Critical data (user profiles, flight schedules, bookings) is stored in a relational database ensuring ACID compliance.
   - Each microservice is designed to scale horizontally, with load balancers ensuring fault tolerance and efficient traffic distribution.

---

### Technologies Used
<details>
  <summary><strong>Node.js</strong></summary>
  - Fast, non-blocking runtime ideal for handling concurrent requests.
</details>

<details>
  <summary><strong>MySQL</strong></summary>
  - ACID compliant RDBMS for consistent booking and user data management.
</details>

<details>
  <summary><strong>RabbitMQ</strong></summary>
  - Enables asynchronous inter-service communication.
</details>

<details>
  <summary><strong>AWS EC2</strong></summary>
  - Provides scalable cloud infrastructure.
</details>

<details>
  <summary><strong>API Gateway</strong></summary>
  - Serves as a reverse proxy to aggregate and manage API calls.
</details>

<details>
  <summary><strong>Kubernetes</strong></summary>
  - Automates container deployment, scaling, and management.
</details>

---

### Getting Started

#### Prerequisites
- Node.js (v16+)
- MySQL (v8+)
- RabbitMQ
- Docker (optional)

#### Local Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yuvraj1107thapa/airline-booking-backend.git
   cd airline-booking-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add required configurations (e.g., database URL, RabbitMQ credentials).

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Access the API:**
   - Default endpoint: [http://localhost:3000/api](http://localhost:3000/api)

### Running with Docker

1. **Build the Docker image:**
   ```bash
   docker build -t airline-booking-backend .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 airline-booking-backend
   ```

### Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.