
// Show About menu in overlay on burger click, hide on close or background click
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const overlay = document.getElementById("mobile-overlay");
  const overlayClose = document.getElementById("overlay-close");

  if (burger) {
    burger.addEventListener("click", function (e) {
        e.stopPropagation();
        if (overlay.classList.contains('is-active')) {
          closeOverlay();
        } else {
          openOverlay();
        }
      });
  }
  

  if (overlayClose) {
    overlayClose.addEventListener("click", function (e) {
        e.stopPropagation();
        closeOverlay();
      });
  }

  // Optionally close overlay if user clicks outside the links (background)
  if (overlay) {
    overlay.addEventListener("click", function () {
        closeOverlay();
      });
  }

  const now = new Date();

// Chess API
const chessRating = document.getElementById('chess-rating');
if(chessRating) {
  fetch('https://api.chess.com/pub/player/l-am-art/stats')
    .then(r => r.json()).then(data => {
      chessRating.innerText = data.chess_blitz?.last?.rating || "1610";
    });
}

// Weather API
const tempParis = document.getElementById('temp-paris');
if(tempParis) {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=48.85,43.48,45.89&longitude=2.35,-1.55,6.12&current=temperature_2m')
    .then(r => r.json()).then(data => {
      const ids = ['temp-paris', 'temp-biarritz', 'temp-annecy'];
      ids.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && data[i]) el.innerText = Math.round(data[i].current.temperature_2m) + "°";
      });
    });
}

// Sports List
const eventsList = document.getElementById('events-list');
if(eventsList) {
  const events = [
    { n: "X Games Aspen", d: "Jan 24", s: "SKI | Big Air, Slopestyle, Halfpipe, Knuckle Huck", i: "⛷️", date: "2026-01-24" },
    { n: "SLS Australia", d: "Feb 10", s: "Skate: Street", i: "🛹", date: "2026-02-10" },
    { n: "JO Milan-Cortina", d: "Feb 22", s: "Ski: Big Air, Slopestyle, Halfpipe", i: "🏅", date: "2026-02-22" },
    { n: "World Cup Finals", d: "Mar 20", s: "Ski: Slopestyle", i: "⛷️", date: "2026-03-20" },
    { n: "SLS West Coast", d: "Apr 15", s: "Skate: Street", i: "🛹", date: "2026-04-15" },
    { n: "SLS East Coast", d: "May 15", s: "Skate: Street", i: "🛹", date: "2026-05-15" },
    { n: "X Games Sacramento", d: "Jun 26", s: "Skate: Street", i: "🛹", date: "2026-06-26" },
    { n: "X Games Japan", d: "Jul 04", s: "Skate: Street", i: "🛹", date: "2026-07-04" },
    { n: "SLS Brazil", d: "Aug 15", s: "Skate: Street", i: "🛹", date: "2026-08-15" },
    { n: "High Five Fest", d: "Oct 02", s: "Ski Movies", i: "🎬", date: "2026-10-02" },
    { n: "SLS France", d: "Oct 20", s: "Skate: Street", i: "🛹", date: "2026-10-20" },
    { n: "SLS Japan", d: "Nov 15", s: "Skate: Street", i: "🛹", date: "2026-11-15" },
    { n: "SLS Brazil Final", d: "Dec 15", s: "Skate: Final", i: "🛹", date: "2026-12-15" },
    { n: "X Games Aspen '27'", d: "Jan 20", s: "Ski: Big Air, Slopestyle, Halfpipe, Knuckle Huck", i: "⛷️", date: "2027-01-20" }
  ];
  events.forEach(e => {
    const isPast = new Date(e.date) < now;
    const div = document.createElement('div');
    div.className = `event-row ${isPast ? 'event-past' : ''}`;
    div.innerHTML = `
              <div class="is-flex is-align-items-center">
                  <span style="font-size:0.8rem; width:20px;">${e.i}</span>
                  <span class="is-size-7 has-text-weight-semibold ml-2">${e.n}</span>
                  <span class="discipline-tag">${e.s}</span>
              </div>
              <span class="is-size-7 has-text-grey-light">${e.d}</span>
          `;
    eventsList.appendChild(div);
  });
}
});
window.addEventListener("message", e => { e['data'] && "14650241" === e['data']['id'] && document.getElementById(`${e['data']['id']}`) && (document.getElementById(`${e['data']['id']}`).style.height = `${e['data']['frameHeight'] + 37}px`) });


// --- 2. GESTION DE LA COPIE D'EMAIL ---
const copyBtn = document.getElementById("copy-email-btn");
const popup = document.getElementById("email-copied-popup");
const email = "thomas.lamart@yahoo.fr";

if (copyBtn) {
  copyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showPopup();
      });
    } else {
      // Fallback pour les anciens navigateurs
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showPopup();
    }
  });
}

function showPopup() {
  if (popup) {
    popup.style.display = "inline-block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 1500);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.show-modal-btn');
  const closeElements = document.querySelectorAll('.modal-close, .modal-background');

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const target = document.getElementById(modalId);
      if (target) {
        target.classList.add('is-active');
        document.documentElement.classList.add('is-clipped');
      }
    });
  });

  closeElements.forEach(el => {
    el.addEventListener('click', () => {
      const activeModal = el.closest('.modal');
      if (activeModal) {
        activeModal.classList.remove('is-active');
        document.documentElement.classList.remove('is-clipped');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
        const companies = [
          {
            name: "Heineken",
            label: "Heineken",
          },
          {
            name: "Artur'in",
            label: "Artur'in",
          },
          {
            name: "RE Europe",
            label: "RE Europe",
          },
          {
            name: "Aigle Azur",
            label: "Aigle Azur",
          },
          {
            name: "Nicolas",
            label: "Nicolas",
          }
        ];

        const companyContent = {
          "Heineken": `<div class=\"box experience-box shadow-smooth has-background-white\">
<div class=\"is-flex is-flex-direction-column-mobile is-justify-content-space-between is-align-items-start-mobile is-align-items-center-tablet mb-5\">
    <div class=\"mb-3-mobile\">
      <h3 class=\"title is-4 mb-1 has-text-black\">Product Manager</h3>
      <p class=\"subtitle is-5 has-text-link has-text-weight-bold has-text-grey-dark\">Heineken</p>
      <span class=\"tag is-light is-medium is-rounded has-text-grey\">Paris | 2023 - 2026</span>
    </div>
  </div>

  <p class=\"subtitle is-6 is-italic mb-5 has-text-grey-dark\">B2B e-commerce platform transformation & ecosystem orchestration on France Boissons Website.</p>

  <div class=\"columns mb-5\">
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Product Vision & Roadmap</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Migration to Dynamics 365, strategy & roadmap definition.</li>
        </ul>
        <div class=\"notification is-success is-light p-2 mt-2 result-tag\">
          <strong class=\"has-text-black\">Impact:</strong> Digital revenue grew from 62% to 80%.
        </div>
      </div>
    </div>
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Product Experience (Design Thinking)</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Redesigned onboarding journey & continuous improvements.</li>
        </ul>
        <div class=\"notification is-primary is-light p-2 mt-2 result-tag\">
          <strong class=\"has-text-black\">Impact:</strong> +23% first orders via e-commerce.
        </div>
      </div>
    </div>
  </div>

  <div class=\"columns\">
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Data & API Optimization</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Oversaw data integration (SAP, Akeneo, Boomi, Hybris, SQL).</li>
        </ul>
        <div class=\"notification is-info is-light p-2 mt-2 result-tag\">
          <strong class=\"has-text-black\">Impact:</strong> Reduced manual processes via automation.
        </div>
      </div>
    </div>
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Product Delivery & Leadership</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Managed 12 international devs (Agile, Jira, Velocity).</li>
        </ul>
        <div class=\"notification is-warning is-light p-2 mt-2 result-tag\">
          <strong class=\"has-text-black\">Impact:</strong> -36% critical production bugs (P1).
        </div>
      </div>
    </div>
  </div>

  <div class=\"columns is-mobile is-multiline border-top-light pt-4 mt-4\">
    <div class=\"column is-6-tablet is-12-mobile\">
      <p class=\"is-size-7\"><strong class=\"has-text-black\">KPIs:</strong> New Relic, ContentSquare, Power BI.</p>
    </div>
    <div class=\"column is-6-tablet is-12-mobile has-text-right-tablet\">
      <p class=\"is-size-7\"><strong class=\"has-text-black\">Stakeholders:</strong> Sales, Logistics, Pricing, HQ.</p>
    </div>
  </div>
</div>`,
          "Artur'in": `<div class=\"box experience-box shadow-smooth has-background-white\">
  <div class=\"is-flex is-flex-direction-column-mobile is-justify-content-space-between is-align-items-start-mobile is-align-items-center-tablet mb-5\">
    
    <div class=\"mb-2-mobile\">
      <h3 class=\"title is-4 mb-1 has-text-black\">Product & Content Manager</h3>
      <p class=\"subtitle is-5 has-text-link has-text-weight-bold has-text-grey-dark\">Artur'in</p>
      <span class=\"tag is-light is-medium is-rounded has-text-grey\">Paris | 2018 - 2022</span>
    </div>
  </div>

  <p class=\"subtitle is-6 is-italic mb-5 has-text-grey-dark\">Digital Marketing SaaS for local businesses.</p>

  <div class=\"columns mb-5\">
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Product Strategy & Roadmap</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Defined strategy and roadmap evolution for the content squad.</li>
          <li>Prioritized improvements and monitored performance KPIs.</li>
        </ul>
      </div>
    </div>
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Agile Backlog & Ceremonies</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Centralized business requests and managed the product backlog.</li>
          <li>Led agile ceremonies to ensure effective squad delivery.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"columns\">
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Data & AI Optimization</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Collaborated with Data Scientists on ML models for content ranking.</li>
          <li>Built automated dashboards & alert systems with Data Analysts.</li>
        </ul>
      </div>
    </div>
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Team Leadership & Editorial</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Managed 3 Content Managers + a network of external writers.</li>
          <li>Defined editorial strategy for Finance, Insurance, and Health.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"columns is-mobile is-multiline border-top-light pt-4 mt-4\">
    <div class=\"column is-12\">
      <p class=\"is-size-7\">
        <strong class=\"has-text-black\">Collaboration:</strong> Tech Support for CSMs, International Dev Team, Data Science & Analytics squads.
      </p>
    </div>
  </div>
</div>`,
          "RE Europe": `<div class=\"box experience-box shadow-smooth has-background-white\">
  <div class=\"is-flex is-flex-direction-column-mobile is-justify-content-space-between is-align-items-start-mobile is-align-items-center-tablet mb-5\">
    
    <div class=\"mb-2-mobile\">
      <h3 class=\"title is-4 mb-1 has-text-black\">Business Developer</h3>
      <p class=\"subtitle is-5 has-text-link has-text-weight-bold has-text-grey-dark\">Rent Electric Europe</p>
      <span class=\"tag is-light is-medium is-rounded has-text-grey\">June 2016 - Sept. 2016</span>
    </div>
  </div>

  <p class=\"subtitle is-6 is-italic mb-5 has-text-grey-dark\">Sale and rental of electric vehicles (B2B & B2C).</p>

  <div class=\"columns\">
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Partnerships & Sales</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Developed and acquired new B2B partnerships (campsites, bike rental stores).</li>
          <li>Managed daily sales, rentals, and customer relations.</li>
        </ul>
      </div>
    </div>

    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Marketing & Ops</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Produced advertising brochures and flyers.</li>
          <li>Managed point-of-sale operations and international customer service.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"columns is-mobile is-multiline border-top-light pt-4 mt-4\">
    <div class=\"column is-12\">
      <p class=\"is-size-7\">
        <strong class=\"has-text-black\">Languages:</strong> English & Spanish (International customer relations).
      </p>
    </div>
  </div>
</div>`,
          "Aigle Azur": `
    
 <div class=\"box experience-box shadow-smooth has-background-white\">
  <div class=\"is-flex is-flex-direction-column-mobile is-justify-content-space-between is-align-items-start-mobile is-align-items-center-tablet mb-5\">
    <div class=\"mb-3-mobile\">
      <h3 class=\"title is-4 mb-1 has-text-black\">Sales & Marketing Assistant</h3>
      <p class=\"subtitle is-5 has-text-link has-text-weight-bold has-text-grey-dark\">Airline Company</p>
      <span class=\"tag is-light is-medium is-rounded has-text-grey\">April 2015 - June 2015</span>
    </div>
  </div>

  <p class=\"subtitle is-6 is-italic mb-5 has-text-grey-dark\">Strategic support for commercial development and brand awareness.</p>

  <div class=\"columns\">
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Market Intelligence</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Conducted on-board and on-ground product benchmarking to analyze competition.</li>
          <li>Monitored industry trends to support product positioning.</li>
        </ul>
      </div>
    </div>

    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Communication & Sales</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Managed community management activities and social media presence.</li>
          <li>Performed telephone canvassing of travel agencies to promote new destinations.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"columns is-mobile is-multiline border-top-light pt-4 mt-4\">
    <div class=\"column is-12\">
      <p class=\"is-size-7\">
        <strong class=\"has-text-black\">Keywords:</strong> Benchmarking, Community Management, B2B Canvassing, Aviation Industry.
      </p>
    </div>
  </div>
</div>
    `,
          "Nicolas": `   
  <div class=\"box experience-box shadow-smooth has-background-white\">
  <div class=\"is-flex is-flex-direction-column-mobile is-justify-content-space-between is-align-items-start-mobile is-align-items-center-tablet mb-5\">
    <div class=\"mb-3-mobile\">
      <h3 class=\"title is-4 mb-1 has-text-black\">Manager Sales Assistant</h3>
      <p class=\"subtitle is-5 has-text-link has-text-weight-bold has-text-grey-dark\">Wine Retail Chain</p>
      <span class=\"tag is-light is-medium is-rounded has-text-grey\">Lille | Dec. 2013 - Jan. 2014</span>
    </div>
  </div>

  <p class=\"subtitle is-6 is-italic mb-5 has-text-grey-dark\">In-store operations and customer advisory in a fast-paced retail environment.</p>

  <div class=\"columns\">
    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Operations & Logistics</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Managed stock levels to ensure consistent product availability.</li>
          <li>Handled merchandising to optimize in-store product visibility and flow.</li>
        </ul>
      </div>
    </div>

    <div class=\"column is-6\">
      <div class=\"content card-job\">
        <h6 class=\"title is-6 mb-2 has-text-grey-darker\">Sales & Customer Advice</h6>
        <ul class=\"has-text-grey-darker\">
          <li>Performed B2C sales and provided expert product recommendations.</li>
          <li>Ensured high-quality customer service during peak holiday season.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class=\"columns is-mobile is-multiline border-top-light pt-4 mt-4\">
    <div class=\"column is-12\">
      <p class=\"is-size-7\">
        <strong class=\"has-text-black\">Keywords:</strong> Inventory Management, Merchandising, B2C Sales, Retail Operations.
      </p>
    </div>
  </div>
</div>
    `
        };

        const companyTabsList = document.getElementById("company-tabs-list");

        if (companyTabsList) {
            // Génère dynamiquement les tabs pour suivre l'ordre de companies[]
            function renderTabs(activeCompanyName) {
              const tabsList = document.getElementById("company-tabs-list");
              tabsList.innerHTML = '';
              companies.forEach(company => {
                const li = document.createElement('li');
                if (company.name === activeCompanyName) li.classList.add('is-active');
                const a = document.createElement('a');
                a.href = "#";
                a.setAttribute('data-company', company.name);
                a.textContent = company.label;
                li.appendChild(a);
                tabsList.appendChild(li);
              });
            }

            // Affiche le contenu et sélectionne la bonne tab
            function setCurrentExperience(companyName) {
              renderTabs(companyName); // Mets à jour les tabs
              const contentDiv = document.getElementById("company-content");
              contentDiv.innerHTML = companyContent[companyName] || "<p>Aucune information disponible.</p>";
              // Réattache les events click sur les tabs nouvellement générées
              attachTabEvents();
            }

            // Gère les clicks sur les tabs
            function attachTabEvents() {
              const tabs = document.querySelectorAll("#company-tabs-list li");
              tabs.forEach(tab => {
                tab.addEventListener("click", function (e) {
                  e.preventDefault();
                  const company = tab.querySelector("a").getAttribute("data-company");
                  setCurrentExperience(company);
                });
              });
            }

            // ----- SWIPE Logic -----
            let touchStartX = null;
            let touchStartY = null;
            let touchMoved = false;
            const MIN_DIST = 50;

            function getCurrentCompany() {
              let active = document.querySelector("#company-tabs-list li.is-active a");
              return active ? active.getAttribute("data-company") : companies[0].name;
            }

            function goToRelativeCompany(direction) {
              const currentCompany = getCurrentCompany();
              let idx = companies.findIndex(c => c.name === currentCompany);
              if (idx === -1) idx = 0;
              let newIdx = idx + direction;
              if (newIdx < 0) newIdx = companies.length - 1;
              if (newIdx >= companies.length) newIdx = 0;
              setCurrentExperience(companies[newIdx].name);

              // Après swipe, scroll horizontal vers tab si overflow!
              setTimeout(() => {
                const tabsList = document.getElementById("company-tabs-list");
                const newActiveA = tabsList.querySelector('li.is-active a');
                if (newActiveA) {
                  // Scroll le container pour que la tab soit bien visible (pour les tabs qui overflow)
                  newActiveA.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }
              }, 10);
            }

            const contentDiv = document.getElementById("company-content");
            contentDiv.addEventListener('touchstart', function (e) {
              if (!e.touches || e.touches.length !== 1) return;
              touchMoved = false;
              touchStartX = e.touches[0].clientX;
              touchStartY = e.touches[0].clientY;
            });

            contentDiv.addEventListener('touchmove', function (e) {
              touchMoved = true;
              // Do not preventDefault: laisser scroll natif vertical/horizontal
            });

            contentDiv.addEventListener('touchend', function (e) {
              if (touchStartX === null) return;
              const touch = e.changedTouches[0];
              const deltaX = touch.clientX - touchStartX;
              const deltaY = touch.clientY - touchStartY;
              if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > MIN_DIST) {
                if (deltaX < 0) {
                  goToRelativeCompany(+1);
                } else {
                  goToRelativeCompany(-1);
                }
                e.preventDefault && e.preventDefault();
              }
              touchStartX = null;
              touchStartY = null;
              touchMoved = false;
            }, { passive: false });

            // Initialisation
            // 1 - Render les tabs + content sur la première compagnie
            setCurrentExperience(companies[0].name);
        }


      });
