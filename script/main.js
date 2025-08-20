async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/leandroschultz84/portfolio_js/main/data/profile.json';
  const response = await fetch(url);
  return await response.json();
}

(async () => {
  const profileData = await fetchProfileData();

  // Foto de perfil
  document.getElementById('profile.photo').src = profileData.photo;
  document.getElementById('profile.photo').alt = `Foto de ${profileData.name}`;

  // Informações básicas
  document.getElementById('profile.name').textContent = profileData.name;
  document.getElementById('profile.job').textContent = profileData.job;
  document.getElementById('profile.location').textContent = profileData.location;
  document.getElementById('profile.phone').textContent = profileData.phone;
  document.getElementById('profile.phone').href = `tel:${profileData.phone}`;
  document.getElementById('profile.email').textContent = profileData.email;
  document.getElementById('profile.email').href = `mailto:${profileData.email}`;

  // Hard Skills
  const hardSkills = document.getElementById('profile.skills.hardSkills');
  profileData.skills.hardSkills.forEach(skill => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" width="60" height="60">`;
    hardSkills.appendChild(li);
  });

  // Soft Skills
  const softSkills = document.getElementById('profile.skills.softSkills');
  softSkills.innerHTML = '';
  profileData.skills.softSkills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    softSkills.appendChild(li);
  });

  // Idiomas
  const languages = document.getElementById('profile.languages');
  languages.innerHTML = '';
  profileData.languages.forEach(language => {
    const li = document.createElement('li');
    li.textContent = language;
    languages.appendChild(li);
  });

  // Portfólio
  const portfolio = document.getElementById('profile.portfolio');
  portfolio.innerHTML = '';
  profileData.portfolio.forEach(project => {
    const li = document.createElement('li');
    li.innerHTML = `<h3>${project.name}</h3><a href="${project.url}" target="_blank">${project.url}</a>`;
    portfolio.appendChild(li);
  });

  // Experiência Profissional
  const experience = document.getElementById('profile.professionalExperience');
experience.innerHTML = '';

profileData.professionalExperience.forEach(job => {
  const li = document.createElement('li');

  li.innerHTML = `
    <h3>${job.name}</h3>
    <p class="period">${job.period}</p>
    <p>${job.description}</p>
  `;

  experience.appendChild(li);
});


})();