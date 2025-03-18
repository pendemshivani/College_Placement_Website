import React, { useState } from 'react';

const ShortlistStudents = () => {
  const [students, setStudents] = useState([
    { name: 'John Doe', course: 'Computer Science', shortlisted: false },
    { name: 'Jane Smith', course: 'Mechanical Engineering', shortlisted: false },
    // Simulate other students
  ]);

  const handleShortlist = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].shortlisted = !updatedStudents[index].shortlisted;
    setStudents(updatedStudents);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Shortlist Students</h2>
      {students.map((student, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-2 rounded">
          <h3 className="font-semibold">{student.name}</h3>
          <p>Course: {student.course}</p>
          <button
            onClick={() => handleShortlist(index)}
            className={`p-2 rounded ${student.shortlisted ? 'bg-green-600' : 'bg-gray-600'} text-white`}
          >
            {student.shortlisted ? 'Unshortlist' : 'Shortlist'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShortlistStudents;
