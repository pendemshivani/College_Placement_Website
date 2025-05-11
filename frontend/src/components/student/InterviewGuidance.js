import React from 'react';
import '../../styles/InterviewGuidance.css';

const Section = ({ title, children }) => (
  <section className="section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const List = ({ type = 'disc', items }) => {
  const listClass = type === 'decimal' ? 'list-decimal' : 'list-disc';
  return (
    <ul className={`guidance-list ${listClass}`}>
      {items.map((item, index) => (
        <li key={index}><span className="list-item">{item}</span></li>
      ))}
    </ul>
  );
};

const InterviewGuidance = () => {
  return (
    <div className="guidance-container">
      <div className="guidance-wrapper">
        <h1 className="guidance-heading">🎯 Interview Guidance</h1>

        <Section title="✨ 3 Key Takeaways">
          <List items={[
            "Have a Strong Introduction: A great intro sets a positive tone.",
            "Tell Your Worth: Highlight your achievements and contributions.",
            "Answer Questions Confidently: Practice makes perfect!"
          ]} />
          <p className="note">
            Preparation goes beyond your resume—boost confidence before, during, and after the interview.
          </p>
        </Section>

        <Section title="📌 Before the Interview (7 Tips)">
          <List type="decimal" items={[
            "Research the Company and Role",
            "Prepare Your Success Stories",
            "Know Your Resume",
            "Plan Your Attire",
            "Logistical Planning",
            "Develop Thoughtful Questions",
            "Practice Responses"
          ]} />
        </Section>

        <Section title="🗣️ During the Interview (10 Tips)">
          <List type="decimal" items={[
            "Greet confidently and smile warmly",
            "Speak clearly and stay focused",
            "Listen actively and respond meaningfully",
            "Use STAR method for structured answers",
            "Showcase soft skills",
            "Be authentic and professional",
            "Control nerves with breathing",
            "Clarify questions",
            "Maintain posture and eye contact",
            "Frame challenges positively"
          ]} />
        </Section>

        <Section title="🎯 After the Interview (4 Tips)">
          <List type="decimal" items={[
            "Ask final questions",
            "Send a thank-you note",
            "Reflect and improve",
            "Follow up professionally"
          ]} />
        </Section>

        <Section title="💡 Pro Tips & Insights">
          <List items={[
            "Dress according to culture",
            "Smile and use positive body language",
            "Ask smart questions",
            "Be real and show personality",
            "Use soft skills with examples",
            "Stay calm and focused",
            "End with appreciation"
          ]} />
        </Section>

        <Section title="❓ Common First Impression Questions">
          <List items={[
            "Describe yourself in three words",
            "What do people notice first about you?",
            "How do you introduce yourself?",
            "Tell a great impression story",
            "What makes a strong first impression?"
          ]} />
        </Section>

        <div className="final-thought">
          <h3>Final Thought</h3>
          <p className="final-line">
            A great first impression can be the difference between getting hired or overlooked.
          </p>
          <p><strong>Be prepared, be confident, and most importantly—be yourself. 💼💙</strong></p>
        </div>
      </div>
    </div>
  );
};

export default InterviewGuidance;
