import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQItem.css';

export default function FAQItem({ faq, isActive, onClick }) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick}>
        <span>{faq.question}</span>
        {isActive ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div className={`faq-answer ${isActive ? 'active' : ''}`}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}