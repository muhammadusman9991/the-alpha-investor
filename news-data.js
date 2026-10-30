/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
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
];




