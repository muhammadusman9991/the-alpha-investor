/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
  {
    date: "2026-10-16",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Samana launches AED4bn+ Collecta flagship on World Islands — 849 residences from under AED2m",
    summary: "Samana Developers has launched Samana Collecta, its new premium brand, debuting with a flagship project on Dubai's World Islands with a gross development value above AED 4 billion. The project comprises 840 branded apartments plus seven floating villas and two tree villas, with prices expected to start below AED 2 million. CEO Imran Farooq said the goal is to create a permanent year-round residential community on the islands rather than a tourist destination, targeting completion around 39 months after construction starts.",
    takeaway: "A sub-AED2m entry price into a branded World Islands project is unusual — but the islands have a two-decade history of unfulfilled promises, so verify escrow, infrastructure commitments and delivery milestones before paying any launch premium.",
    source: "Gulf Business",
    url: "https://gulfbusiness.com/en/2026/real-estate/samana-world-islands-dubai-4bn-project/"
  },
  {
    date: "2026-10-16",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "TARAF × Marriott launch JW Marriott Residences on Yas Island beachfront",
    summary: "TARAF, the real estate arm of Yas Holding, and Steppe have signed an agreement through their joint venture with Marriott International to launch JW Marriott Residences Abu Dhabi on Yas Island. The branded residential development sits directly on the beach with the golf course alongside it, close to Yas Marina, Yas Mall, Yas Marina Circuit and the island's leisure attractions. The project draws on JW Marriott's design principles of architectural awe, serene spaces, nature and warm touches.",
    takeaway: "A Marriott-branded beachfront residence on Yas Island targets exactly the kind of buyer Yas attracts — but branded premiums need service-charge scrutiny; branded homes in the region have carried premium entry prices, so check resale comparables first.",
    source: "Mid-East Info",
    url: "https://mid-east.info/taraf-and-marriott-international-sign-agreement-to-launch-jw-marriott-residences-abu-dhabi-yas-island/"
  },
  {
    date: "2026-10-16",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "fäm: 94% of Dubai off-plan projects held launch prices in 2026 — absorption adjusts, not prices",
    summary: "A fäm Properties analysis of 717 off-plan projects launched since July 2023 found only 44 — 6% of the sample — had reduced prices by 5% or more since the end of February, with more than nine out of ten projects retaining launch pricing. Projects priced close to prevailing area benchmarks are recording higher median absorption than those carrying significant premiums, while two- and three-bedroom sales fell 16% and 13% respectively. Dubai South stood out for entry-level demand, with studio transactions up 185% to 11,147 in the first eight months of 2026.",
    takeaway: "Developers are holding prices and letting absorption adjust — which means launch-day pricing power is weaker than it looks; compare any project's price against area benchmarks before paying a launch premium.",
    source: "Realty+ (fäm Properties data)",
    url: "https://www.rprealtyplus.com/newsviews/dubai-developers-keep-off-plan-prices-steady-as-sales-absorption-adjusts-127059.html"
  },
  {
    date: "2026-10-15",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Tomorrow World Properties and Missoni announce The Bay Interiors by Missoni on Dubai Islands",
    summary: "Tomorrow World Properties and Missoni announced The Bay Interiors by Missoni, a branded residential project on Island A at Dubai Islands, described as the final unlaunched waterfront plot directly on the main marina, immediately adjacent to the main yacht club. The project promises residences where the majority command direct or open marina and sea views, and will be exclusively presented by OCTA Properties. Further details on residences, amenities and the official launch will be announced in due course.",
    takeaway: "Another global design brand attaches to a Dubai waterfront off-plan project — branding adds a premium at launch, so check service charges and resale evidence in Dubai Islands before paying for the name.",
    source: "Gulf News",
    url: "https://gulfnews.com/gn-focus/company-news/tomorrow-world-properties-and-missoni-announce-the-bay-interiors-by-missoni-on-dubai-islands-1.500711530"
  },
  {
    date: "2026-10-14",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Mondrian Al Marjan Island 75% sold after landmark AED73M single deal",
    summary: "Mondrian Al Marjan Island Beach Residences, developed by ELEVATE with Ennismore, recorded a landmark AED 73 million single transaction in October 2026 — the largest single deal on Al Marjan Island of the year — taking the project to 75% sold. The deal, completed with a buyer from North America, covered four homes: a five-bedroom penthouse, a four-bedroom penthouse, a three-bedroom townhouse and a three-bedroom residence. The project recorded more than AED 100 million in closed sales in August 2026 alone, with shoring works 100% complete and piling 80% complete.",
    takeaway: "International money is still writing big cheques on Al Marjan Island ahead of the 2027 Wynn opening — but this milestone is project-specific; demand is concentrating in branded, well-located projects, not the whole island.",
    source: "UAE News 24/7",
    url: "https://uaenews247.com/2026/10/14/north-american-buyer-seals-mega-aed-73-million-deal-at-mondrian-al-marjan-island-the-largest-single-deal-on-al-marjan-island-of-2026/"
  },
  {
    date: "2026-10-14",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Aldar to launch major villa and townhouse community in Dubai by end of year",
    summary: "Aldar Development's CEO Jonathan Emery told The National the developer will launch a large villa and townhouse community near Dubai Silicon Oasis before year-end, its fourth Dubai project after Haven, Athlon and The Wilds. The project is another partnership with Dubai Holding and sits above the Blue Line extension. Emery said Aldar's Dubai joint venture is adding two plots to deliver almost 14,000 new homes with a combined gross development value of more than Dh38 billion, and that the products it has brought to market have all done well despite a cooling Q3.",
    takeaway: "Aldar's Dubai launches have historically moved fast — villa communities near metro extensions are a proven format, but check the launched per-sqft against their earlier Dubai projects before queuing.",
    source: "The National",
    url: "https://www.thenationalnews.com/business/property/2026/10/14/aldar-to-launch-major-dubai-villa-and-townhouse-project-by-end-of-year/"
  },
  {
    date: "2026-10-13",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Wolfe Research: Wynn Al Marjan could beat its own gaming revenue forecasts",
    summary: "Wolfe Research analyst Peter Supino says Wynn Al Marjan Island's $5.7 billion resort could generate more gaming revenue than Wynn's own forecast of up to $1.66 billion annually, benchmarking against Singapore's limited-licence casino market. The analysis values Wynn's 40% stake at around $48 per share with a $128 price target, and expects the resort — the Middle East's first integrated resort casino, opening September 2027 — to capture a significant share of UAE gaming revenue in its early years. Separately, RAK officials toured Nevada in October to seek tourism partnerships ahead of the opening.",
    takeaway: "Analysts are upgrading the earnings case for RAK's 2027 catalyst — the resort schedule holding matters more than revenue forecasts, so watch construction milestones toward the September 2027 opening.",
    source: "CDC Gaming",
    url: "https://cdcgaming.com/brief/uae-officials-tour-nevada-as-wynn-project-advances/"
  },
  {
    date: "2026-10-14",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Savills: Dubai luxury prices up 4% YoY in Q3 as rentals rebound 16% — AED70.8B across 34,500 deals",
    summary: "Savills' Q3 2026 Dubai Residential Market Report shows luxury apartment prices rose 4% year-on-year (luxury villas 3.6%), while rental transactions rebounded 16% quarter-on-quarter to 181,900 deals. Total Q3 residential transactions reached AED70.8 billion across 34,500 deals, including 669 transactions above AED10 million. Imtiaz's AED1.5 billion RAW District 2 sold out on its launch day, while only about 5,000 units were launched in Q3 (~50,000 so far in 2026) as developers take a more selective approach.",
    takeaway: "Demand is concentrating in well-priced launches while rental activity recovers — rental and resale evidence is strengthening, but compare any project against launched-price data rather than headlines.",
    source: "Emirates 24/7 (Savills data)",
    url: "https://www.emirates247.com/business/dubai-luxury-property-prices-up-by-4-with-rentals-jumping-16/6715"
  },
  {
    date: "2026-10-13",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Tabeer hands over Dh250M 48 Parkside in Arjan within 24 months, eyes major expansion",
    summary: "Tabeer Developments has handed over its Dh250 million residential project 48 Parkside in Arjan, delivering it within 24 months of launch. The company presented the handover as proof of its delivery capability as it prepares for a larger phase of expansion across Dubai.",
    takeaway: "Developers delivering on time is the strongest trust signal for off-plan buyers — handover track record matters more than brochure promises.",
    source: "Gulf News",
    url: "https://gulfnews.com/business/property/tabeer-hands-over-dh250-million-48-parkside-in-24-months-eyes-major-expansion-1.500707506"
  },
  {
    date: "2026-10-12",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Haaland buys Yas villa as Ohana launches Phase 2 of AED15bn Manchester City Yas Residences",
    summary: "Ohana Development launched the second phase of Manchester City Yas Residences in Abu Dhabi, with Manchester City striker Erling Haaland confirming through a video appearance that he has bought a five-bedroom villa at the AED15 billion ($4.08 billion) waterfront community along Yas Canal. The Phase 2 event at Etihad Arena drew more than 4,000 guests, and Pep Guardiola was unveiled as the project's brand ambassador. Phase 2 adds two- and three-bedroom townhouses, duplex villas and four- and five-bedroom villas; two-bedroom townhouses are priced at an average AED 3.75 million, with sales scheduled to begin on 19 October 2026.",
    takeaway: "Celebrity buyers and a 4,000-strong launch event signal demand heat — but heat at launch doesn't guarantee resale, so compare per-sqft pricing with the earlier phase before joining the queue.",
    source: "Property News International",
    url: "https://www.propertynewsint.com/news/haaland-buys-villa-as-aed-15bn-abu-dhabi-project-launches-phase-2"
  },
  {
    date: "2026-10-09",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Taj Wellington Mews launches on Al Marjan Island — IHCL's first RAK property",
    summary: "Indian Hotels Company announced it has signed the Taj Wellington Mews project on Al Marjan Island in Ras Al Khaimah with BNW Developments, marking IHCL's entry into the emirate. The greenfield development will introduce the Taj brand to RAK with 336 apartments alongside multiple dining options, meeting spaces, gym, spa and outdoor swimming pool. Marjan's CEO Abdulla Al Abdouli called BNW Developments the largest private developer of real estate in the emirate.",
    takeaway: "Another global hotel brand choosing Al Marjan Island keeps adding tourism weight behind RAK's coastal off-plan market — watch actual visitor growth around the 2027 resort openings for the demand follow-through.",
    source: "Travel Industry News",
    url: "https://www.travelindustry.news/ihcl-opens-taj-wellington-in-ras-al-khaimah/"
  },
  {
    date: "2026-10-08",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Danube launches Shahrukhz Residences in Dubai Maritime City — from AED 1.65M, 30:70 plan",
    summary: "Danube Properties launched Shahrukhz Residences on 8 October 2026, a fully furnished waterfront tower in Dubai Maritime City presented as the world's first celebrity-named residential tower, with penthouses designed by Gauri Khan. Prices start at AED 1.65 million with a 30% during construction / 70% on handover payment plan, and the project advertises 40+ amenities including a longevity lounge, a rooftop King's Club and access to a private yacht.",
    takeaway: "Danube is running the same 30:70 structure across its launches — consistent payment plans make their pipeline easy to compare, so check per-sqft pricing against other Danube stock before picking a project.",
    source: "RealtyNMore",
    url: "https://realtynmore.com/danube-properties-launches-shahrukhz-residence/"
  },
  {
    date: "2026-10-08",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Accor to launch two branded developments in Dubai — 690 residences in Motor City and Meydan",
    summary: "Accor and Cityview Developments signed an agreement announced on 8 October 2026 for two branded projects: Mövenpick Residences Dubai Motor City (408 residences, completion 2028, billed as the world's first standalone Mövenpick Residences and the first branded residential development in Motor City) and Pullman Residences & Offices Dubai Meydan, which will introduce Accor's first branded offices for sale globally. Together the two projects bring 690 branded residences to Dubai, supported by Accor's One Living platform and its Owner Benefits Programme for homeowners.",
    takeaway: "Global hotel brands keep attaching their names to Dubai off-plan — the brand premium only pays if resale and rental data support it, so compare charges and yields against non-branded alternatives.",
    source: "Zawya (press release)",
    url: "https://in.tradingview.com/news/reuters.com,2026-10-08:newsml_Zaw6NSG6w:0-zawya-accor-to-launch-two-new-branded-residential-developments-in-dubai/"
  },
  {
    date: "2026-10-06",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai rentals on track for a record year as primary sales lead Q3 — 298,984 contracts in 9 months",
    summary: "A fäm Properties analysis of Dubai Land Department data published on 6 October 2026 shows 48,639 rental contracts were registered in Dubai's freehold areas in September, up 22.6% month-on-month, taking the first-nine-months total to 298,984 contracts — 6.8% above the same period of 2025, which set a full-year record. Q3 primary (off-plan) sales reached 25,441 deals worth AED 52.6 billion against 11,988 resales worth AED 40.3 billion, and 67% of secondary transactions were cash.",
    takeaway: "Rentals running ahead of a record year supports the income case behind Dubai property — and with two-thirds of resales paid in cash, liquidity at exit is real, not speculative.",
    source: "inCarabia (fäm Properties data)",
    url: "https://en.incarabia.com/dubai-real-estate-remains-on-track-for-rental-record-while-primary-market-sales-continue-to-set-pace-891761.html"
  },
  {
    date: "2026-10-08",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Mashreq partners with Expo City Dubai to expand off-plan home financing",
    summary: "Mashreq announced on 8 October 2026 a strategic partnership with Expo City Dubai to offer structured home financing for eligible buyers across selected residential projects under construction in the master community, which has more than 3,000 units in the development phase. The bank says the offering will serve both investors and end users buying homes before completion, subject to eligibility criteria, credit approval and terms and conditions.",
    takeaway: "A second bank in a week is targeting Expo City construction-phase financing — banks are competing for off-plan borrowers, which should keep terms sharp, but check the approved-project list and eligibility before counting on it.",
    source: "UAE News 24/7",
    url: "https://uaenews247.com/2026/10/08/mashreq-partners-with-expo-city-dubai-to-expand-access-to-off-plan-home-financing/"
  },
  {
    date: "2026-10-08",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Nakheel awards marine works for Dubai Islands Island B — 3 km of shoreline upgraded",
    summary: "Nakheel awarded Mar Marine & Building Contracting a contract announced on 8 October 2026 for marine and beach works on Island B at Dubai Islands, upgrading about 3 km of the island's western shoreline and adding 320 metres of beach frontage near the Bay Villas development, with completion scheduled for Q4 2027. The works support Bay Villas, a community of 636 villas and townhouses on Island B, and run in parallel with the Dh2.6 billion villa construction contract awarded in August 2025.",
    takeaway: "Waterfront infrastructure moving in parallel with villa construction is the delivery pattern Dubai Islands needs — watch whether the Q4 2027 target holds before buying into early phases.",
    source: "Gulf News",
    url: "https://gulfnews.com/business/property/nakheel-hires-mar-marine-for-dubai-island-coastal-works-1.500702909"
  },
  {
    date: "2026-10-08",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi launches mandatory broker licensing curriculum as H1 deals hit AED 117B",
    summary: "The Abu Dhabi Real Estate Centre announced on 8 October 2026 a new mandatory Abu Dhabi Real Estate Broker Transformation Course replacing the previous broker course, with MoUs signed with Mawaheb, ThinkProp and the Abu Dhabi School of Management. The announcement cites ADREC's H1 2026 data: the emirate recorded AED 117 billion in real estate transactions, up 112% year-on-year, with licensed brokers reaching 3,302.",
    takeaway: "Abu Dhabi is professionalising its brokerage market just as volumes double — more regulated advice should help overseas investors, though the quality uplift will take time to bed in.",
    source: "UAE News 24/7",
    url: "https://uaenews247.com/2026/10/09/abu-dhabi-launches-new-real-estate-broker-licensing-curriculum/"
  },
  {
    date: "2026-10-07",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Amwaj Development completes first Dubai handover — Starlight Park delivered on time",
    summary: "Amwaj Development announced on 7 October 2026 the successful on-time handover of Starlight Park in Meydan's District 11, the boutique developer's first Dubai project: 172 one-to-three-bedroom apartments across four B+G+5+Roof buildings, completed in the first week of October. Amenities include rooftop pools and lounges across all four buildings, an outdoor cinema, fitness, yoga and boxing studios, paddle tennis and an indoor kids' club.",
    takeaway: "A developer delivering its first project on schedule is the strongest trust signal in off-plan — delivered track record beats renderings when choosing between developers.",
    source: "UAE News 24/7",
    url: "https://uaenews247.com/2026/10/07/amwaj-development-completes-first-dubai-handover-with-on-time-delivery-of-starlight-park/"
  },
  {
    date: "2026-10-08",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "ADCB × ORA Developers bring off-plan financing to BAYN buyers in Ghantoot",
    summary: "Abu Dhabi Commercial Bank and ORA Developers UAE announced on 8 October 2026 a strategic partnership offering an off-plan home financing solution for eligible buyers at BAYN, ORA's 4.8-million-sqm flagship masterplan in the Ghantoot corridor between Abu Dhabi and Dubai. Buyers can access financing during construction once the mandatory regulated payment of 50% of the unit value is complete, securing funding for amounts due through to handover. Customers get pre-approvals valid for up to 12 months, digital onboarding and ADCB's specialist Mortgage Centres; applications are subject to the bank's eligibility, credit and documentation checks.",
    takeaway: "Banks are now racing to finance off-plan construction periods in Abu Dhabi too — financing certainty to handover eases the cash burden on mid-stage projects, but only after 50% is paid, so entry discipline still matters.",
    source: "UAE News 24/7",
    url: "https://uaenews247.com/2026/10/08/adcb-and-ora-developers-uae-enter-into-a-strategic-partnership-to-offer-an-off-plan-financing-solution-to-eligible-bayn-customers/"
  },
  {
    date: "2026-10-07",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "BEYOND launches The Yards Plaza as off-plan offices dominate Dubai office sales",
    summary: "BEYOND Developments announced The Yards Plaza, its second commercial project in Dubai: 272 offices across four blocks along Sheikh Mohammed Bin Zayed Road with retail and F&B at ground level, following the sell-out of its first commercial development, 31 Above in Dubai Maritime City. The launch lands amid strong commercial momentum — analysis of Dubai Land Department data shows office sales reached AED 20.16 billion across 3,695 transactions in the first nine months of 2026, with off-plan offices accounting for 80% of total sales value; September alone reached AED 1.85 billion, up roughly 54% year-on-year.",
    takeaway: "Off-plan offices are 80% of Dubai's office sales value — commercial off-plan is a genuine growth segment, though offices are cyclical, so size the ticket carefully.",
    source: "Zawya (press release)",
    url: "https://www.zawya.com/en/press-release/companies-news/beyond-unveils-the-yards-plaza-a-new-workplace-destination-shaped-around-people-connection-and-wellbeing-1537512"
  },
];