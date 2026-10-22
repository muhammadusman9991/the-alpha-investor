/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
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
    title: "betterhomes Q3 2026: secondary sales up 16% QoQ, highest-ever leasing enquiries",
    summary: "betterhomes' Q3 2026 Dubai residential report found secondary transactions rose 16% quarter-on-quarter to 10,055, lifting ready homes' share of all residential sales from 24% to 29% and of sales value from 30% to 37%, reaching AED 27.1 billion. Dubai recorded 34,615 residential sales in the quarter, broadly in line with Q2. The brokerage also recorded its highest quarterly level of leasing enquiries on record.",
    takeaway: "Buyers are rotating toward ready homes with immediate occupancy or rent — for off-plan buyers that means the resale bar is rising, so compare any launch against actual ready-stock comparables.",
    source: "Mid-East Info (betterhomes data)",
    url: "https://mid-east.info/dubai-secondary-sales-rise-16-as-betterhomes-records-highest-ever-quarterly-leasing-enquiries-in-q3-2026/"
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
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Aldar to launch major villa and townhouse community in Dubai by end of year",
    summary: "Aldar Development's CEO Jonathan Emery told The National the developer will launch a large villa and townhouse community near Dubai Silicon Oasis before year-end, its fourth Dubai project after Haven, Athlon and The Wilds. The project is another partnership with Dubai Holding and sits above the Blue Line extension. Emery said Aldar's Dubai joint venture is adding two plots to deliver almost 14,000 new homes with a combined gross development value of more than Dh38 billion, and that the products it has brought to market have all done well despite a cooling Q3.",
    takeaway: "Aldar's Dubai launches have historically moved fast — villa communities near metro extensions are a proven format, but check the launched per-sqft against their earlier Dubai projects before queuing.",
    source: "The National",
    url: "https://www.thenationalnews.com/business/property/2026/10/14/aldar-to-launch-major-dubai-villa-and-townhouse-project-by-end-of-year/"
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
];
