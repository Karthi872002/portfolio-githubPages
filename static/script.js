// Sample data - replace these with fetch from Google Sheets in future
const skills = [
    "Python (Django, Flask)",
    "Java",
    "Frappe/ERPNext customization",
    "Git & GitHub",
    "Database: SQLite,PostgreSQL, MongoDB",
    "API Development & Integration"

  ];
  
  const projects = [
    {
      name: "Custom ERPNext Report Builder",
      url: "https://github.com/yourusername/project1",
      desc: "A tool to design dynamic reports for ERPNext, enabling quick insights for business users."
    },
    
    {
      name: "Personal Portfolio",
      url: "https://github.com/Karthi872002/portfolio",
      desc: "My own responsive personal website using JS/Bootstrap (this site)."
    }
  ];
  
  // Inject skills
  const skillsList = document.getElementById('skills-list');
  skills.forEach(skill => {
    const item = document.createElement('li');
    item.className = "list-group-item";
    item.textContent = skill;
    skillsList.appendChild(item);
  });
  
  // Inject projects
  const projectsList = document.getElementById('projects-list');
  projects.forEach(project => {
    const item = document.createElement('li');
    item.className = "list-group-item";
    item.innerHTML = `
      <strong><a href="${project.url}" target="_blank">${project.name}</a></strong>
      <br>
      <span>${project.desc}</span>
    `;
    projectsList.appendChild(item);
  });
  