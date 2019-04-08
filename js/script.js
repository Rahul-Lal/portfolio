var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
  showSlides(slideIndex += n);
}

function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{
    var i = 0; 

  var slides = document.getElementsByClassName("fadingSlide");

  if (n > slides.length)
  {
      slideIndex = 1;
  }
  else if (n < 1)
  {
      slideIndex = slides.length;
  }
  
  for (; i < slides.length; i++)
  {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block";
}


// For Navigation bar

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction()
{
  if (window.pageYOffset >= sticky)
  {
    navbar.classList.add("sticky")
  }
  else
  {
    navbar.classList.remove("sticky");
  }
}