/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
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
    title: "UAE pilots nomination-based Golden Visa for India and Bangladesh residents",
    summary: "The UAE has introduced a pilot nomination-based Golden Visa scheme for residents of India and Bangladesh, offering lifetime residency for an application fee of AED 100,000 without requiring property or business investment, per Dhyeya IAS current affairs dated 3 November 2026. Eligibility is based on background checks and societal contribution rather than investment size, and the programme is framed as part of the UAE's broader immigration and economic strategy following the 2022 India-UAE CEPA.",
    takeaway: "This route doesn't need a property purchase — but it widens the pool of long-term UAE residents, and every new resident is potential future property demand. Verify the scheme's official status before quoting it to buyers.",
    source: "Dhyeya IAS",
    url: "https://www.dhyeyaias.com/current-affairs/daily-pre-pare/view/uaes-nomination-based-golden-visa-scheme-for-india-and-bangladesh-residents"
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
  {
    date: "2026-10-29",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai Q3: Dh141bn in sales and mortgages; apartment yields at 7.7%",
    summary: "Dubai recorded about Dh141 billion in combined sales and mortgage transactions in Q3 2026, per a Windmills Group report published by Dubai Currents on 29 October 2026. Apartment rental yields averaged around 7.7% in the quarter and villas about 7.0%, with shops at 8.5% and offices at 8.2%. Mortgage transactions held steady at about Dh49 billion, matching the same period last year. Dubai South saw the highest community-level activity, followed by Business Bay, Wadi Al Safa 4, Al Barsha South Fourth and Palm Jumeirah.",
    takeaway: "A 7.7% average apartment yield is the income case in one number — but it's a quarter average, so verify the specific community and unit type before buying the yield story.",
    source: "Dubai Currents (Windmills Group)",
    url: "https://dubaicurrents.com/en/news/2115/"
  },
  {
    date: "2026-10-28",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi apartment asking prices climb up to 9.2% in Q3 as demand holds",
    summary: "Apartment asking prices in Abu Dhabi rose by as much as 9.2% in the third quarter of 2026, led by mid-tier flats in Baniyas, with affordable flats in Al Ghadeer up 6.2% and Al Maryah Island up 3.2%, per Bayut's market analysis reported by Khaleej Times on 28 October 2026. Search demand for mid-tier apartments was led by Al Reem Island, with Masdar City and Baniyas also drawing increased interest. Bayut's live index put the average Abu Dhabi asking price at AED 2,045 per sq ft in September, up 5.77% over 12 months. The report is based on advertised asking prices and search activity, not completed transactions.",
    takeaway: "Affordable and mid-tier areas led the gains — for off-plan buyers, that points to where end-user demand is deepest, but asking prices are not sold prices, so check completed deals before paying up.",
    source: "Khaleej Times (Bayut data)",
    url: "https://www.khaleejtimes.com/business/abu-dhabi-apartment-prices-climb-by-up-to-92-buyers-turn-to-affordable-areas?amp=1"
  },
  {
    date: "2026-10-28",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Zimaya launches AED 185m Lawncrest in Dubai Production City, studios from AED 595,000",
    summary: "Zimaya Properties has launched Lawncrest, an AED 185 million residential development in Dubai Production City, per Zawya on 28 October 2026. The ten-storey building comprises 183 studio, one- and two-bedroom apartments overlooking the greens of Jumeirah Golf Estates, with prices starting from AED 595,000 for a studio. Lawncrest is the boutique developer's fifth Dubai project; it says four of its previous projects have sold out.",
    takeaway: "A sub-AED 600k entry point near Jumeirah Golf Estates is the kind of ticket first-time investors watch — but a boutique developer's sell-out record is not a delivery record, so check construction progress and escrow before booking.",
    source: "Zawya",
    url: "https://www.tradingview.com/news/reuters.com,2026-10-28:newsml_Zaw8Kyc4R:0-zawya-dubai-s-zimaya-launches-50-3mln-residential-project/"
  },
  {
    date: "2026-10-28",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "RAK Properties adds three restaurants and cafes at Mina in RAK's final-quarter push",
    summary: "RAK Properties plans to open three restaurants and cafes at Mina, its waterfront destination in Ras Al Khaimah, during the final quarter of 2026, per a report published 28 October 2026. Mina combines residential, tourism and commercial development, and the developer says it selects food and beverage concepts based on their contribution to community amenities. The same week, Bayut data showed Al Marjan Island accounted for nearly two-thirds of views for off-plan apartments in Ras Al Khaimah between March and August 2026.",
    takeaway: "Lifestyle amenities landing at Mina while Al Marjan dominates off-plan search — useful context for RAK buyers, but amenities don't set prices, so compare per-sq-ft against comparable island stock.",
    source: "Aurum PropTech / Bayut",
    url: "https://www.aurumproptech.in/pulse/media/rak-properties-plans-three-new-restaurants-at-mina"
  },
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
];
