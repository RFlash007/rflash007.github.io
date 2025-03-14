document.addEventListener('DOMContentLoaded', function() {
  // Device detection helpers
  const isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  
  // Add device-specific classes to the body
  const body = document.body;
  if (isMobile.any()) {
    body.classList.add('mobile-device');
    
    // Add specific device classes
    if (isMobile.iOS()) body.classList.add('ios-device');
    if (isMobile.Android()) body.classList.add('android-device');
  } else {
    body.classList.add('desktop-device');
  }
  
  // Responsive viewport adjustment
  const setViewportProperty = () => {
    // Adjust viewport for better mobile experience
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta && window.innerWidth < 768) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    } else if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
  };
  
  setViewportProperty();
  window.addEventListener('resize', setViewportProperty);
  
  // Mobile navigation toggle
  const navbarToggle = document.querySelector('.navbar-toggle');
  const mainNav = document.querySelector('.main-navigation');
  
  if (navbarToggle && mainNav) {
    navbarToggle.addEventListener('click', function(event) {
      event.preventDefault();
      mainNav.classList.toggle('active');
      navbarToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      
      // Toggle aria-expanded attribute for accessibility
      const expanded = navbarToggle.getAttribute('aria-expanded') === 'true' || false;
      navbarToggle.setAttribute('aria-expanded', !expanded);
    });
    
    // Initialize aria-expanded attribute
    navbarToggle.setAttribute('aria-expanded', 'false');
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mainNav && mainNav.classList.contains('active')) {
      if (!event.target.closest('.main-navigation') && !event.target.closest('.navbar-toggle')) {
        mainNav.classList.remove('active');
        navbarToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        navbarToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
  
  // Close mobile menu when window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mainNav && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      navbarToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Handle clicking on menu items on mobile
  const mobileMenuItems = document.querySelectorAll('.main-navigation a');
  if (mobileMenuItems) {
    mobileMenuItems.forEach(item => {
      item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          // Close the menu when a menu item is clicked
          if (mainNav) {
            mainNav.classList.remove('active');
            if (navbarToggle) {
              navbarToggle.classList.remove('active');
              navbarToggle.setAttribute('aria-expanded', 'false');
            }
            document.body.classList.remove('menu-open');
          }
        }
      });
    });
  }
  
  // Add smooth scrolling for in-page navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        
        // Get the header height for offset
        const headerHeight = document.querySelector('.site-header') ? 
                             document.querySelector('.site-header').offsetHeight : 0;
        
        window.scrollTo({
          top: target.offsetTop - headerHeight - 20, // Additional 20px padding
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Handle touch events for mobile - prevent hover states sticking
  if (isMobile.any()) {
    const touchElements = document.querySelectorAll('.btn, .project-card, .blog-card, .skill-tag, .social-icons a');
    touchElements.forEach(element => {
      element.addEventListener('touchend', function() {
        // Force re-paint to fix hover state issues on iOS
        this.style.position = 'relative';
        setTimeout(() => {
          this.style.position = '';
        }, 300);
      });
    });
  }
  
  // Handle fixed positioning on iOS (prevents scroll issues)
  if (isMobile.iOS()) {
    const fixedElements = document.querySelectorAll('.floating-back-btn, .site-header');
    let scrollPosition = 0;
    
    function lockScroll() {
      scrollPosition = window.pageYOffset;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    }
    
    function unlockScroll() {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('width');
      window.scrollTo(0, scrollPosition);
    }
    
    // Apply when the mobile menu is opened
    if (navbarToggle) {
      navbarToggle.addEventListener('click', function() {
        if (document.body.classList.contains('menu-open')) {
          lockScroll();
        } else {
          unlockScroll();
        }
      });
    }
  }
  
  // Optimize responsive images
  const responsiveImages = document.querySelectorAll('img');
  responsiveImages.forEach(img => {
    // Ensure all images have alt text for accessibility
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', '');
    }
    
    // Add loading="lazy" for better performance
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
  
  // Add active class to current page in navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-navigation a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || 
        (currentPath.includes('/blog/') && linkPath === '/blog/') ||
        (currentPath.includes('/projects/') && linkPath === '/projects/')) {
      link.classList.add('active');
    }
  });
}); 