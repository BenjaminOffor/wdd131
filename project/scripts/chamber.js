const directoryData = [
    {
      "name": "Tech Innovators Ltd.",
      "address": "123 Innovation St, Accra, Ghana",
      "phone": "+233 24 123 4567",
      "website": "https://techinnovators.com",
      "image": "images/tech-innovators.png",
      "level": "Gold"
    },
    {
      "name": "Global Traders Inc.",
      "address": "45 Market Road, Kumasi, Ghana",
      "phone": "+233 54 987 6543",
      "website": "https://globaltraders.com",
      "image": "images/global-traders.png",
      "level": "Silver"
    },
    {
      "name": "Green Energy Solutions",
      "address": "789 Eco Drive, Tamale, Ghana",
      "phone": "+233 20 876 5432",
      "website": "https://greenenergy.com",
      "image": "images/green-energy.png",
      "level": "Member"
    },
    {
      "name": "Financial Services Hub",
      "address": "102 Finance Ave, Takoradi, Ghana",
      "phone": "+233 55 345 6789",
      "website": "https://financehub.com",
      "image": "images/finance-hub.png",
      "level": "Gold"
    },
    {
      "name": "AgroTech Farms",
      "address": "67 Agri Street, Cape Coast, Ghana",
      "phone": "+233 25 678 9012",
      "website": "https://agrotechfarms.com",
      "image": "images/agrotech-farms.png",
      "level": "Silver"
    },
    {
      "name": "HealthCare Plus",
      "address": "88 Wellness Rd, Accra, Ghana",
      "phone": "+233 30 456 7890",
      "website": "https://healthcareplus.com",
      "image": "images/healthcare-plus.png",
      "level": "Member"
    },
    {
      "name": "Digital Solutions Agency",
      "address": "150 Web Drive, Tema, Ghana",
      "phone": "+233 28 654 3210",
      "website": "https://digitalsolutions.com",
      "image": "images/digital-solutions.png",
      "level": "Gold"
    }
  ];
  
  function renderDirectory() {
    const container = document.getElementById('directory-list');
    directoryData.forEach(biz => {
      const card = document.createElement('div');
      card.className = 'directory-card';
  
      card.innerHTML = `
        <img src="${biz.image}" alt="${biz.name}">
        <h3>${biz.name}</h3>
        <p><strong>Address:</strong> ${biz.address}</p>
        <p><strong>Phone:</strong> ${biz.phone}</p>
        <p><strong>Membership Level:</strong> ${biz.level}</p>
        <p><a href="${biz.website}" target="_blank">Visit Website</a></p>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Update year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Render directory on page load
  renderDirectory();
  