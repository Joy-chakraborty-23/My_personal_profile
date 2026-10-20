/* Progressive enhancements: all essential website content and navigation work without JS. */
(() => {
  'use strict';
  // Theme: two explicit, keyboard-accessible choices, saved locally; no tracking.
  const root = document.documentElement;
  const themeChoices = [...document.querySelectorAll('[data-theme-choice]')];
  const applyTheme = (theme, persist = false) => {
    root.dataset.theme = theme;
    themeChoices.forEach((choice) => {
      choice.setAttribute('aria-pressed', String(choice.dataset.themeChoice === theme));
    });
    const browserThemeColor = document.querySelector('meta[name="theme-color"]');
    if (browserThemeColor) browserThemeColor.content = theme === 'dark' ? '#0d2028' : '#f5f7f9';
    if (persist) {
      try { localStorage.setItem('jc-theme', theme); } catch (_) { /* file URLs can disallow storage */ }
    }
  };
  // The tiny inline head script has already selected the saved theme before CSS loads.
  applyTheme(root.dataset.theme === 'dark' || root.dataset.theme === 'light'
    ? root.dataset.theme : 'dark');
  themeChoices.forEach((choice) => choice.addEventListener('click', () => {
    applyTheme(choice.dataset.themeChoice, true);
  }));

  // Accessible small-screen navigation.
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = () => {
    if (!mobileNav || !menuButton) return;
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };
  menuButton?.addEventListener('click', () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1050) closeMenu();
  });

  // Projects: combinable text search and category filters.
  const search = document.getElementById('project-search');
  const chips = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.listing-grid .project-card')];
  if (search && cards.length) {
    let category = 'all';
    const applyFilters = () => {
      const q = search.value.trim().toLocaleLowerCase();
      let shown = 0;
      for (const card of cards) {
        const goodCategory = category === 'all' || card.dataset.filterCategory === category;
        const goodSearch = !q || (card.dataset.search || '').includes(q);
        card.hidden = !(goodCategory && goodSearch);
        if (!card.hidden) shown++;
      }
      const count = document.getElementById('result-count');
      if (count) count.textContent = `Showing ${shown} of ${cards.length} projects`;
      const empty = document.getElementById('project-empty');
      if (empty) empty.hidden = shown !== 0;
    };
    chips.forEach((chip) => chip.addEventListener('click', () => {
      category = chip.dataset.filter || 'all';
      chips.forEach((button) => {
        const selected = button === chip;
        button.classList.toggle('selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      applyFilters();
    }));
    search.addEventListener('input', applyFilters);
  }

  // Research report figure tabs; left/right arrow controls as in WAI-ARIA tabs.
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const tabs = [...gallery.querySelectorAll('[role=tab]')];
    const selectTab = (i, moveFocus = false) => {
      tabs.forEach((tab, idx) => {
        tab.setAttribute('aria-selected', String(idx === i));
        tab.tabIndex = idx === i ? 0 : -1;
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel) panel.hidden = idx !== i;
      });
      if (moveFocus) tabs[i].focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => selectTab(i));
      tab.addEventListener('keydown', (e) => {
        const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (!keys.includes(e.key)) return;
        e.preventDefault();
        const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        selectTab(next, true);
      });
    });
  });

  // Copy academic email without exposing any other private contact details.
  document.querySelectorAll('.copy-email').forEach((button) => {
    button.addEventListener('click', async () => {
      const label = button.querySelector('span');
      if (!navigator.clipboard?.writeText) {
        if (label) label.textContent = 'Select email to copy';
        return;
      }
      try {
        await navigator.clipboard.writeText(button.dataset.copy || '');
        if (label) label.textContent = 'Copied';
      } catch (_) {
        if (label) label.textContent = 'Select email to copy';
      }
    });
  });

  /* Deterministic source-bound FAQ guide. NO network, user profiling, RAG or API calls.
   * A future LLM can replace this only after its secured, server-side grounding is ready. */
  const assistant = document.querySelector('.assistant');
  const launcher = document.getElementById('assistant-launcher');
  const dialog = document.getElementById('assistant-dialog');
  const closeAssistantButton = document.querySelector('.assistant-close');
  const chatForm = document.getElementById('assistant-form');
  const chatInput = document.getElementById('assistant-input');
  const messages = document.getElementById('assistant-messages');
  const prefix = assistant?.dataset.depth === '1' ? '../' : '';
  const FAQs = [
    {
      match: /\b(certificat(?:e|es|ion)|credential|coursera|udemy|training course|carbon accounting|scope 1|scope 2|scope 3|devops|dataops|hugging face|sagemaker)\b/i,
      answer: 'The Experience page lists six distinct course-completion certificates: four Coursera courses authorized by Duke University (MLflow and Hugging Face; SageMaker and Azure ML; Python Essentials for MLOps; DevOps, DataOps, MLOps), plus two Udemy courses in Scope 1–2 and Scope 3 carbon accounting. Each record links to its original PDF and issuer verification URL. These are completed short courses, not degree qualifications.',
      link: 'experience.html#certificates', label: 'View all six course certificates'
    },
    {
      match: /\b(research|currently|working on|focus|thesis|msr)\b/i,
      answer: 'Jyotirmoy is pursuing an MS by Research in Energy Sciences and Engineering at IIT Guwahati. His current research focuses on a safety-gated event-triggered edge–cloud battery digital twin. The local controller retains estimation and safety responsibility while cloud assistance is requested selectively.',
      link: 'research.html', label: 'Read current research'
    },
    {
      match: /\b(digital twin|event.trigger|cloud|communication|82\.8|gate)\b/i,
      answer: 'The battery digital twin combines a four-cell pack model, an edge BMS estimator, event-triggered cloud assistance and a local safety gate. The research report describes about 82.8% lower cloud communication in the tested PIL configuration. Physical OPAL-RT / TI C2000 CHIL testing is a planned next stage, not a completed result.',
      link: 'projects/battery-digital-twin.html', label: 'Open battery digital twin case study'
    },
    {
      match: /\b(hardware|opal|c2000|simulink|matlab|embedded|pil|chil|real.time)\b/i,
      answer: 'His battery research uses MATLAB/Simulink, OPAL-RT-based workflow preparation and TI C2000 embedded deployment planning. Simulation and PIL-oriented work are documented; physical CHIL validation is planned. His undergraduate computer-vision work also involved Jetson Nano hardware.',
      link: 'experience.html', label: 'Review technical skills'
    },
    {
      match: /\b(batterywise|laptop|telemetry|desktop app|battery analytics)\b/i,
      answer: 'BatteryWise is a local-first Windows battery analytics app. It collects laptop battery telemetry, uses a local FastAPI and SQLite workflow, and supports battery behaviour analysis and CSV export. The public repository describes the Flutter client as a future scaffold.',
      link: 'projects/batterywise.html', label: 'Open BatteryWise project'
    },
    {
      match: /\b(paper|publication|journal|conference|doi|manuscript|article)\b/i,
      answer: 'No peer-reviewed journal or conference publication was independently verified from the provided sources. A 20-page scientific project report from October 2026 is listed separately as a technical report, not as a published paper.',
      link: 'publications.html', label: 'Read publication status'
    },
    {
      match: /\b(project|application|software|portfolio|repo|code|github|machine.learning|mlops)\b/i,
      answer: 'The portfolio includes battery digital-twin research, BatteryWise, a battery ML monitoring platform, data-driven SOC estimation, NEXUS P2P, computer vision and other source-backed engineering projects. Public code links appear only where a matching repository was checked.',
      link: 'projects.html', label: 'Browse the project library'
    },
    {
      match: /\b(education|degree|university|iit|tezpur|background|cgpa)\b/i,
      answer: 'Jyotirmoy is currently an MS by Research student in Energy Sciences and Engineering at IIT Guwahati (current CGPA 8.7/10 in the supplied CV). He completed a B.Tech in Mechanical Engineering at Tezpur University (2019–2023).',
      link: 'about.html', label: 'Read about his background'
    },
    {
      match: /\b(cv|resume|résumé|download)\b/i,
      answer: 'You can download the public academic CV from the link below. This portfolio version removes the phone number and student roll number that appeared in the original résumé.',
      link: 'assets/Jyotirmoy_Chakraborty_Public_CV.pdf', label: 'Download public CV'
    },
    {
      match: /\b(contact|email|collaborat|reach|phd|supervisor|opportunity)\b/i,
      answer: 'For research discussions, potential collaborations or PhD-related conversations, the verified academic email is c.jyotirmoy@iitg.ac.in. You can also find his LinkedIn and GitHub profiles on the contact page.',
      link: 'contact.html', label: 'Contact and profiles'
    },
    {
      match: /\b(leetcode|coding challenge|algorithms)\b/i,
      answer: 'The LeetCode profile provided by Jyotirmoy is linked on the contact page. I do not have verified current problem-solving counts or ranking information and will not invent them.',
      link: 'contact.html', label: 'Open contact page'
    }
    ,{
      match: /\b(research statement|research vision|phd direction|future research)\b/i,
      answer: 'The research statement explains the current architecture, the tested PIL communication result, its limitations, and proposed PhD directions in event-triggered estimation, safety contracts and physics-informed modelling. A two-page PDF is also available from that page.',
      link: 'research-statement.html', label: 'Open research statement'
    },
    {
      match: /\b(prospective supervisor|my lab|laboratory fit|supervisor resources|academic evaluation)\b/i,
      answer: 'The prospective-supervisors page links directly to the CV, research statement, verified project evidence, academic output status, and institutional contact email. It also distinguishes what is completed from what is proposed.',
      link: 'supervisors.html', label: 'Open academic evaluation guide'
    },
    {
      match: /\b(reproduc|evidence|baseline|dataset|comparison|sample size|figure|plot|raw data)\b/i,
      answer: 'The battery digital-twin case study has an evidence ledger identifying the continuous-communication baseline, tested PIL status, the 82.8% reduction, and missing reproduction details. Its plot gallery contains original report figures, not recreated numerical time-series. Raw experiment data are not included.',
      link: 'projects/battery-digital-twin.html#evidence-table', label: 'Inspect evidence ledger'
    },
    {
      match: /\b(stability|proof|guarantee|chil complete|physical hardware|uncertainty bound|limitation)\b/i,
      answer: 'The project report does not establish formal stability guarantees or completed physical OPAL-RT/TI C2000 CHIL timing. The event-trigger and safety-gate parameters are partly engineering thresholds. Physical CHIL and theoretical error bounds are listed as next research stages.',
      link: 'research-statement.html', label: 'Read scope and limitations'
    }
  ];
  // Prioritize specific evidence and scientific status before general research/project keywords.
  const priority = [0, 13, 14, 11, 12, 2, 4, 5, 8, 9, 10, 3, 7, 6, 1];
  const addBubble = (text, who, route, label) => {
    if (!messages) return;
    const p = document.createElement('p');
    p.className = `assistant-bubble ${who}`;
    p.textContent = text;
    if (route && label) {
      p.appendChild(document.createElement('br'));
      const a = document.createElement('a');
      a.href = `${prefix}${route}`;
      a.textContent = `${label} ↗`;
      p.appendChild(a);
    }
    messages.appendChild(p);
    messages.scrollTop = messages.scrollHeight;
  };
  const respond = (text) => {
    const q = text.trim().slice(0, 250);
    if (!q) return;
    addBubble(q, 'user');
    const item = priority.map(i => FAQs[i]).find(x => x.match.test(q));
    if (item) {
      addBubble(item.answer, 'bot', item.link, item.label);
    } else {
      addBubble('I cannot verify that from the approved portfolio content. I can answer about research, projects, education, technical tools, publications, CV and contact information. For a more specific question, please contact Jyotirmoy directly.', 'bot', 'contact.html', 'Contact Jyotirmoy');
    }
  };
  const closeAssistant = () => {
    if (!dialog || dialog.hidden) return;
    dialog.hidden = true;
    launcher?.setAttribute('aria-expanded', 'false');
    launcher?.focus();
  };
  launcher?.addEventListener('click', () => {
    dialog.hidden = !dialog.hidden;
    launcher.setAttribute('aria-expanded', String(!dialog.hidden));
    if (!dialog.hidden) chatInput?.focus();
  });
  closeAssistantButton?.addEventListener('click', closeAssistant);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAssistant();
  });
  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    respond(chatInput.value);
    chatInput.value = '';
    chatInput.focus();
  });
  document.querySelectorAll('[data-question]').forEach((button) => {
    button.addEventListener('click', () => respond(button.dataset.question || ''));
  });
})();
