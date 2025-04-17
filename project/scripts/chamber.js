const directoryData = [
    {
        "name": "Tech Innovators Ltd.",
        "address": "123 Innovation St, Accra, Ghana",
        "phone": "+233 24 123 4567",
        "website": "[https://techinnovators.com](https://techinnovators.com)",
        "image": "images/tech-innovators.png",
        "level": "Gold",
        "dedicated": "2010, January, 15",
        "area": 25000
      },
      {
        "name": "Global Traders Inc.",
        "address": "45 Market Road, Kumasi, Ghana",
        "phone": "+233 54 987 6543",
        "website": "[https://globaltraders.com](https://globaltraders.com)",
        "image": "images/global-traders.png",
        "level": "Silver",
        "dedicated": "1995, March, 10",
         "area": 80000
      },
      {
        "name": "Green Energy Solutions",
        "address": "789 Eco Drive, Tamale, Ghana",
        "phone": "+233 20 876 5432",
        "website": "[https://greenenergy.com](https://greenenergy.com)",
        "image": "images/green-energy.png",
        "level": "Member",
        "dedicated": "2018, July, 22",
         "area": 9500
      },
      {
        "name": "Financial Services Hub",
        "address": "102 Finance Ave, Takoradi, Ghana",
        "phone": "+233 55 345 6789",
        "website": "[https://financehub.com](https://financehub.com)",
        "image": "images/finance-hub.png",
        "level": "Gold",
        "dedicated": "2005, November, 5",
         "area": 120000
      },
      {
        "name": "AgroTech Farms",
        "address": "67 Agri Street, Cape Coast, Ghana",
        "phone": "+233 25 678 9012",
        "website": "[https://agrotechfarms.com](https://agrotechfarms.com)",
        "image": "images/agrotech-farms.png",
        "level": "Silver",
        "dedicated": "1980, September, 18",
         "area": 60000
      },
      {
        "name": "HealthCare Plus",
        "address": "88 Wellness Rd, Accra, Ghana",
        "phone": "+233 30 456 7890",
        "website": "[https://healthcareplus.com](https://healthcareplus.com)",
        "image": "images/healthcare-plus.png",
        "level": "Member",
        "dedicated": "2022, February, 12",
         "area": 8500
      },
      {
        "name": "Digital Solutions Agency",
        "address": "150 Web Drive, Tema, Ghana",
        "phone": "+233 28 654 3210",
        "website": "[https://digitalsolutions.com](https://digitalsolutions.com)",
        "image": "images/digital-solutions.png",
        "level": "Gold",
        "dedicated": "2019, June, 30",
         "area": 105000
      },
      {
        "name": "Golden Coast Exports",
        "address": "23 Export Lane, Sekondi, Ghana",
        "phone": "+233 31 234 5678",
        "website": "[https://goldencoastexports.com](https://goldencoastexports.com)",
        "image": "images/golden-coast-exports.jpg",
        "level": "Gold",
        "dedicated": "1990, April, 1",
         "area": 140000
      },
      {
        "name": "Savannah Grains Ltd.",
        "address": "987 Harvest Way, Tamale, Ghana",
        "phone": "+233 50 876 5432",
        "website": "[https://savannahgrains.com](https://savannahgrains.com)",
        "image": "images/savannah-grains.jpg",
        "level": "Silver",
         "dedicated": "2008, October, 28",
         "area": 70000
      },
      {
        "name": "Tech Frontier Innovations",
        "address": "44 Innovation Ave, Accra, Ghana",
        "phone": "+233 29 123 4567",
        "website": "[https://techfrontier.com](https://techfrontier.com)",
        "image": "images/tech-frontier-innovations.jpg",
        "level": "Member",
        "dedicated": "2023, January, 15",
         "area": 10000
      }
    ];

    function renderDirectory(filteredData = directoryData) {
        const container = document.getElementById('directory-list');
        container.innerHTML = ''; // Clear previous content

        filteredData.forEach(biz => { // Use filteredData
            const card = document.createElement('div');
            card.className = 'directory-card';

            card.innerHTML = `
                <img src="${biz.image}" alt="${biz.name}" loading="lazy">
                <h3>${biz.name}</h3>
                <p><strong>Address:</strong> ${biz.address}</p>
                <p><strong>Phone:</strong> ${biz.phone}</p>
                <p><strong>Membership Level:</strong> ${biz.level}</p>
                <p><a href="${biz.website}" target="_blank">Visit Website</a></p>
            `;
            container.appendChild(card);
        });
    }

    // Initial rendering of directory
    renderDirectory();

    // --- Navigation filtering ---
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const filter = item.getAttribute('data-filter');
            
            let filteredData;
            switch (filter) {
                case 'old':
                    filteredData = directoryData.filter(member => parseInt(member.dedicated.split(",")[0]) < 1900);
                    break;
                case 'new':
                    filteredData = directoryData.filter(member => parseInt(member.dedicated.split(",")[0]) > 2000);
                    break;
                case 'large':
                    filteredData = directoryData.filter(member => member.area > 90000);
                    break;
                case 'small':
                    filteredData = directoryData.filter(member => member.area < 10000);
                case 'all':
                default:
                    filteredData = directoryData;
            }
            renderDirectory(filteredData);
        });
    });

    // --- Footer ---
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
    </script>
