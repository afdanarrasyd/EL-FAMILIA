// Data role & hero descriptions
const teamData = [
    {
      name: "Afdan",
      role: "Exp Laner",
      roleDesc: "Sebagai Exp Laner, Afdan bertanggung jawab mengamankan lane sisi bawah (atau atas), mengontrol turret lawan, dan memberikan tekanan konstan. Ia unggul dalam pertarungan 1v1 dan memahami timing split-push.",
      heroes: [
        { name: "Gusion", desc: "Assassin mematikan dengan burst damage tinggi dan mobilitas luar biasa." },
        { name: "Lancelot", desc: "Hero lincah dengan damage besar dan kemampuan dash multi-arah." },
        { name: "Hanabi", desc: "Marksman unik dengan kemampuan bloom damage dan crowd control." }
      ]
    },
    {
      name: "Dafa",
      role: "Marksman",
      roleDesc: "Dafa adalah sumber damage utama di late game. Dengan presisi dan positioning yang akurat, ia mampu menghancurkan lawan dari jarak aman dan menjadi tulang punggung tim di teamfight.",
      heroes: [
        { name: "Wanwan", desc: "Marksman dengan true damage dan kemampuan parkour mematikan." },
        { name: "Granger", desc: "Marksman cepat dengan burst damage mematikan di jarak dekat." },
        { name: "Brody", desc: "Marksman sustain dengan kritikal dan regen HP tinggi." }
      ]
    },
    {
      name: "Ken",
      role: "Midlaner",
      roleDesc: "Ken mengendalikan jalur tengah dan menjadi initiator roaming. Dengan rotasi cepat dan burst damage tinggi, ia sering menciptakan keunggulan awal untuk tim.",
      heroes: [
        { name: "Luo Yi", desc: "Mage crowd control dengan ultimate area besar dan freeze effect." },
        { name: "Zhask", desc: "Mage sustain dengan healing dan damage over time." },
        { name: "Aurora", desc: "Mage crowd control yang bisa menonaktifkan lawan dengan cepat." }
      ]
    },
    {
      name: "Zidane",
      role: "Roamer",
      roleDesc: "Zidane adalah jantung tim. Ia memberikan vision control, bantuan gank, dan perlindungan bagi carry. Permainannya berfokus pada inisiasi, crowd control, dan pengorbanan demi keselamatan tim.",
      heroes: [
        { name: "Estes", desc: "Support healing dengan sustain luar biasa dan burst healing di teamfight." },
        { name: "Angela", desc: "Support global dengan crowd control dan heal instan." },
        { name: "Diggie", desc: "Support anti-gank dengan time manipulation dan vision control." }
      ]
    },
    {
      name: "Abimanyu",
      role: "Jungler",
      roleDesc: "Abimanyu menguasai hutan dan memimpin tempo pertandingan. Dengan clear jungle cepat dan gank presisi, ia menciptakan tekanan konstan di seluruh peta.",
      heroes: [
        { name: "Ling", desc: "Assassin dengan mobilitas atap, memungkinkan gank tak terduga." },
        { name: "Fanny", desc: "Assassin high-skill dengan damage besar dan mobility unik." },
        { name: "Baxia", desc: "Tank jungle dengan sustain dan anti-burst protection." }
      ]
    }
  ];
  
  // DOM Elements
  const members = document.querySelectorAll('.member');
  const modal = document.getElementById('detail-modal');
  const closeBtn = document.getElementById('close-modal');
  const modalName = document.getElementById('modal-name');
  const modalRoleDesc = document.getElementById('modal-role-desc');
  const modalHeroes = document.getElementById('modal-heroes');
  
  // Event listeners
  members.forEach(member => {
    member.addEventListener('click', () => {
      const index = member.dataset.index;
      const data = teamData[index];
  
      modalName.textContent = data.name;
      modalRoleDesc.textContent = data.roleDesc;
  
      // Clear previous heroes
      modalHeroes.innerHTML = '';
  
      // Add hero cards
      data.heroes.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'modal-hero-card';
        card.innerHTML = `
          <img src="assets/hero_${hero.name.toLowerCase().replace(/\s+/g, '')}.jpg" alt="${hero.name}">
          <h4>${hero.name}</h4>
          <p>${hero.desc}</p>
        `;
        modalHeroes.appendChild(card);
      });
  
      modal.classList.remove('hidden');
    });
  });
  
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
  
  // Close modal on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });