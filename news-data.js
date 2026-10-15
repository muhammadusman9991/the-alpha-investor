/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
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
  {
    date: "2026-10-06",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Almal tops out The Unexpected on Al Marjan Island — construction past 50%",
    summary: "Almal Real Estate Development completed the full superstructure and concrete works at The Unexpected Al Marjan Island Hotel & Residences in Ras Al Khaimah, topping out with the final upper roof slab above the restaurant and wellness amenities. Overall progress has moved well beyond 50%, ahead of the 42% officially recorded by RERA in July 2026, and the site has shifted into facade, MEP and interior fit-out phases. The 422-unit entertainment-led hotel and residential development will be operated by Palladium Hotel Group.",
    takeaway: "Topped-out with progress ahead of the RERA-recorded pace is exactly the delivery signal off-plan buyers want — keep comparing construction evidence across RAK projects rather than trusting renderings.",
    source: "Property News International",
    url: "https://www.propertynewsint.com/news/almal-tops-out-the-unexpected-al-marjan-island-development"
  },
  {
    date: "2026-10-05",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Wynn Al Marjan Island unveils 98-berth superyacht marina for 2027 resort",
    summary: "Wynn Al Marjan Island in Ras Al Khaimah announced Wynn Marina, a 98-berth superyacht facility for its $5.7 billion resort, accommodating yachts up to 85 metres — billed as the largest hotel-attached marina in the UAE, arriving by sea directly into the resort experience. The marina, designed by Marina Solutions International with IGY Marinas as operating partner, centres on a circular harbour with a radial berth layout inside a protected basin up to five metres deep. The resort itself remains on track toward a 2027 opening.",
    takeaway: "The 2027 Wynn opening is RAK's biggest demand catalyst — every completed milestone de-risks the coastal off-plan thesis, though resale will still hinge on actual visitor numbers, not promises.",
    source: "Gulf News",
    url: "https://gulfnews.com/business/tourism/wynn-al-marjan-island-unveils-98-berth-marina-for-2027-ras-al-khaimah-resort-1.500698468"
  },
  {
    date: "2026-10-06",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "DIB and Expo City Dubai launch off-plan home financing — open to non-residents",
    summary: "Dubai Islamic Bank entered a strategic partnership with Expo City Dubai to offer Shariah-compliant home financing for properties under construction. Once a DIB-approved project reaches 35% construction completion and the buyer has paid at least 50% of the price, DIB can finance up to 50% of the property value — buyers pay only the profit amount during construction and move to full instalments at handover or within 24 months. The proposition is open to eligible UAE nationals, residents and non-residents with no salary transfer required, with financing available for up to 25 years.",
    takeaway: "Banks are now competing to finance off-plan construction periods — easier entry for buyers, but the 50%-paid and 35%-built thresholds mean this suits mid-stage projects, not launch-day cash.",
    source: "The Gulf Time (WAM)",
    url: "https://gulftime.ae/dib-expo-city-dubai-partner-to-advance-off-plan-home-financing/"
  },
  {
    date: "2026-10-06",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai resale market holds steady — 40,963 deals worth Dh153.4B in Jan–Aug 2026",
    summary: "Property Finder data reported by Emirates 24/7 shows Dubai’s secondary (resale) market recorded about 40,963 transactions worth Dh153.4 billion from January to August 2026. Deal counts eased from 2025 levels but values stayed stable, and capital rotated from Business Bay and Downtown Dubai toward newer, more affordable communities such as Dubai South and MBR City.",
    takeaway: "Capital is rotating, not leaving — newer communities are where resale liquidity is building, which matters for off-plan exits in those areas.",
    source: "Emirates 24/7 (Property Finder data)",
    url: "https://www.emirates247.com/business/dubai-secondary-real-estate-market-2026-fewer-transactions-higher-average-values-and-shifting-capital/6375"
  },
  {
    date: "2026-10-05",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Nakheel launches Bay Estates on Dubai Islands — 360 homes plus beachfront plots",
    summary: "Nakheel, part of Dubai Holding Real Estate, launched Bay Estates, a gated waterfront community on Dubai Islands off the Deira coastline, comprising around 360 homes alongside beachfront and waterfront plots. The 653,709 sq m development spans 2.4 km of beachfront and 6.5 km of waterfront across three districts — Cala, Verda and Agora — with villas, townhouses, community and sports facilities, a yacht marina, and planned accommodation for more than 12,000 residents.",
    takeaway: "Another branded waterfront district is opening on Dubai Islands — early phases of large masterplans are where the price curve starts, so check delivery pace on prior phases first.",
    source: "Business Today Middle East",
    url: "https://businesstoday.me/real-estate/nakheel-launches-bay-estates-dubai-islands/"
  },
];