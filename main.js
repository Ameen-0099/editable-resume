"use strict";
const from = document.getElementById("resume-form");
const ResumeDisplayElement = document.getElementById("resume-display");
from.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skill = document.getElementById('Skill').value;
    const resumeHtml = `
         <h2><b>Editable Resume</b></h2>
         <h3>Personal Information</h3>
         <p><b>Name:</b><span conteneditable="true">${name}</span></p> 
         <p><b>Email:</b><span conteneditable="true"> ${email}</span></p>  
         <p><b>Phone:</b><span conteneditable="true">${phone}</span></p> 
         
         <h3>Education</h3>
         <p conteneditable = "true">${education}</p>

         <h3 conteneditable = "true">Experience</h3>
         <p>${experience}</p>

         <h3 conteneditable ="true">Skill</h3>
         <p>${skill}</p>
         `;
    if (ResumeDisplayElement) {
        ResumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing');
    }
});
