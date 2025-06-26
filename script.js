
    window.addEventListener('load', () =>
      {
        setTimeout(() =>
        {
          document.getElementById('loader').classList.add('hidden');
        }, 1000);
      });
  
      // Navigation
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('navMenu');
      const navLinks = document.querySelectorAll('.nav-link');
      const navbar = document.getElementById('navbar');
  
      hamburger.addEventListener('click', () =>
      {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
  
      navLinks.forEach(link =>
      {
        link.addEventListener('click', () =>
        {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
  
      // Scroll effects
      window.addEventListener('scroll', () =>
      {
        if (window.scrollY > 100)
        {
          navbar.classList.add('scrolled');
        } else
        {
          navbar.classList.remove('scrolled');
        }
  
        // Update active nav link
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
  
        sections.forEach(section =>
        {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          const id = section.getAttribute('id');
  
          if (scrollPos >= top && scrollPos < top + height)
          {
            navLinks.forEach(link =>
            {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${id}`)
              {
                link.classList.add('active');
              }
            });
          }
        });
      });
  
      // Reveal animation
      const reveal = () =>
      {
        const reveals = document.querySelectorAll('.reveal');
  
        reveals.forEach(element =>
        {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
  
          if (elementTop < windowHeight - elementVisible)
          {
            element.classList.add('active');
          }
        });
      };
  
      window.addEventListener('scroll', reveal);
      reveal();
  
      // Timeline animation
      const observeTimeline = () =>
      {
        const timelineItems = document.querySelectorAll('.timeline-item');
  
        const observer = new IntersectionObserver((entries) =>
        {
          entries.forEach((entry, index) =>
          {
            if (entry.isIntersecting)
            {
              setTimeout(() =>
              {
                entry.target.style.opacity = '1';
              }, index * 200);
            }
          });
        });
  
        timelineItems.forEach(item => observer.observe(item));
      };
  
      observeTimeline();
  
      // Project modal
      const modal = document.getElementById('projectModal');
      const modalTitle = document.getElementById('modalTitle');
      const modalDescription = document.getElementById('modalDescription');
      const closeBtn = document.querySelector('.close');
  
      const projectDetails = {
        livedocs: {
          title: 'LiveDocs - Real-time Collaboration',
          description: 'LiveDocs is a powerful document collaboration platform built with Next.js and TypeScript. It features real-time editing, user authentication, document sharing, and version history. The application uses WebSockets for instant synchronization across multiple users, making it perfect for team collaboration.'
        },
        dalle: {
          title: 'Dalle Clone - AI Image Generation',
          description: 'This project replicates the functionality of OpenAI\'s DALL-E using Next.js for the frontend and Express.js for the backend. Users can input text descriptions and generate unique images using AI. The application includes user authentication, image galleries, and the ability to save and share generated artwork.'
        },
        krypt: {
          title: 'KRYPT PAY - Cryptocurrency Platform',
          description: 'KRYPT PAY is a decentralized application (DApp) that enables users to send and receive cryptocurrencies globally. Built with React.js and Solidity smart contracts, it features MetaMask integration, real-time transaction tracking, and a user-friendly interface for managing crypto wallets and transactions.'
        },
        horizon: {
          title: 'Horizon - Modern Banking System',
          description: 'Horizon is a comprehensive banking application that integrates with multiple banks through Plaid API. It provides real-time transaction processing, account aggregation, spending analytics, and budget tracking. The system is built with security and user experience as top priorities.'
        },
        tinyurl: {
          title: 'TINY URL - URL Shortener',
          description: 'A full-stack URL shortening service built with React.js and SpringBoot. It features custom URL aliases, click analytics, QR code generation, and user dashboards for managing shortened links. The backend uses efficient algorithms for generating unique short codes and handles high-volume requests.'
        }
      };
  
      function openModal(project)
      {
        const details = projectDetails[project];
        modalTitle.textContent = details.title;
        modalDescription.textContent = details.description;
        modal.style.display = 'block';
      }
  
      closeBtn.onclick = () =>
      {
        modal.style.display = 'none';
      };
  
      window.onclick = (event) =>
      {
        if (event.target === modal)
        {
          modal.style.display = 'none';
        }
      };
  
      // Form validation and submission
      const contactForm = document.getElementById('contactForm');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      
      // Validation functions
      function validateName(name) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!name) {
          return 'Name is required';
        }
        if (!nameRegex.test(name)) {
          return 'Name must contain only letters and spaces';
        }
        if (name.length > 50) {
          return 'Name must not exceed 50 characters';
        }
        return '';
      }
      
      function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
          return 'Email is required';
        }
        if (!emailRegex.test(email)) {
          return 'Please enter a valid email address';
        }
        if (email.length > 50) {
          return 'Email must not exceed 50 characters';
        }
        return '';
      }
      
      function validateMessage(message) {
        if (!message) {
          return 'Message is required';
        }
        if (message.length > 200) {
          return 'Message must not exceed 200 characters';
        }
        return '';
      }
      
      function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
      }
      
      function clearError(input, errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
      }
      
      // Real-time validation
      nameInput.addEventListener('blur', () => {
        const error = validateName(nameInput.value.trim());
        if (error) {
          showError(nameInput, nameError, error);
        } else {
          clearError(nameInput, nameError);
        }
      });
      
      emailInput.addEventListener('blur', () => {
        const error = validateEmail(emailInput.value.trim());
        if (error) {
          showError(emailInput, emailError, error);
        } else {
          clearError(emailInput, emailError);
        }
      });
      
      messageInput.addEventListener('blur', () => {
        const error = validateMessage(messageInput.value.trim());
        if (error) {
          showError(messageInput, messageError, error);
        } else {
          clearError(messageInput, messageError);
        }
      });
      
      // Clear errors on input
      nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error')) {
          clearError(nameInput, nameError);
        }
      });
      
      emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error')) {
          clearError(emailInput, emailError);
        }
      });
      
      messageInput.addEventListener('input', () => {
        if (messageInput.classList.contains('error')) {
          clearError(messageInput, messageError);
        }
      });
      
      // Form submission
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
      
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
      
        // Validate all fields
        const nameErrorMsg = validateName(name);
        const emailErrorMsg = validateEmail(email);
        const messageErrorMsg = validateMessage(message);
      
        let hasErrors = false;
      
        if (nameErrorMsg) {
          showError(nameInput, nameError, nameErrorMsg);
          hasErrors = true;
        } else {
          clearError(nameInput, nameError);
        }
      
        if (emailErrorMsg) {
          showError(emailInput, emailError, emailErrorMsg);
          hasErrors = true;
        } else {
          clearError(emailInput, emailError);
        }
      
        if (messageErrorMsg) {
          showError(messageInput, messageError, messageErrorMsg);
          hasErrors = true;
        } else {
          clearError(messageInput, messageError);
        }
      
        // If there are errors, don't submit
        if (hasErrors) {
          return;
        }
      
        // Simulate form submission
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
      });
  
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor =>
      {
        anchor.addEventListener('click', function (e)
        {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target)
          {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
  
      // Add typing effect to hero section
      const typeWriter = () =>
      {
        const text = "Software Engineer";
        const heroCode = document.querySelector('.hero-code');
        let i = 0;
  
        const typing = () =>
        {
          if (i < text.length)
          {
            heroCode.innerHTML = `&lt;/&gt;<br>${text.substring(0, i + 1)}<span style="animation: blink 1s infinite">|</span>`;
            i++;
            setTimeout(typing, 100);
          } else
          {
            heroCode.innerHTML = `&lt;/&gt;<br>Software<br>Engineer`;
          }
        };
  
        // Start typing after a delay
        setTimeout(typing, 2000);
      };
  
      // Add blink animation for cursor
      const style = document.createElement('style');
      style.innerHTML = `
              @keyframes blink {
                  0%, 50% { opacity: 1; }
                  51%, 100% { opacity: 0; }
              }
          `;
      document.head.appendChild(style);
  
      // Initialize typing effect
      window.addEventListener('load', typeWriter);
  
      // Add parallax effect to hero section
      window.addEventListener('scroll', () =>
      {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image-container');
  
        if (heroImage && scrolled < window.innerHeight)
        {
          heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
      });
  
      // Add hover effect to skill cards
      const skillCards = document.querySelectorAll('.skill-card');
  
      skillCards.forEach(card =>
      {
        card.addEventListener('mouseenter', function ()
        {
          this.style.transform = 'translateY(-10px) scale(1.05)';
        });
  
        card.addEventListener('mouseleave', function ()
        {
          this.style.transform = 'translateY(-5px) scale(1)';
        });
      });    