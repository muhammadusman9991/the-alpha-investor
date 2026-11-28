/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
  {
    date: "2026-11-27",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Aldar sells Dh900m+ at Canopies Sanctuary on Yas Island — 67% of buyers expats and overseas",
    summary: "Aldar Properties generated more than Dh900 million (US$245 million) in sales at the launch of The Canopies Sanctuary at Yas Point, announced on 27 November 2026. First-time Aldar buyers made up 77% of customers, while expatriate residents and overseas buyers accounted for 67% of sales, with the UAE, UK, India, Brazil and the Netherlands the biggest markets by volume. The project sits in Aldar's Dh6 billion Yas Point waterfront destination, and Abu Dhabi recorded 38,483 property transactions worth Dh171.26 billion in the first nine months of 2026, up 76.1% in value year on year, per the Abu Dhabi Real Estate Centre.",
    takeaway: "A launch selling Dh900m with two-thirds overseas buyers is real demand, not brochure talk — but compare any price per sq ft against Yas Island's recent registered sales, and check the payment plan and escrow account before reserving.",
    source: "The National (Aldar / ADREC)",
    url: "https://www.thenationalnews.com/business/property/2026/11/27/aldar-generates-more-than-dh900-million-in-home-sales-from-yas-island-project/?utm_source=twitter&utm_medium=socialsharebtn&related=TheNatWorld,NationalComment,LifeNationalUAE,NatSportUAE&via=TheNationalNews"
  },
  {
    date: "2026-11-27",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Nakheel awards AED 1.4bn+ contract for 176 Palm Jebel Ali villas — 24 months to build",
    summary: "Nakheel has awarded Ginco General Contracting a construction contract worth more than AED 1.4 billion for 176 villas on Palm Jebel Ali, reported on 27 November 2026. The contract covers 128 Beach Villas and 48 Coral Villas on Fronds A to D, with construction expected to take 24 months from the start of work, per a Dubai Media Office announcement on 26 November. It follows an April 2026 award for 544 villas across Fronds A to F, and comes as Nakheel released 216 more waterfront homes at Palm Central on the same island.",
    takeaway: "A signed construction contract is stronger than a launch brochure — Palm Jebel Ali is moving from renders to cranes, but for off-plan buyers the check stays the same: price per sq ft against the island's recent sold prices and the escrow account before booking.",
    source: "Dubai Property Post (Dubai Media Office)",
    url: "https://www.dubaipropertypost.com/nakheel-awards-aed1-4bn-plus-contract-for-176-palm-jebel-ali-villas/"
  },
  {
    date: "2026-11-26",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai logs 721 transactions worth AED 2.62bn in a day — off-plan 240 deals worth AED 619m",
    summary: "Dubai's land registry recorded 721 transactions worth AED 2.62 billion on 26 November 2026, per Dubai Land Department data reported by BeBlurt. Of those, 444 were sales worth AED 1.41 billion, and off-plan accounted for 240 deals worth AED 619 million, with 230 mortgages registered the same day. Over the ten days to 26 November, DLD open data shows 5,399 transactions worth AED 17.1 billion, with Jumeirah Village Circle the most active area at 523 deals.",
    takeaway: "Daily volume is holding up even as the market cools — for off-plan buyers, steady registry activity means negotiating room, so judge each project on its district's registered median price per sq ft, not the launch brochure.",
    source: "BeBlurt (DLD data)",
    url: "https://BeBlurt.com/photo/@theeone/dubai-real-estate-sales-report-26-nov-2026"
  },
  {
    date: "2026-11-26",
    tag: "uae",
    tagLabel: "UAE",
    title: "National Day off-plan offers: DLD waivers and rebates across Sobha, Danube, DAMAC, Azizi and Binghatti",
    summary: "Developers are running National Day season offers ahead of 2 December, per a verified-offers guide updated on 26 November 2026. Sobha Realty offers a 60/40 plan with the 4% DLD fee waived across all projects since 1 November; Danube offers a 10% rebate on its 30/70 plan or a 4% DLD waiver on its 1% monthly plan; DAMAC offers 15% down with the DLD fee waived on selected apartments, with Sorrento at DAMAC Lagoons from AED 730,000; Azizi gives an extra 4% discount across projects since 2 November; and Binghatti has opened expressions of interest for The Arts District with a 7% discount.",
    takeaway: "A waiver is only worth something if the price itself is right — compare the discounted price per sq ft against the project's registered sold prices before the offer deadline, and confirm the waiver in writing on the booking form.",
    source: "UAE Off-Plan (developer announcements)",
    url: "https://uae-offplan.com/blog/real-estate/national-day-2026-dubai-off-plan-offers"
  },
  {
    date: "2026-11-25",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Nakheel opens EOIs today for 15 beach villas on Palm Jebel Ali's Frond J",
    summary: "Nakheel's expressions of interest for Frond J - The Beach Collection on Palm Jebel Ali open today, Thursday 26 November 2026 at 12:00 PM, per the developer feed logged on 25 November 2026. The release comprises just 15 five- and six-bedroom beach villas, with a minimum EOI deposit of AED 100,000 per villa and allocation on a first-paid, first-served basis. Broker briefings put prices from about AED 26 million on a 20/50/30 payment plan, with handover estimated in March 2030 — those figures are broker-reported, not yet published by Nakheel.",
    takeaway: "Fifteen villas means allocation goes to whoever pays first — before the AED 100K EOI, check the refund terms, the price per sq ft and the escrow account, and treat broker-reported prices as unconfirmed until Nakheel publishes them.",
    source: "Mitchells Commercial Realty (developer feed)",
    url: "https://www.mitchellscommercialrealty.com/developer-news?day=2026-11-18"
  },
  {
    date: "2026-11-25",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Binghatti launches The Arts District in Al Rowaiyah — studios from AED 525,000, EOI opens 28 November",
    summary: "Binghatti has launched The Arts District, a new residential district in Al Rowaiyah First, Dubai, per the developer feed logged on 25 November 2026. Studios start from AED 525,000, one-bedrooms from AED 850,000 and two-bedrooms from AED 1,300,000, on a 60/40 payment plan with 10% on booking. Completion is set for Q4 2028, expressions of interest open on 28 November, and the official unveiling is scheduled for January 2027.",
    takeaway: "Entry prices look low, but the project is pre-unveiling — compare any price per sq ft against Al Rowaiyah and Dubailand sold prices, and confirm the escrow account before the 28 November EOI.",
    source: "Mitchells Commercial Realty (developer feed)",
    url: "https://www.mitchellscommercialrealty.com/developer-news?day=2026-11-18"
  },
  {
    date: "2026-11-25",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai logs 2,222 sales worth AED 4.83bn in a week — off-plan 62% of deals, median price up 2.3%",
    summary: "Dubai registered 2,222 apartment and villa sales worth AED 4.83 billion in the week from 18 to 24 November 2026, per Dubai Land Department data reported by Continental Club on 25 November 2026. Off-plan accounted for 62.2% of deals, and the median price per square metre was AED 19,145, up 2.3% on the previous week, even as deal count eased 2.9% and total value fell 8.3%. Jumeirah Village Circle was the most active area with 198 deals, followed by Business Bay with 134.",
    takeaway: "Fewer deals but a higher median price per sq ft — a steadier market where the specific project's sold prices matter more than the headline, so negotiate on the building's own registered sales.",
    source: "Continental Club (DLD data)",
    url: "https://continentalclub.ae/dubai-property-market-weekly-report/"
  },
  {
    date: "2026-11-25",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Aldar and Ennismore launch The Hoxton Homes on Saadiyat — the brand's first residences worldwide",
    summary: "Aldar and Ennismore have launched The Hoxton Homes Abu Dhabi Saadiyat, the hotel brand's first collection of private residences anywhere in the world, announced on 23 November 2026 and reported by Realty Today on 25 November 2026. The nearly 100 one- and two-bedroom apartments sit inside NOMA, Aldar's new 88,000 sq m creative neighbourhood in the Saadiyat Cultural District, alongside Abu Dhabi's first Hoxton hotel with more than 170 rooms. No prices or sales date have been disclosed; the Guggenheim Abu Dhabi opens on the same island on 11 December.",
    takeaway: "A lifestyle brand's first residences add a different kind of branded stock to Saadiyat — with no prices published, wait for the official price list and compare per sq ft against Saadiyat's recent registered sales before reserving.",
    source: "Realty Today (Aldar / Ennismore)",
    url: "https://www.realtytoday.com/articles/115522/20261125/hoxton-checks-branded-residential-first-time-nearly-100-homes-abu-dhabis-new-arts-quarter.htm"
  },
  {
    date: "2026-11-25",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "DLD study projects 365,000 new homes by 2030 — residential occupancy at 97%",
    summary: "A Dubai Land Department study projects the development of 365,000 new residential units by 2030, alongside about 1.1 million square metres of office and retail space, reported on 25 November 2026. The findings were approved by Dubai's Executive Council on 10 November under the Real Estate Sector Strategy 2033, and the study put residential occupancy at 97%, retail at 98% and office at 94%. The statement gave no breakdown by neighbourhood, housing type or year of delivery, and projected units are not completed homes — delivery depends on individual projects.",
    takeaway: "High occupancy today, big supply coming — the two facts pull in opposite directions, so for off-plan buyers the handover year and the district's own sold prices matter more than the emirate-wide headline.",
    source: "Dubai Property Post (DLD study)",
    url: "https://www.dubaipropertypost.com/dubai-study-projects-365000-new-homes-by-2030/"
  },
  {
    date: "2026-11-24",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Nakheel launches 216 waterfront homes at Palm Central Private Residences on Palm Jebel Ali",
    summary: "Nakheel has launched 216 new waterfront homes at Palm Central Private Residences on Palm Jebel Ali, announced on 24 November 2026. The homes sit in three stepped buildings overlooking the Cove waterway between Fronds C and D, covering one- to five-bedroom apartments, four-bedroom duplex townhouses and five-bedroom penthouses. This is the third release at Palm Central, after 212 homes in October 2025 and 222 in June 2026, bringing the project to 650 homes; the first Palm Jebel Ali villas are due for phased handover from early 2027.",
    takeaway: "Palm Jebel Ali keeps building toward its first handovers in early 2027 — with no prices published for this release, compare any price list per sq ft against recent Palm Jebel Ali sold prices and confirm the escrow account before booking.",
    source: "Gulf News (Nakheel)",
    url: "https://gulfnews.com/amp/story/business%2Fproperty%2Fnakheel-launches-216-waterfront-homes-on-palm-jebel-ali-1.500759089"
  },
  {
    date: "2026-11-24",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Dara Properties buys 50,000 sq ft plot at RAK Central for a 27-storey tower — ~350 homes, due Q4 2027",
    summary: "Marjan, the master developer of freehold property in Ras Al Khaimah, has agreed a deal with Dara Properties for a 50,000 sq ft plot at RAK Central, its newest mixed-use destination, reported on 24 November 2026. Dara will build a 27-floor residential tower of around 350 studios and one- to three-bedroom apartments, with commercial and retail space, scheduled for completion in Q4 2027. It is Dara's first project in Ras Al Khaimah. RAK Central's masterplan includes 3 million sq ft of office space, more than 4,000 homes and four hotels.",
    takeaway: "RAK Central keeps pulling new developers in — for off-plan buyers, the Q4 2027 handover is close enough to judge on the developer's delivery record, so compare any price per sq ft against Mina Al Arab's recent sold prices.",
    source: "Gulf Construction Online (Marjan)",
    url: "https://gulfconstructiononline.com/ArticleTA/294947/dara-properties-in-deal-with-marjan-to-buy-prime-rak-plot-"
  },
  {
    date: "2026-11-22",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai Metro Blue Line hits 29% completion — opening set for 9 September 2029",
    summary: "Construction of Dubai's Metro Blue Line has reached 29 per cent, the RTA confirmed during Sheikh Hamdan's site visit on 22 November 2026, reported by Gulf News. Tunnel excavation is 55 per cent complete, underground stations 32 per cent, and bridge piers 62 per cent. The AED 20.5 billion, 30km line will serve 14 stations — including Dubai Creek Harbour, Dubai Festival City, International City, Dubai Silicon Oasis and Dubai Academic City — and is scheduled to open on 9 September 2029.",
    takeaway: "A metro line three years from opening is a slow-burn catalyst, not a launch-day signal — for off-plan buyers near its stations, it supports the area's long-term case, but judge any project on its handover date and sold prices per sq ft, not the 2029 opening alone.",
    source: "Gulf News (RTA)",
    url: "https://gulfnews.com/uae/dubai/sheikh-hamdan-reviews-dubai-metro-blue-line-progress-as-project-nears-30-completion-1.500756801"
  },
  {
    date: "2026-11-21",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai logs 2,566 sales worth AED 7.75bn in a week — off-plan 59% of deals, mortgages jump",
    summary: "Dubai registered 2,566 property sales worth AED 7.75 billion in the week from 14 to 20 November 2026, per Dubai Land Department open data reported by Dubai Week on 21 November 2026. Off-plan accounted for 1,519 of the deals (59%) against 1,047 ready sales, up from 1,270 off-plan deals the previous week. In the same week 1,284 mortgages worth AED 3.45 billion were registered, up from 891 the week before.",
    takeaway: "Off-plan is still carrying the market even as launches slow — for buyers, the signal is steady demand with less launch-day pressure, so compare each project on its district's median price per sq ft and check the escrow account.",
    source: "Dubai Week (DLD open data)",
    url: "https://www.dubaiweek.ae/dubai-in-numbers/property-transactions/"
  },
  {
    date: "2026-11-20",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "AVENEW launches The St. Regis Residences at Dubai Islands — 248 beachfront homes, completion Q4 2030",
    summary: "AVENEW Development has launched The St. Regis Residences at Dubai Islands, a beachfront development in collaboration with Marriott International, announced on 20 November 2026. The project comprises 248 residences across two buildings, with one- to five-bedroom homes, and is expected to be completed in Q4 2030. It is the first of three adjacent branded residential and hospitality projects AVENEW plans on Dubai Islands. No prices or payment plan were disclosed at launch.",
    takeaway: "A St. Regis flag on Dubai Islands adds another branded name to the island's pipeline — with no prices published, compare the eventual price list per sq ft against the island's completed resale stock before reserving, and check the escrow account.",
    source: "Khaleej Times (AVENEW Development)",
    url: "https://www.khaleejtimes.com/business/property/avenew-development-launches-the-st-regis-residences-at-dubai-islands?amp=1"
  },
  {
    date: "2026-11-18",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Ras Al Khaimah named the world's No. 1 city for expats in 2026 — Dubai 4th, Abu Dhabi 5th",
    summary: "Ras Al Khaimah has been named the world's No. 1 city for expatriates in the 2026 Expat City Ranking by InterNations, announced on 18 November 2026. The emirate placed first among 33 cities worldwide, rising from sixth in 2024, based on the annual Expat Insider survey of 8,000 expatriates from 162 nationalities. RAK ranked first in the Ease of Settling In, Working Abroad and Expat Essentials indices and second in Personal Finance and General Happiness; 69% of RAK respondents were positive on housing affordability, against 32% worldwide. Dubai ranked fourth and Abu Dhabi fifth, putting three UAE cities in the world's top five.",
    takeaway: "A No. 1 expat ranking is a demand signal, not a price guarantee — for RAK off-plan buyers, it strengthens the case for rental demand near Al Marjan and Mina Al Arab, but judge any project on its handover date and sold prices per sq ft, not the headline.",
    source: "WAM (InterNations Expat City Ranking 2026)",
    url: "https://www.wam.ae/en/article/c3bg9t6-ras-khaimah-named-world%E2%80%99s-no-city-for-expats-2026"
  },
  {
    date: "2026-11-18",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Meraas launches 97 villas at Nad Al Sheba Gardens — and a private school in the community",
    summary: "Meraas, a member of Dubai Holding Real Estate, has launched 97 four- and five-bedroom standalone villas at Nad Al Sheba Gardens, reported on 18 November 2026. The release comprises 55 four-bedroom and 42 five-bedroom homes along the northern edge of the master community, many overlooking green spaces and landscaped parks. Alongside the homes, Meraas announced plans for a private school on the development's north-western boundary, and the wider masterplan includes a wave pool, multi-sports court, cycling and running tracks, and the adjacent Nad Al Sheba Gardens Mall. No prices or handover date were disclosed.",
    takeaway: "Family villas plus a school in one release is aimed at end-user buyers, not flippers — with no prices published, wait for the official price list and compare per sq ft against recent villa sales in Nad Al Sheba before reserving.",
    source: "Emirates 24|7 (via UECN)",
    url: "https://uecn.org/meraas-launches-97-villas-and-plans-private-school-at-nad-al-sheba-gardens/"
  },
  {
    date: "2026-11-17",
    tag: "uae",
    tagLabel: "UAE",
    title: "Dubai tops global branded residences ranking — RAK third, Abu Dhabi eighth",
    summary: "Dubai ranks first, Ras Al Khaimah third and Abu Dhabi eighth among the world's top branded residences markets in Savills' Branded Residences Annual Report 2026–2027, reported on 16–17 November 2026. The UAE ranks second globally at country level, behind the United States, and the GCC holds 99 completed branded residential projects with a further 251 in the pipeline — the largest pipeline of any sub-region covered. Savills puts the average global brand premium at 38% in 2026, up from 33% in 2025.",
    takeaway: "Branded residences keep expanding, but a brand premium is paid at purchase and only partly proven at resale — compare any branded launch per sq ft against unbranded stock in the same district before booking.",
    source: "The Gulf Pulse (Savills Branded Residences Annual Report 2026–2027)",
    url: "https://thegulfpulse.com/uae-branded-residences-top-10-markets/"
  },
  {
    date: "2026-11-16",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Meraas releases new phase of Solaya beachfront community in Jumeirah 1",
    summary: "Meraas has released a new phase of Solaya, its beachfront residential community in Jumeirah 1, announced on 16 November 2026 and reported by Emirates News Agency (WAM). The limited collection includes Classic Residences of two to five bedrooms and Signature Residences, including four-bedroom duplexes with private gardens and pools. The Foster + Partners-designed community holds 234 residences across nine buildings on a 40-acre beachfront site; prices, payment plan and handover date for the new phase were not announced.",
    takeaway: "New beachfront supply in established Jumeirah 1 is rare, but with no prices published yet, wait for the official price list and compare per sq ft against recent Jumeirah sold prices before reserving.",
    source: "Mina Property (WAM / Dubai Holding Real Estate)",
    url: "https://minaproperty.com/solaya-meraas-jumeirah-1/"
  },
  {
    date: "2026-11-16",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai luxury off-plan sales hit AED 77.93bn in ten months — 6,441 deals above AED 5m",
    summary: "Dubai recorded AED 77.93 billion in developer off-plan sales of homes priced above AED 5 million in the first ten months of 2026, per Dubai Land Department data analysed by fäm Properties and reported on 16 November 2026. Buyers paid an average of AED 12.1 million across 6,441 villas, apartments and townhouses, with villas accounting for 57% of the value at AED 44.45 billion. The AED 5–10 million bracket led on volume with 4,114 deals worth AED 27.54 billion, and Al Yelayiss 5 was the top area with 949 luxury developer sales.",
    takeaway: "Luxury off-plan demand is concentrated — villas and the AED 5–10m bracket carry the volume — so for buyers, the headline total is less useful than the per-sq-ft price of the specific project against its district's recent sold prices.",
    source: "MENAFN (fäm Properties / DLD data)",
    url: "https://menafn.com/1111966688/Dubai-Records-AED7793-Billion-In-Developer-Off-Plan-Luxury-Home-Sales-In-First-Ten-Months-Of-2026"
  },
  {
    date: "2026-11-16",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Al Ain Asset Management and Emaar launch Dh8bn of Abu Dhabi projects — first 452 units on Al Maryah Island",
    summary: "Abu Dhabi-based Al Ain Asset Management is partnering with Emaar Hospitality to launch five property projects valued at Dh8 billion (US$2.17 billion) in Abu Dhabi, per The National on 16 November 2026. The first project comprises 452 apartment units plus penthouses on Al Maryah Island, with one-bedroom homes starting at Dh3.7 million and sales set to begin soon. The launch comes as Abu Dhabi recorded 38,483 property transactions worth Dh171.26 billion in the first nine months of 2026, per the Abu Dhabi Real Estate Centre.",
    takeaway: "A Dh8bn pipeline on Al Maryah Island adds real supply to the capital's strongest district — compare the Dh3.7m entry price per sq ft against Al Maryah's recent sold prices before booking, and check the payment plan and escrow account.",
    source: "The National (via IndexBox)",
    url: "https://www.indexbox.io/blog/al-ain-asset-management-and-emaar-hospitality-launch-dh8-billion-abu-dhabi-property-projects/"
  },
];

