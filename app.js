(() => {
  const S = window.SITE;
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => [...el.querySelectorAll(q)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "sr";
  try { lang = localStorage.getItem("lang") || "sr"; } catch (e) {}

  /* ================= i18n ================= */
  const T = {
    sr: { skip: "Preskoči", hintFirst: "Svajpuj i uđi", hintNext: "Dalje", hintLast: "Specijaliteti", navChef: "Šefov meni", chefEyebrow: "Šefov meni · najava 24h", chefTitle: "Za stolom, pred vama", chefCta: "Najavi šefov meni", chefLabel: "glavni kuvar",
      navSpecial: "Specijaliteti", navMenu: "Meni", navEvents: "Svirke", navContact: "Kontakt", order: "Poruči online", reserve: "Rezerviši",
      heroEyebrow: "Restoran · Vrbas", reserveTable: "Rezerviši sto", orderDelivery: "Poruči dostavu", scroll: "Skroluj",
      introEyebrow: "O nama", introText: "Roštilj i ražanj, jela ispod sača, sveža rečna i morska riba i internacionalne kreacije — od pažljivo biranih namirnica. Ne dolazite samo na ručak. Dolazite na veče koje ćete poželeti da ponovite.",
      factHours: "svaki dan", factDelivery: "dostava po Vrbasu", ratingLabel: n => `${n} recenzija`,
      specialEyebrow: "Specijaliteti kuće", specialTitle: "Ono zbog čega se vraćaju",
      menuEyebrow: "Jelovnik", menuTitle: "Meni", searchPh: "Pretraži jelo…", all: "Sve", noResults: "Nema jela za tu pretragu.",
      menuNote: "Imate alergiju ili posebnu ishranu? Recite nam — prilagodićemo.",
      eventsEyebrow: "Svirke i događaji", eventsTitle: "Večeri uz muziku",
      galleryEyebrow: "Ambijent", galleryTitle: "Pogled koji se pamti", ph: "fotografija sa terena",
      reserveEyebrow: "Rezervacija", reserveTitle: "Sačuvaćemo vam sto", reserveText: "Pošaljite upit — potvrdićemo porukom ili pozivom. Za danas najbrže je da pozovete.",
      fName: "Ime", fDate: "Datum", fTime: "Vreme", fPeople: "Osoba", fNote: "Napomena", fNotePh: "rođendan, bašta, alergije…",
      sendWa: "Pošalji na WhatsApp", sendSms: "Pošalji SMS",
      contactEyebrow: "Gde smo", contactTitle: "Dođite na Stari most", address: "Adresa", hours: "Radno vreme", delivery: "Dostava", phone: "Telefon",
      call: "Pozovi", orderShort: "Poruči", months: ["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],
      msg: f => `Zdravo! Rezervacija za Tavernu Stari Most:\nIme: ${f.ime}\nDatum: ${f.datum} u ${f.vreme}\nBroj osoba: ${f.osoba}${f.napomena ? "\nNapomena: " + f.napomena : ""}` },
    en: { skip: "Skip", hintFirst: "Swipe to step in", hintNext: "Next", hintLast: "Signatures", navChef: "Chef's table", chefEyebrow: "Chef's table · 24h notice", chefTitle: "Finished at your table", chefCta: "Book the chef's menu", chefLabel: "head chef",
      navSpecial: "Signatures", navMenu: "Menu", navEvents: "Live music", navContact: "Contact", order: "Order online", reserve: "Book",
      heroEyebrow: "Restaurant · Vrbas", reserveTable: "Book a table", orderDelivery: "Order delivery", scroll: "Scroll",
      introEyebrow: "About", introText: "Grill and spit roast, dishes slow-cooked under the sač, fresh river and sea fish and international plates — from carefully chosen ingredients. You don't just come for dinner. You come for an evening worth repeating.",
      factHours: "every day", factDelivery: "delivery in Vrbas", ratingLabel: n => `${n} reviews`,
      specialEyebrow: "House signatures", specialTitle: "Why people come back",
      menuEyebrow: "Food", menuTitle: "Menu", searchPh: "Search a dish…", all: "All", noResults: "No dishes match that search.",
      menuNote: "Allergies or dietary needs? Tell us — we'll adapt.",
      eventsEyebrow: "Music & events", eventsTitle: "Evenings with live music",
      galleryEyebrow: "Atmosphere", galleryTitle: "A view to remember", ph: "photo coming",
      reserveEyebrow: "Reservations", reserveTitle: "We'll keep a table for you", reserveText: "Send a request — we'll confirm by message or call. For today, calling is fastest.",
      fName: "Name", fDate: "Date", fTime: "Time", fPeople: "Guests", fNote: "Note", fNotePh: "birthday, terrace, allergies…",
      sendWa: "Send via WhatsApp", sendSms: "Send SMS",
      contactEyebrow: "Find us", contactTitle: "Come to the Old Bridge", address: "Address", hours: "Opening hours", delivery: "Delivery", phone: "Phone",
      call: "Call", orderShort: "Order", months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      msg: f => `Hi! Table request at Taverna Stari Most:\nName: ${f.ime}\nDate: ${f.datum} at ${f.vreme}\nGuests: ${f.osoba}${f.napomena ? "\nNote: " + f.napomena : ""}` }
  };
  const t = k => T[lang][k];
  const L = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.sr) : v;
  const rsd = n => n.toLocaleString("sr-RS") + " RSD";

  function applyLang() {
    document.documentElement.lang = lang;
    $("#lang").textContent = lang === "sr" ? "EN" : "SR";
    $$("[data-t]").forEach(el => { const v = t(el.dataset.t); if (typeof v === "string") el.textContent = v; });
    $$("[data-t-placeholder]").forEach(el => el.placeholder = t(el.dataset.tPlaceholder));
    const site = { tagline: L(S.tagline), address: S.address, hours: L(S.hours), delivery: L(S.delivery),
      ratingScore: S.rating.score, ratingLabel: `${t("ratingLabel")(S.rating.count)} · ${S.rating.source}`, sisterName: S.sister.name,
      chefIntro: S.chef ? L(S.chef.intro) : "" };
    $$("[data-site]").forEach(el => el.textContent = site[el.dataset.site]);
    renderBeats(); renderSpecials(); renderChef(); renderTabs(); renderMenu(); renderEvents(); renderGallery();
  }
  $("#lang").onclick = () => { lang = lang === "sr" ? "en" : "sr"; try { localStorage.setItem("lang", lang); } catch (e) {} applyLang(); };

  /* ================= static links ================= */
  $$("[data-order]").forEach(a => { a.href = S.orderUrl; a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-tel]").forEach(a => { a.href = "tel:" + S.phone; a.textContent = S.phoneLabel; });
  $$("[data-tel-short]").forEach(a => a.href = "tel:" + S.phone);
  $$("[data-link]").forEach(a => a.href = a.dataset.link === "sister" ? S.sister.url : S[a.dataset.link]);
  $("#rating").href = S.rating.url;
  // mapa se učitava tek kad je kontakt blizu — ne usporava prvi utisak
  new IntersectionObserver(([e], o) => { if (!e.isIntersecting) return; o.disconnect();
    $("#map").src = `https://maps.google.com/maps?q=${S.geo[0]},${S.geo[1]}&z=16&output=embed`; }, { rootMargin: "300px" }).observe($("#kontakt"));
  $("#year").textContent = new Date().getFullYear();

  /* ================= sections ================= */
  const dishTones = [
    "radial-gradient(circle at 70% 30%, #8a4a22, #2a150c 70%)", "radial-gradient(circle at 30% 30%, #9b6a1f, #2b1a0b 70%)",
    "radial-gradient(circle at 60% 40%, #6e2b24, #1e0d0b 70%)", "radial-gradient(circle at 40% 30%, #4d5a4a, #141712 70%)",
    "radial-gradient(circle at 70% 40%, #7a3a3a, #200f10 70%)", "radial-gradient(circle at 50% 30%, #3f4c5c, #0f1318 70%)"];
  function renderSpecials() {
    $("#specialRail").innerHTML = S.signature.map((d, i) => `
      <article class="dish rv${d.img ? " has-img" : ""}" style="--bg:${d.img ? `url('${d.img}') center/cover` : dishTones[i % dishTones.length]}">
        <span class="num">0${i + 1}</span>
        <h3>${L(d.name)}</h3>
        <p><span>${L(d.note)}</span><b>${rsd(d.price)}</b></p>
      </article>`).join("");
    observe();
  }

  function renderChef() {
    const sec = $("#sefov-meni");
    if (!S.chef) { sec.hidden = true; return; }
    $("#chefImg").src = S.chef.img; $("#chefImg").alt = S.chef.name;
    $("#chefName").innerHTML = `${S.chef.name} <span>· ${t("chefLabel")}</span>`;
    $("#chefList").innerHTML = S.chef.items.map(it => `
      <div class="chef-item rv">
        <div class="chef-top"><h3>${L(it.name)}</h3><span class="dots"></span><b>${rsd(it.price)}</b></div>
        <p>${L(it.text)}</p><span class="serves">${L(it.serves)}</span>
      </div>`).join("");
    observe();
  }
  $("#chefCta").addEventListener("click", () => {
    const n = $("#reserveForm").napomena;
    if (!n.value) n.value = lang === "sr" ? "Šefov meni: " : "Chef's menu: ";
    setTimeout(() => n.focus({ preventScroll: true }), 600);
  });

  function renderGallery() {
    const sec = $("#ambijent"), g = S.gallery || [];
    sec.hidden = !g.length;
    $("#galleryGrid").innerHTML = g.map((src, i) => `<figure class="g g${i + 1}" style="background-image:url('${src}')"></figure>`).join("");
  }

  let activeCat = -1, query = "";
  function renderTabs() {
    const tabs = [t("all"), ...S.menu.map(c => L(c.cat))];
    $("#menuTabs").innerHTML = tabs.map((n, i) => `<button class="tab${i - 1 === activeCat ? " on" : ""}" role="tab" data-i="${i - 1}">${n}</button>`).join("");
    $$(".tab").forEach(b => b.onclick = () => { activeCat = +b.dataset.i; query = ""; $("#menuSearch").value = ""; renderTabs(); renderMenu(); });
  }
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "dj");
  function renderMenu() {
    const q = norm(query.trim());
    const cats = S.menu.map((c, i) => ({ c, i, items: c.items.filter(it => !q || norm(it[0]).includes(q)) }))
      .filter(x => (q || activeCat < 0 || x.i === activeCat) && x.items.length);
    $("#menuList").innerHTML = cats.length ? cats.map(({ c, items }) => `
      <div class="cat-block"><h3>${L(c.cat)}</h3>
        ${items.map(([n, w, p]) => `<div class="item"><span class="n">${n}</span>${w ? `<span class="w">${w}</span>` : ""}<span class="dots"></span><span class="p">${rsd(p)}</span></div>`).join("")}
      </div>`).join("") : `<p class="menu-empty">${t("noResults")}</p>`;
  }
  $("#menuSearch").addEventListener("input", e => { query = e.target.value; if (query) { activeCat = -1; renderTabs(); } renderMenu(); });

  function renderEvents() {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    $("#eventGrid").innerHTML = S.events.filter(e => !e.date || new Date(e.date) >= today).map(e => {
      const d = e.date ? new Date(e.date) : null;
      return `<article class="event rv">
        <div class="date">${d ? `<b>${String(d.getDate()).padStart(2, "0")}</b><span>${t("months")[d.getMonth()]}</span>` : `<b>∞</b><span>${L(e.weekly)}</span>`}</div>
        <div><h3>${L(e.title)}</h3><p>${L(e.text)}</p>${e.time ? `<p class="when">${e.time}h · ${S.phoneLabel}</p>` : ""}</div>
      </article>`; }).join("");
    const ph = $("#eventsPhoto");
    if (S.eventsImg) $("img", ph).src = S.eventsImg; else ph.hidden = true;
    observe();
  }

  /* ================= reservation ================= */
  const form = $("#reserveForm");
  const d0 = new Date(); form.datum.min = d0.toISOString().slice(0, 10); form.datum.value = form.datum.min;
  const formMsg = () => t("msg")(Object.fromEntries(new FormData(form)));
  form.addEventListener("submit", e => { e.preventDefault(); window.open(`https://wa.me/${S.phone.replace("+", "")}?text=${encodeURIComponent(formMsg())}`, "_blank"); });
  $("#sendSms").onclick = () => { if (form.reportValidity()) location.href = `sms:${S.phone}?&body=${encodeURIComponent(formMsg())}`; };

  /* ================= reveal ================= */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
  function observe() { $$(".rv:not(.in)").forEach(el => io.observe(el)); }
  $$(".intro > *, .menu-head, .gallery .g, .reserve-inner > *, .contact > *, section h2").forEach(el => el.classList.add("rv"));

  /* ================= OBILAZAK: jedan svajp = jedna scena ================= */
  const SC = S.scenes, N = SC.length, TR = S.tour;
  const tour = $(".tour"), still = $("#still"), bgStill = $("#bgStill"), vid = $("#vid");
  const clip = (k, d) => `${TR.dir}${d}${k}.mp4`, stillSrc = j => `${TR.dir}s${j}.webp`;
  let cur = 0, busy = false, caps = [], dots = [];

  function renderBeats() { // ime zadržano: poziva ga applyLang pri promeni jezika
    $("#captions").innerHTML = SC.map(sc => {
      const cta = sc.hero
        ? `<div class="cta"><a class="btn btn-solid btn-lg" href="#rezervacija">${t("reserveTable")}</a><a class="btn btn-ghost btn-lg" data-order>${t("orderDelivery")}</a></div>
           <div class="rating-pill"><b>★ ${S.rating.score}</b> ${t("ratingLabel")(S.rating.count)} · ${S.rating.source}</div>`
        : sc.end ? `<div class="cta"><a class="btn btn-solid btn-lg" href="#rezervacija">${t("reserveTable")}</a><a class="btn btn-ghost btn-lg" href="#meni">${t("navMenu")}</a></div>` : "";
      return `<div class="cap"><div class="cap-label"><i></i>${L(sc.label)}</div>${sc.hero ? "<h1>" : "<h3>"}${L(sc.title)}${sc.hero ? "</h1>" : "</h3>"}<p class="t">${L(sc.text)}</p>${cta}</div>`;
    }).join("");
    $$("#captions [data-order]").forEach(a => { a.href = S.orderUrl; a.target = "_blank"; a.rel = "noopener"; });
    $("#sceneMap").innerHTML = SC.map((sc, i) => `<li data-i="${i}"><span>${L(sc.label).split(" · ")[0]}</span><i></i></li>`).join("");
    caps = $$(".cap"); dots = $$("#sceneMap li");
    dots.forEach(li => li.onclick = () => { scrollTo({ top: 0, behavior: "smooth" }); go(+li.dataset.i); });
    showCaption(cur);
  }

  const cache = {};
  function preload(url) { if (cache[url]) return; const v = document.createElement("video");
    v.muted = true; v.playsInline = true; v.preload = "auto"; v.src = url; v.load(); cache[url] = v; }
  function preloadAround(j) { if (j < N - 1) preload(clip(j + 1, "p")); if (j > 0) preload(clip(j, "n"));
    [j - 1, j + 1].forEach(x => { if (x >= 0 && x < N) new Image().src = stillSrc(x); }); }
  function showCaption(j) {
    caps.forEach((c, i) => c.classList.toggle("on", i === j));
    dots.forEach((d, i) => d.classList.toggle("on", i === j));
    $("#progressBar").style.width = (j / (N - 1) * 100) + "%";
    $("#hintText").textContent = j === 0 ? t("hintFirst") : j === N - 1 ? t("hintLast") : t("hintNext");
  }
  function setStill(j) { still.src = stillSrc(j); bgStill.src = stillSrc(j); }

  function go(target) {
    if (busy || target === cur || target < 0 || target >= N) return;
    if (Math.abs(target - cur) > 1 || reduced) {                       // skok preko više scena: pretapanje
      busy = true; caps.forEach(c => c.classList.remove("on")); tour.classList.add("fade");
      setTimeout(() => { setStill(target); cur = target; showCaption(cur); tour.classList.remove("fade"); preloadAround(cur); busy = false; }, 350);
      return;
    }
    busy = true; caps.forEach(c => c.classList.remove("on"));
    vid.src = target > cur ? clip(target, "p") : clip(cur, "n");
    vid.playbackRate = TR.rate || 1; vid.currentTime = 0;
    let done = false;
    const finish = () => {
      if (done) return; done = true;
      setStill(target); cur = target;
      const swap = () => { vid.classList.remove("playing"); showCaption(cur); preloadAround(cur); setTimeout(() => busy = false, 250); };
      still.complete ? requestAnimationFrame(swap) : still.addEventListener("load", swap, { once: true });
    };
    const start = () => { vid.classList.add("playing"); vid.play().catch(finish); };
    vid.onended = finish; vid.onerror = finish;
    if (vid.readyState >= 3) start(); else vid.addEventListener("canplay", start, { once: true });
    setTimeout(finish, 9000);
  }
  const next = () => cur < N - 1 ? go(cur + 1) : $("#specijaliteti").scrollIntoView({ behavior: "smooth" });
  const prev = () => go(cur - 1);

  const atTop = () => scrollY < 4;
  let lastWheel = 0;
  addEventListener("wheel", e => {
    if (!atTop()) return;
    const now = performance.now(), fresh = now - lastWheel > 180;
    lastWheel = now;
    if (e.deltaY > 0 && cur < N - 1) { e.preventDefault(); if (fresh && Math.abs(e.deltaY) > 4) next(); }
    else if (e.deltaY < 0 && cur > 0) { e.preventDefault(); if (fresh && Math.abs(e.deltaY) > 4) prev(); }
  }, { passive: false });
  let ty = null;
  tour.addEventListener("touchstart", e => { ty = e.touches[0].clientY; }, { passive: true });
  tour.addEventListener("touchmove", e => {
    if (ty === null || !atTop()) return;
    const dy = ty - e.touches[0].clientY;
    if ((dy > 0 && cur < N - 1) || (dy < 0 && cur > 0)) e.preventDefault();
  }, { passive: false });
  tour.addEventListener("touchend", e => {
    if (ty === null) return;
    const dy = ty - e.changedTouches[0].clientY; ty = null;
    if (!atTop() || Math.abs(dy) < 40) return;
    dy > 0 ? (cur < N - 1 ? next() : null) : prev();
  });
  addEventListener("keydown", e => {
    if (!atTop() || e.target.closest("input, select, textarea")) return;
    if (["ArrowDown", "PageDown", " "].includes(e.key) && cur < N - 1) { e.preventDefault(); next(); }
    if (["ArrowUp", "PageUp"].includes(e.key) && cur > 0) { e.preventDefault(); prev(); }
  });
  $("#nextBtn").onclick = next;
  $$('a[href="#top"]').forEach(a => a.onclick = e => { e.preventDefault(); scrollTo({ top: 0, behavior: "smooth" }); });

  function updateChrome() {
    const past = tour.getBoundingClientRect().bottom < innerHeight * .6;
    $("#nav").classList.toggle("solid", past);
    $(".mobile-bar").classList.toggle("on", past);
  }
  addEventListener("scroll", updateChrome, { passive: true });

  const params = new URLSearchParams(location.search);
  const room = params.get("room");                    // ?room=3 — otvori direktno scenu (za proveru)
  cur = room !== null ? clamp(+room, 0, N - 1) : 0;
  applyLang(); setStill(cur); preloadAround(cur); updateChrome();
  if (params.get("p") !== null) {                     // ?p=1&only=meni — samo jedna sekcija (za snimke)
    $$(".rv").forEach(el => el.classList.add("in"));
    const only = params.get("only");
    if (only) $$("body > section").forEach(s => { if (s.id !== only) s.style.display = "none"; });
  }
})();
