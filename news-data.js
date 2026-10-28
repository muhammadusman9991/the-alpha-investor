/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
  {
    date: "2026-10-27",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai land sales hit AED 146bn in 2026 — 10,770 plots sold so far",
    summary: "Land sales in Dubai have reached approximately AED 146 billion across 10,770 transactions since the start of 2026, per Dubai Land Department data reported by Gulf Today on 27 October 2026. Residential land accounted for 61% of total value at AED 88.6 billion across 7,545 plots, while commercial land reached AED 57.2 billion across 3,225 deals. Me'aisem 2 led by area value at AED 10.7 billion, followed by Al Yelayiss 5 at AED 7.4 billion and Palm Jebel Ali at AED 7 billion.",
    takeaway: "Land is where developers stock up before launches — AED 146bn of plot sales this year points to a deep pipeline, so compare each launch against the land cost behind it, not just the brochure price.",
    source: "Gulf Today (DLD data)",
    url: "https://www.gulftoday.ae/business/2026/10/27/10770-plots-of-land-in-dubai-sold-for-dhs146-billion-in-2026"
  },
  {
    date: "2026-10-27",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Three landmark Dubai launches bet on architecture as off-plan supply tightens",
    summary: "Three newly launched Dubai projects are competing on design as off-plan launches slow, per Dubai Chronicle on 27 October 2026: LMD's Christian A. Rockefeller Business Tower on Sheikh Zayed Road (87 floors, completion 2031, the first building in the world to carry the Rockefeller name), H&H's Water Gardens in DIFC designed by Pritzker winner David Chipperfield (completion 2028), and SAMANA Collecta on The World Islands (840 branded apartments plus villas, over AED 4 billion, from under AED 2 million). Developers brought about 50,000 units to market in 2026, close to a third of last year's pace, while Dubai's population reached 4,807,185 in late September, up 226,885 since January.",
    takeaway: "Fewer launches against a fast-growing population is the backdrop — but these are premium, design-led projects with long timelines, so judge them on the developer's delivery record and price per sq ft, not the architect's name alone.",
    source: "Dubai Chronicle",
    url: "https://www.dubaichronicle.com/2026/10/27/dubai-off-plan-launches-unique-architecture/"
  },
  {
    date: "2026-10-27",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi launches the region's first fully digital property buy & sell platform",
    summary: "Abu Dhabi has launched the Digital Buy & Sell Journey, a government platform from the Abu Dhabi Real Estate Centre (ADREC) that lets buyers and sellers complete the entire transaction — from application to registration — fully online, per DOM LiVE on 27 October 2026. The platform is integrated with the TAMM government ecosystem, uses UAE Pass digital signatures, and handles escrow payments and mortgage settlement through ADREC. ADREC acting CEO Rashid Al-Omaira called the launch a strategic leap in the emirate's digital transformation.",
    takeaway: "Overseas buyers can now close an Abu Dhabi deal without flying in — useful at handover and resale, but the platform doesn't change the fundamentals: check the project, the price per sq ft and the developer first.",
    source: "DOM LiVE (ADREC)",
    url: "https://ae.dom.com.cy/en/live/digest/abu-dhabi-has-launched-the-region-s-first-fully-digital-real-estate-purchase-and-sale-platform-/"
  },
  {
    date: "2026-10-27",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai rentals: one-beds lead demand, new leases beat renewals as handovers flood in",
    summary: "New rental contracts are driving Dubai's rental growth as off-plan units bought in 2022–2023 reach completion, per a FAM Properties analysis of 114,300 contracts reported by Emirates247 on 27 October 2026. Average new-lease rents in the first nine months of 2026 were AED 45,000 for a studio, AED 70,000 for a one-bedroom and AED 110,000 for a two-bedroom, with studios to two-beds making up about nine in ten new contracts. Villa rentals fell 11% in the period, while new leases in fast-growing communities such as Al Yufrah 1 rose 144% year-on-year after around 1,290 homes were handed over since early 2025.",
    takeaway: "Handovers are turning into rental supply fast — for off-plan buyers that means real tenants at handover, but also more competition for rents in newly completed communities.",
    source: "Emirates247 (FAM Properties)",
    url: "https://www.emirates247.com/uae/dubai-rental-market-2026-one-bedroom-apartments-lead-demand-villas-fall-11-and-new-leases-beat-renewals/7145"
  },
  {
    date: "2026-10-26",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai South home sales already beat all of 2025 — in just 8 months",
    summary: "Dubai South recorded 12,428 residential transactions between January and August 2026, surpassing the 9,788 recorded in all of 2025, per property consultancy Anarock reported by The Week on 26 October 2026. Total sales value reached AED 15.9 billion, with off-plan homes at 94% of volume. Studios were 45% of transactions and one-beds 31%, while the average price reached AED 1,656 per sq ft and the average ticket eased to AED 1.28 million. Anarock flags 38,116 homes scheduled for delivery in 2027–2029, with handovers peaking in 2028.",
    takeaway: "Record volumes at lower ticket sizes — the area is selling smaller homes at rising per-sq-ft prices, but 38,000 homes due by 2029 is the number to watch before buying the growth story.",
    source: "The Week (Anarock)",
    url: "https://www.theweek.in/news/middle-east/2026/10/26/dubai-south-residential-transactions-surpass-2025-figures.amp.html"
  },
  {
    date: "2026-10-26",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai rental market hits record — 1.38m contracts worth over AED 126bn in 2025",
    summary: "Dubai registered about 1.38 million rental contracts in 2025, up 6% on the previous year, with their total value up 17% to more than AED 126 billion, per Dubai Land Department data reported by DOM LiVE on 26 October 2026. More than half a million of those were new contracts, up about 10% year-on-year, reflecting continued relocation of foreign professionals, entrepreneurs and investors. Analysts cited by the digest expect rental growth to continue, though the pace may slow as supply saturates and prices stabilise.",
    takeaway: "Rental demand is still absorbing new supply — for off-plan buyers that supports end-user demand at handover, but check community-level yields, not city averages.",
    source: "DOM LiVE (DLD data)",
    url: "https://ae.dom.com.cy/en/live/digest/dubai-rental-market-breaks-records/"
  },
  {
    date: "2026-10-25",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Vienna House Residences debuts on Al Marjan Island as RAK logs Dh2.89bn in H1 deals",
    summary: "Sugee Group and Wyndham Hotels & Resorts have partnered to develop the world's first Vienna House Residences by Wyndham on Al Marjan Island, Ras Al Khaimah, per Khaleej Times on 25 October 2026. The fully furnished, hospitality-led residences will be the only development on the island offering short-term rentals. Ras Al Khaimah municipality data cited in the same report put total transactions in the first half of 2026 at Dh2.89 billion, including Dh1.353 billion in property sales.",
    takeaway: "Branded hospitality product keeps landing on Al Marjan ahead of Wynn's September 2027 opening — verify service charges and short-term rental terms before paying a branded premium.",
    source: "Khaleej Times",
    url: "https://www.khaleejtimes.com/business/dubai-ras-al-khaimah-real-estate-growth-diverges-as-market-evolves"
  },
  {
    date: "2026-10-25",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai breaks transaction record — AED 525.87bn in 9.5 months of 2026, already past full-year 2024",
    summary: "Dubai recorded AED 525.87 billion in property transactions in the first nine and a half months of 2026, already surpassing the total for all of 2024, per Dubai Land Department data reported by DOM LiVE on 25 October 2026. Some 168,540 sales were registered between January and mid-October, against 180,860 for the whole of last year. In the past week alone, Dubai logged 5,494 transactions worth AED 14.64 billion, including AED 10.82 billion in direct sales, with Business Bay leading at AED 648 million.",
    takeaway: "Record transaction value with prime prices cooling — the market is busy, not uniformly rising, so judge each launch on price per sq ft and delivery record, not headline totals.",
    source: "DOM LiVE (DLD data)",
    url: "https://ae.dom.com.cy/en/live/digest/dubai-has-broken-the-historical-record-for-the-volume-of-real-estate-transactions/"
  },
  {
    date: "2026-10-24",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "JPMorgan: Wynn UAE concerns exaggerated — $5.7bn Al Marjan project on track for September 2027",
    summary: "JPMorgan analysts came away with a constructive tone on Wynn Al Marjan Island after meeting Wynn executives at the Global Gaming Expo in Las Vegas this week, saying regional conditions are \"back to normal\" and the $5.7 billion resort remains on pace to open in September 2027, per the GambleRss report on 24 October 2026. The bank says UAE lodging demand and revenue per available room are pacing about 25% below last year in September — versus 50% below earlier in the year. The report also cites Ras Al Khaimah Tourism Development Authority data showing the emirate attracted 670,000 visitors in the first half of this year despite the Iran war.",
    takeaway: "A second institutional confirmation of the September 2027 date this week — the RAK off-plan thesis keeps getting support, but pricing already assumes the opening, so track construction milestones, not revenue forecasts.",
    source: "GambleRss (JPMorgan analyst note)",
    url: "https://gamblerss.com/jpmorgan-wynn-uae-casino-concerns-exaggerated-70339"
  },
  {
    date: "2026-10-23",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Al Hamra CEO: RAK property boom rewards legacy players as Wynn rush gathers pace",
    summary: "Al Hamra Group CEO Benoy Kurien told Gulf Business this week that Wynn Al Marjan Island is transforming Ras Al Khaimah's property market, with developers racing to capitalise on the UAE's first integrated gaming resort arriving in September 2027. Kurien pointed to the developer's long delivery track record, and the interview notes a three-level Sky Palace in Al Hamra's Waldorf Astoria branded development sold for Dhs130 million earlier this year — setting a residential transaction record for the emirate.",
    takeaway: "A record sale at one flagship project doesn't set market prices — in a boom, the developer's delivery history is the harder data point to check.",
    source: "Gulf Business",
    url: "https://gulfbusiness.com/en/2026/ras-al-khaimah/al-hamra-ceo-wynn-ras-al-khaimah-property-boom/"
  },
  {
    date: "2026-10-23",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi registers its first mortgage on an off-plan property — ADREC's new financing system goes live",
    summary: "Abu Dhabi has registered the first mortgage on an off-plan property under a new system from the Abu Dhabi Real Estate Centre (ADREC), completed by Aldar Properties in cooperation with Abu Dhabi Commercial Bank, per the DOM LiVE digest on 23 October 2026. Under the new rules, buyers who have paid 50% of an eligible off-plan property can obtain a mortgage for the remaining value before construction completes — covering remaining scheduled payments during construction and the final payment at handover. Buyers can lock in financing terms earlier and hold less cash in reserve through the build period.",
    takeaway: "Off-plan financing just got a real option in Abu Dhabi — but it only kicks in after 50% is paid, so check the project's bank eligibility before counting on it.",
    source: "DOM LiVE (UAE News Digest)",
    url: "https://ae.dom.com.cy/en/live/digest/the-first-mortgage-for-real-estate-under-construction-was-registered-in-abu-dhabi/"
  },
  {
    date: "2026-10-23",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi real estate market sets new record — investment zones draw AED 75B in H1 2026, up 181%",
    summary: "Abu Dhabi's investment zones — where buyers of all nationalities can purchase — attracted AED 75 billion in the first half of 2026, up 181% from AED 26.7 billion a year earlier, per the DOM LiVE digest published 23 October 2026. ADREC raised the number of investment zones to 50, approved eight new zones and registered 28 new projects in the half-year, with real estate licences up 34% to 2,040 and licensed brokers at 3,302. The digest attributes the surge to open investment policies including the Golden Visa programme.",
    takeaway: "The capital's international buyer funnel is accelerating — more investment zones and licensed brokers means more competition at launches, not automatic appreciation.",
    source: "DOM LiVE (UAE News Digest)",
    url: "https://ae.dom.com.cy/en/live/digest/abu-dhabi-real-estate-market-updates-record/"
  },
  {
    date: "2026-10-22",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Metropolitan forecasts 30 Abu Dhabi launches worth up to $12.25bn — about one every three days",
    summary: "Metropolitan Capital expects roughly 30 new project launches in Abu Dhabi worth up to $12.25 billion, about one every three days, per Property News International on 22 October 2026. The consultancy says selective buyers, phased launches and gradual sales strategies will define the next phase, with developers moving away from immediate sell-outs toward complete districts with schools, leisure, marinas and transport links. Trends flagged include more branded and serviced residences, wider financing options, more international developers, and infrastructure plays such as Etihad Rail and new bridges.",
    takeaway: "A dense launch pipeline with more selective buyers — oversupply risk lives at the project level, so pick districts with completed infrastructure, not just render images.",
    source: "Property News International (Metropolitan Capital)",
    url: "https://www.propertynewsint.com/news/metropolitan-forecasts-30-abu-dhabi-launches-worth-up-to-12-25bn"
  },
  {
    date: "2026-10-22",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Janu Al Marjan Island residences go on sale — 73 beachfront homes from USD 2.3m",
    summary: "Sales open in late October 2026 for Janu Al Marjan Island Residences, 73 beachfront homes beside Wynn Al Marjan Island in Ras Al Khaimah, per OffPlan Insider (updated 22 October 2026). The one- to five-bedroom residences, five Marina Villas and a penthouse start from USD 2.3 million, with the resort opening in 2029. Marjan and Wynn Resorts broke ground on the Janu resort in July 2026.",
    takeaway: "A branded beachfront launch right beside the Wynn site — check service charges and the short-term rental rules before paying a branded premium, and remember the resort opens in 2029, not at handover.",
    source: "OffPlan Insider (Marjan / Gulf News)",
    url: "https://offplaninsider.com/news/janu-al-marjan-island-residences-sales-late-october-2026/"
  },
  {
    date: "2026-10-21",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai logs 86 homes at $10M+ in Q3 — wealthy buyers keep buying despite Iran war",
    summary: "Dubai recorded 86 residential transactions valued at $10 million or more in the third quarter of 2026, down 17% on a year earlier, with 13 deals above $25 million, Knight Frank said in a report published by The National on 21 October 2026. The 73 deals in the $10-25 million bracket totalled Dh3.93 billion; the 13 deals above $25 million totalled Dh1.84 billion. Prime prices across the city's 10 prime neighbourhoods dipped 5% quarter-on-quarter — their first decline since 2020 — while overall prime volumes were 29.4% below the prior year, which Knight Frank attributed mainly to the regional conflict dampening confidence.",
    takeaway: "Ultra-prime still transacts in a down quarter, but the 5% prime price dip is the first since 2020 — for off-plan buyers that means less bidding pressure on premium launches, not an automatic discount.",
    source: "The National (Knight Frank data)",
    url: "https://www.thenationalnews.com/business/property/2026/10/21/dubai-records-86-deals-for-10m-homes-in-q3-as-wealthy-flock-despite-iran-war/"
  },
  {
    date: "2026-10-21",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Zoya Developments launches Elvora in DLRC — 10+ projects in two years, portfolio over AED 1.2bn",
    summary: "Zoya Developments unveiled Elvora, a new residential development in Dubai Land Residence Complex (DLRC), at an event in Abu Dhabi on 21 October 2026, as reported by MENAFN/fleishmanhillard. The company says it has launched more than 10 projects since entering the Dubai market two years ago, with launched and pipeline projects valued at more than AED 1.2 billion. Zoya cites its Elinor project in Dubai South — which it says commenced construction two months after launch — as evidence of its delivery pace.",
    takeaway: "A young developer scaling fast in DLRC and Dubai South — two-month launch-to-construction claims are exactly the kind of statement to verify against DLD escrow and construction records before booking.",
    source: "MENAFN (company announcement)",
    url: "https://menafn.com/1111844031/10-Projects-Launched-in-Just-Two-Years-Zoya-Developments-Adds-Elvora-to-Its-Growing-Dubai-Portfolio"
  },
  {
    date: "2026-10-20",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai posts AED 853M across 424 sales in a single day — off-plan at 70.5%",
    summary: "On 19 October 2026, Dubai registered 424 property sales totalling AED 853 million, with a median transaction price of AED 1.26 million, per Dubai Land Department data republished by Broker Terminal on 20 October 2026. Off-plan sales accounted for 70.5% of transactions (299 off-plan vs 125 ready). Dubai Academic & Outsource City led all communities with AED 101 million across 23 transactions, followed by Dubai Islands with AED 43 million. Separately, 2,843 tenancy contracts were registered the same day, with a median annual rent of AED 67,000.",
    takeaway: "Off-plan at 70%+ of a single day's deals — the buyer's edge this quarter is launch choice and pricing, with developers holding prices while absorption adjusts.",
    source: "Broker Terminal (DLD data)",
    url: "https://brokerterminal.com/market-news/daily/dubai-property-sales-aed-853m-off-plan-19-october-2026"
  },
  {
    date: "2026-10-21",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi Q3 2026: Dh21.5B residential sales across 6,085 transactions",
    summary: "Abu Dhabi recorded Dh21.5 billion in residential property sales across 6,085 transactions in the third quarter of 2026, per market data reported by Gulf News on 21 October 2026. Residential sales reached Dh73.2 billion in full-year 2025, with transaction counts up 55% on 2024. On Yas Island, transaction values doubled in summer 2025 to Dh11.8 billion with 70% of purchasers being foreign buyers led by Indian, Chinese and British nationals; average apartment prices on Saadiyat reached Dh43,100 per sq m, up 21% year-on-year. Erling Haaland bought a five-bedroom villa in Ohana's Manchester City Yas Residences in October 2026, and Disneyland Abu Dhabi's planned Yas Island project was cited as a major demand catalyst.",
    takeaway: "Abu Dhabi's transaction values are accelerating while Dubai's off-plan volumes cooled in Q3 — but treat reported totals as market snapshots; compare island per-sqft against ready-stock comparables before buying the narrative.",
    source: "Gulf News",
    url: "https://gulfnews.com/business/property/abu-dhabi-records-dh215-billion-in-residential-property-sales-in-q3-2026-across-6085-transactions-1.500717696"
  },
  {
    date: "2026-10-21",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Wynn re-confirms September 2027 opening for Al Marjan resort after construction pause",
    summary: "Wynn Resorts confirmed to investors in October 2026 that Wynn Al Marjan Island will open in September 2027, ending uncertainty after construction was paused during the Iran war. The company contributed $48.1 million in Q2 2026 to the 40%-owned joint venture, bringing life-to-date cash contributions to $1.06 billion; Texas Capital puts total project cost at around $5.7 billion and notes the contribution potential is not yet fully reflected in Wynn's share valuation. Around the opening, neighbouring RAK hotels are renovating: Rixos Al Mairid is refurbishing 323 rooms and Pullman Resort Al Marjan Island 300 rooms, reopening as adults-only in Q2 2027. Analysts estimate more than 5,000 branded residential units will be created in RAK by 2030.",
    takeaway: "The September 2027 date is back on the table after a wobble — RAK's off-plan thesis hinges on that opening; track construction milestones rather than gaming-revenue forecasts.",
    source: "Casino.org",
    url: "https://gamblerss.com/wynn-says-uae-casino-will-open-in-september-2027-q2-results-beat-estimates-67096"
  },
  {
    date: "2026-10-20",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai Islands: AED18.8B in sales over 12 months, median prices up 17.7%",
    summary: "Dubai Islands recorded approximately AED18.8 billion ($5.12 billion) in residential property sales across 5,035 transactions in the 12 months to 28 September 2026, per Dubai Land Department data reported by Arabian Business. Separately, median residential transaction prices reached AED30,571 per sq m (about AED2,840 per sq ft) in the first seven months of 2026, up 17.7% against the full-year 2025 median, according to AXD Immobilien's analysis of DLD records. Grovy Developers chose the district for its first branded residential project, Ramada Residences by Wyndham with USquare Luxe Properties; construction began in August 2026 with handover targeted for Q3 2027.",
    takeaway: "A waterfront corridor posting both volume and median-price growth — but medians include new launches at rising prices; check per-project comparables before assuming appreciation.",
    source: "Arabian Business",
    url: "https://www.arabianbusiness.com/real-estate/dubai-islands-property-sales-hit-5-1bn-as-residential-prices-climb-17-7"
  },
];



