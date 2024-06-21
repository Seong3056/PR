document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const pages = document.querySelectorAll('.page');
    const pageHeight = windowHeight / pages.length;
  
    pages.forEach((page, index) => {
      const pagePosition = index * pageHeight;
      const nextPagePosition = (index + 1) * pageHeight;
  
      if (scrollPosition >= pagePosition && scrollPosition < nextPagePosition) {
        page.style.transform = `rotateY(${(scrollPosition - pagePosition) / pageHeight * 180}deg)`;
      } else if (scrollPosition >= nextPagePosition) {
        page.style.transform = 'rotateY(180deg)';
      } else {
        page.style.transform = 'rotateY(0deg)';
      }
    });
  });
  