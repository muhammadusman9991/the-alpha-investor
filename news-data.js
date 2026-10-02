/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
  {
    date: '2026-10-01',
    tag: 'rak',
    tagLabel: 'Ras Al Khaimah',
    title: 'ORAYA Developer announces debut project on Marjan Beach, RAK',
    summary: 'ORAYA Developer, a newly established UAE developer, announced on 1 October 2026 its official market entry with its first residential project on Marjan Beach, Ras Al Khaimah — a fully furnished residential address developed in partnership with a globally recognized hospitality brand, with full details due in the coming weeks. The announcement cites independent market analysis claiming prime apartment prices on Marjan Beach grew over 30% year-on-year through 2025, and notes the upcoming USD 5.1 billion integrated hospitality and entertainment destination opening in 2027.',
    takeaway: 'Another new developer is staking its debut on RAK\u2019s coastline — a vote of confidence in Marjan Island demand, but as a first-time developer it has no delivery track record yet, so watch for construction milestones before committing.',
    source: 'Globe Newswire (via Manila Times)',
    url: 'https://www.manilatimes.net/2026/10/02/tmt-newswire/globenewswire/oraya-developer-announces-first-uae-project-on-marjan-beach/2437693'
  },
  {
    date: '2026-10-01',
    tag: 'dubai',
    tagLabel: 'Dubai',
    title: 'Dubai sales hit Dh379.4B in nine months — second-highest on record',
    summary: 'Dubai real estate sales from January to end-September 2026 reached about Dh379.4 billion across 123,416 transactions, the second-highest nine-month sales value in the market\u2019s history after 2025, based on Dubai Land Department data. Total transactions including mortgages and gifts exceeded Dh574 billion across 165,018 deals; September alone recorded Dh50.78 billion across 16,490 deals.',
    takeaway: 'Even after a record 2025, demand depth remains exceptional — a liquid market is an off-plan investor\u2019s best friend.',
    source: 'Emirates 24/7',
    url: 'https://www.emirates247.com/business/dubai-real-estate-transactions-hit-dh574-billion-in-nine-months-second-highest-sales-value-in-market-history/6205'
  },
  {
    date: '2026-09-30',
    tag: 'abudhabi',
    tagLabel: 'Abu Dhabi',
    title: 'Aldar and Arada sign Dh15bn partnership for Yas Island and Seih Sdeirah',
    summary: 'Abu Dhabi\u2019s biggest listed developer Aldar has partnered with Arada on new housing projects worth about Dh15 billion ($4 billion): a masterplan joint venture for a large-scale mixed-use community at Seih Sdeirah on the Abu Dhabi\u2013Dubai border, and Arada\u2019s acquisition of three residential plots on Yas Island, including two canal-facing sites.',
    takeaway: 'Developer capital is betting big on Abu Dhabi\u2019s next communities — new off-plan supply in prime pockets is coming.',
    source: 'The National',
    url: 'https://www.thenationalnews.com/business/property/2026/09/30/aldar-and-arada-sign-dh15bn-partnership-for-new-developments-in-abu-dhabi/'
  },
  {
    date: '2026-09-30',
    tag: 'uae',
    tagLabel: 'UAE',
    title: 'AED 200M Abu Dhabi villa tops UAE\u2019s biggest property deals of 2026',
    summary: 'Property Finder data shows the UAE\u2019s ultra-luxury market still hitting nine-figure deals in 2026: the largest was a villa in Al Shamkha, Abu Dhabi, sold for AED 200 million. Dubai led on volume and variety (villa on Palm Jumeirah for AED 170M, apartment for AED 98M), while Ras Al Khaimah\u2019s prime waterfront is repricing fast — an Al Marjan Island apartment reached AED 34M and a Mina Al Arab villa AED 17M.',
    takeaway: 'Top-end demand holds across all three emirates — and RAK\u2019s prime coastline is repricing upward while the wider market stays accessible.',
    source: 'iranianuae.ae (Property Finder data)',
    url: 'https://iranianuae.ae/en/business/real-estate/UAEs-Most-Expensive-Property-Deals-of-2026-AED-200/'
  },
  {
    date: '2026-09-30',
    tag: 'dubai',
    tagLabel: 'Dubai',
    title: 'Etihad Rail\u2019s Dubai\u2013Abu Dhabi passenger service starts — 57 minutes city to city',
    summary: 'Etihad Rail\u2019s Dubai Al Yalayis station opened on 30 September 2026, launching the 57-minute passenger service between Dubai and Abu Dhabi with five round trips on day one. A pedestrian bridge links the station directly to the Jumeirah Golf Estates Metro station.',
    takeaway: 'Real infrastructure is shrinking the distance between the two emirates — a long-term demand tailwind for communities along the line.',
    source: 'Gulf News',
    url: 'https://gulfnews.com/living-in-uae/transport/etihad-rail-dubai-abu-dhabi-fares-stations-and-what-to-know-before-launch-1.500687764'
  },
  {
    date: '2026-09-30',
    tag: 'dubai',
    tagLabel: 'Dubai',
    title: 'Developers hold off-plan prices steady — only 6% cut prices since February',
    summary: 'A fäm Properties analysis of 717 off-plan projects launched since July 2023 found just 44 (6%) reduced prices by 5% or more since February 2026, and only 28 projects (4%) are selling below their original launch price. Studio sales rose 26% to 21,728 in the first eight months of 2026, with Dubai South studio transactions up 185% to 11,147.',
    takeaway: 'Developers are holding prices rather than discounting — and studios, the entry-level segment, are the fastest-growing unit type.',
    source: 'The Property Times',
    url: 'https://thepropertytimes.in/developers-hold-off-plan-pricing-steady-while-sales-volumes-and-absorption-rates-adjust/'
  },
  {
    date: '2026-09-27',
    tag: 'dubai',
    tagLabel: 'Dubai',
    title: '335 luxury homes sold above $10M as Palm Jumeirah draws high-end investors',
    summary: 'Dubai recorded 335 residential sales above $10 million, with Palm Jumeirah leading on transaction count (35 apartment sales, AED 2.18B total) and Jumeirah Second topping total value (AED 2.77B). The highest-value deal was an AED 422M off-plan apartment at Aman Residences.',
    takeaway: 'Ultra-prime demand remains deep — a confidence signal that supports the wider market.',
    source: 'Bazaar Times',
    url: 'https://bazaartimes.com/dubai-records-335-luxury-home-sales-above-10-million-as-palm-jumeirah-draws-high-end-investors/'
  },
  {
    date: '2026-09-21',
    tag: 'dubai',
    tagLabel: 'Dubai',
    title: 'Off-plan is 68% of Dubai residential sales — AED 489B in 12 months',
    summary: 'Over the 12 months to 21 September 2026, off-plan transactions represented 68% of registered residential sales in Dubai. Total residential transactions reached 181,672 with an aggregate value of AED 489.4 billion.',
    takeaway: 'More than two-thirds of Dubai residential deals are off-plan — buying before completion is the mainstream route here, not a niche.',
    source: 'Off-Plan Property Finder',
    url: 'https://medium.com/@contact_92162/dubai-off-plan-property-in-2026-supply-pricing-and-the-shift-towards-selectivity-63665e35d195'
  },
  {
    date: '2025-04-14',
    tag: 'dubai',
    tagLabel: 'Dubai',
    title: 'Dubai Land Department: 226,000 transactions worth AED 761B in 2024',
    summary: 'The Dubai Land Department reported 226,000 real estate transactions with a total value of approximately AED 761 billion in 2024, announced ahead of the 21st International Property Show.',
    takeaway: 'Record-scale transaction volumes underpin the market\u2019s liquidity — you can enter and exit with depth.',
    source: 'Dubai Land Department',
    url: 'https://dubailand.gov.ae/en/news-media/dubai-land-department-prepares-to-launch-the-21st-edition-of-the-ips-from-14-to-16-april-2025/'
  },
  {
    date: '2025-01-15',
    tag: 'abudhabi',
    tagLabel: 'Abu Dhabi',
    title: 'Abu Dhabi property deals hit AED 96.2B as foreign investment jumps 125%',
    summary: 'Abu Dhabi recorded 28,249 real estate transactions worth AED 96.2B in 2024, with foreign direct investment into the sector reaching AED 7.86B — up 125% year-on-year. 38 new off-plan projects were launched during the year.',
    takeaway: 'Foreign capital into Abu Dhabi property more than doubled in a year — the capital\u2019s off-plan pipeline is expanding fast.',
    source: 'Arab News',
    url: 'https://www.arabnews.com/business/abu-dhabi-property-deals-up-242-in-2024-as-foreign-investment-soars-2588100'
  }
];
