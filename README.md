# 📘 Campus Connect CU

Campus Connect CU is a comprehensive platform designed for Chandigarh University students to connect, collaborate, and share academic resources efficiently. It brings together features like secure authentication, discussion forums, resource sharing, and department-wise organization in a modern web application.

## 📌 Features

- 🎓 **Student Registration & Authentication**: Secure user registration and login system
- 📚 **Academic Resource Sharing**: Upload and download study materials, notes, and resources
- 💬 **Discussion Posts & Comments**: Interactive forums for academic discussions
- 🏛️ **Department-wise Organization**: Content organized by academic departments
- 📱 **Responsive Design**: Optimized for desktop and mobile devices
- 🔒 **Secure JWT Authentication**: Protected routes and user sessions

## 💠 Tech Stack

**Frontend:**
- React 18
- React Bootstrap
- React Router
- Axios

**Backend:**
- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcryptjs

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MySQL Server
- Git

### Installation

**1. Clone the repository:**
```
git clone https://github.com/SyntaxError-Natsu/campus-connect-cu.git
cd campus-connect-cu
```

**2. Backend Setup:**
```
cd backend
npm install
```

**3. Frontend Setup:**
```
cd frontend
npm install
```
**4. Database Setup:**
1. Create a MySQL database
2. Import the schema from `database/schema.sql`
   
   ```
   mysql -u root -p < schema.sql
   ```
4. Configure the database connection in `config/database.js`

## 📈 Running the Application:

**1. Start the backend server:**
```
cd backend
npm run dev
```

**2. Start the frontend development server:**
```
cd frontend
npm start
```

Access the application at `http://localhost:3000`

## 📁 Project Structure

```
Campus-Connect-CU/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── utils/
│ ├── public/
│ └── package.json
├── backend/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── config/
│ └── package.json
├── database/
│ └── schema.sql
└── README.md
```

## 📸 Screenshots

<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
  <div style="width: 300px; text-align: center;">
    <p style="margin-top: 10px; font-weight: 500; text-align: center;">Home Page:</p>
    <img src="https://github.com/user-attachments/assets/706a1f71-d0bc-4dd9-8884-78ee2c2571da" alt="Home Page" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="width: 300px; text-align: center;">
    <p style="margin-top: 10px; font-weight: 500; text-align: center;">Registration:</p>
    <img src="https://github.com/user-attachments/assets/a67fc0c4-dac1-4122-8caa-a3188218aadb" alt="Registration Page" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="width: 300px; text-align: center;">
    <p style="margin-top: 10px; font-weight: 500; text-align: center;">Login:</p>
    <img src="https://github.com/user-attachments/assets/4884a070-2d79-4af4-bd08-acebe64ba8c9" alt="Login Page" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="width: 300px; text-align: center;">
    <p style="margin-top: 10px; font-weight: 500; text-align: center;">Dashboard:</p>
    <img src="https://github.com/user-attachments/assets/5a160c5c-9006-4a84-afc8-3ec8166268a6" alt="Dashboard" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="width: 300px; text-align: center;">
    <p style="margin-top: 10px; font-weight: 500; text-align: center;">Resources:</p>
    <img src="https://github.com/user-attachments/assets/a94b42a2-b361-46d9-8ed4-5f7501d98b08" alt="Resources Page" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
  <div style="width: 300px; text-align: center;">
    <p style="margin-top: 10px; font-weight: 500; text-align: center;">Contact Us:</p>
    <img src="https://github.com/user-attachments/assets/b2f414b3-10a9-45c9-bddc-a8307d3de498" alt="Contact Page" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
</div>

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.

## 👨‍💻 Developer

Developed with ❤️ by [Priyanshu Kumar](https://github.com/SyntaxError-Natsu)

---

⭐ Star this repository if you found it helpful!
