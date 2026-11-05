/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
  {
    date: "2026-11-05",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai Q3 sales hit AED 73.8bn as buyer enquiries reach highest since January 2024",
    summary: "Dubai recorded AED 73.8 billion in residential sales in Q3 2026, with more than 34,600 homes changing hands between July and September, per betterhomes, reported on 5 November 2026. Buyer enquiries recorded by the brokerage rose steadily from March through September, reaching their highest monthly level since January 2024. Dubai also added more than 161,000 residents between January and July 2026.",
    takeaway: "Demand is being driven by people actually moving to Dubai, not just investors — for off-plan buyers, that means projects handing over into a growing end-user market, so weigh rental demand in the district, not just launch pricing.",
    source: "Middle East Business News (betterhomes)",
    url: "https://mid-east.info/investor-interest-in-uae-property-gathers-pace-as-dubai-records-aed-73-8bn-in-residential-sales-despite-months-of-regional-uncertainty/"
  },
  {
    date: "2026-11-05",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai records 510 sales worth AED 1.51bn in a day — off-plan 56% of deals",
    summary: "Dubai recorded 510 property sales worth AED 1.51 billion on 4 November 2026, per Dubai Land Department data reported on 5 November 2026. Off-plan accounted for 284 of the deals (56%) against 226 ready sales, though ready sales carried most of the value at AED 1.03 billion. The median sale price was AED 1.52 million and the average price was AED 1,739 per sq ft. Dubai Islands and Dubai South tied as busiest areas with 38 deals each.",
    takeaway: "Off-plan still leads on deal count while ready leads on value — a normal split, so judge any launch on its own price per sq ft against the district median, not the daily headline.",
    source: "BuyDubai.realestate (DLD data)",
    url: "https://buydubai.realestate/dubai-property-4-november-2026-510-sales-aed-1-51bn-56-off-plan/"
  },
  {
    date: "2026-11-04",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai October sales hit AED 32.64bn, residential value up 12.4% on September",
    summary: "Dubai's property market recorded AED 32.64 billion in total sales in October 2026 — AED 25.15 billion residential plus AED 7.49 billion commercial — per Springfield Properties' latest Dubai Real Estate Report, published by Dubai News Week on 4 November 2026. Residential sales covered 10,178 transactions, with sales value up 12.40% on September; nearly 80% of residential sales were below AED 3 million, with the AED 1–3 million band accounting for 47.39% of deals. Off-plan properties represented more than 62% of residential transactions; Jumeirah Village Circle led areas with 812 sales, followed by Dubai South with 780, and 66 deals were priced above AED 25 million.",
    takeaway: "The autumn rebound is led by the sub-AED 3m ticket — for off-plan buyers, end-user demand is deepest in the mid-market, so judge any launch by its price per sq ft against recent sold deals in the same district, not headline launch prices.",
    source: "Dubai News Week (Springfield Properties report)",
    url: "https://dubainewsweek.com/dubai-sees-strong-demand-for-homes-below-dhs3-million-as-property-sales-rise/"
  },
  {
    date: "2026-11-04",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "MERED launches Riviera Residences Phase 2 on Al Reem Island",
    summary: "MERED has announced Phase 2 of Riviera Residences on Al Reem Island, within Abu Dhabi Global Market, per UAE News 4U and MEP Middle East on 3–4 November 2026. The phase adds 389 apartments plus eight Bay Villas, six Sky Villas and a penthouse, designed by Herzog & de Meuron, with construction starting by year-end and completion targeted for Q2 2030. The announcement cites Abu Dhabi Real Estate Centre data showing residential sales across Al Reem and Al Maryah islands reached AED 10.5 billion in H1 2026, up 153% year-on-year; all pre-launch units at Riviera Residences 1 sold out in Q4 2025.",
    takeaway: "Al Reem's 153% sales surge is the context behind this launch — but Phase 1's sell-out belongs to a year ago, so price Phase 2 against today's per-sq-ft sold prices on the island before committing.",
    source: "MEP Middle East (MERED announcement)",
    url: "https://www.mepmiddleeast.com/projects/riviera-residences-phase-2-launches"
  },
  {
    date: "2026-11-03",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Qube Development launches Sawa Residences in Meydan Horizon, MBR City",
    summary: "Qube Development has launched Sawa Residences within the Meydan Horizon district of Mohammed Bin Rashid City, per Gaia Living News on 3 November 2026. The lower-density waterfront project offers one-, two- and three-bedroom apartments on one of the area's largest lagoon frontages, with direct access to 2 km of crystal lagoons and a 4 km landscaped promenade, inside MBR City's 54 million sq ft destination.",
    takeaway: "Fresh waterfront stock in Meydan competes with the mid-market off-plan pipeline — compare its lagoon-front per-sq-ft against Meydan's existing completed towers before booking.",
    source: "Gaia Living News",
    url: "https://www.gaiarealty.ae/news/qube-development-launches-sawa-residences-in-meydan-horizon-dubai"
  },
  {
    date: "2026-11-03",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Mubadala and Aldar launch AED 60bn expansion of Abu Dhabi's Al Maryah Island",
    summary: "Mubadala Investment Company and Aldar have launched a joint venture (60% Aldar, 40% Mubadala) to expand Al Maryah Island, with a gross development value exceeding AED 60 billion, per RP Realty Plus on 3 November 2026. The north side of the island — the final undeveloped bank of land at nearly 500,000 sqm — will add 1.5 million sqm of new office, residential, retail and hospitality space, including over 450,000 sqm of Grade A offices and more than 3,000 luxury waterfront residences. Enabling works are scheduled to begin in 2026.",
    takeaway: "A sovereign-backed expansion of the ADGM district adds a long runway of premium supply — for off-plan buyers, watch what Aldar actually launches on the island before paying premiums in neighbouring districts.",
    source: "RP Realty Plus",
    url: "https://www.rprealtyplus.com/newsviews/abu-dhabi-mubadala-aldar-announce-aed-60-billion-expansion-on-al-maryah-island-123090.html"
  },
  {
    date: "2026-11-03",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Casa Vista's AED 350m AQUORA sells out Phase 1 on Dubai Islands; Phase 2 opens",
    summary: "Casa Vista Development's AED 350 million AQUORA project on Dubai Islands sold out its Phase 1 ahead of its official unveiling and has now released Phase 2, per the developer's announcement on EINPresswire on 3 November 2026. The project comprises 105 residences plus six waterfront retail spaces across a 50,000 sq ft plot, with handover scheduled for Q1 2028. The Phase 1 sell-out was celebrated at an unveiling at Madinat Jumeirah Arena on 28 October attended by more than 800 guests.",
    takeaway: "Waterfront mid-size projects are still selling out at launch — for Phase 2, check the price per sq ft against Phase 1's, not just the sell-out headline.",
    source: "EINPresswire (Casa Vista Development announcement)",
    url: "https://www.einpresswire.com/article/954012300/casa-vista-development-builds-dubai-momentum-as-aquora-enters-its-second-residential-phase"
  },
  {
    date: "2026-11-03",
    tag: "uae",
    tagLabel: "UAE",
    title: "Nomination-based Golden Visa pilot covers India and Bangladesh only — no lifetime route, Pakistan not included",
    summary: "A nomination-based Golden Visa pilot priced around AED 100,000 was introduced in 2025 for nationals of India and Bangladesh only — Pakistan was not included. The UAE's Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) publicly rejected any guaranteed, fixed-price or 'lifetime' visa product in July 2025: the Golden Visa remains a 5- or 10-year renewable residence permit granted only through the official categories, and no agency is an authorised intermediary. Pakistanis qualify on the same terms as any other nationality via the standard routes — including property worth AED 2 million in total value, which since February 2026 counts even on a mortgage or off-plan payment plan, with no 50% paid-up requirement.",
    takeaway: "For Pakistani buyers, the property route is the real path: an off-plan property worth AED 2 million in total qualifies for the 10-year visa even while still on a payment plan. Treat any fixed-fee 'nomination' offer with caution.",
    source: "Hijrat (ICP statements)",
    url: "https://hijrat.pk/uae-golden-visa-pakistan-2026.html"
  },
  {
    date: "2026-11-02",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Around 30 Dubai schemes worth up to AED 45bn entering the off-plan market",
    summary: "Roughly 30 residential projects with an estimated combined value of up to AED 45 billion are expected to enter Dubai's off-plan market, per industry reporting cited by Binayah on 2 November 2026. The pipeline is expected to mix apartments and villas across central and suburban areas. Binayah notes buyers are becoming more selective, prioritising location, developer reputation and flexible payment terms over launch-day momentum.",
    takeaway: "More launches means more choice and more price competition — for off-plan buyers that's negotiating power, so compare each new launch against recent completed sales in the same district.",
    source: "Binayah (industry reporting)",
    url: "https://www.binayah.ae/news/off-plan-projects-dubai-3-schemes-worth-aed-45bn-incoming"
  },
  {
    date: "2026-11-02",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi signs four AI agreements with OpenAI",
    summary: "Abu Dhabi signed four agreements with OpenAI on 2 November 2026, witnessed by Crown Prince Sheikh Khaled bin Mohamed bin Zayed, per the Abu Dhabi Media Office reported by Gulf News and Legacy Elite Real Estate. The deals cover a 'Machine-Readable Government' initiative with the Department of Government Enablement, an ADNOC deployment, an investment AI agreement with Mubadala and Inception42, and a five-year AI adoption agreement between Inception42 and OpenAI. No financial values were announced; Abu Dhabi is targeting becoming the world's first fully AI-native government by 2027.",
    takeaway: "Another layer of long-term demand for Abu Dhabi — tech-sector hiring supports rental and resale demand, but it's a macro catalyst, not a reason to overpay on any single launch.",
    source: "Legacy Elite Real Estate (Abu Dhabi Media Office, Gulf News)",
    url: "https://legacyeliterealestate.com/abu-dhabi-openai-ai-native-government-property/"
  },
  {
    date: "2026-11-01",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai ready-apartment sales hit Dhs5.28bn in October — strongest month since February",
    summary: "Sales of ready-to-move-in apartments in Dubai reached Dhs5.28 billion across 2,988 transactions in October 2026 — up 25.7% in value and 22.6% in transaction count from September's 2,437 deals (Dhs4.2 billion) — per Al Masdar Al Aqaari's analysis of Dubai Land Department data reported by Dubai News Week on 1 November 2026. Jumeirah Village Circle led with 384 transactions worth Dhs364.8 million, followed by Business Bay (237 deals, Dhs448.6 million) and Liwan (187, Dhs192 million); 44 ready apartments priced at Dhs10 million or more sold for a combined Dhs700 million.",
    takeaway: "Ready stock is moving faster than any month since February — for off-plan buyers, that means projects now under construction will hand over into a market with real end-user demand, not just investor appetite.",
    source: "Dubai News Week (Al Masdar Al Aqaari / DLD data)",
    url: "https://dubainewsweek.com/dubai-ready-apartment-sales-hit-dhs5-28-billion-in-october/"
  },
  {
    date: "2026-11-01",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai logs AED 12.26bn in a single week — 2,579 sales deals",
    summary: "Dubai's real estate sector recorded AED 12.26 billion (about $3.3 billion) in total transactions over one week, per Dubai Land Department data reported by FHI Global on 1 November 2026. Sales transactions accounted for AED 7.44 billion (about $2 billion) across 2,579 deals, including an AED 55 million apartment at Balqis Residence Beach Villas on Palm Jumeirah and Business Bay office spaces up to AED 43.76 million. Mortgage deals added AED 3.51 billion and gift transfers AED 1.31 billion.",
    takeaway: "A $3.3bn week with strength from Palm luxury to Business Bay offices — busy at both ends, so judge your launch on price per sq ft and payment plan, not the crowd.",
    source: "FHI Global (DLD data)",
    url: "https://fhiglobal.ae/news/dubai-property-sector-records-three-point-three-billion-transactions-weekly"
  },
  {
    date: "2026-11-01",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai Municipality opens Al Satwa to eight-floor residential buildings",
    summary: "Dubai Municipality announced new planning rules on 1 November 2026 allowing residential buildings of up to eight floors in Al Satwa, the traditionally low-rise district between Jumeirah and Bur Dubai, per The National. Plots along internal roads move from attached-villa rules to G+2 apartments, while plots of 1,000 sq m or more — including consolidated plots — qualify for G+8 residential blocks, in a stated push to consolidate smaller plots, optimise land use and raise investment potential. Further details are on the Build in Dubai online platform.",
    takeaway: "New buildable density in a heritage district is a supply-and-value signal — watch which developers move first in Al Satwa, since zoning uplifts can lift surrounding land values before any launch is announced.",
    source: "The National (Dubai Municipality)",
    url: "https://www.thenationalnews.com/news/uae/2026/11/01/on-the-up-dubai-to-allow-eight-floor-residential-apartments-in-al-satwa-under-planning-revamp/"
  },
  {
    date: "2026-10-31",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai October sales jump 18% to AED 34bn as land deals surge 50%",
    summary: "Dubai property sales rose 18.1% month-on-month to $9.3 billion (AED 34 billion) in October 2026 across 11,948 transactions (+6.9%), per Al Masdar Al Aqaari's analysis of Dubai Land Department data published 31 October 2026. Land sales jumped 50% in value to $3.6 billion (AED 13.2 billion) across 1,463 transactions — up 86.8% in volume — pointing to developers restocking plots for future launches. October also recorded 4,634 mortgage transactions worth $3.6 billion and 1,016 gift transfers worth $1.6 billion; combined sales, mortgages and gifts reached about $14.4 billion (AED 53 billion) across 17,598 transactions.",
    takeaway: "Land is the pipeline — a 50% jump in land deals this month is developers buying for 2027–2028 launches, so expect more launch choice soon.",
    source: "Al Masdar Al Aqaari (DLD data)",
    url: "https://masdarak.com/en/market-insights-en/dubai-property-sales-rise-18-to-9-3-billion-in-october-2026/"
  },
  {
    date: "2026-10-31",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Knight Frank: record 296 Dubai sales above $10m in H1 2026; Nakheel releases 44 Palm Jebel Ali beachfront villas",
    summary: "Knight Frank counted 296 Dubai home sales above $10 million in the first half of 2026, up 16% on a year earlier — an all-time high — while overall residential volumes (Jan–Jul) were 8% lower, per Mint Real Estate's analysis of DLD data cited by Miami Living Magazine on 31 October 2026. Dubai Hills Estate (51), Palm Jumeirah (50) and Palm Jebel Ali (40) led; the most expensive home was a six-bedroom Aman Residences apartment at $114.9 million. Nakheel has just released 44 new beachfront villas on Palm Jebel Ali, still under construction and due for completion in 2028. Knight Frank notes early softening in prime pricing alongside the records.",
    takeaway: "Ultra-luxury buyers are committing years before keys — confidence at the top, but not a read on the broader market, where volumes fell 8%.",
    source: "Miami Living Magazine (Knight Frank)",
    url: "https://www.miamilivingmagazine.com/post/dubai-s-ultra-luxury-market-breaks-another-record-as-palm-jebel-ali-releases-new-beachfront-villas"
  },
  {
    date: "2026-10-31",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai real estate crosses Dh625 billion in 10 months — off-plan now two-thirds of sales",
    summary: "Dubai real estate transactions approached AED 625 billion in the first 10 months of 2026 across 181,866 transactions — about 68% of 2025's full-year total of AED 919 billion — per Dubai Land Department data reported by Emirates 24|7 on 31 October 2026. Sales amounted to approximately AED 411.98 billion through 134,730 transactions, of which off-plan sales were AED 196.38 billion through 90,760 transactions — roughly two-thirds of sales by number — against AED 215.6 billion of ready sales through 43,970 transactions. Business Bay led best-selling areas at over AED 21.96 billion, followed by Airport City at AED 18.35 billion and Al Yalayis 1 at AED 16.63 billion. In October alone, sales were AED 34.12 billion through 11,610 transactions, of which off-plan accounted for AED 13.13 billion through 6,698 deals.",
    takeaway: "Off-plan is now about two-thirds of Dubai sales by number — the market is structurally off-plan, so project selection matters more than timing the cycle.",
    source: "Emirates 24|7 (Dubai Land Department)",
    url: "https://www.emirates247.com/business/dubai-real-estate-reaches-dh625-billion-in-10-months-181866-transactions-and-dh412-billion-in-sales/7301?ot=ot.AMPPageLayout"
  },
  {
    date: "2026-10-30",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Missoni's first Abu Dhabi branded residence: 'Waterfront by Missoni' on Al Reem Island",
    summary: "Missoni and Emirates Developments have unveiled 'Waterfront by Missoni', the Italian fashion house's first branded residential address in Abu Dhabi, rising on the waterfront at Al Reem Island, per LogisticsGulf on 30 October 2026. The 250 freehold homes range from one- to four-bedroom apartments to five-bedroom penthouses on the 38th floor, and are available to international buyers. Completion is scheduled for Q2 2030.",
    takeaway: "Branded residences keep landing in Abu Dhabi — judge the launch on price per sq ft and the district, not the fashion-house name, and check service charges before paying any premium.",
    source: "LogisticsGulf",
    url: "https://logisticsgulf.com/2026/10/missoni-and-emirates-developments-partner-to-launch-waterfront-by-missoni/"
  },
  {
    date: "2026-10-30",
    tag: "uae",
    tagLabel: "UAE",
    title: "Arada raises $400m in first UAE developer debt issuance since the February 2026 conflict began",
    summary: "UAE developer Arada raised $400 million through a five-year sukuk issuance, the first debt offering by a UAE real estate developer since the regional conflict began in February 2026, per Khaleej Times on 30 October 2026. The senior unsecured sukuk attracted more than $700 million in orders — roughly double the offering size — and was priced at an 8.875% annual coupon, below initial guidance of 9.375%. The sukuk is listed on the London Stock Exchange and Nasdaq Dubai; part of the proceeds will fund a tender offer to repurchase up to $180 million of existing sukuk ahead of a $411.7 million maturity in June 2027. Arada says its global pipeline of existing and future projects exceeds Dh185 billion.",
    takeaway: "International bond markets lending to a UAE developer at better-than-guided pricing is institutional confidence in bricks — watch whether more developers follow into debt markets.",
    source: "Khaleej Times",
    url: "https://www.khaleejtimes.com/business/uaes-arada-raises-400-million-in-first-property-debt-issuance-since-regional-conflict-began"
  },
  {
    date: "2026-10-30",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai absorbed H1 shocks with only a 4–7% dip, says ANAROCK",
    summary: "Dubai recorded AED 225.7 billion in residential transactions in H1 2026, per ANAROCK's report 'Dubai Real Estate: Built on Vision. Proven by Numbers' published by RP Realty Plus on 30 October 2026. Regional tensions briefly slowed transactions in March and April, but prices softened only 4–7% between February and April, while the DFM real estate stock index fell as much as 34% at its low — the widest gap between investor sentiment and actual property values in any Dubai crisis on record. Average residential prices stood near AED 1,900 per sq ft in H1 2026, up about 6% year-on-year from AED 1,800 in H1 2025.",
    takeaway: "A 6% annual price rise against a 34% stock-index wobble is the resilience case — but this is H1 history, so use it to judge developer confidence, not to assume prices keep climbing.",
    source: "RP Realty Plus (ANAROCK report)",
    url: "https://www.rprealtyplus.com/international/dubai-real-estate-weathers-regional-uncertainty-with-confidence-126723.html"
  },
  {
    date: "2026-10-29",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi apartment values up 24% year-on-year in Q3 — ValuStrat",
    summary: "Abu Dhabi's freehold residential price growth accelerated in Q3 2026, with the ValuStrat Price Index up 3.1% quarter-on-quarter to 155.8 points — annual growth of 16.8% — per Economy Middle East on 29 October 2026. Apartments led with values up 24% year-on-year, against 10.2% for villas; Al Reef rose 36.6% annually, followed by Al Bandar at 24.7%, Al Muneera Island at 24.4% and Al Reem Island at 22.1%. New launches in the quarter included Aldar's first phase of Sei Saadiyat on Saadiyat Island, The Canopies at Yas Point, and Cosmo Developments' AED 6 billion mixed-use Wadi project on Yas Island. Abu Dhabi completed 1,888 apartments and 1,620 villas in the first nine months of 2026, with 13,534 homes projected for the full year.",
    takeaway: "Apartments are doing the heavy lifting at 24% annual growth, more than double villas — strong for recent buyers, but at this pace check whether the launch you're eyeing is priced ahead of the data.",
    source: "Economy Middle East (ValuStrat)",
    url: "https://economymiddleeast.com/news/abu-dhabi-real-estate-maintains-upward-trajectory-in-q3-2026-as-apartment-prices-rise-24-percent/"
  },
];
