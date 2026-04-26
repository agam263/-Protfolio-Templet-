import { Navbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { Projects } from '../components/Projects.js';
import { About } from '../components/About.js';
import { Contact } from '../components/Contact.js';
import { Footer } from '../components/Footer.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  if (app) {
    app.innerHTML = `
      ${Navbar()}
      ${Hero()}
      ${Projects()}
      ${About()}
      ${Contact()}
      ${Footer()}
    `;
    
    // Initialize animations after the DOM has been populated
    // Delay slightly to ensure browser has painted the elements
    setTimeout(() => {
      initAnimations();
    }, 100);
  }
});
