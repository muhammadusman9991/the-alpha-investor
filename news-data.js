/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
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
