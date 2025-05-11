import React, { useState } from 'react';
import '../../styles/ShortlistStudents.css';

const ShortlistCandidates = () => {
  const [students, setStudents] = useState([
    { name: 'Pendem Shivani', course: 'Computer Science', shortlisted: true },
    { name: 'Raghu', course: 'Mechanical Engineering', shortlisted: true },
    { name: 'Amulya', course: 'Computer Science', shortlisted: false },
    // Add more students as needed
  ]);

  const handleShortlist = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].shortlisted = !updatedStudents[index].shortlisted;
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h2 className="title">Shortlist Students</h2>
      {students.map((student, index) => (
        <div key={index} className="student-card">
          <h3 className="student-name">{student.name}</h3>
          <p className="student-course">Course: {student.course}</p>
          <button
            onClick={() => handleShortlist(index)}
            className={`shortlist-btn ${student.shortlisted ? 'shortlisted' : ''}`}
          >
            {student.shortlisted ? 'Unshortlist' : 'Shortlist'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShortlistCandidates;
