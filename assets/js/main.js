document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM Content Loaded");
  
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
    },
    Safari: function() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
  };
  
  console.log("Device detection: Mobile - " + isMobile.any() + ", iOS - " + isMobile.iOS() + ", Safari - " + isMobile.Safari());
  
  // Add device-specific classes to the body
  const body = document.body;
  if (isMobile.any()) {
    body.classList.add('mobile-device');
    
    // Add specific device classes
    if (isMobile.iOS()) body.classList.add('ios-device');
    if (isMobile.Android()) body.classList.add('android-device');
    if (isMobile.Safari()) body.classList.add('safari-browser');
  } else {
    body.classList.add('desktop-device');
  }
  
  // Responsive viewport adjustment (particularly important for iOS Safari)
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
  
  // Safari-specific scroll handling
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
  
  // Mobile navigation toggle with enhanced Safari support
  const navbarToggle = document.querySelector('.navbar-toggle');
  const mainNav = document.querySelector('.main-navigation');
  const navigationList = document.querySelector('.navigation-list');
  
  console.log("Navigation elements:", {
    toggle: navbarToggle ? "Found" : "Not found",
    nav: mainNav ? "Found" : "Not found",
    list: navigationList ? "Found" : "Not found"
  });
  
  // Safari-specific navigation fix
  if (isMobile.Safari() && mainNav) {
    console.log("Applying Safari-specific fixes");
    
    // Force navigation display style on Safari
    mainNav.style.display = "block";
    mainNav.style.right = "-100%";
    mainNav.style.opacity = "0";
    
    if (navigationList) {
      navigationList.style.display = "flex";
      navigationList.style.flexDirection = "column";
    }
    
    // Set all navigation items to be visible with proper styling
    const navItems = mainNav.querySelectorAll('a');
    navItems.forEach(item => {
      item.style.color = "#FFFFFF";
      item.style.display = "block";
      item.style.padding = "15px";
      item.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
    });
  }
  
  if (navbarToggle && mainNav) {
    // Check navigation visibility as a debug measure
    console.log("Initial nav state:", {
      display: window.getComputedStyle(mainNav).display,
      right: window.getComputedStyle(mainNav).right,
      opacity: window.getComputedStyle(mainNav).opacity
    });
    
    // Force repaint to fix Safari initial rendering
    setTimeout(() => {
      if (isMobile.Safari() || isMobile.iOS()) {
        console.log("Forcing repaint for Safari");
        mainNav.style.display = "block";
        mainNav.style.right = "-100%";
        mainNav.style.opacity = "0";
        
        // Force repaint
        void mainNav.offsetWidth;
      }
    }, 50);
    
    navbarToggle.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      
      console.log("Nav toggle clicked");
      
      // Toggle classes
      mainNav.classList.toggle('active');
      navbarToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      
      // Toggle additional navigation styles for Safari
      if (mainNav.classList.contains('active')) {
        console.log("Opening menu");
        mainNav.style.right = "0";
        mainNav.style.opacity = "1";
        
        // Handle scroll locking (especially important for iOS Safari)
        if (isMobile.iOS() || isMobile.Safari()) {
          lockScroll();
        }
      } else {
        console.log("Closing menu");
        mainNav.style.right = "-100%";
        mainNav.style.opacity = "0";
        
        // Handle scroll unlocking
        if (isMobile.iOS() || isMobile.Safari()) {
          unlockScroll();
        }
      }
      
      // Toggle aria-expanded attribute for accessibility
      const expanded = navbarToggle.getAttribute('aria-expanded') === 'true' || false;
      navbarToggle.setAttribute('aria-expanded', !expanded);
      
      // Check navigation visibility after toggle as a debug measure
      setTimeout(() => {
        console.log("Nav state after toggle:", {
          display: window.getComputedStyle(mainNav).display,
          right: window.getComputedStyle(mainNav).right,
          opacity: window.getComputedStyle(mainNav).opacity,
          isActive: mainNav.classList.contains('active')
        });
      }, 50);
    });
    
    // Initialize aria-expanded attribute
    navbarToggle.setAttribute('aria-expanded', 'false');
  }
  
  // Close mobile menu when clicking outside (with Safari enhancements)
  document.addEventListener('click', function(event) {
    if (mainNav && mainNav.classList.contains('active')) {
      if (!event.target.closest('.main-navigation') && !event.target.closest('.navbar-toggle')) {
        console.log("Closing menu from outside click");
        
        mainNav.classList.remove('active');
        navbarToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        navbarToggle.setAttribute('aria-expanded', 'false');
        
        // Additional style removal for Safari
        if (isMobile.Safari() || isMobile.iOS()) {
          mainNav.style.right = "-100%";
          mainNav.style.opacity = "0";
        }
        
        // Handle scroll unlocking on iOS/Safari
        if (isMobile.iOS() || isMobile.Safari()) {
          unlockScroll();
        }
      }
    }
  });
  
  // Close mobile menu when window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mainNav && mainNav.classList.contains('active')) {
      console.log("Closing menu from resize");
      
      mainNav.classList.remove('active');
      navbarToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
      navbarToggle.setAttribute('aria-expanded', 'false');
      
      // Additional style removal for Safari
      if (isMobile.Safari() || isMobile.iOS()) {
        mainNav.style.right = "-100%";
        mainNav.style.opacity = "0";
      }
      
      // Handle scroll unlocking on iOS/Safari
      if (isMobile.iOS() || isMobile.Safari()) {
        unlockScroll();
      }
    }
  });
  
  // Handle clicking on menu items on mobile (with Safari enhancements)
  const mobileMenuItems = document.querySelectorAll('.main-navigation a');
  if (mobileMenuItems) {
    mobileMenuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        console.log("Menu item clicked");
        
        if (window.innerWidth <= 768) {
          // Close the menu when a menu item is clicked
          if (mainNav) {
            mainNav.classList.remove('active');
            
            // Additional style removal for Safari
            if (isMobile.Safari() || isMobile.iOS()) {
              mainNav.style.right = "-100%";
              mainNav.style.opacity = "0";
            }
            
            if (navbarToggle) {
              navbarToggle.classList.remove('active');
              navbarToggle.setAttribute('aria-expanded', 'false');
            }
            document.body.classList.remove('menu-open');
            
            // Handle scroll unlocking on iOS/Safari
            if (isMobile.iOS() || isMobile.Safari()) {
              unlockScroll();
            }
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