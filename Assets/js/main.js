document.addEventListener("DOMContentLoaded", function () {
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
