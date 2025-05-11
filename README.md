#  College Placement & Career Guidance Portal

A web-based portal designed to help students connect with recruiters, apply for job opportunities, and receive career guidance. The system provides a seamless interface for students, administrators, and companies to manage placement-related activities efficiently.

## 🌟 Features

### 👩‍🎓 Student Features
- 📝 **Resume Upload**: Upload and update resumes.
- 🔍 **Job Listings**: View company job postings.
- 📢 **Notifications**: Receive hiring alerts and shortlisting updates.
- 🎯 **Interview Guidance**: Access FAQs, GD tips, and company insights.
- 📚 **Resource Links**: Learn Java, Python, aptitude, reasoning, etc.

### 👨‍💼 Admin Features
- 📌 **Manage Job Listings**: Add/edit/remove job postings.
- 📂 **View Resumes**: Access uploaded student resumes.
- 🚀 **Send Notifications**: Alert students about jobs, deadlines, and shortlisting.
- ✅ **Manage Shortlisting**: Mark students as shortlisted and notify them.
- 🎤 **Interview Guidance Management**: Add/update FAQs and company insights.
- 📖 **Manage Resource Links**: Add/remove links for programming, aptitude, etc.

### 🏢 Company Access
- 📑 **Resume Access**: Browse uploaded resumes based on job needs.
- 🎯 **Shortlisting Students**: Select candidates and notify them via the portal.
- 📌 **Hiring Announcements**: Post job openings, eligibility criteria, and interview schedules.

✅ **Login System for All Roles (Students, Admins, Companies) Included.**

## 🛠️ Tech Stack

### **Frontend**
- React.js (with Tailwind CSS for styling)
- Firebase Cloud Messaging (for push notifications)

### **Backend**
- Node.js + Express.js
- MongoDB (Mongoose for schema management)
- JWT (for authentication)

### **Hosting & Deployment**
- **Frontend:** GitHub Pages / Netlify / Vercel
- **Backend:** Render / Railway.app / Cyclic.sh
- **Database:** MongoDB Atlas

## 🚀 Installation & Setup

### 1️⃣ **Clone the repository**
```sh
 git clone https://github.com/pendemshivani/college_placement_website.git
 cd college-placement-portal
```

### 2️⃣ **Backend Setup**
```sh
 cd backend
 npm install  # Install dependencies
```

- Create a `.env` file inside `backend/` and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
JWT_EXPIRATION=7d
```

- Start the backend server:
```sh
 npm start
```

### 3️⃣ **Frontend Setup**
```sh
 cd ../frontend
 npm install  # Install dependencies
 npm start  # Run the development server
```

## 🔥 API Endpoints

### **Authentication**
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user

### **Students**
- `GET /api/students` – Fetch all students
- `POST /api/students` – Add a new student

### **Admin**
- `POST /api/admin/jobs` – Create a new job listing
- `GET /api/admin/resumes` – View all resumes

### **Companies**
- `GET /api/companies/jobs` – View job postings
- `POST /api/companies/shortlist` – Shortlist a student

## 💡 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push to your branch: `git push origin feature-branch`
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


