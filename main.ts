const from = document.getElementById("resume-form") as HTMLFormElement
const ResumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

from.addEventListener('submit',(event:Event)=>{
      event.preventDefault();

      const name = (document.getElementById('name')as HTMLInputElement).value
      const email = (document.getElementById('email')as HTMLInputElement).value
      const phone = (document.getElementById('phone')as HTMLInputElement).value
      const education = (document.getElementById('education')as HTMLInputElement).value
      const experience = (document.getElementById('experience')as HTMLInputElement).value
      const skill = (document.getElementById('Skill')as HTMLInputElement).value

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

       if(ResumeDisplayElement){
             ResumeDisplayElement.innerHTML= resumeHtml
       }else{
             console.error('The resume display element is missing')
       }

    })

  