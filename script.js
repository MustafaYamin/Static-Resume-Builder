// document.getElementById('gen-rusme').addEventListener('click', () => {
//     const name = document.getElementById('name').value;
//     const education = document.getElementById('education').value;
//     const skills = document.getElementById('skills').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const imageInput = document.getElementById('image-input');
//     const preview = document.getElementById('resume-preview');

//     // Clear previous preview
//     preview.innerHTML = '';

//     // Generate the resume
//     const resumeDiv = document.createElement('div');
//     resumeDiv.classList.add('resume-preview-content');

//     // Add image
//     if (imageInput.files.length > 0) {
//       const img = document.createElement('img');
//       img.src = URL.createObjectURL(imageInput.files[0]);
//       img.alt = "Profile Picture";
//       img.style.width = '100px';
//       img.style.borderRadius = '50%';
//       resumeDiv.appendChild(img);
//     }

//     // Add name
//     if (name) {
//       const nameElem = document.createElement('h2');
//       nameElem.textContent = name;
//       resumeDiv.appendChild(nameElem);
//     }

//     // Add education
//     if (education) {
//       const educationElem = document.createElement('p');
//       educationElem.textContent = `Education: ${education}`;
//       resumeDiv.appendChild(educationElem);
//     }

//     // Add skills
//     if (skills) {
//       const skillsElem = document.createElement('p');
//       skillsElem.textContent = `Skills: ${skills}`;
//       resumeDiv.appendChild(skillsElem);
//     }

//     // Add contact info
//     if (phone || email) {
//       const contactElem = document.createElement('p');
//       contactElem.textContent = `Contact: ${phone} | ${email}`;
//       resumeDiv.appendChild(contactElem);
//     }

//     preview.appendChild(resumeDiv);
//   });

// document.getElementById('gen-rusme').addEventListener('click', () => {
//     const name = document.getElementById('name').value;
//     const education = document.getElementById('education').value;
//     const skills = document.getElementById('skills').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const imageInput = document.getElementById('image-input');
//     const preview = document.getElementById('resume-preview');

//     // Clear previous preview
//     preview.innerHTML = '';

//     // Generate the resume
//     const resumeDiv = document.createElement('div');
//     resumeDiv.classList.add('resume-preview-content');

//     // Add image
//     if (imageInput.files.length > 0) {
//       const img = document.createElement('img');
//       img.src = URL.createObjectURL(imageInput.files[0]);
//       img.alt = "Profile Picture";
//       img.style.width = '100px';
//       img.style.borderRadius = '50%';
//       resumeDiv.appendChild(img);
//     }

//     // Add name
//     const nameElem = document.createElement('p');
//     nameElem.classList.add('resume-field');
//     nameElem.textContent = name;
//     resumeDiv.appendChild(nameElem);

//     // Add education
//     const educationElem = document.createElement('p');
//     educationElem.classList.add('resume-field');
//     educationElem.textContent = `Education: ${education}`;
//     resumeDiv.appendChild(educationElem);

//     // Add skills
//     const skillsElem = document.createElement('p');
//     skillsElem.classList.add('resume-field');
//     skillsElem.textContent = `Skills: ${skills}`;
//     resumeDiv.appendChild(skillsElem);

//     // Add contact info
//     const contactDiv = document.createElement('div');
//     contactDiv.classList.add('contact');
//     const phoneElem = document.createElement('p');
//     phoneElem.classList.add('resume-field');
//     phoneElem.textContent = `Phone: ${phone}`;
//     contactDiv.appendChild(phoneElem);

//     const emailElem = document.createElement('p');
//     emailElem.classList.add('resume-field');
//     emailElem.textContent = `Email: ${email}`;
//     contactDiv.appendChild(emailElem);

//     resumeDiv.appendChild(contactDiv);

//     // Add Edit Button
//     const editButton = document.createElement('button');
//     editButton.textContent = "Edit Resume";
//     editButton.id = "edit-resume";
//     editButton.addEventListener('click', () => toggleEdit(resumeDiv, nameElem, educationElem, skillsElem, phoneElem, emailElem, img));

//     resumeDiv.appendChild(editButton);

//     preview.appendChild(resumeDiv);
//   });

//   function toggleEdit(resumeDiv, nameElem, educationElem, skillsElem, phoneElem, emailElem, img) {
//     // Toggle between editable and view mode
//     if (resumeDiv.classList.contains('editable')) {
//       resumeDiv.classList.remove('editable');

//       // Save changes
//       nameElem.textContent = nameElem.querySelector('input').value;
//       educationElem.textContent = educationElem.querySelector('input').value;
//       skillsElem.textContent = skillsElem.querySelector('input').value;
//       phoneElem.textContent = phoneElem.querySelector('input').value;
//       emailElem.textContent = emailElem.querySelector('input').value;

//       // Update image if changed
//       const newImg = document.createElement('img');
//       newImg.src = img.src;
//       newImg.style.width = '100px';
//       newImg.style.borderRadius = '50%';
//       resumeDiv.insertBefore(newImg, resumeDiv.firstChild);

//     } else {
//       resumeDiv.classList.add('editable');

//       // Make fields editable
//       nameElem.innerHTML = `<input type="text" value="${nameElem.textContent}" />`;
//       educationElem.innerHTML = `<input type="text" value="${educationElem.textContent.replace('Education: ', '')}" />`;
//       skillsElem.innerHTML = `<input type="text" value="${skillsElem.textContent.replace('Skills: ', '')}" />`;
//       phoneElem.innerHTML = `<input type="text" value="${phoneElem.textContent.replace('Phone: ', '')}" />`;
//       emailElem.innerHTML = `<input type="email" value="${emailElem.textContent.replace('Email: ', '')}" />`;

//       // Change image back to input file
//       const fileInput = document.createElement('input');
//       fileInput.type = 'file';
//       fileInput.accept = 'image/*';
//       resumeDiv.insertBefore(fileInput, resumeDiv.firstChild);
//     }
//   }

// const { jsPDF } = window.jspdf; // jsPDF object

// document.getElementById('gen-rusme').addEventListener('click', () => {
//   const name = document.getElementById('name').value;
//   const education = document.getElementById('education').value;
//   const skills = document.getElementById('skills').value;
//   const phone = document.getElementById('phone').value;
//   const email = document.getElementById('email').value;
//   const imageInput = document.getElementById('image-input');
//   const preview = document.getElementById('resume-preview');
//   const downloadButton = document.getElementById('download-pdf');

//   // Clear previous preview
//   preview.innerHTML = '';

//   // Generate the resume
//   const resumeDiv = document.createElement('div');
//   resumeDiv.classList.add('resume-preview-content');

//   // Add image
//   if (imageInput.files.length > 0) {
//     const img = document.createElement('img');
//     img.src = URL.createObjectURL(imageInput.files[0]);
//     img.alt = "Profile Picture";
//     img.style.width = '100px';
//     img.style.borderRadius = '50%';
//     resumeDiv.appendChild(img);
//   }

//   // Add name
//   const nameElem = document.createElement('p');
//   nameElem.classList.add('resume-field');
//   nameElem.textContent = name;
//   resumeDiv.appendChild(nameElem);

//   // Add education
//   const educationElem = document.createElement('p');
//   educationElem.classList.add('resume-field');
//   educationElem.textContent = `Education: ${education}`;
//   resumeDiv.appendChild(educationElem);

//   // Add skills
//   const skillsElem = document.createElement('p');
//   skillsElem.classList.add('resume-field');
//   skillsElem.textContent = `Skills: ${skills}`;
//   resumeDiv.appendChild(skillsElem);

//   // Add contact info
//   const contactDiv = document.createElement('div');
//   contactDiv.classList.add('contact');
//   const phoneElem = document.createElement('p');
//   phoneElem.classList.add('resume-field');
//   phoneElem.textContent = `Phone: ${phone}`;
//   contactDiv.appendChild(phoneElem);

//   const emailElem = document.createElement('p');
//   emailElem.classList.add('resume-field');
//   emailElem.textContent = `Email: ${email}`;
//   contactDiv.appendChild(emailElem);

//   resumeDiv.appendChild(contactDiv);

//   preview.appendChild(resumeDiv);

//   // Show the download button
//   downloadButton.style.display = 'block';

//   // PDF download functionality
//   downloadButton.addEventListener('click', () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text(name, 20, 30);
//     doc.text(`Education: ${education}`, 20, 40);
//     doc.text(`Skills: ${skills}`, 20, 50);
//     doc.text(`Phone: ${phone}`, 20, 60);
//     doc.text(`Email: ${email}`, 20, 70);

//     if (imageInput.files.length > 0) {
//       const img = document.createElement('img');
//       img.src = URL.createObjectURL(imageInput.files[0]);
//       img.onload = function () {
//         doc.addImage(img, 'JPEG', 20, 80, 50, 50); // Add image to PDF
//         doc.save('resume.pdf');
//       };
//     } else {
//       doc.save('resume.pdf');
//     }
//   });

// });

// const { jsPDF } = window.jspdf; // jsPDF object

// let currentResumeData = {}; // Store current resume data to edit later

// document.getElementById('gen-rusme').addEventListener('click', () => {
//   const name = document.getElementById('name').value;
//   const education = document.getElementById('education').value;
//   const skills = document.getElementById('skills').value;
//   const phone = document.getElementById('phone').value;
//   const email = document.getElementById('email').value;
//   const imageInput = document.getElementById('image-input');
//   const preview = document.getElementById('resume-preview');
//   const downloadButton = document.getElementById('download-pdf');
//   const editButton = document.getElementById('edit-resume');

//   // Store the data to allow editing
//   currentResumeData = { name, education, skills, phone, email, imageInput };

//   // Clear previous preview
//   preview.innerHTML = '';

//   // Generate the resume
//   const resumeDiv = document.createElement('div');
//   resumeDiv.classList.add('resume-preview-content');

//   // Add image
//   if (imageInput.files.length > 0) {
//     const img = document.createElement('img');
//     img.src = URL.createObjectURL(imageInput.files[0]);
//     img.alt = "Profile Picture";
//     img.style.width = '100px';
//     img.style.borderRadius = '50%';
//     resumeDiv.appendChild(img);
//   }

//   // Add name
//   const nameElem = document.createElement('p');
//   nameElem.classList.add('resume-field');
//   nameElem.textContent = name;
//   resumeDiv.appendChild(nameElem);

//   // Add education
//   const educationElem = document.createElement('p');
//   educationElem.classList.add('resume-field');
//   educationElem.textContent = `Education: ${education}`;
//   resumeDiv.appendChild(educationElem);

//   // Add skills
//   const skillsElem = document.createElement('p');
//   skillsElem.classList.add('resume-field');
//   skillsElem.textContent = `Skills: ${skills}`;
//   resumeDiv.appendChild(skillsElem);

//   // Add contact info
//   const contactDiv = document.createElement('div');
//   contactDiv.classList.add('contact');
//   const phoneElem = document.createElement('p');
//   phoneElem.classList.add('resume-field');
//   phoneElem.textContent = `Phone: ${phone}`;
//   contactDiv.appendChild(phoneElem);

//   const emailElem = document.createElement('p');
//   emailElem.classList.add('resume-field');
//   emailElem.textContent = `Email: ${email}`;
//   contactDiv.appendChild(emailElem);

//   resumeDiv.appendChild(contactDiv);

//   preview.appendChild(resumeDiv);

//   // Show the download and edit buttons
//   downloadButton.style.display = 'block';
//   editButton.style.display = 'block';

//   // PDF download functionality
//   downloadButton.addEventListener('click', () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text(name, 20, 30);
//     doc.text(`Education: ${education}`, 20, 40);
//     doc.text(`Skills: ${skills}`, 20, 50);
//     doc.text(`Phone: ${phone}`, 20, 60);
//     doc.text(`Email: ${email}`, 20, 70);

//     if (imageInput.files.length > 0) {
//       const img = document.createElement('img');
//       img.src = URL.createObjectURL(imageInput.files[0]);
//       img.onload = function () {
//         doc.addImage(img, 'JPEG', 20, 80, 50, 50); // Add image to PDF
//         doc.save('resume.pdf');
//       };
//     } else {
//       doc.save('resume.pdf');
//     }
//   });

//   // Enable editing functionality
//   editButton.addEventListener('click', () => {
//     // Replace text with input fields for editing
//     nameElem.innerHTML = `<input type="text" value="${nameElem.textContent}" />`;
//     educationElem.innerHTML = `<input type="text" value="${educationElem.textContent.replace('Education: ', '')}" />`;
//     skillsElem.innerHTML = `<input type="text" value="${skillsElem.textContent.replace('Skills: ', '')}" />`;
//     phoneElem.innerHTML = `<input type="text" value="${phoneElem.textContent.replace('Phone: ', '')}" />`;
//     emailElem.innerHTML = `<input type="email" value="${emailElem.textContent.replace('Email: ', '')}" />`;

//     // Change the button text to "Save Changes"
//     editButton.textContent = 'Save Changes';
//     editButton.removeEventListener('click', arguments.callee); // Remove the old event listener
//     editButton.addEventListener('click', () => saveChanges(nameElem, educationElem, skillsElem, phoneElem, emailElem, editButton));
//   });
// });

// // Save changes after editing
// function saveChanges(nameElem, educationElem, skillsElem, phoneElem, emailElem, editButton) {
//   // Get updated values from input fields
//   const updatedName = nameElem.querySelector('input').value;
//   const updatedEducation = educationElem.querySelector('input').value;
//   const updatedSkills = skillsElem.querySelector('input').value;
//   const updatedPhone = phoneElem.querySelector('input').value;
//   const updatedEmail = emailElem.querySelector('input').value;

//   // Update the resume preview with new values
//   nameElem.textContent = updatedName;
//   educationElem.textContent = `Education: ${updatedEducation}`;
//   skillsElem.textContent = `Skills: ${updatedSkills}`;
//   phoneElem.textContent = `Phone: ${updatedPhone}`;
//   emailElem.textContent = `Email: ${updatedEmail}`;

//   // Update the stored data
//   currentResumeData.name = updatedName;
//   currentResumeData.education = updatedEducation;
//   currentResumeData.skills = updatedSkills;
//   currentResumeData.phone = updatedPhone;
//   currentResumeData.email = updatedEmail;

//   // Reset the button text to "Edit Resume"
//   editButton.textContent = 'Edit Resume';
// }

const { jsPDF } = window.jspdf; // jsPDF object

let currentResumeData = {}; // Store current resume data to edit later
let isEditing = false; // Track if in editing mode

document.getElementById('gen-rusme').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const imageInput = document.getElementById('image-input');
  const preview = document.getElementById('resume-preview');
  const downloadButton = document.getElementById('download-pdf');
  const editButton = document.getElementById('edit-resume');

  // Store the data to allow editing
  currentResumeData = { name, education, skills, phone, email, imageInput };

  // Clear previous preview
  preview.innerHTML = '';

  // Generate the resume in view mode
  const resumeDiv = document.createElement('div');
  resumeDiv.classList.add('resume-preview-content');

  // Add image
  if (imageInput.files.length > 0) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(imageInput.files[0]);
    img.alt = "Profile Picture";
    img.style.width = '100px';
    img.style.borderRadius = '50%';
    resumeDiv.appendChild(img);
  }

  // Add name
  const nameElem = document.createElement('p');
  nameElem.classList.add('resume-field');
  nameElem.textContent = name;
  resumeDiv.appendChild(nameElem);

  // Add education
  const educationElem = document.createElement('p');
  educationElem.classList.add('resume-field');
  educationElem.textContent = `Education: ${education}`;
  resumeDiv.appendChild(educationElem);

  // Add skills
  const skillsElem = document.createElement('p');
  skillsElem.classList.add('resume-field');
  skillsElem.textContent = `Skills: ${skills}`;
  resumeDiv.appendChild(skillsElem);

  // Add contact info
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');
  const phoneElem = document.createElement('p');
  phoneElem.classList.add('resume-field');
  phoneElem.textContent = `Phone: ${phone}`;
  contactDiv.appendChild(phoneElem);

  const emailElem = document.createElement('p');
  emailElem.classList.add('resume-field');
  emailElem.textContent = `Email: ${email}`;
  contactDiv.appendChild(emailElem);

  resumeDiv.appendChild(contactDiv);

  preview.appendChild(resumeDiv);

  // Show the download and edit buttons
  downloadButton.style.display = 'block';
  editButton.style.display = 'block';

  // PDF download functionality
  downloadButton.addEventListener('click', () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(currentResumeData.name, 20, 30);
    doc.text(`Education: ${currentResumeData.education}`, 20, 40);
    doc.text(`Skills: ${currentResumeData.skills}`, 20, 50);
    doc.text(`Phone: ${currentResumeData.phone}`, 20, 60);
    doc.text(`Email: ${currentResumeData.email}`, 20, 70);

    if (currentResumeData.imageInput.files.length > 0) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(currentResumeData.imageInput.files[0]);
      img.onload = function () {
        doc.addImage(img, 'JPEG', 20, 80, 50, 50); // Add image to PDF
        doc.save('resume.pdf');
      };
    } else {
      doc.save('resume.pdf');
    }
  });

  // Enable editing functionality
  editButton.addEventListener('click', () => {
    if (isEditing) {
      // Save changes and return to view mode
      saveChanges(nameElem, educationElem, skillsElem, phoneElem, emailElem, editButton);
      isEditing = false;
    } else {
      // Switch to edit mode
      makeEditable(nameElem, educationElem, skillsElem, phoneElem, emailElem);
      editButton.textContent = 'Save Changes';
      isEditing = true;
    }
  });
});

// Function to save changes and return to view mode
function saveChanges(nameElem, educationElem, skillsElem, phoneElem, emailElem, editButton) {
  // Get updated values from input fields
  const updatedName = nameElem.querySelector('input').value;
  const updatedEducation = educationElem.querySelector('input').value;
  const updatedSkills = skillsElem.querySelector('input').value;
  const updatedPhone = phoneElem.querySelector('input').value;
  const updatedEmail = emailElem.querySelector('input').value;

  // Update the resume preview with new values
  nameElem.textContent = updatedName;
  educationElem.textContent = `Education: ${updatedEducation}`;
  skillsElem.textContent = `Skills: ${updatedSkills}`;
  phoneElem.textContent = `Phone: ${updatedPhone}`;
  emailElem.textContent = `Email: ${updatedEmail}`;

  // Update the stored data
  currentResumeData.name = updatedName;
  currentResumeData.education = updatedEducation;
  currentResumeData.skills = updatedSkills;
  currentResumeData.phone = updatedPhone;
  currentResumeData.email = updatedEmail;

  // Reset the button text to "Edit Resume"
  editButton.textContent = 'Edit Resume';
}

// Function to switch to edit mode
function makeEditable(nameElem, educationElem, skillsElem, phoneElem, emailElem) {
  nameElem.innerHTML = `<input type="text" value="${nameElem.textContent}" />`;
  educationElem.innerHTML = `<input type="text" value="${educationElem.textContent.replace('Education: ', '')}" />`;
  skillsElem.innerHTML = `<input type="text" value="${skillsElem.textContent.replace('Skills: ', '')}" />`;
  phoneElem.innerHTML = `<input type="text" value="${phoneElem.textContent.replace('Phone: ', '')}" />`;
  emailElem.innerHTML = `<input type="email" value="${emailElem.textContent.replace('Email: ', '')}" />`;
}