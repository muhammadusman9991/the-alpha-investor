/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
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
  {
    date: "2026-10-19",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "RAK Oasis names India master marketing partner for 406-acre freehold community",
    summary: "On 19 October 2026, Shahab Building Contracting LLC appointed Lionexa LLP (CEO Kauser Nawaz) as master marketing partner for RAK Oasis in Ras Al Khaimah, making the Noida-based firm the official channel for buyers across India. RAK Oasis is a 406-acre master-planned community offering freehold residential plots and commercial units, with plots bookable at 10% down and the balance in interest-free monthly instalments paid directly to the developer. The announcement noted RAK is drawing growing buyer interest on the back of major tourism projects including the Wynn resort on Al Marjan Island.",
    takeaway: "An overseas marketing push widens RAK's buyer pool ahead of the Wynn opening — but freehold plots on extended payment plans need title, delivery-milestone and infrastructure checks before any booking.",
    source: "The Tribune",
    url: "https://www.tribuneindia.com/news/business/rak-oasis-appoints-lionexa-llp-as-its-master-marketing-partner-in-india/"
  },
  {
    date: "2026-10-19",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Meraki Developers enters Dubai South — 7-project pipeline worth ~USD 1bn",
    summary: "Meraki Group announced in October 2026 that it is entering Dubai South with a new mixed-use development, describing the district as one of Dubai's fastest-growing residential and investment corridors. The developer says it has seven projects worth nearly USD 1 billion in its Dubai pipeline, with approximately 2,400 residential units currently under construction. Its completed Haven I project achieved a 73% snag-free handover rate, and the company reports one-bedroom apartments there commanding about AED 75,000 annually against an area average of AED 63,000 — a premium of nearly 19%.",
    takeaway: "The rental premium and snag-free handover figures are the developer's own — still, delivery track record claims like these are exactly what off-plan buyers should ask for evidence on before booking.",
    source: "Mid-East Info",
    url: "https://mid-east.info/meraki-developers-enters-dubai-south-as-its-portfolio-expands-with-seven-projects-in-the-pipeline/"
  },
  {
    date: "2026-10-19",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "JW Marriott Residences Yas Island: ~199 branded homes revealed — 1BR to 4BR duplexes + 3 penthouses",
    summary: "New details published on 19 October 2026 show the TARAF (Yas Holding) and Steppe joint venture with Marriott International will offer approximately 199 branded residences on Yas Island, ranging from one-bedroom apartments to four-bedroom duplexes and three penthouses. The beachfront project sits beside the island's golf course, near Yas Marina, Yas Mall and Yas Marina Circuit. Marriott's regional vice president said this is the partners' second collaboration after the W Residences Abu Dhabi – Al Maryah Island, which he described as sold out.",
    takeaway: "A branded beachfront launch on Yas Island with a claimed sold-out predecessor — treat the sell-out claim as the developer's, and check service charges and resale comparables before paying a branded premium.",
    source: "brandedresi.com",
    url: "https://brandedresi.com/jw-marriott-residences-abu-dhabi-yas-island/"
  },
  {
    date: "2026-10-18",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Manchester City Yas Residences Phase 2 on sale from today — townhouses, duplex villas, 4-5BR villas",
    summary: "Ohana Development's AED 15 billion Manchester City Yas Residences on Yas Canal opened Phase 2 sales on 19 October 2026, adding two- and three-bedroom townhouses, duplex villas and four- and five-bedroom villas to the 2,000-plus-home masterplan, with phased completion targeted for 2029. Erling Haaland confirmed through a video appearance at the launch that he bought a five-bedroom villa outright — described as a personal purchase, not a sponsorship — and his father Alfie Haaland has received the keys to his own home in the development.",
    takeaway: "A Phase 2 opening is the real demand test for football-branded homes in the Gulf — watch actual sell-through rather than celebrity headlines before deciding.",
    source: "Further Arabia",
    url: "https://furtherarabia.com/yas-island-residences-get-a-premier-league-stamp/"
  },
  {
    date: "2026-10-17",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai weekly deals hit AED13.5B across 4,193 transactions — off-plan AED3.2B, up ~20% on prior week",
    summary: "Dubai property transactions reached approximately AED 13.47 billion across 4,193 deals in the week ending Friday 16 October, up about 20% in value on the previous week, according to Dubai REST app data republished from Dubai Land Department records. Off-plan sales accounted for approximately AED 3.22 billion across 1,714 transactions, including 1,517 residential units. Dubai Marina led all areas with more than AED 1.01 billion in sales, and one of the week's largest deals was a property linked to the Oceanz 1 project in Dubai Maritime City at AED 96 million.",
    takeaway: "Off-plan still moved 1,714 deals in a single week — demand is there; the buyer edge is choosing which launch, not whether the market is alive.",
    source: "ایرانیان امارات (Dubai REST/DLD data)",
    url: "https://iranianuae.ae/en/business/real-estate/Dubai-property-market-records-AED-135-billion-in-deals/"
  },
  {
    date: "2026-10-17",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "KASCO launches FALA waterfront homes on Jaddaf Waterfront — 109 residences, 40/60 plan, Q4 2028",
    summary: "KASCO Developments has launched FALA by KASCO, a 109-home waterfront project on the Jaddaf Waterfront in Al Jaddaf, announced on 16 October 2026. The development offers studios from 419 sq ft up to three-bedroom apartments, with a 40/60 payment plan and expected completion in Q4 2028. Planned amenities include a rooftop pool, landscaped terraces and waterfront promenade access, with the metro described as about two minutes away.",
    takeaway: "A 40/60 structure with a 2028 handover near Downtown is buyer-friendly — but Al Jaddaf is a patchy submarket, so compare per-sqft pricing with nearby ready stock before paying a launch premium.",
    source: "PropTech Pulse",
    url: "https://www.aurumproptech.in/pulse/media/kasco-launches-fala-waterfront-homes-in-dubais-al-jaddaf"
  },
  {
    date: "2026-10-17",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai Municipality eases villa rules for Emiratis — second family homes, 1.5m setbacks under Home First",
    summary: "Dubai Municipality has introduced new regulations under the Home First initiative allowing Emirati homeowners to expand villas, build second homes for family members and add residential annexes. The changes let homeowners reduce building setbacks to 1.5 metres, build a second floor covering the full area of the first floor, and construct a separate villa for family use — with conditions including neighbour consent where setbacks are removed and a minimum beneficiary age of 18 for a second villa.",
    takeaway: "This is a policy win for Emirati end-users rather than off-plan investors — but easing family housing pressure is a demand-side support signal for the local market.",
    source: "Gulf News",
    url: "https://gulfnews.com/uae/dubai-eases-villa-construction-rules-for-emiratis-allows-second-family-homes-1.500713942"
  },
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
];

