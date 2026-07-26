const SITE = {
  name: "Aunt Elsie's Homestay",
  legal: "Aunt Elsie's Homestays & Educational Services Agency™",
  email: "info@elsiehomestay.com",
  phone: "732-482-9870",
  phoneHref: "+17324829870",
  altPhone: "201-499-7847",
  altPhoneHref: "+12014997847",
  address: "85 Raritan Ave, Suite 500D, Highland Park, New Jersey 08904",
  shortAddress: "Highland Park, New Jersey",
  logo: "https://auntelsiehomestay.com/wp-content/uploads/2024/01/cropped-Aunt-Elsie-Homestay-1.png"
};

const IMG = {
  hero: "https://auntelsiehomestay.com/wp-content/uploads/2024/01/2017-08-09-16.27.06-1-scaled.jpg",
  family: "https://auntelsiehomestay.com/wp-content/uploads/2024/01/3C36ACDC-853C-4CF9-91A2-24024942CE32-1-scaled.jpg",
  community: "https://auntelsiehomestay.com/wp-content/uploads/2024/01/9218B8D9-7D9D-426C-910D-074AE1A601B7-scaled.jpg",
  student: "https://auntelsiehomestay.com/wp-content/uploads/2024/01/83257A8D-0933-4802-983B-BE1337E30CB2.jpg",
  group: "https://auntelsiehomestay.com/wp-content/uploads/2024/01/2017-07-29-21.07.10-1-scaled.jpg",
  city: "https://auntelsiehomestay.com/wp-content/uploads/2024/01/2017-07-30-19.41.19-1-scaled.jpg",
  experience: "https://auntelsiehomestay.com/wp-content/uploads/2024/01/2017-07-28-14.50.45-scaled.jpg"
};

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  school: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-6 9 6-9 6zM6 13v5c3 2 9 2 12 0v-5M21 10v7"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6z"/><path d="m8 12 3 3 5-6"/></svg>',
  plane: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
  map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3zM9 3v15M15 6v15"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>',
  meal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3v8a3 3 0 0 0 3 3V3M7 14v7M14 3v7a3 3 0 0 0 6 0V3M17 13v8"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12a10 10 0 0 1 14 0M8 15a6 6 0 0 1 8 0M11 18a2 2 0 0 1 2 0"/><circle cx="12" cy="21" r="1"/></svg>'
};

const routeMeta = {
  '/': ["Aunt Elsie's Homestay | Live, Learn & Belong", "Welcoming homestays and educational support for international students, scholars and visiting families in New Jersey."],
  '/students': ["Student Homestays in New Jersey | Aunt Elsie's", "Furnished student homestays, meals, transportation options and cultural adjustment support in New Jersey."],
  '/host-families': ["Become a Host Family | Aunt Elsie's Homestay", "Open your home to an international student or scholar and join a supported cultural exchange community."],
  '/schools': ["Homestay Programs for Schools | Aunt Elsie's", "Housing coordination and student support for U.S. and international schools."],
  '/us-schools': ["Homestay Support for U.S. Schools | Aunt Elsie's", "Reliable student housing coordination for U.S. schools, colleges and universities."],
  '/international-schools': ["International School Homestay Programs | Aunt Elsie's", "Custom cultural exchange and homestay programs for schools sending students to the United States."],
  '/services': ["Homestay Services | Aunt Elsie's", "Long- and short-stay accommodation, airport transportation, emergency availability and cultural adjustment support."],
  '/pricing': ["Homestay Pricing & Custom Quotes | Aunt Elsie's", "Understand what affects homestay pricing and request a custom quote for individual, group, short or long stays."],
  '/about': ["About Aunt Elsie's Homestay", "Learn about Aunt Elsie's mission, experience, host families and educational community relationships."],
  '/contact': ["Contact Aunt Elsie's Homestay", "Contact Aunt Elsie's team in Highland Park, New Jersey for student, host family and school enquiries."],
  '/apply': ["Request a Homestay or Partnership | Aunt Elsie's", "Start a student, host family or school enquiry with Aunt Elsie's Homestay."]
};

function escapeHtml(value = '') {
  return value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function icon(name) { return `<span class="icon">${icons[name] || icons.check}</span>`; }
function link(path, label, className = '') { return `<a href="${path}" data-route class="${className}">${label}</a>`; }
function button(path, label, style = 'primary') { return link(path, `${label}${icons.arrow}`, `button button-${style}`); }
function eyebrow(text) { return `<span class="eyebrow">${text}</span>`; }
function checks(items, className = 'check-list') { return `<ul class="${className}">${items.map(item => `<li>${icon('check')}<span>${item}</span></li>`).join('')}</ul>`; }

function header() {
  const current = location.pathname;
  const navItems = [
    ['/', 'Home'], ['/students', 'Students'], ['/host-families', 'Host families'], ['/schools', 'Schools'],
    ['/services', 'Services'], ['/pricing', 'Pricing'], ['/about', 'About']
  ];
  return `
    <div class="announcement"><span>${icon('map')} Serving the New York & New Jersey metropolitan area</span><span><a href="tel:${SITE.phoneHref}">${icon('phone')} ${SITE.phone}</a></span></div>
    <header class="site-header">
      <a href="/" data-route class="brand" aria-label="Aunt Elsie's Homestay home">
        <img src="${SITE.logo}" alt="Aunt Elsie's Homestay logo" />
        <span><strong>Aunt Elsie's</strong><small>Homestays & Educational Services</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="site-nav" aria-label="Main navigation">
        ${navItems.map(([path, label]) => `<a href="${path}" data-route class="${current === path || (path === '/schools' && ['/us-schools','/international-schools'].includes(current)) ? 'active' : ''}">${label}</a>`).join('')}
        ${link('/contact', 'Contact', current === '/contact' ? 'active' : '')}
        ${button('/apply', 'Start an enquiry', 'primary compact')}
      </nav>
    </header>`;
}

function footer() {
  return `
    <section class="final-cta">
      <div>${eyebrow('A warmer way to arrive')}<h2>Tell us where you are going, when you arrive and what support you need.</h2></div>
      <div class="cta-actions">${button('/apply', 'Start your enquiry')}<a class="button button-ghost light" href="tel:${SITE.phoneHref}">Call ${SITE.phone}</a></div>
    </section>
    <footer class="footer">
      <div class="footer-main">
        <div class="footer-brand"><img src="${SITE.logo}" alt="" /><h3>${SITE.name}</h3><p>A home away from home for international students, scholars, traveling families and educational partners.</p></div>
        <div><h4>For guests</h4>${link('/students','Student homestays')}${link('/services','Services')}${link('/pricing','Pricing & quotes')}${link('/apply','Request a placement')}</div>
        <div><h4>For partners</h4>${link('/host-families','Become a host')}${link('/us-schools','U.S. schools')}${link('/international-schools','International schools')}${link('/about','About us')}</div>
        <div><h4>Contact</h4><a href="tel:${SITE.phoneHref}">${SITE.phone}</a><a href="tel:${SITE.altPhoneHref}">${SITE.altPhone}</a><a href="mailto:${SITE.email}">${SITE.email}</a><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}" target="_blank" rel="noreferrer">${SITE.address}</a></div>
      </div>
      <div class="footer-bottom"><span>© 2026 ${SITE.legal}</span><span>Live. Learn. Grow.</span></div>
    </footer>
    <div class="mobile-actions"><a href="tel:${SITE.phoneHref}">${icon('phone')} Call</a>${link('/apply', `${icon('arrow')} Enquire`)}</div>`;
}

function homePage() {
  return `
    <main id="main-content">
      <section class="hero">
        <div class="hero-copy">
          ${eyebrow('International homestays since 2005')}
          <h1>Come to America.<br><em>Feel at home.</em></h1>
          <p class="lead">Thoughtfully matched homes, practical arrival support and meaningful cultural connection for international students, scholars, traveling families and guests.</p>
          <div class="hero-actions">${button('/apply','Find a homestay')}${button('/host-families','Become a host','ghost')}</div>
          <div class="assurance-row"><span>${icon('shield')} Selected and screened host families</span><span>${icon('clock')} Emergency support available 24/7</span></div>
        </div>
        <div class="hero-media">
          <img src="${IMG.hero}" alt="International guests enjoying a homestay experience" />
          <div class="hero-note">${icon('heart')}<span><strong>More than accommodation</strong><small>Friendship, companionship and a real cultural exchange.</small></span></div>
          <div class="hero-location">${icon('map')} Highland Park, New Jersey</div>
        </div>
      </section>

      <section class="partner-strip" aria-label="Organizations and institutions mentioned on the current website">
        <span>Educational communities represented in past student support</span>
        <div><strong>Rutgers University</strong><strong>Fairleigh Dickinson University</strong><strong>Bergen Community College</strong><strong>Middlesex County College</strong></div>
      </section>

      <section class="section route-section">
        <div class="section-heading centered">${eyebrow('Choose your journey')}<h2>Start with the information made for you.</h2><p>No searching through general pages. Each audience gets a clear next step.</p></div>
        <div class="route-grid">
          <article class="route-card featured">${icon('user')}<span class="card-kicker">Students & scholars</span><h3>A comfortable home near your school.</h3><p>See what may be included, how matching works and how the team supports your arrival.</p>${link('/students',`Explore student homestays ${icons.arrow}`)}</article>
          <article class="route-card">${icon('home')}<span class="card-kicker">Host families</span><h3>Share your home and your culture.</h3><p>Learn what guests need, how matching works and how Aunt Elsie's supports hosts.</p>${link('/host-families',`Learn about hosting ${icons.arrow}`)}</article>
          <article class="route-card">${icon('school')}<span class="card-kicker">Schools & organizations</span><h3>Housing support built around your program.</h3><p>Plan individual placements, group stays, seasonal programs or customized exchanges.</p>${link('/schools',`View school programs ${icons.arrow}`)}</article>
        </div>
      </section>

      <section class="section image-split warm">
        <div class="image-stack"><img src="${IMG.family}" alt="Aunt Elsie's homestay guests and community" /><img src="${IMG.community}" alt="Students enjoying a community activity" /><div class="image-label"><strong>Live. Learn. Grow.</strong><span>with people who care</span></div></div>
        <div class="content-block">${eyebrow("The Aunt Elsie's experience")}<h2>A place to stay—and people to count on.</h2><p>Aunt Elsie's connects international visitors with American host families who are ready to open their homes and hearts for friendship and companionship.</p>${checks([
          'Safe, clean and comfortable furnished accommodation',
          'Personal matching based on the guest, school and requested stay',
          'Support while adjusting to American culture and daily life',
          'Short stays, long stays, seasonal programs and group arrangements',
          'Airport pickup, drop-off and moving transportation available for additional fees'
        ])}${button('/services','See every service','ghost')}</div>
      </section>

      <section class="section services-dark">
        <div class="section-heading light">${eyebrow('What is included')}<h2>The practical details that make arrival easier.</h2><p>Visitors should understand the experience before they enquire—not after.</p></div>
        <div class="service-grid">
          ${serviceCard('home','Furnished room','A modest, comfortable room with bed linens, towels, a desk and internet access.')}
          ${serviceCard('meal','Daily meals','A self-prepared continental breakfast and dinner served by the host family, with arrangements clarified before placement.')}
          ${serviceCard('map','Connected locations','Placements consider access to public transportation, school and everyday amenities.')}
          ${serviceCard('plane','Airport & moving help','Airport pickup, drop-off and local moving transportation may be added for an additional fee.')}
          ${serviceCard('heart','Cultural support','Guidance and responsive support while guests adjust to American culture.')}
          ${serviceCard('clock','Emergency availability','Round-the-clock availability in the case of an emergency.')}
        </div>
      </section>

      <section class="section process-section">
        <div class="section-heading centered">${eyebrow('A simpler placement journey')}<h2>Know what happens before you apply.</h2></div>
        <div class="process-grid">
          ${step('01','Share your plans','Tell us your school or destination, dates, stay length and preferences.')}
          ${step('02','Review the request','The team confirms availability, service options and the information needed for matching.')}
          ${step('03','Receive your placement','A suitable host and arrangement are proposed based on the request.')}
          ${step('04','Arrive with support','Add airport transportation if needed and stay connected throughout the placement.')}
        </div>
        <div class="center-actions">${button('/apply','Check availability')}${link('/pricing','Understand custom pricing →','text-link')}</div>
      </section>

      <section class="section quote-planner-section">
        <div class="planner-intro">${eyebrow('Plan before you enquire')}<h2>Build a quick homestay request.</h2><p>Choose a few details and see the exact information Aunt Elsie's needs to prepare your quote.</p>${checks(['No invented or hidden price shown','Short, long, group and school options','A clear summary you can send immediately'])}</div>
        ${quotePlanner()}
      </section>

      <section class="section story-section">
        <div class="story-photo"><img src="${IMG.student}" alt="International student homestay experience" /></div>
        <div class="story-copy">${eyebrow('From the current student stories')}<blockquote>“Aunt Elsie's Homestays made my study abroad unforgettable. From the warm welcome of my host family to the diverse cultural experiences, it truly felt like a home away from home.”</blockquote><strong>Isabella</strong><span>International student</span><div class="quote-tabs"><button class="quote-tab active" data-quote="0">Isabella</button><button class="quote-tab" data-quote="1">Esther</button><button class="quote-tab" data-quote="2">Emily</button></div></div>
      </section>

      <section class="section faq-section">
        <div class="section-heading">${eyebrow('Common questions')}<h2>Answers that reduce hesitation.</h2></div>
        <div class="faq-grid">
          ${faq('Who can request a homestay?','International students, scholars, traveling families, guests and individuals coming to the United States to study English, vacation or otherwise interact with Americans can contact the team about a placement.')}
          ${faq('Are both short and long stays available?','Yes. The current service information mentions 7-day, 14-day and 21-day short stays, as well as seasonal, yearly and other long-term arrangements based on the request.')}
          ${faq('What is normally provided in the room?','The current service description includes a furnished room with sheets, towels, a desk and internet access. Final inclusions should be confirmed for each placement.')}
          ${faq('Can Aunt Elsie’s arrange airport pickup?','Airport pickup, drop-off and moving transportation are available for additional fees, subject to the details of the request.')}
          ${faq('How are host families selected?','Aunt Elsie’s states that families are individually selected and screened before they join the host family network.')}
          ${faq('Do schools receive customized programs?','Yes. School programs can be shaped around duration, language requirements, academic focus, group schedules and other institutional needs.')}
        </div>
      </section>
    </main>`;
}

function serviceCard(iconName, title, text) {
  return `<article class="service-card">${icon(iconName)}<h3>${title}</h3><p>${text}</p></article>`;
}
function step(number, title, text) { return `<article class="step-card"><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`; }
function faq(question, answer) { return `<details class="faq-item"><summary>${question}<span>+</span></summary><p>${answer}</p></details>`; }

function pageHero({kicker, title, copy, image, imageAlt, actions = ''}) {
  return `<section class="page-hero"><div>${eyebrow(kicker)}<h1>${title}</h1><p class="lead">${copy}</p><div class="hero-actions">${actions || button('/apply','Start an enquiry')}</div></div><div class="page-hero-image"><img src="${image}" alt="${imageAlt}" /></div></section>`;
}

function studentsPage() {
  return `<main id="main-content">
    ${pageHero({kicker:'For students, scholars & visiting guests',title:'A home that helps you settle, study and belong.',copy:'Aunt Elsie’s offers short- and long-stay accommodation with furnished rooms, daily-life support and optional transportation in the New Jersey and New York metropolitan area.',image:IMG.student,imageAlt:'International student enjoying a homestay',actions:button('/apply?type=student','Request a student placement') + button('/pricing','View pricing guidance','ghost')})}
    <section class="section proof-banner"><div><strong>Home essentials</strong><span>Furnished room, linens, towels, desk and internet access</span></div><div><strong>Daily support</strong><span>Meals, local guidance and cultural adjustment support</span></div><div><strong>Flexible timing</strong><span>7, 14 and 21-day stays, seasonal programs and longer placements</span></div></section>
    <section class="section image-split"><div class="content-block">${eyebrow('What your stay may include')}<h2>Practical comfort, clearly explained.</h2><p>Every placement is different. These are the services described on the current Aunt Elsie’s website, with final details confirmed in your quote and placement agreement.</p>${checks([
      'A safe, clean and comfortable homestay with a modest bedroom',
      'A fully furnished room with sheets, towels, desk and internet access',
      'Two meals each day: a self-prepared continental breakfast and host-served dinner',
      'Consideration of public transportation and travel time to school',
      'A friendly home environment with a kind and caring host',
      'Access to staff support while adjusting to American culture',
      '24/7 availability in the case of an emergency'
    ])}</div><div class="feature-panel"><h3>Before matching, tell us about:</h3>${checks(['School or destination','Arrival and departure dates','Dietary needs and allergies','Room and household preferences','Transportation needs','Age and level of independence'])}${button('/apply?type=student','Share your requirements')}</div></section>
    <section class="section warm"><div class="section-heading centered">${eyebrow('Why students choose homestay')}<h2>More time for study. More confidence in daily life.</h2></div><div class="benefit-grid">
      ${benefit('heart','Belonging','Live with people who can make a new country feel more familiar.')}
      ${benefit('globe','Cultural immersion','Learn about American life while sharing your own culture and perspective.')}
      ${benefit('map','Everyday convenience','Placements consider school access, public transportation and nearby amenities.')}
      ${benefit('shield','Peace of mind','Host families are selected and screened before joining the network.')}
    </div></section>
    <section class="section two-column"><div>${eyebrow('Short or long stay')}<h2>Choose a stay shaped around your plans.</h2><p>Short-term pricing varies by week. Group, summer, high-school and long-term arrangements are quoted according to the schedule and level of support requested.</p></div><div class="option-stack">${option('7, 14 or 21 days','Useful for short programs, visits and cultural experiences.')}${option('Seasonal or summer','Custom schedules for individuals and groups.')}${option('Academic year or longer','Yearly and other extended arrangements based on the traveler’s needs.')}</div></section>
    <section class="section faq-section"><div class="section-heading">${eyebrow('Student FAQ')}<h2>Plan your arrival with fewer surprises.</h2></div><div class="faq-grid">${faq('Can I cook for myself?','The current service description says the stay includes a self-prepared continental breakfast and dinner served by the host family. Cooking access and any additional meal arrangements should be confirmed during matching.')}${faq('How close will I be to school?','Aunt Elsie’s considers transportation and mentions placements with bus stops within walking distance and, in some cases, a 15–25 minute bus ride to school. Exact travel time depends on the selected home and school.')}${faq('Are airport transfers included?','Airport pickup and drop-off are optional services available for additional fees.')}${faq('Can a family or non-student apply?','The current website also welcomes traveling families, guests and individuals visiting the U.S. to study English, vacation or interact with Americans.')}</div></section>
  </main>`;
}

function hostFamiliesPage() {
  return `<main id="main-content">
    ${pageHero({kicker:'For welcoming households',title:'Open your home. Bring the world closer.',copy:'Aunt Elsie’s is seeking caring host families in the New York and New Jersey metropolitan areas to welcome international students and visitors into everyday American life.',image:IMG.family,imageAlt:'Host family and international guest',actions:button('/apply?type=host','Apply to become a host') + button('/contact','Ask a hosting question','ghost')})}
    <section class="section host-intro"><div>${eyebrow('More than renting a room')}<h2>Offer friendship, companionship and a genuine home experience.</h2><p>Guests choose homestay because they want to live with people, not simply beside them. Hosts help visitors understand daily life, practise English, feel safe and build a connection to their new community.</p></div><div class="host-callout">${icon('heart')}<h3>Share your culture and your world.</h3><p>A host family may be a retired person, a single professional, a couple or a household with children. Aunt Elsie’s celebrates many kinds of American family life.</p></div></section>
    <section class="section warm"><div class="section-heading centered">${eyebrow('What guests usually need')}<h2>A clear picture of a welcoming home.</h2><p>Final requirements should be confirmed with Aunt Elsie’s. These expectations reflect the services currently promised to guests.</p></div><div class="benefit-grid">
      ${benefit('home','A comfortable room','A clean, furnished bedroom with linens, towels, a desk and internet access.')}
      ${benefit('meal','Meal support','A continental breakfast arrangement and dinner served by the host family.')}
      ${benefit('heart','A caring welcome','Patience, conversation and help understanding household and community life.')}
      ${benefit('map','Practical access','Reasonable access to school, transportation and everyday amenities.')}
    </div></section>
    <section class="section image-split"><div class="feature-panel dark"><h3>The matching process</h3>${step('01','Introduce your household','Share location, room details, household members, pets and availability.')}${step('02','Screening and conversation','Aunt Elsie’s states that host families are individually selected and screened.')}${step('03','Review a guest match','Consider the visitor’s dates, school, needs and preferences before confirming.')}${step('04','Welcome with support','Stay in touch with the team during the placement and reach out when help is needed.')}</div><div class="content-block">${eyebrow('Why host')}<h2>A meaningful exchange for the whole household.</h2>${checks(['Meet people from different countries and cultures','Help a student or visitor adjust to life in America','Build friendships that can continue after the stay','Share local traditions, meals and everyday experiences','Receive clear placement information before accepting a guest','Access support during the placement'])}${button('/apply?type=host','Tell us about your home')}</div></section>
    <section class="section faq-section"><div class="section-heading">${eyebrow('Host family FAQ')}<h2>Questions to discuss before you welcome a guest.</h2></div><div class="faq-grid">${faq('Do I need to have children?','No. The current website says host families can include retired people, single professionals and couples with children, among others.')}${faq('How long are placements?','Placements may be short term, seasonal, yearly or otherwise customized around the visitor’s request and the host’s availability.')}${faq('How will I know who is staying with me?','The redesigned process collects guest dates, school, age, preferences, dietary needs and transportation requirements so the team can discuss a suitable match with you.')}${faq('Is support available during the stay?','The current service information includes cultural adjustment support and round-the-clock availability in the case of an emergency.')}</div></section>
  </main>`;
}

function schoolsPage() {
  return `<main id="main-content">
    ${pageHero({kicker:'For educational partners',title:'Homestay support shaped around your students and program.',copy:'Aunt Elsie’s works with local and international educational communities to coordinate housing, cultural immersion, arrival support and customized student experiences.',image:IMG.group,imageAlt:'Group of international students participating in a program',actions:button('/apply?type=school','Plan a school program')})}
    <section class="section route-section"><div class="section-heading centered">${eyebrow('Choose the partnership path')}<h2>Different schools need different support.</h2></div><div class="route-grid two">
      <article class="route-card featured">${icon('school')}<span class="card-kicker">U.S. schools</span><h3>Reliable local housing coordination.</h3><p>Support international students, scholars and visiting groups with short- or long-term placements near your institution.</p>${link('/us-schools',`Explore U.S. school support ${icons.arrow}`)}</article>
      <article class="route-card">${icon('globe')}<span class="card-kicker">International schools</span><h3>A structured cultural exchange journey.</h3><p>Customize duration, academic focus, student selection, pre-departure orientation and U.S. homestay placement.</p>${link('/international-schools',`Explore international programs ${icons.arrow}`)}</article>
    </div></section>
    <section class="section warm"><div class="section-heading centered">${eyebrow('Program building blocks')}<h2>Combine the support your program actually needs.</h2></div><div class="service-grid light-cards">${serviceCard('home','Homestay placement','Individual or group accommodation with carefully selected host families.')}${serviceCard('plane','Arrival logistics','Airport pickup, drop-off and moving transportation options.')}${serviceCard('heart','Student support','Guidance for cultural adjustment and responsive communication during the stay.')}${serviceCard('globe','Cultural programming','Community connection and authentic American family experiences.')}</div></section>
    <section class="section quote-planner-section"><div class="planner-intro">${eyebrow('Program request builder')}<h2>Give the team a useful first brief.</h2><p>The enquiry form gathers group size, dates, age range, school destination, transportation and support needs.</p>${checks(['Faster initial response','Fewer back-and-forth emails','A more accurate custom quote'])}</div>${schoolPlanner()}</section>
  </main>`;
}

function usSchoolsPage() {
  return `<main id="main-content">
    ${pageHero({kicker:'For U.S. schools, colleges & universities',title:'A local housing partner for international student success.',copy:'Coordinate individual students, scholars, short-term groups and seasonal programs with local homestay support from Highland Park, New Jersey.',image:IMG.city,imageAlt:'Students near a U.S. school and community',actions:button('/apply?type=school','Discuss your housing needs')})}
    <section class="section proof-banner"><div><strong>Short & long stays</strong><span>Weekly, seasonal, yearly and customized arrangements</span></div><div><strong>Arrival support</strong><span>Airport and local moving transportation options</span></div><div><strong>Human communication</strong><span>Support for students while they adjust to American culture</span></div></section>
    <section class="section two-column"><div>${eyebrow('What schools can request')}<h2>Housing coordination that fits the academic calendar.</h2><p>Use Aunt Elsie’s as a housing option for international students, visiting scholars, language learners, summer groups and other educational visitors.</p>${button('/apply?type=school','Request a school consultation')}</div><div>${checks(['Homestay matching based on school, dates and student needs','Individual placements or group and summer schedules','Furnished rooms and agreed meal arrangements','Airport pickup and moving transportation add-ons','Communication before arrival and during the placement','Customized quotes based on the exact program request'])}</div></section>
    <section class="section warm"><div class="section-heading centered">${eyebrow('Experience referenced by Aunt Elsie’s')}<h2>Connected to New Jersey’s educational community.</h2><p>The current website says Aunt Elsie’s has enriched international guests while working with many colleges and universities.</p></div><div class="logo-text-grid"><article>Rutgers University</article><article>Fairleigh Dickinson University</article><article>Bergen Community College</article><article>Middlesex County College</article></div><p class="disclaimer">Institution names are reproduced from the current Aunt Elsie’s website as examples of prior work; they should not be presented as current endorsements without confirmation.</p></section>
    <section class="section process-section"><div class="section-heading centered">${eyebrow('A practical institutional process')}<h2>From initial brief to student arrival.</h2></div><div class="process-grid">${step('01','Program brief','Share expected student numbers, dates, age range and school location.')}${step('02','Service design','Confirm stay type, meals, transportation, communication and support expectations.')}${step('03','Placement coordination','Collect student information and prepare suitable host arrangements.')}${step('04','Arrival & follow-through','Coordinate optional pickup and keep a clear contact route during the program.')}</div></section>
  </main>`;
}

function internationalSchoolsPage() {
  const stages = [
    ['01','Explore the program','Review homestay, cultural and educational options for your students.'],
    ['02','Express your interest','Contact Aunt Elsie’s with your school’s goals, preferred timing and expected group.'],
    ['03','Customize the experience','Shape duration, language requirements, academic focus, schedule and support.'],
    ['04','Confirm the partnership','Finalize the program details and establish a formal agreement.'],
    ['05','Select participating students','Set eligibility and application requirements with guidance from the team.'],
    ['06','Prepare before departure','Orient students and teachers on culture, academics and practical expectations.'],
    ['07','Match homes and schools','Coordinate suitable host families and U.S. educational arrangements.'],
    ['08','Support the exchange','Help students learn, grow and build meaningful cultural connections.'],
    ['09','Reflect on the impact','Encourage students and teachers to share learning with their home community.'],
    ['10','Plan future collaboration','Review feedback and explore future exchanges, projects and initiatives.']
  ];
  return `<main id="main-content">
    ${pageHero({kicker:'For schools outside the United States',title:'Turn a school trip into a meaningful exchange.',copy:'Build a customized U.S. homestay experience that supports language development, academic goals, cultural understanding and lasting global connections.',image:IMG.experience,imageAlt:'International students sharing a cultural exchange experience',actions:button('/apply?type=school','Start a program enquiry')})}
    <section class="section two-column"><div>${eyebrow('A customizable program')}<h2>Your school is unique. The experience should be too.</h2><p>Aunt Elsie’s can shape the program around duration, language requirements, academic focus, student profile, group schedule, housing and transportation needs.</p></div><div>${checks(['Cultural immersion with American host families','Individual or group homestay arrangements','Pre-departure preparation and practical guidance','School and host matching coordination','Airport transportation options','Post-program reflection and future collaboration'])}</div></section>
    <section class="section warm"><div class="section-heading centered">${eyebrow('The 10-step partnership journey')}<h2>A clear path from first conversation to future collaboration.</h2></div><div class="timeline">${stages.map(([n,t,d])=>`<article><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div></section>
    <section class="section impact-section"><div class="impact-card">${icon('globe')}<h3>Global understanding</h3><p>Give students first-hand experience of American culture and daily family life.</p></div><div class="impact-card">${icon('school')}<h3>Language & learning</h3><p>Support language confidence and connect cultural experience with academic goals.</p></div><div class="impact-card">${icon('heart')}<h3>Lasting relationships</h3><p>Create meaningful connections among students, teachers, hosts and communities.</p></div></section>
  </main>`;
}

function servicesPage() {
  return `<main id="main-content">
    ${pageHero({kicker:'Homestay & educational services',title:'Everything needed for a more confident arrival.',copy:'From a furnished room to airport transportation and cultural adjustment support, Aunt Elsie’s helps visitors handle the practical side of living in the United States.',image:IMG.community,imageAlt:'Aunt Elsie’s homestay community activity',actions:button('/apply','Build your service request')})}
    <section class="section service-detail-grid">
      ${detailService('home','Long- and short-stay homestays','Safe, clean and comfortable accommodation for individual guests, students, scholars, families and groups.', ['Furnished room with sheets, towels and desk','Internet access','Breakfast and dinner arrangements','Short stays of 7, 14 or 21 days','Seasonal, yearly and other long-term requests'])}
      ${detailService('plane','Airport pickup, drop-off & moving','Optional transportation can reduce uncertainty between arrival and move-in.', ['Airport pickup and drop-off','Local moving transportation','Quoted separately based on request','Flight and arrival details collected in advance'])}
      ${detailService('heart','Counselling & cultural adjustment support','A responsive contact while guests learn how to navigate American culture and everyday life.', ['Pre-arrival questions','Support after move-in','Help addressing cultural adjustment concerns','Communication with students, hosts or schools'])}
      ${detailService('clock','24/7 emergency availability','Round-the-clock availability in the case of an emergency during a placement.', ['Clear emergency contact route','Support for urgent placement concerns','Coordination among guest, host and program contact'])}
    </section>
    <section class="section warm"><div class="section-heading centered">${eyebrow('Placement environment')}<h2>Comfort and everyday convenience matter.</h2></div><div class="benefit-grid">${benefit('wifi','Ready to study','A desk and internet access help guests settle into academic routines.')}${benefit('map','Connected to daily life','Placements consider bus access, school travel and nearby shopping and entertainment.')}${benefit('shield','Selected homes','Families are evaluated and screened before joining the host network.')}${benefit('globe','Different American lifestyles','The host network can include retired people, single professionals and couples with children.')}</div></section>
    <section class="section two-column"><div>${eyebrow('Important pricing notes')}<h2>Every quote depends on the actual stay.</h2><p>Short-term weeks, group schedules, high-school requests and long-term programs are priced differently. The website should explain the variables before asking visitors to contact the team.</p>${button('/pricing','See how pricing works','ghost')}</div><div class="note-card"><h3>Information needed for a quote</h3>${checks(['Arrival and departure dates','Guest age and total number of people','School or destination','Meal and room requirements','Airport or moving transportation','Any special schedule or support needs'])}</div></section>
  </main>`;
}

function pricingPage() {
  return `<main id="main-content">
    ${pageHero({kicker:'Custom pricing without confusion',title:'A quote shaped around the stay—not a generic number.',copy:'Aunt Elsie’s current information says pricing varies by week, student age, group schedule and long-term program. This page explains those factors without publishing unconfirmed rates.',image:IMG.hero,imageAlt:'A homestay guest and host family',actions:button('/apply','Request a custom quote')})}
    <section class="section pricing-grid">
      ${pricingCard('Short stays','7, 14 or 21 days',['Price varies for each week','Useful for visits, camps and short programs','Add transportation if required'])}
      ${pricingCard('Students & scholars','Academic and individual stays',['Matched around school and dates','High-school requests priced separately','Meal and support needs affect the quote'],true)}
      ${pricingCard('Groups & schools','Summer, seasonal and custom programs',['Pricing follows the group schedule','Program support can be customized','Institutional quote prepared after consultation'])}
      ${pricingCard('Long stays','Seasonal, yearly or other extended requests',['Built around the traveler’s exact request','Availability and location affect placement','Terms confirmed before acceptance'])}
    </section>
    <section class="section quote-factors"><div>${eyebrow('What changes the quote')}<h2>Six details determine the right arrangement.</h2></div><div class="factor-grid">${factor('01','Length of stay','The number of days, weeks or months requested.')}${factor('02','Guest profile','Age, number of guests and level of support needed.')}${factor('03','School & location','Destination, travel time and host availability.')}${factor('04','Room & meals','Room arrangement, dietary needs and meal plan.')}${factor('05','Transportation','Airport pickup, drop-off or moving support.')}${factor('06','Program design','Group schedule, school coordination and cultural activities.')}</div></section>
    <section class="section quote-planner-section"><div class="planner-intro">${eyebrow('Prepare your quote request')}<h2>Get the details right the first time.</h2><p>The planner creates a concise request summary and opens it in your email app for Aunt Elsie’s team.</p>${checks(['No payment required on the mockup','No false instant-price promise','Clear variables before submission'])}</div>${quotePlanner()}</section>
    <section class="section note-banner"><strong>Why no public dollar amount?</strong><p>The current pricing page was not reliably accessible during review, while the services page explicitly says prices vary by stay length, group schedule, high-school request and long-term program. Publishing invented rates would create distrust and inaccurate enquiries.</p></section>
  </main>`;
}

function aboutPage() {
  return `<main id="main-content">
    ${pageHero({kicker:'About Aunt Elsie’s',title:'Building bridges through home, education and human connection.',copy:'Aunt Elsie’s offers a “home away from home” to international students, traveling families, guests and individuals visiting the United States to study, vacation or experience American life.',image:IMG.family,imageAlt:'Aunt Elsie’s host family and guests',actions:button('/apply','Join the community') + button('/contact','Contact the team','ghost')})}
    <section class="section image-split"><div class="content-block">${eyebrow('Our story')}<h2>A diverse network of homes and perspectives.</h2><p>Guests are placed with American families who are interested in hosting international visitors. The families are individually selected and screened, and bring different ethnicities, cultures, household types and life experiences to the homestay community.</p><p>Aunt Elsie’s public company profile says the organization was founded in 2005. The current website describes more than a decade of work supporting international guests and educational communities.</p>${checks(['International student housing and educational services','Host families across the New York and New Jersey metropolitan area','Experience with colleges, universities, high schools and community groups','A commitment to diversity, cultural understanding and personal support'])}</div><div class="image-stack"><img src="${IMG.community}" alt="A diverse homestay community" /><img src="${IMG.group}" alt="Students participating in a cultural experience" /><div class="image-label"><strong>Since 2005</strong><span>connecting guests and hosts</span></div></div></section>
    <section class="section mission-grid"><article><span>Mission</span><h3>Authentic cultural exchange</h3><p>To be a premier choice for authentic cultural exchanges, fostering unity and understanding through impactful connections in the USA.</p></article><article><span>Vision</span><h3>A cultural haven</h3><p>To enable global connections by bringing international visitors and American host families together for a home-away-from-home experience.</p></article></section>
    <section class="section warm"><div class="section-heading centered">${eyebrow('Community connections mentioned on the current site')}<h2>Education and service beyond the home.</h2></div><div class="logo-text-grid six"><article>Rutgers University</article><article>Fairleigh Dickinson University</article><article>Bergen Community College</article><article>Middlesex County College</article><article>American Red Cross</article><article>Boys & Girls Clubs of America</article></div><p class="disclaimer">These names are included because the current Aunt Elsie’s website says the organization has worked with them. Current relationships and permission to display logos should be confirmed before production launch.</p></section>
    <section class="section testimonial-grid"><article><blockquote>“Homestay with Elsie is the best time! I had come for a year to study English and Literature, and I want to stay. My favorite part is becoming part of a family.”</blockquote><strong>Xi Anh</strong></article><article><blockquote>“The educational partnerships facilitated by AEHS opened doors to diverse academic opportunities. The homestay experience felt like a genuine home away from home.”</blockquote><strong>Esther</strong></article><article><blockquote>“As a host family, working with AEHS has been incredibly rewarding. The commitment to cultural exchange and diversity creates meaningful connections.”</blockquote><strong>Emily</strong></article></section>
  </main>`;
}

function contactPage() {
  return `<main id="main-content">
    <section class="contact-hero"><div>${eyebrow('Contact Aunt Elsie’s')}<h1>Tell us how we can help.</h1><p class="lead">Choose the enquiry type and include your dates, school or location, stay length and any special requirements.</p><div class="contact-cards"><a href="tel:${SITE.phoneHref}">${icon('phone')}<span><small>Main hotline</small><strong>${SITE.phone}</strong></span></a><a href="tel:${SITE.altPhoneHref}">${icon('phone')}<span><small>Additional line</small><strong>${SITE.altPhone}</strong></span></a><a href="mailto:${SITE.email}">${icon('arrow')}<span><small>Email</small><strong>${SITE.email}</strong></span></a><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}" target="_blank" rel="noreferrer">${icon('map')}<span><small>Office</small><strong>${SITE.shortAddress}</strong></span></a></div></div>${inquiryForm()}</section>
    <section class="section office-section"><div><img src="${IMG.city}" alt="Highland Park and New Jersey community" /></div><div>${eyebrow('Visit or call')}<h2>${SITE.address}</h2><p>For the fastest response, include whether you are a student or guest, a prospective host family, or a school representative.</p>${checks(['Students: school, dates and accommodation needs','Hosts: home location, room and availability','Schools: group size, age range, dates and program goals'])}</div></section>
  </main>`;
}

function applyPage() {
  const params = new URLSearchParams(location.search);
  const type = params.get('type') || '';
  return `<main id="main-content">
    <section class="apply-layout"><div class="apply-intro">${eyebrow('Start an enquiry')}<h1>One form. The right next step.</h1><p class="lead">A more useful first enquiry means Aunt Elsie’s can respond with the right questions, availability guidance and custom quote.</p><div class="apply-benefits">${checks(['Choose your audience first','Share the dates and location that affect availability','Add transportation, meals and support needs','Receive a clear copy of the request in your email app'])}</div><div class="contact-mini"><a href="tel:${SITE.phoneHref}">${icon('phone')} Prefer to talk? ${SITE.phone}</a><a href="mailto:${SITE.email}">${SITE.email}</a></div></div>${inquiryForm(type)}</section>
  </main>`;
}

function benefit(iconName, title, text) { return `<article class="benefit-card">${icon(iconName)}<h3>${title}</h3><p>${text}</p></article>`; }
function option(title,text) { return `<article><h3>${title}</h3><p>${text}</p></article>`; }
function detailService(iconName,title,text,items) { return `<article class="detail-service">${icon(iconName)}<h2>${title}</h2><p>${text}</p>${checks(items)}</article>`; }
function pricingCard(title,subtitle,items,featured=false) { return `<article class="pricing-card ${featured?'featured':''}">${featured?'<span class="popular">Most common enquiry</span>':''}<h2>${title}</h2><p>${subtitle}</p>${checks(items)}${button('/apply','Request this quote',featured?'primary':'ghost')}</article>`; }
function factor(n,t,d) { return `<article><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`; }

function quotePlanner() {
  return `<form class="planner-card" id="quote-planner">
    <div class="form-row"><label>I am enquiring as<select name="role"><option value="a student or guest">A student or guest</option><option value="a parent or guardian">A parent or guardian</option><option value="a host family">A prospective host family</option><option value="a school or organization">A school or organization</option></select></label><label>Stay length<select name="length"><option value="7 days">7 days</option><option value="14 days">14 days</option><option value="21 days">21 days</option><option value="one to three months">1–3 months</option><option value="an academic year or longer">Academic year or longer</option><option value="a custom group schedule">Custom group schedule</option></select></label></div>
    <div class="form-row"><label>Start date<input type="date" name="date" /></label><label>School or destination<input type="text" name="destination" placeholder="e.g. Rutgers University" /></label></div>
    <fieldset><legend>Services needed</legend><div class="checkbox-grid"><label><input type="checkbox" name="service" value="homestay accommodation" checked /> Homestay</label><label><input type="checkbox" name="service" value="meal support" /> Meals</label><label><input type="checkbox" name="service" value="airport pickup or drop-off" /> Airport transfer</label><label><input type="checkbox" name="service" value="moving transportation" /> Moving help</label><label><input type="checkbox" name="service" value="school or group coordination" /> School coordination</label><label><input type="checkbox" name="service" value="cultural adjustment support" /> Adjustment support</label></div></fieldset>
    <div class="planner-summary" aria-live="polite"><small>Your request summary</small><strong id="planner-output">A student or guest requesting a 7-day homestay.</strong></div>
    <button type="submit" class="button button-primary">Email this request ${icons.arrow}</button>
  </form>`;
}

function schoolPlanner() {
  return `<form class="planner-card" id="school-planner">
    <div class="form-row"><label>School location<select name="schoolType"><option value="a U.S. school">U.S. school</option><option value="an international school">International school</option><option value="an educational agent or organization">Agent or organization</option></select></label><label>Estimated group size<input name="groupSize" type="number" min="1" placeholder="Number of students" /></label></div>
    <div class="form-row"><label>Program start<input name="start" type="date" /></label><label>Program length<select name="length"><option>7 days</option><option>14 days</option><option>21 days</option><option>1–3 months</option><option>Academic year</option><option>Custom schedule</option></select></label></div>
    <label>Program goals<textarea name="goals" rows="4" placeholder="Describe student age range, academic focus, location, transportation and cultural goals"></textarea></label>
    <div class="planner-summary"><small>What happens next</small><strong>Aunt Elsie’s can use these details to discuss availability, placement structure and a custom institutional quote.</strong></div>
    <button type="submit" class="button button-primary">Email the program brief ${icons.arrow}</button>
  </form>`;
}

function inquiryForm(preselected = '') {
  return `<form class="inquiry-form" id="inquiry-form">
    <div class="form-progress"><span class="active">1</span><i></i><span>2</span><i></i><span>3</span></div>
    <div class="form-step active" data-step="1"><span class="form-kicker">Step 1 of 3</span><h2>Which journey brings you here?</h2><div class="choice-grid">
      ${choice('student','Student or guest','I need a homestay',preselected)}
      ${choice('host','Host family','I want to welcome a guest',preselected)}
      ${choice('school','School or organization','I need a program or placements',preselected)}
    </div><button type="button" class="button button-primary next-step">Continue ${icons.arrow}</button></div>
    <div class="form-step" data-step="2"><span class="form-kicker">Step 2 of 3</span><h2>Tell us the essential details.</h2><div class="form-row"><label>Full name<input name="name" required /></label><label>Email address<input type="email" name="email" required /></label></div><div class="form-row"><label>Phone number<input type="tel" name="phone" /></label><label>School or organization<input name="school" /></label></div><div class="form-row"><label>Preferred start date<input type="date" name="start" /></label><label>Expected stay length<select name="length"><option value="Not decided">Not decided</option><option>7 days</option><option>14 days</option><option>21 days</option><option>1–3 months</option><option>3–12 months</option><option>Academic year or longer</option><option>Custom group schedule</option></select></label></div><div class="step-actions"><button type="button" class="button button-ghost prev-step">Back</button><button type="button" class="button button-primary next-step">Continue ${icons.arrow}</button></div></div>
    <div class="form-step" data-step="3"><span class="form-kicker">Step 3 of 3</span><h2>What should the team know?</h2><label>Message<textarea name="message" rows="7" placeholder="Include destination, number of guests or students, dietary needs, airport transportation and any special requirements"></textarea></label><label class="consent"><input type="checkbox" required /> I understand this request opens in my email app and does not confirm a placement or price.</label><div class="step-actions"><button type="button" class="button button-ghost prev-step">Back</button><button type="submit" class="button button-primary">Send enquiry ${icons.arrow}</button></div></div>
  </form>`;
}
function choice(value,title,text,selected) { return `<label class="choice-card"><input type="radio" name="type" value="${value}" ${selected===value?'checked':''} required /><span>${icon(value==='student'?'user':value==='host'?'home':'school')}<strong>${title}</strong><small>${text}</small></span></label>`; }

const quotes = [
  {text:'“Aunt Elsie\'s Homestays made my study abroad unforgettable. From the warm welcome of my host family to the diverse cultural experiences, it truly felt like a home away from home.”',name:'Isabella',role:'International student'},
  {text:'“The educational partnerships facilitated by AEHS opened doors to diverse academic opportunities. The homestay experience felt like a genuine home away from home.”',name:'Esther',role:'International student'},
  {text:'“As a host family, working with AEHS has been incredibly rewarding. The commitment to cultural exchange and diversity creates meaningful connections with international guests.”',name:'Emily',role:'Host family'}
];

function renderPage() {
  const routes = {
    '/': homePage, '/students': studentsPage, '/host-families': hostFamiliesPage, '/schools': schoolsPage,
    '/us-schools': usSchoolsPage, '/international-schools': internationalSchoolsPage, '/services': servicesPage,
    '/pricing': pricingPage, '/about': aboutPage, '/contact': contactPage, '/apply': applyPage
  };
  const path = routes[location.pathname] ? location.pathname : '/';
  document.title = routeMeta[path][0];
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = routeMeta[path][1];
  document.getElementById('app').innerHTML = header() + routes[path]() + footer();
  bindInteractions();
  window.scrollTo({top:0, behavior:'instant'});
}

function bindInteractions() {
  document.querySelectorAll('img').forEach(img => {
    const markFailed = () => {
      img.classList.add('image-failed');
      img.parentElement?.classList.add('image-missing');
    };
    img.addEventListener('error', markFailed, { once: true });
    if (img.complete && img.naturalWidth === 0) markFailed();
  });
  document.querySelectorAll('[data-route]').forEach(anchor => anchor.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || anchor.target === '_blank') return;
    const url = new URL(anchor.href, location.origin);
    if (url.origin !== location.origin) return;
    event.preventDefault();
    history.pushState({}, '', url.pathname + url.search);
    renderPage();
  }));

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
  });

  document.querySelectorAll('.quote-tab').forEach(button => button.addEventListener('click', () => {
    const q = quotes[Number(button.dataset.quote)];
    const copy = document.querySelector('.story-copy');
    if (!copy || !q) return;
    copy.querySelector('blockquote').textContent = q.text.replace(/[“”]/g,'');
    copy.querySelector('strong').textContent = q.name;
    copy.querySelector('span:not(.eyebrow)').textContent = q.role;
    document.querySelectorAll('.quote-tab').forEach(tab => tab.classList.toggle('active', tab === button));
  }));

  const planner = document.getElementById('quote-planner');
  if (planner) {
    const update = () => {
      const data = new FormData(planner);
      const services = data.getAll('service');
      const date = data.get('date') ? ` starting ${new Date(data.get('date')+'T00:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}` : '';
      const destination = data.get('destination') ? ` near ${data.get('destination')}` : '';
      document.getElementById('planner-output').textContent = `${capitalize(data.get('role'))} requesting ${data.get('length')}${destination}${date}, with ${services.length ? services.join(', ') : 'services to be confirmed'}.`;
    };
    planner.addEventListener('input', update); update();
    planner.addEventListener('submit', event => { event.preventDefault(); openEmail('Homestay quote request', document.getElementById('planner-output').textContent); });
  }

  const school = document.getElementById('school-planner');
  school?.addEventListener('submit', event => {
    event.preventDefault(); const d = new FormData(school);
    openEmail('School homestay program enquiry', `Enquiry from ${d.get('schoolType')}\nEstimated students: ${d.get('groupSize') || 'To be confirmed'}\nStart: ${d.get('start') || 'To be confirmed'}\nLength: ${d.get('length')}\nGoals: ${d.get('goals') || 'To be discussed'}`);
  });

  const form = document.getElementById('inquiry-form');
  if (form) bindMultiStepForm(form);
}

function bindMultiStepForm(form) {
  let step = 1;
  const show = next => {
    step = Math.max(1, Math.min(3, next));
    form.querySelectorAll('.form-step').forEach(el => el.classList.toggle('active', Number(el.dataset.step) === step));
    form.querySelectorAll('.form-progress span').forEach((el, i) => el.classList.toggle('active', i < step));
  };
  form.querySelectorAll('.next-step').forEach(btn => btn.addEventListener('click', () => {
    const current = form.querySelector(`.form-step[data-step="${step}"]`);
    const fields = [...current.querySelectorAll('input,select,textarea')];
    if (!fields.every(field => field.reportValidity())) return;
    show(step + 1);
  }));
  form.querySelectorAll('.prev-step').forEach(btn => btn.addEventListener('click', () => show(step - 1)));
  form.addEventListener('change', () => {
    const data = Object.fromEntries(new FormData(form));
    localStorage.setItem('auntElsieEnquiryDraft', JSON.stringify(data));
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const typeLabel = {student:'Student or guest',host:'Prospective host family',school:'School or organization'}[d.get('type')] || 'Website';
    const body = `${typeLabel} enquiry\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone') || 'Not provided'}\nSchool/organization: ${d.get('school') || 'Not provided'}\nPreferred start: ${d.get('start') || 'Not decided'}\nStay length: ${d.get('length')}\n\nMessage:\n${d.get('message') || 'No additional details'}`;
    localStorage.removeItem('auntElsieEnquiryDraft');
    openEmail(`${typeLabel} enquiry — ${d.get('name')}`, body);
  });
}

function openEmail(subject, body) {
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  location.href = href;
}
function capitalize(text='') { return text.charAt(0).toUpperCase() + text.slice(1); }
window.addEventListener('popstate', renderPage);
renderPage();
