import React from 'react';
import NewsArticle from './NewsArticle';

export default {
  title: 'Templates/NewsArticle',
  component: NewsArticle,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eUiIyWFv22JiCHDYHgkIGZ/Design-System?node-id=6-9',
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Breaking: Local Cat Discovers Advanced Method of Obtaining Treats',
    author: 'Sarah Mitchell',
    publishDate: '2025-11-03T14:30:00Z',
    lead: 'In a groundbreaking development that has captured the attention of pet owners worldwide, a local feline has reportedly discovered an innovative approach to treat acquisition that experts are calling "revolutionary."',
    paragraphs: [
      'The discovery was made Tuesday morning when Whiskers, a 3-year-old tabby cat, demonstrated what researchers are describing as "unprecedented strategic thinking" in her approach to treat procurement. The technique, which involves a complex series of purrs, head bumps, and what experts term "tactical cute positioning," has proven remarkably effective.',
      'Dr. Rebecca Thompson, a leading animal behaviorist at the University of Pet Sciences, observed the phenomenon firsthand. "What we\'re seeing here represents a significant evolution in feline-human interaction patterns," Thompson explained. "The level of sophistication in Whiskers\' approach suggests cats may be far more strategic in their thinking than we previously understood."',
      'The breakthrough has implications beyond the immediate household. Pet industry analysts predict this discovery could revolutionize the way cats and humans interact, potentially leading to more efficient treat distribution systems and improved inter-species communication protocols.',
      'Local pet store owner Marcus Rodriguez has already reported a 300% increase in treat sales since news of the discovery broke. "People are coming in asking for \'the good stuff\' that cats apparently prefer," Rodriguez noted. "I\'ve never seen anything like it."',
      'Whiskers herself remained unavailable for comment, though sources close to the situation report she was last seen napping in a sunny spot near her food bowl, apparently satisfied with her newfound fame and the resulting increase in treat accessibility.',
    ],
  },
};

export const TechNews = {
  args: {
    title: 'Revolutionary AI System Learns to Generate Perfect Cat Videos',
    author: 'Dr. Elizabeth Thompson-Williams',
    publishDate: '2025-11-02T16:45:00Z',
    lead: 'Researchers at the Institute of Digital Feline Studies have developed an artificial intelligence system capable of generating cat videos so realistic and entertaining that even actual cats stop to watch them.',
    paragraphs: [
      'The breakthrough came after months of training the AI on millions of hours of cat footage, teaching it to understand the subtle nuances of feline behavior that make certain videos irresistibly watchable.',
      'Initial tests show that the AI-generated videos achieve a 98% "aww factor" rating among human viewers and an unprecedented 85% attention rate among actual cats, who typically ignore screens entirely.',
      'The technology could revolutionize content creation for pet-focused social media platforms and provide endless entertainment for cat owners worldwide.',
    ],
  },
};