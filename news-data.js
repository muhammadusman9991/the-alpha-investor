/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
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
    date: "2026-10-05",
    tag: "uae",
    tagLabel: "UAE",
    title: "IHG brings midscale Garner brand to Dubai and Ras Al Khaimah — 285 rooms",
    summary: "IHG Hotels & Resorts signed two hotels with Nooa Holdings to introduce its midscale Garner brand to the Middle East for the first time: Garner Hotel Dubai Al Jaddaf (81 rooms, near Al Jaddaf Waterfront) and Garner Hotel Ras Al Khaimah Downtown (204 rooms by the creek in Al Nakheel). Both properties are conversions expected to open in 2026, targeting business and leisure travellers with an accessible price point. IHG said the UAE was a suitable launch market given demand for midscale accommodation.",
    takeaway: "A new global midscale brand choosing both Dubai and RAK signals deepening tourism demand — more visitors and longer stays support rental demand behind off-plan investments.",
    source: "Hotelier Middle East",
    url: "https://www.hoteliermiddleeast.com/news/ihg-signs-first-middle-east-garner-hotels-in-dubai-and-ras-al-khaimah"
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
  {
    date: "2026-10-05",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Bab Al Qasr Beach Resort Residence 77 launches on Al Reem Island — handover Q4 2031",
    summary: "Burtville Developments unveiled Bab Al Qasr Beach Resort Residence 77 on Al Reem Island, Abu Dhabi: a 17,534 sq m beachfront site where around 92% of residences are designed with direct sea views. The fully furnished freehold project offers one-to-five-bedroom homes plus four- and five-bedroom duplexes (largest ~3,100 sq ft), with 73% of the site dedicated to landscaping, a separate beach club, hotel services via the Bab Al Qasr brand, and handover scheduled for Q4 2031.",
    takeaway: "Abu Dhabi’s beachfront pipeline keeps growing — a long-dated 2031 handover means the price should reflect the wait, so compare payment terms against nearer-completion stock.",
    source: "Gulf News",
    url: "https://gulfnews.com/uae/abu-dhabi/new-abu-dhabi-beachfront-homes-launched-on-al-reem-island-1.500698718"
  },
  {
    date: "2026-10-05",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai Q3 transactions reach AED 90.62B — off-plan stays the largest residential segment",
    summary: "Dubai recorded AED 90.62 billion across 36,738 residential and commercial transactions in Q3 2026, per a market release published by Zawya. Residential sales reached AED 72.58 billion across 33,949 transactions: off-plan contributed AED 41.58 billion (23,457 deals) while the secondary market added AED 30.83 billion, up 24.2% in value from Q2. Homes below AED 3 million made up 84.3% of Q3 transactions, and Dubai South was the most active location with 5,165 deals at an average AED 1,690 per sq. ft.",
    takeaway: "Off-plan is still the market’s engine and sub-AED 3M homes are 84% of deals — the entry-level sweet spot stays wide open.",
    source: "Zawya (market release)",
    url: "https://www.zawya.com/en/press-release/research-studies/dubai-real-estate-transactions-reach-aed-90.62bln-in-q3-as-off-plan-remains-the-largest-residential-segment-1510107"
  },
  {
    date: "2026-10-04",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Fitch affirms Ras Al Khaimah A+ rating as war-related risks ease",
    summary: "Fitch Ratings said Ras Al Khaimah’s direct war-related risks have eased since April 2026 and affirmed the emirate’s long-term rating at A+, supported by low public-sector debt, substantial fiscal buffers and UAE federation membership. The agency noted the regional conflict \"only set back modestly the planned opening time\" of the $5.1 billion Wynn Al Marjan resort, where construction continues with opening delayed by roughly six months.",
    takeaway: "The credit agency’s vote of confidence underpins RAK’s long-term thesis — but the outlook stays Negative, so keep geopolitical risk priced in, not priced away.",
    source: "Khaleej Times",
    url: "https://www.khaleejtimes.com/business/ras-al-khaimah-to-see-positive-growth-as-regional-conflict-risks-ease-says-fitch"
  },
  {
    date: "2026-10-02",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai jumps 11 places to 17th globally in JLL–LaSalle 2026 transparency index",
    summary: "Dubai climbed from 28th to 17th in the 2026 Global Real Estate Transparency Index by JLL and LaSalle, ranking first in the Arab world with a score of 1.98. The index credited the Dubai Land Department’s real-time public data, the digitalisation of services and new regulations; Dubai and Abu Dhabi were both named among the most improved markets of the past decade.",
    takeaway: "Transparency is structural investor protection — open data and digital title and escrow systems make Dubai’s off-plan market easier to verify than most emerging markets.",
    source: "Dubai Global News (JLL–LaSalle index)",
    url: "https://www.dubaiglobalnews.com/en/2026/10/02/general_news-en/352823/"
  },
  {
    date: "2026-10-02",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "SAAS Properties launches Ritz-Carlton Residences on Al Maryah Island — construction underway, handover Q2 2030",
    summary: "SAAS Properties officially launched The Ritz-Carlton Residences, Al Maryah Island at LIVEX 2026: a 165-home waterfront collection of one-to-four-bedroom residences plus a signature penthouse, designed by Shaun Killa with interiors by Tara Bernerd in her first Middle East project. Construction is already underway and handover is anticipated in Q2 2030.",
    takeaway: "Branded homes keep multiplying on Al Maryah Island — compare service charges and resale evidence for branded vs non-branded stock before paying the premium.",
    source: "Khaleej Times",
    url: "https://www.khaleejtimes.com/business/property/saas-properties-launches-the-ritz-carlton-residences-al-maryah-island-at-livex-2026"
  },
  {
    date: "2026-10-02",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Rosewood Abu Dhabi releases 73 completed residences for private ownership — a first for the hotel",
    summary: "Mubadala and Rosewood Abu Dhabi announced that a limited collection of 73 completed residences inside the Rosewood Abu Dhabi hotel on Al Maryah Island will be offered for private ownership for the first time, releasing to market in Q4 2026 via Abu Dhabi Sotheby’s International Realty. The announcement cites Abu Dhabi transactions of AED 117 billion in H1 2026, up 112% year-on-year, with foreign direct investment of AED 13.8 billion, up 309%, from investors of 116 nationalities.",
    takeaway: "Completed branded stock entering private ownership is a confidence signal for Al Maryah Island — ready units carry immediate service-charge costs, so run the yield math before comparing them with off-plan.",
    source: "Zawya (press release)",
    url: "https://www.zawya.com/en/press-release/companies-news/rosewood-abu-dhabi-to-offer-limited-collection-of-completed-residences-for-private-ownership-on-al-maryah-island-1485976"
  },
  {
    date: "2026-10-02",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai developers take the sales pitch overseas — Manila expo (Oct 2–6) and Lagos roadshow this weekend",
    summary: "FHI Global Properties is bringing Azizi Developments to the Philippines for the first time at the Dubai Real Estate Expo 2026, running October 2–6 at SM Megamall and Richmonde Hotel Ortigas in Manila, with expo-only deals and Golden Visa briefings for Filipino buyers. Separately, Emirion Real Estate is hosting a Dubai Property Roadshow at Eko Hotel, Lagos, on October 3–4.",
    takeaway: "Dubai developer marketing is going global — overseas buyer demand is deepening, which supports resale liquidity down the line.",
    source: "homes.ph; beadysword.com.ng",
    url: "https://homes.ph/news/dubai-real-estate-expo-in-manila-offers-filipinos-direct-property-access"
  },
  {
    date: "2026-10-01",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai office sales jump 62% in September to AED 1.85B — off-plan offices dominate",
    summary: "An Al Masdar Al Akari analysis of Dubai Land Department data shows Dubai recorded AED 1.85 billion in office property sales across 419 transactions in September 2026, up about 62% in value and 28.5% in volume from August. Off-plan offices accounted for 265 transactions worth AED 1.32 billion in the month. Over the first nine months of 2026, off-plan offices represented about 64% of office transaction volumes and 80% of the AED 20.16 billion total office sales value, with Business Bay leading at 1,100 transactions worth more than AED 9.9 billion.",
    takeaway: "Off-plan is where Dubai’s office money is going — but offices are cyclical and concentrated in the AED 2–5M bracket, so size the ticket carefully.",
    source: "Zawya (Al Masdar Al Akari / DLD data)",
    url: "https://www.zawya.com/en/press-release/research-studies/dubai-office-sales-rise-62-in-september-to-aed-1.85bln-1485901"
  },
  {
    date: "2026-10-01",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Rove Hotels and IRTH Group sign exclusive UAE residential partnership — Rove Home The Greens launching",
    summary: "Rove Hotels and IRTH Group announced an exclusive partnership to develop standalone Rove Home residential projects across the UAE, following three previous collaborations that together sold out more than 2,000 residential and commercial units in Dubai. The first project under the new agreement, Rove Home The Greens, will comprise 200 residences in The Greens community and is scheduled to launch for sale before the end of 2026.",
    takeaway: "Hospitality-branded homes keep expanding in Dubai — a format that has historically sold out fast; compare service-charge structures before buying branded.",
    source: "Khaleej Times",
    url: "https://www.khaleejtimes.com/business/rove-hotels-irth-group-to-launch-new-residential-projects-across-uae"
  },
  {
    date: "2026-10-01",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Accor signs Pullman Residences & Offices Dubai Meydan — first branded offices for sale by a hospitality brand worldwide",
    summary: "Accor and Cityview Developments signed an agreement at FHS World 2026 for Pullman Residences & Offices Dubai Meydan, scheduled to launch in 2029. The mixed-use project will unite 282 Pullman branded residences with branded offices — Accor’s first branded offices for sale anywhere in the world — featuring one-to-four-bedroom homes plus meeting, wellness, and dining amenities.",
    takeaway: "Global hotel brands are now stamping their names on Dubai offices too — branded stock tends to command a premium, but the premium must be justified by resale data, not logos alone.",
    source: "IndexBox",
    url: "https://www.indexbox.io/blog/accor-signs-pullman-residences-offices-dubai-meydan-launching-worlds-first-branded-offices-by-a-hospitality-brand/"
  },
  {
    date: "2026-10-01",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "ORAYA Developer announces debut project on Marjan Beach, RAK",
    summary: "ORAYA Developer, a newly established UAE developer, announced on 1 October 2026 its official market entry with its first residential project on Marjan Beach, Ras Al Khaimah — a fully furnished residential address developed in partnership with a globally recognized hospitality brand, with full details due in the coming weeks. The announcement cites independent market analysis claiming prime apartment prices on Marjan Beach grew over 30% year-on-year through 2025, and notes the upcoming USD 5.1 billion integrated hospitality and entertainment destination opening in 2027.",
    takeaway: "Another new developer is staking its debut on RAK’s coastline — a vote of confidence in Marjan Island demand, but as a first-time developer it has no delivery track record yet, so watch for construction milestones before committing.",
    source: "Globe Newswire (via Manila Times)",
    url: "https://www.manilatimes.net/2026/10/02/tmt-newswire/globenewswire/oraya-developer-announces-first-uae-project-on-marjan-beach/2437693"
  },
  {
    date: "2026-10-01",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai sales hit Dh379.4B in nine months — second-highest on record",
    summary: "Dubai real estate sales from January to end-September 2026 reached about Dh379.4 billion across 123,416 transactions, the second-highest nine-month sales value in the market’s history after 2025, based on Dubai Land Department data. Total transactions including mortgages and gifts exceeded Dh574 billion across 165,018 deals; September alone recorded Dh50.78 billion across 16,490 deals.",
    takeaway: "Even after a record 2025, demand depth remains exceptional — a liquid market is an off-plan investor’s best friend.",
    source: "Emirates 24/7",
    url: "https://www.emirates247.com/business/dubai-real-estate-transactions-hit-dh574-billion-in-nine-months-second-highest-sales-value-in-market-history/6205"
  },
  {
    date: "2026-09-30",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Aldar and Arada sign Dh15bn partnership for Yas Island and Seih Sdeirah",
    summary: "Abu Dhabi’s biggest listed developer Aldar has partnered with Arada on new housing projects worth about Dh15 billion ($4 billion): a masterplan joint venture for a large-scale mixed-use community at Seih Sdeirah on the Abu Dhabi–Dubai border, and Arada’s acquisition of three residential plots on Yas Island, including two canal-facing sites.",
    takeaway: "Developer capital is betting big on Abu Dhabi’s next communities — new off-plan supply in prime pockets is coming.",
    source: "The National",
    url: "https://www.thenationalnews.com/business/property/2026/09/30/aldar-and-arada-sign-dh15bn-partnership-for-new-developments-in-abu-dhabi/"
  },
  {
    date: "2026-09-30",
    tag: "uae",
    tagLabel: "UAE",
    title: "AED 200M Abu Dhabi villa tops UAE’s biggest property deals of 2026",
    summary: "Property Finder data shows the UAE’s ultra-luxury market still hitting nine-figure deals in 2026: the largest was a villa in Al Shamkha, Abu Dhabi, sold for AED 200 million. Dubai led on volume and variety (villa on Palm Jumeirah for AED 170M, apartment for AED 98M), while Ras Al Khaimah’s prime waterfront is repricing fast — an Al Marjan Island apartment reached AED 34M and a Mina Al Arab villa AED 17M.",
    takeaway: "Top-end demand holds across all three emirates — and RAK’s prime coastline is repricing upward while the wider market stays accessible.",
    source: "iranianuae.ae (Property Finder data)",
    url: "https://iranianuae.ae/en/business/real-estate/UAEs-Most-Expensive-Property-Deals-of-2026-AED-200/"
  }


];
