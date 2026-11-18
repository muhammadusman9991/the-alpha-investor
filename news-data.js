/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
  {
    date: "2026-11-17",
    tag: "uae",
    tagLabel: "UAE",
    title: "Dubai tops global branded residences ranking — RAK third, Abu Dhabi eighth",
    summary: "Dubai ranks first, Ras Al Khaimah third and Abu Dhabi eighth among the world's top branded residences markets in Savills' Branded Residences Annual Report 2026–2027, reported on 16–17 November 2026. The UAE ranks second globally at country level, behind the United States, and the GCC holds 99 completed branded residential projects with a further 251 in the pipeline — the largest pipeline of any sub-region covered. Savills puts the average global brand premium at 38% in 2026, up from 33% in 2025.",
    takeaway: "Branded residences keep expanding, but a brand premium is paid at purchase and only partly proven at resale — compare any branded launch per sq ft against unbranded stock in the same district before booking.",
    source: "The Gulf Pulse (Savills Branded Residences Annual Report 2026–2027)",
    url: "https://thegulfpulse.com/uae-branded-residences-top-10-markets/"
  },
  {
    date: "2026-11-16",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Meraas releases new phase of Solaya beachfront community in Jumeirah 1",
    summary: "Meraas has released a new phase of Solaya, its beachfront residential community in Jumeirah 1, announced on 16 November 2026 and reported by Emirates News Agency (WAM). The limited collection includes Classic Residences of two to five bedrooms and Signature Residences, including four-bedroom duplexes with private gardens and pools. The Foster + Partners-designed community holds 234 residences across nine buildings on a 40-acre beachfront site; prices, payment plan and handover date for the new phase were not announced.",
    takeaway: "New beachfront supply in established Jumeirah 1 is rare, but with no prices published yet, wait for the official price list and compare per sq ft against recent Jumeirah sold prices before reserving.",
    source: "Mina Property (WAM / Dubai Holding Real Estate)",
    url: "https://minaproperty.com/solaya-meraas-jumeirah-1/"
  },
  {
    date: "2026-11-16",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai luxury off-plan sales hit AED 77.93bn in ten months — 6,441 deals above AED 5m",
    summary: "Dubai recorded AED 77.93 billion in developer off-plan sales of homes priced above AED 5 million in the first ten months of 2026, per Dubai Land Department data analysed by fäm Properties and reported on 16 November 2026. Buyers paid an average of AED 12.1 million across 6,441 villas, apartments and townhouses, with villas accounting for 57% of the value at AED 44.45 billion. The AED 5–10 million bracket led on volume with 4,114 deals worth AED 27.54 billion, and Al Yelayiss 5 was the top area with 949 luxury developer sales.",
    takeaway: "Luxury off-plan demand is concentrated — villas and the AED 5–10m bracket carry the volume — so for buyers, the headline total is less useful than the per-sq-ft price of the specific project against its district's recent sold prices.",
    source: "MENAFN (fäm Properties / DLD data)",
    url: "https://menafn.com/1111966688/Dubai-Records-AED7793-Billion-In-Developer-Off-Plan-Luxury-Home-Sales-In-First-Ten-Months-Of-2026"
  },
  {
    date: "2026-11-16",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Al Ain Asset Management and Emaar launch Dh8bn of Abu Dhabi projects — first 452 units on Al Maryah Island",
    summary: "Abu Dhabi-based Al Ain Asset Management is partnering with Emaar Hospitality to launch five property projects valued at Dh8 billion (US$2.17 billion) in Abu Dhabi, per The National on 16 November 2026. The first project comprises 452 apartment units plus penthouses on Al Maryah Island, with one-bedroom homes starting at Dh3.7 million and sales set to begin soon. The launch comes as Abu Dhabi recorded 38,483 property transactions worth Dh171.26 billion in the first nine months of 2026, per the Abu Dhabi Real Estate Centre.",
    takeaway: "A Dh8bn pipeline on Al Maryah Island adds real supply to the capital's strongest district — compare the Dh3.7m entry price per sq ft against Al Maryah's recent sold prices before booking, and check the payment plan and escrow account.",
    source: "The National (via IndexBox)",
    url: "https://www.indexbox.io/blog/al-ain-asset-management-and-emaar-hospitality-launch-dh8-billion-abu-dhabi-property-projects/"
  },
  {
    date: "2026-11-14",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai logs 2,381 sales worth AED 7.61bn in a week — off-plan still 53% of deals",
    summary: "Dubai registered 2,381 property sales worth AED 7.61 billion in the week from 7 to 13 November 2026, per Dubai Land Department open data reported by Dubai Week on 14 November 2026. Off-plan accounted for 1,270 of the deals (53%) against 1,111 ready sales, and 891 mortgages worth AED 2.56 billion were registered in the same week. Deal count eased from 2,682 the previous week while total value held flat at AED 7.61 billion.",
    takeaway: "Same weekly value on fewer deals means the average ticket rose while volumes eased — for off-plan buyers, the market is still moving but launch-day pressure is lower, so compare each project on its district's median price per sq ft.",
    source: "Dubai Week (DLD open data)",
    url: "https://www.dubaiweek.ae/dubai-in-numbers/property-transactions/"
  },
  {
    date: "2026-11-13",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Wynn Al Marjan rooms to go on sale soon — CEO says demand will exceed supply",
    summary: "Wynn Resorts will begin selling rooms at Wynn Al Marjan Island 'quite soon', chief executive Craig Billings said on the company's third-quarter earnings call, per Khaleej Times on 13 November 2026. Billings said demand is expected to exceed supply across the resort's 1,500 keys, and the US$5.7 billion resort remains on schedule to open in September 2027, with fit-out of all guest rooms under way. The project budget was increased by about US$600 million in August 2026, reflecting higher material, shipping and other costs.",
    takeaway: "Room sales starting is the next real milestone before the September 2027 opening — for RAK off-plan buyers, check any project's handover against that date and its price against Al Marjan's completed resale stock, not just the Wynn halo.",
    source: "Khaleej Times (Wynn Resorts Q3 earnings call)",
    url: "https://www.khaleejtimes.com/business/wynn-al-marjan-rooms-to-go-on-sale-soon-as-ceo-sees-demand-exceeding-supply"
  },
  {
    date: "2026-11-13",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai keeps its global super-prime crown — 86 sales over $10m worth $1.57bn in Q3 2026",
    summary: "Dubai retained its position as the world's top super-prime property market in Q3 2026, recording 86 sales of homes above $10 million worth $1.57 billion, per Knight Frank's Global Super-Luxury Homes Report, reported by The National on 13 November 2026. Hong Kong edged ahead on total value ($1.58bn across 78 deals) for the first time since 2022, but Dubai still led on deal count and remains comfortably ahead over the past 12 months, with 525 super-prime deals worth $9.25 billion. Activity fell 34% by count and 28% by value on the previous quarter, the second consecutive quarterly decline.",
    takeaway: "The top spot holds, but volumes are cooling at the very top — the ultra-prime tier is not the off-plan market, so don't read a $10m headline as a launch-day price signal; judge off-plan launches on their own district's sold prices.",
    source: "The National (Knight Frank)",
    url: "https://www.thenationalnews.com/news/uae/2026/11/13/dubais-super-prime-property-sales-cling-on-to-global-top-spot/?utm_source=twitter&utm_medium=socialsharebtn&related=TheNatWorld,NationalComment,LifeNationalUAE,NatSportUAE&via=TheNationalNews"
  },
  {
    date: "2026-11-13",
    tag: "uae",
    tagLabel: "UAE",
    title: "UAE real estate momentum holds across all five emirates — Abu Dhabi up 76%, Dubai near AED 625bn",
    summary: "The UAE real estate sector continued its strong performance across the emirates, per WAM on 13 November 2026. Abu Dhabi recorded transactions worth AED 171.26 billion in the first nine months of 2026, up 76.1% in value, with foreign investment in its investment zones up 131% to AED 86.11 billion. Dubai's transactions approached AED 625 billion in the first ten months across 181,866 deals, with sales of about AED 411.98 billion, and Ras Al Khaimah recorded around AED 2.89 billion in the first half of 2026.",
    takeaway: "Growth is broad-based, not Dubai-only — for off-plan buyers, that means compare new launches across emirates on sold prices and handover dates, not on the headline growth rate of any one market.",
    source: "WAM (ADREC / DLD)",
    url: "https://www.wam.ae/en/article/17iuia7-uae-real-estate-sector-maintains-strong-momentum"
  },
  {
    date: "2026-11-12",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Nearly half of Al Marjan Island property searches come from overseas — the highest share in the UAE",
    summary: "Property Finder's September 2026 data shows Al Marjan Island recorded the highest share of property searches originating from outside the UAE among the four locations analysed, reported by Dubai News Week on 12 November 2026. Around 50% of searches for the island came from abroad, rising to 52.1% for residential sales, while Ras Al Khaimah as a whole drew about a third of searches from overseas, broadly matching Dubai. Villas attract 23% of buyer interest in RAK despite just 10% of listings, and the AED 1–2 million price band leads demand on the island.",
    takeaway: "International interest in Al Marjan is real, but searches are not sales — before buying the Wynn halo, check sold prices on the island and each project's handover against the resort's September 2027 opening.",
    source: "Dubai News Week (Property Finder)",
    url: "https://dubainewsweek.com/al-marjan-island-property-searches/"
  },
  {
    date: "2026-11-12",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Danube launches Shahrukhz Residences — Gauri Khan penthouses sell out on day one, ~500 EOIs in",
    summary: "Danube Properties unveiled Shahrukhz Residences, a 60-storey fully furnished waterfront tower in Dubai Maritime City, at a launch event at Coca-Cola Arena on 11 November 2026, per reports on 12 November 2026. All three Gauri Khan-designed penthouses, each priced at about INR 50 crore, sold out on launch day, and Danube said it received around 500 expressions of interest after the launch. Prices start at AED 1.65 million on a 30:70 payment plan — 30% during construction, 70% on handover — with completion due in Q4 2029.",
    takeaway: "A celebrity launch sells penthouses fast, but the real test is the standard units — compare the AED 1.65m entry price per sq ft against Maritime City's recent sold prices, and confirm the escrow account before booking on the 30:70 plan.",
    source: "Northeast Live (Danube Properties)",
    url: "https://northeastlivetv.com/topnews/gauri-khans-rs-50-crore-dubai-penthouses-sell-out-within-24-hours-of-launch/"
  },
  {
    date: "2026-11-12",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Binghatti profit jumps 65% to Dh4.4bn in nine months as sales hit Dh14.2bn",
    summary: "Dubai developer Binghatti reported net profit up 65% year on year to Dh4.4 billion and revenue up 66% to Dh14.9 billion for the nine months to 30 September 2026, per Khaleej Times on 12 November 2026. Sales rose 11% to Dh14.2 billion, with third-quarter revenue more than doubling from a year earlier. The company handed over about 2,600 units in the period, including Binghatti Apex, Ghost, Ivory, Haven and Grove, and said eight more projects comprising about 6,400 units are on track for completion before the end of 2026.",
    takeaway: "A developer posting record profits while handing over thousands of units is a delivery signal — for buyers, completed and near-complete Binghatti stock is worth comparing against off-plan prices in the same districts.",
    source: "Khaleej Times (Binghatti 9M 2026 results)",
    url: "https://www.khaleejtimes.com/business/binghatti-profit-jumps-65-as-dubai-property-demand-fuels-growth"
  },
  {
    date: "2026-11-12",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai ready-home sales hit Dh10.1bn in October — highest since March, even as overall deals fall 44% year-on-year",
    summary: "Sales of completed homes in Dubai reached Dh10.1 billion across 3,702 transactions in October 2026, the highest monthly level since March and up more than 20% on September, per Cavendish Maxwell, reported by Khaleej Times on 12 November 2026. Ready homes were 36% of residential sales, while off-plan sales slipped 6.4% on September as developers slowed new launches. Total residential sales were Dh25.35 billion across 10,252 deals; over the first ten months of 2026 residential sales totalled Dh320.1 billion, down 29% in value on the same period of 2025.",
    takeaway: "Buyers are rotating toward homes they can move into now while launches slow — for off-plan buyers, fewer launches means less choice but also less launch-day pressure, so negotiate on price per sq ft and check the escrow account.",
    source: "Khaleej Times (Cavendish Maxwell)",
    url: "https://www.khaleejtimes.com/business/dubai-ready-property-sales-hit-highest-level-at-dh101-billion?amp=1"
  },
  {
    date: "2026-11-11",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai home values rise 0.1% in October — first gain since February after a 10.2% fall",
    summary: "Dubai residential values rose 0.1 per cent in October 2026 to 218.9 points on the ValuStrat Price Index, the first monthly gain since February and the end of a cumulative fall of 10.2 per cent, per Khaleej Times on 11 November 2026. Values are still 5.7 per cent below a year earlier — villas 4.8 per cent lower and apartments 7.2 per cent lower — but 19 of the 72 tracked communities posted monthly gains and none fell. Ready home transactions rose 23.9 per cent on the month to 3,602 deals, while off-plan registrations eased to 7,042, still about two-thirds of residential activity.",
    takeaway: "One month of 0.1 per cent is a pause, not a recovery — for off-plan buyers, use the flatter market to negotiate on recent sold prices in the specific building, not on the launch-day price.",
    source: "Khaleej Times (ValuStrat October 2026) via Castilion Estates",
    url: "https://www.castilion-estates.com/journal/dubai-home-values-rise-0-1-per-cent-in-october-the-first-gain-since-february"
  },
  {
    date: "2026-11-11",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai October sales rebound 18% to Dh34.8bn — first monthly rise after two months of decline",
    summary: "Dubai recorded 11,883 property transactions worth Dh34.8 billion in October 2026, up 18% in value and 5% in volume on September, per Dubai Land Department data analysed by Property Finder and reported by Gulf News on 11 November 2026. Residential deals rose 6% to 11,294 worth Dh30.2 billion; off-plan sales held at 6,579 deals but their value rose to Dh16.7 billion from Dh13.6 billion in September, while resales climbed 13% to 5,304 deals. Mortgage registrations rose 5.2% to 3,811, the third consecutive monthly increase, and middle-income buyers earning Dh20,000–Dh59,999 a month made up 68.5% of mortgage applications.",
    takeaway: "The rebound is real but still below early-2026 volumes — for off-plan buyers, the signal is that mid-market demand is broadening, so compare any launch price per sq ft against the district's DLD median, not the monthly headline.",
    source: "Gulf News (DLD / Property Finder)",
    url: "https://gulfnews.com/business/property/dubai-property-sales-jump-18-to-dh348-billion-1.500742615"
  },
  {
    date: "2026-11-11",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Danube sales up 14% despite market slowdown — Shahrukhz Residences switches to 30:70 plan",
    summary: "Danube Properties' sales rose 14% year on year despite a slowdown in Dubai's property market since February, founder Rizwan Sajan said, per Business Times on 11 November 2026. For Shahrukhz Residences, its 60-storey project in Dubai Maritime City due for completion in Q4 2029, Danube has dropped its usual 1% monthly plan for a 30:70 structure — 30% over the first 18 months and 70% on handover — with an average ticket of about AED 1.65 million. Sajan also said Dubai's population grew by more than 200,000 between January and October 2026, to around 4.8 million.",
    takeaway: "A back-ended plan lowers the early cash outlay but concentrates 70% at handover — check the mortgage you'll need in 2029 before booking on the plan alone, and confirm the RERA registration and escrow account.",
    source: "Business Times (Danube Properties)",
    url: "https://www.btin.co.in/danube-properties-sales-rise-14-despite-dubai-slowdown-122536"
  },
  {
    date: "2026-11-10",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Nakheel launches Palm Springs villas from ~AED 3.9m; BEYOND launches SHIONE on Dubai Islands",
    summary: "Nakheel and BEYOND Developments each launched a major project on Monday 9 November 2026, per Dubai Chronicle on 10 November 2026. Nakheel's Palm Springs is a villa and townhouse community near Palm Jebel Ali, with starting prices of about AED 3.9 million, beside Sheikh Zayed Road and a metro station. BEYOND's SHIONE is a beachfront apartment project inside its SIORA masterplan on Dubai Islands, positioned at the upper end of Dubai Islands off-plan pricing. Broker Sterling Capital reports Bay Estate on Dubai Islands sold over 350 properties within seven hours of release, though that is not yet confirmed by final transaction records.",
    takeaway: "Two very different launches on the same day — family villas near Palm Jebel Ali at ~AED 3.9m versus premium beachfront on Dubai Islands — so compare each against recent sold prices in its own area, not the launch-day buzz.",
    source: "Dubai Chronicle",
    url: "https://www.dubaichronicle.com/2026/11/10/dubai-new-property-launches-nakheel-beyond-projects/"
  },
  {
    date: "2026-11-10",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Ardee unveils Downtown RAK on Al Marjan Island — AED 15bn+ portfolio, delivery from 2030",
    summary: "Ardee, a destination developer founded in 2023, officially launched its brand on 10 November 2026 with Ardee Downtown, a mixed-use district on Al Marjan Island described as RAK's first fully-fledged premium downtown, per LanaTime. The district spans 3.5 million sq ft with apartments, branded residences and townhouses plus over 600,000 sq ft of retail and dining, and sits in a portfolio valued at over AED 15 billion in gross development value. Ardee Views, twin residential towers with 652 units, was unveiled as the gateway to the district, and phased delivery is scheduled from 2030. Partners include Fairmont (Accor) and master developer Marjan.",
    takeaway: "A whole downtown district is a long-horizon bet — delivery starts in 2030, so this is about Al Marjan's shape after Wynn opens, not a near-term handover; weigh any early pricing against the island's completed resale stock.",
    source: "LanaTime",
    url: "https://en.lanatime.com/news/ardee-launches-downtown-rak-on-al-marjan-island-2026-11-10/"
  },
  {
    date: "2026-11-10",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Etihad Rail station lifts Jumeirah Golf Estates — off-plan villa prices up 11.2% year-on-year",
    summary: "Jumeirah Golf Estates is seeing demand reshape around connectivity, per Gulf News on 10 November 2026, citing Bayut data. Etihad Rail's Dubai Al Yalayis Station opened on 30 September 2026 near the community, and median asking prices for new off-plan villas reached Dh2,987 per sq ft in September, up 11.2% year-on-year. Views of off-plan listings in the area rose 39% in September, and median asking rent for villas reached Dh850,000 a year. A planned Dubai Metro Gold Line interchange is expected to strengthen links further.",
    takeaway: "Transport openings are already moving prices in Jumeirah Golf Estates — the 11.2% annual rise is asking prices, not sold prices, so check the DLD register for what villas actually closed at before paying the connectivity premium.",
    source: "Gulf News (Bayut data)",
    url: "https://gulfnews.com/business/property/connectivity-boost-drives-demand-at-jumeirah-golf-estates-1.500740873"
  },
  {
    date: "2026-11-09",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Samana and Maserati launch Maserati Island — 840 branded residences on The World Islands",
    summary: "Samana Developers' brand Samana Collecta has partnered with Maserati to launch Maserati Island in The World Islands, Dubai, per IndexBox on 9 November 2026, citing Trade Arabia. The master-planned destination will hold 840 branded residences plus seven water villas and two tree villas, with the first release covering 232 residences with private pools in studio to four-bedroom configurations.",
    takeaway: "Branded launches keep arriving at the top end — the entry premium on a branded island address is real, but the resale premium is unproven, so compare per-sq-ft against completed Dubai waterfront stock before booking.",
    source: "IndexBox (Trade Arabia)",
    url: "https://www.indexbox.io/blog/samana-collecta-and-maserati-launch-maserati-island-in-dubais-the-world-islands/"
  },
  {
    date: "2026-11-09",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai logs AED 15.98bn in transactions in a week — off-plan 57% of sales",
    summary: "Dubai recorded AED 15.98 billion in total property transactions across 4,236 deals between 2 and 6 November 2026, per Dubai Land Department data via Dubai REST, reported by Dubai Market Watch on 9 November 2026. Sales alone were AED 7.51 billion across 2,709 deals; off-plan accounted for 1,550 of them (57%) worth AED 3.01 billion, while ready sales totalled AED 4.5 billion across 1,159 deals.",
    takeaway: "Off-plan is still more than half of weekly sales — for buyers, that means launch choice stays wide, so judge each project on its district's median price per sq ft, not the weekly headline.",
    source: "Dubai Market Watch (DLD / Dubai REST)",
    url: "https://dubaimarketwatch.com/dubai-real-estate-transactions-november-2026/"
  },
];
