"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".navbar"),s=document.querySelectorAll(".nav-link"),t=document.querySelector(".navbar-collapse"),c=document.querySelector(".navbar-toggler"),n=document.querySelector(".navbar-brand"),o=document.querySelector(".fas"),d=document.querySelector(".fax");c.addEventListener("click",function(){o.classList.toggle("hide"),d.classList.toggle("hide")}),s.forEach(function(e){return e.addEventListener("click",function(){t.classList.remove("show"),o.classList.remove("hide"),d.classList.add("hide")})});n.addEventListener("click",function(){t.classList.remove("show"),o.classList.remove("hide"),d.classList.add("hide")}),window.addEventListener("scroll",function(){30<=window.scrollY?e.classList.add("shadow-bg"):e.classList.remove("shadow-bg")}),c.addEventListener("click",function(){0<=window.scrollY?e.classList.add("shadow-bg"):e.classList.remove("shadow-bg")})});