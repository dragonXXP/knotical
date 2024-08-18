document.addEventListener('DOMContentLoaded', () => {
    const droneVideo = document.getElementById('drone-video');
    const bgVideo = document.getElementById('bg-video');
    const sections = document.querySelectorAll('section');
    const contentElements = document.querySelectorAll('.content');


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                const content = entry.target.querySelector('.content');
                content.classList.add('in-view');
                const texts = content.querySelectorAll('h2, p, ul, .feature, .testimonial');
                texts.forEach((text, index) => {
                    text.style.transitionDelay = `${index * 0.1}s`;
                    text.classList.add('in-view');
                });
            } else {
                entry.target.classList.remove('in-view');
                const content = entry.target.querySelector('.content');
                content.classList.remove('in-view');
                const texts = content.querySelectorAll('h2, p, ul, .feature, .testimonial');
                texts.forEach((text) => {
                    text.classList.remove('in-view');
                });
            }
        });
    }, { threshold: 0.2 });


    sections.forEach(section => {
        observer.observe(section);
    });

/*
    let lastScrollY = window.scrollY;


    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const videoDuration = bgVideo.duration;


        if (currentScrollY > lastScrollY) {
            // Scrolling down
            bgVideo.currentTime = (currentScrollY / document.body.scrollHeight) * videoDuration;
        } else {
            // Scrolling up
            bgVideo.currentTime = ((document.body.scrollHeight - currentScrollY) / document.body.scrollHeight) * videoDuration;
        }


        lastScrollY = currentScrollY;
    });

    bgVideo.addEventListener('loadeddata', () => {
        bgVideo.play();
        bgVideo.pause();
    });
*/
bgVideo.play();
    // Automatically play drone video without controls
    droneVideo.play();
    
  
    
    
    var shouldScale = false; // Flag to check if scaling should start
var scrollThreshold = 200; // Adjust this threshold as needed

window.addEventListener('scroll', function() {
  var video = document.getElementById('drone-video');
  var scrollPosition = window.scrollY;

  // Check if the scroll position exceeds the threshold
  if (scrollPosition > scrollThreshold) {
    shouldScale = true;
  }

  if (shouldScale) {
    var scale = 1 - ((scrollPosition - scrollThreshold) / window.innerHeight) * 0.5; // Adjust the scale factor as needed
    
    // Set the scale transformation
    video.style.transform = 'scale(' + scale + ')';
  }
});
    
   
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const logo = document.querySelector('header img');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
            let scaleFactor = 1 - (window.scrollY / (window.innerHeight * 0.4)); // Adjust 0.5 to change the rate of size reduction
            scaleFactor = Math.max(0.5, scaleFactor); // Limit the minimum scale factor to 0.5
            const originalHeight = logo.offsetHeight;
            const scaledHeight = originalHeight * scaleFactor;
            const heightDifference = originalHeight - scaledHeight;
            const translateY = heightDifference / 1.1; // Calculate the amount to move the image up
            logo.style.transform = `scale(${scaleFactor}) translateY(-${translateY}px)`; // Apply scaling and translation
            header.style.height = scaledHeight + 'px'; // Adjust the height of the header background
        } else {
            header.classList.remove('scrolled');
            logo.style.transform = 'scale(1)'; // Reset the image size when at the top
            header.style.height = 'auto'; // Reset the height of the header background
        }
    });
    
    // Ensure header remains fixed at the top of the page
    window.addEventListener('resize', () => {
        const header = document.querySelector('header');
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = headerHeight + 'px';
    });
    

    
});
