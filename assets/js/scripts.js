/*!
 * Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');

    /*
    Variable responsiveNavItems is an array of elements with id & class of #navbarResponsive and .nav-link .
    From there, each element in the array is given an on-click event listener that 
    */
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Toggle display of tables in Generate Workout section

//Grab elements to work with
const pushWorkoutBtn = document.getElementById("pushBtn");
const pushTable = document.getElementById("push-table-wrapper");

const pullWorkoutBtn = document.getElementById("pullBtn");
const pullTable = document.getElementById("pull-table-wrapper");

const legsWorkoutBtn = document.getElementById("legsBtn");
const legsTable = document.getElementById("legs-table-wrapper");


const toggleTableDisplay = (tableElement) => {
    tableElement.style.display === 'block' ?
    tableElement.style.display = 'none' :
    tableElement.style.display = 'block';
}

pushWorkoutBtn.addEventListener("click", () => {
    toggleTableDisplay(pushTable);
});

pullWorkoutBtn.addEventListener("click", () => {
    toggleTableDisplay(pullTable);
});

legsWorkoutBtn.addEventListener("click", () => {
    toggleTableDisplay(legsTable);
});

