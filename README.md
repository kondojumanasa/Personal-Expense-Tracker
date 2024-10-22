Here’s a README.md file tailored to your Personal Expense Tracker project based on the points you provided:

```markdown
# Personal Expense Tracker API

This is a RESTful API for managing personal financial records, allowing users to record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Dependencies**:
  - `body-parser`: ^1.20.3
  - `dotenv`: ^16.4.5
  - `express`: ^4.21.1
  - `mongoose`: ^8.7.2
  - `nodemon`: ^3.1.7

## API Endpoints

### 1. **Add a New Transaction**
- **Method**: `POST`
- **Endpoint**: `/transactions`
- **Request Body**:
  ```json
  {
      "type": "income",
      "category": "salary",
      "amount": 10000,
      "date": "2024-10-22",
      "description": "work"
  }
  ```
- **Response**:
  - Status: `200 OK`
  - Body: Transaction object.

### 2. **Retrieve All Transactions**
- **Method**: `GET`
- **Endpoint**: `/transactions`
- **Response**:
  - Status: `200 OK`
  - Body: Array of transaction objects.

### 3. **Retrieve a Transaction by ID**
- **Method**: `GET`
- **Endpoint**: `/transactions/:id`
- **Response**:
  - Status: `200 OK`
  - Body: Transaction object.

### 4. **Update a Transaction by ID**
- **Method**: `PUT`
- **Endpoint**: `/transactions/:id`
- **Request Body**:
  ```json
  {
      "type": "expense",
      "category": "bills",
      "amount": 200,
      "date": "2024-10-22",
      "description": "electricity bill"
  }
  ```
- **Response**:
  - Status: `200 OK`
  - Body: Updated transaction object.

### 5. **Delete a Transaction by ID**
- **Method**: `DELETE`
- **Endpoint**: `/transactions/:id`
- **Response**:
  - Status: `200 OK`
  - Body: Confirmation message.

### 6. **Retrieve Summary of Transactions**
- **Method**: `GET`
- **Endpoint**: `/summary`
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
      "totalIncome": 10000,
      "totalExpense": 200,
      "balance": 9800
  }
  ```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database setup.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-expense-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd personal-expense-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of your project with the following content:
```
MONGO_URI=your_mongodb_connection_string
```

### Running the Application

Use the following command to start the server:
```bash
npm run dev
```
This will run the server using Nodemon.

### Postman API Testing

- Use Postman to test each API endpoint.
- Screenshots demonstrating each API call should be added here.

## Screenshots

### 1. Add a New Transaction
![Add Transaction](screenshots/add-transaction.png)
![image alt](https://github.com/kondojumanasa/Personal-Expense-Tracker/blob/ea923012d8586db0c6fb67777c312a1a276d7e52/Screenshot%202024-10-22%20221500.png)

### 2. Retrieve All Transactions
![Get All Transactions](screenshots/get-all-transactions.png)


### 3. Retrieve a Transaction by ID
![Get Transaction by ID](screenshots/get-transaction-id.png)
![image alt](https://github.com/kondojumanasa/Personal-Expense-Tracker/blob/3c120d382e8e4b4afcc1f623514146ab46413718/Screenshot%202024-10-22%20221603.png)

### 4. Update a Transaction
![Update Transaction](screenshots/update-transaction.png)
![image alt](https://github.com/kondojumanasa/Personal-Expense-Tracker/blob/3c120d382e8e4b4afcc1f623514146ab46413718/Screenshot%202024-10-22%20222004.png)

### 5. Delete a Transaction
![Delete Transaction](screenshots/delete-transaction.png)
![image alt](https://github.com/kondojumanasa/Personal-Expense-Tracker/blob/3c120d382e8e4b4afcc1f623514146ab46413718/Screenshot%202024-10-22%20222029.png)

### 6. Retrieve Summary
![Summary](screenshots/get-summary.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Postman](https://www.postman.com/) for API testing.
```

### Notes
- Replace the `yourusername` in the clone URL with your actual GitHub username.
- Update the **Screenshots** section with actual images captured from your Postman API calls.
- Make sure to include the actual **LICENSE** file if applicable.

Feel free to modify any part of the README to better fit your project’s needs!
