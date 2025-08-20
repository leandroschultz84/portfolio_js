async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/leandroschultz84/portfolio_js/main/data/profile.json';
    const response = await fetch(url);
    return await response.json();
}