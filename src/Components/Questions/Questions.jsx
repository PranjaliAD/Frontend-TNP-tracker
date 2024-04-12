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
          <button onClick={() => scrollToSection("overview")}>Overview</button>
          <button onClick={() => scrollToSection("questions")}>Questions</button>
          <button onClick={() => scrollToSection("puzzles")}>Puzzles</button>
          <button onClick={() => scrollToSection("testimonial")}>Interview Experience</button>
        </div>
      </div>
      <div className="section-overview">
        <div class="container">
          <div class="item">
            <div class="number">15</div>
            <div class="label">Chapters</div>
          </div>
          <div class="item">
            <div class="number">10</div>
            <div class="label">Puzzles</div>
          </div>
          <div class="item">
            <div class="number">8</div>
            <div class="label">Contributers</div>
          </div>
          <div class="item">
            <div class="number">50+</div>
            <div class="label">Problems</div>
          </div>
        </div>
      </div>
      <div className="section-questions">
        <h2>Coding Questions</h2>
        <div className="questions-container">

          <div className="topics-container">
            {Object.keys(topicsAndQuestions).map(topic => (
              <div key={topic} className="topic">
                <div className="topic-header" onClick={() => setExpandedTopic(expandedTopic === topic ? null : topic)}>
                  {topic}
                  <i className={`fas fa-chevron-${expandedTopic === topic ? 'up' : 'down'} chevron ${expandedTopic === topic ? 'rotated' : ''}`}></i>
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
      <div className="section-puzzles">
        
      </div>
    </div>
  );
};

export default QuestionsPage;
