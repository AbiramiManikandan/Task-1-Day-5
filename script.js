// Resume data in JSON format
const resumeData = {
    "name": "Abirami Manikandan",
    "email": "abiramirajagopal99@gmail.com",
    "phone": "+916382064887",
    "address": "1/99, Middle street, Gurupeedapuram, Kallakuruchi District",
    "summary": "I am an experienced web developer with expertise in JavaScript, HTML, CSS, and various web frameworks.",
    "education": [
        {
            "degree": "Bachelor of Science in Computer Science",
            "university": "Pondicherry University",
            "graduationYear": "2020"
        }
    ],
    "experience": [
        {
            "position": "Web Developer",
            "company": "ABC Company",
            "startDate": "2018",
            "endDate": "2021",
            "responsibilities": [
                "Developed responsive web applications using HTML, CSS, and JavaScript.",
                "Collaborated with cross-functional teams to deliver high-quality software products."
            ]
        }
    ],
    "skills": ["JavaScript", "HTML", "CSS", "React.js", "Node.js", "Git"],
    "languages": ["English", "Tamil"]
};

// Display resume data on the webpage
const displayResume = () => {
    const resumeContainer = document.getElementById("resumeData");
    resumeContainer.innerHTML = `
        <h2>${resumeData.name}</h2>
        <p>Email: ${resumeData.email}</p>
        <p>Phone: ${resumeData.phone}</p>
        <p>Address: ${resumeData.address}</p>
        <h3>Summary</h3>
        <p>${resumeData.summary}</p>
        <h3>Education</h3>
        <p>${resumeData.education[0].degree}, ${resumeData.education[0].university}, Graduated ${resumeData.education[0].graduationYear}</p>
        <h3>Experience</h3>
        <p>${resumeData.experience[0].position}, ${resumeData.experience[0].company}, ${resumeData.experience[0].startDate} - ${resumeData.experience[0].endDate}</p>
        <ul>
            ${resumeData.experience[0].responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
        </ul>
        <h3>Skills</h3>
        <p>${resumeData.skills.join(", ")}</p>
        <h3>Languages</h3>
        <p>${resumeData.languages.join(", ")}</p>
    `;
};

// Call displayResume function when the page loads
window.onload = displayResume;
