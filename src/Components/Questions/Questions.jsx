import React, { useState } from 'react';
import './Questions.css';

const QuestionsPage = () => {
  const topicsAndQuestions = {
    "Arrays": [
      "What is an array?",
      "How do you access elements in an array?",
      "How do you insert an element into an array?",
      "How do you delete an element from an array?"
    ],
    "Linked Lists": [
      "What is a linked list?",
      "What are the types of linked lists?",
      "How do you insert an element into a linked list?",
      "How do you delete an element from a linked list?"
    ],
    "Stacks": [
      "What is a stack?",
      "How are stacks implemented?",
      "What are common operations on a stack?",
      "Can you give examples of stack applications?"
    ],
    "Queues": [
      "What is a queue?",
      "How are queues implemented?",
      "What are common operations on a queue?",
      "Can you give examples of queue applications?"
    ],
    "Trees": [
      "What is a tree?",
      "What are the types of trees?",
      "How are trees traversed?",
      "What are some applications of trees?"
    ],
  };

  const [expandedTopic, setExpandedTopic] = useState(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className='nav'></div>
      <div className="head">
        <h1>Placement Prep</h1>
        <p>Welcome to our comprehensive guide for company placements, where you'll find a wealth of resources, strategies, and practice questions to help you ace your interviews and land your dream job.</p>
        {/* Buttons to scroll to sections */}
        <div className="section-buttons">
          <button onClick={() => scrollToSection("arrays")}>Overview</button>
          <button onClick={() => scrollToSection("linked-lists")}>Questions</button>
          <button onClick={() => scrollToSection("stacks")}>Puzzles</button>
          <button onClick={() => scrollToSection("queues")}>Experience</button>
        </div>
      </div>
      <div className="section-overview">
        
      </div>
      <div className="questions-container">
        <h2>Coding Questions</h2>
        <div className="topics-container">
          {Object.keys(topicsAndQuestions).map(topic => (
            <div key={topic} className="topic">
              <div className="topic-header" onClick={() => setExpandedTopic(expandedTopic === topic ? null : topic)}>
                {topic}
                <i className={`fas fa-chevron-${expandedTopic === topic ? 'up' : 'down'}`}></i>
              </div>
              {expandedTopic === topic && (
                <div className="questions-list">
                  {topicsAndQuestions[topic].map((question, index) => (
                    <div key={index} className="question">{question}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
