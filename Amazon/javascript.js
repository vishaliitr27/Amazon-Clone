let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// This is for Language selection 

const languageSelector = document.getElementById('languageSelector');
const languageList = document.getElementById('languageList');
const languageItems = document.querySelectorAll('.language-list li');

languageSelector.addEventListener('click', function() {
    // Toggle the "active" class
    this.parentNode.classList.toggle('active');
});

languageItems.forEach(item => {
    item.addEventListener('click', function() {
        const selectedLang = this.dataset.lang;
        languageSelector.textContent = selectedLang; 

        // Close the list after selection
        languageSelector.parentNode.classList.remove('active');

        
    });
});



// this is for on top by clicking on back to top 
  
var backtop = document.getElementById("backtotop");
 backtop.addEventListener("click", function(){
  window.scrollTo({
    top:0,
    behavior: "instant"
  })
 })

