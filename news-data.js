/* The Alpha Investor — Market News data.
   Newest first. Each item: date (YYYY-MM-DD), tag (dubai|abudhabi|rak|uae),
   title, summary, takeaway (one honest line for investors), source name + URL.
   Only add items with a named published source and a real date. No hype. */
const NEWS_ITEMS = [
  {
    date: "2026-11-08",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "IREIS 2026 opens tomorrow in Abu Dhabi as emirate's project pipeline tops $758bn",
    summary: "The International Real Estate and Investment Show (IREIS) 2026 runs 10–12 November at ADNEC Centre Abu Dhabi, with more than 4,000 buyers, investors and property professionals expected, per IndexBox on 8 November 2026, citing TradeArabia. Abu Dhabi's active development pipeline is valued above $758.79 billion (AED 2.78 trillion), per BNC Networks. Abu Dhabi recorded 21,416 home sales worth AED 95.8 billion in the first nine months of 2026, with total real estate transactions of AED 175.7 billion, per the Abu Dhabi Real Estate Centre.",
    takeaway: "A showcase week for the capital — for off-plan buyers, the pipeline figure is a long-term demand signal, not a launch price guide; compare any Al Reem or Al Maryah launch against the island's recent sold prices.",
    source: "IndexBox (TradeArabia / BNC Networks / ADREC)",
    url: "https://www.indexbox.io/blog/abu-dhabi-to-host-ireis-2026-as-75879-billion-development-pipeline-drives-real-estate-investment/"
  },
  {
    date: "2026-11-08",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Danube opens EOI for Shahrukhz Residences in Dubai Maritime City",
    summary: "Danube Properties is collecting AED 50,000 expression-of-interest cheques for Shahrukhz Residences in Dubai Maritime City, with the sales launch set for November 2026 and handover listed as December 2029, per Lucretia International on 8 November 2026. The exact plot, unit mix and payment plan have not yet been made public, and the project is taking shape on the artificial peninsula between Port Rashid and Dubai Drydocks.",
    takeaway: "EOI stage means no firm prices yet — wait for the plot, unit mix and payment plan before comparing it against neighbouring Maritime City projects, and confirm the RERA registration and escrow account at reservation.",
    source: "Lucretia International (Danube Properties)",
    url: "https://www.lucretia-international.com/en/projects/danube-shahrukhz-residences-by-danube"
  },
  {
    date: "2026-11-07",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai registers 2,682 sales worth AED 7.61bn in a week — 59% off-plan",
    summary: "Dubai registered 2,682 property sales worth AED 7.61 billion in the week from 31 October to 6 November 2026, per Dubai Land Department open data reported by Dubai Week on 7 November 2026. Off-plan accounted for 1,573 of the deals (59%) against 1,109 ready sales. In the same week 1,196 mortgages worth AED 5.55 billion and 349 gift transfers worth AED 2.62 billion were registered.",
    takeaway: "Off-plan is still the majority of weekly deals — for buyers, that means launch choice stays wide, so judge each project on its district's median price per sq ft, not the weekly headline.",
    source: "Dubai Week (DLD open data)",
    url: "https://www.dubaiweek.ae/dubai-in-numbers/property-transactions/"
  },
  {
    date: "2026-11-07",
    tag: "abudhabi",
    tagLabel: "Abu Dhabi",
    title: "Abu Dhabi transactions jump 76% to Dh171bn in first nine months of 2026",
    summary: "Abu Dhabi recorded real estate transactions worth Dh171.26 billion in the first nine months of 2026, up 76.1% on the same period of 2025, per the Abu Dhabi Real Estate Centre (ADREC), reported by The National on 7 November 2026. Sales value more than doubled to Dh119.33 billion across 23,749 sales, up from Dh58.20 billion across 15,910 sales a year earlier. Al Reem Island led districts at Dh29.86 billion, followed by Al Hudayriyat Island at Dh28.62 billion; foreign investment in Abu Dhabi's investment zones rose 131% to Dh86.11 billion.",
    takeaway: "The capital's surge is real but concentrated on a few islands — for off-plan buyers, Al Reem and Al Maryah are where the money is moving, so compare any new launch there against the island's recent sold prices, not the launch price alone.",
    source: "The National (ADREC 9M 2026 figures)",
    url: "https://www.thenationalnews.com/business/property/2026/11/07/abu-dhabi-property-transactions-jump-76-to-dh171bn-in-first-nine-months-of-2026/"
  },
  {
    date: "2026-11-07",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai logs 376 sales worth AED 1.21bn in a day; 7-day total hits AED 7.51bn",
    summary: "Dubai recorded 376 property sales worth AED 1.21 billion on 6 November 2026, per Dubai Land Department data reported by BuyDubai.realestate on 7 November 2026. Off-plan accounted for 200 deals (53%) worth AED 484.9 million, while ready property led on value at AED 724.2 million. Over the previous seven days the market logged 2,709 deals worth AED 7.51 billion, 57% of them off-plan; Dubai South was the busiest area with 42 deals, 95% off-plan, at a median AED 1,559 per sq ft.",
    takeaway: "Off-plan is still winning on deal count week after week — for buyers, that means launch choice is wide, so judge each project on its district's median price per sq ft, not the daily headline.",
    source: "BuyDubai.realestate (DLD data)",
    url: "https://buydubai.realestate/dubai-property-6-nov-2026-7-day-sales-reach-2-709-worth-aed-7-51bn/"
  },
  {
    date: "2026-11-06",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "RAK Properties targets record 1,400+ handovers by year-end as Wynn opening nears",
    summary: "RAK Properties reported revenue of AED 809.72 million and net profit after tax of AED 111.37 million for the first nine months of 2026, and said it is preparing to make more than 1,400 homes ready for handover by the end of the year, per Khaleej Times on 6 November 2026. Unit sales slowed to 260 units worth AED 476 million, which the developer attributed to regional volatility and a recalibrated launch calendar. CEO Sameh Muhtadi said the handover target 'would be a record year' for the company, citing major infrastructure progress and 'the positive sentiment driven by the Wynn's anticipated opening next year'.",
    takeaway: "Handovers are the proof point RAK buyers have been waiting for — over 1,400 homes landing before Wynn opens in September 2027 means completed stock is coming, so compare off-plan prices against what actually completes and resells.",
    source: "Khaleej Times (RAK Properties 9M 2026 results)",
    url: "https://prod.khaleejtimes.com/business/rak-properties-targets-record-home-handovers-by-year-end-despite-sales-slowdown"
  },
  {
    date: "2026-11-06",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Wynn reaffirms September 2027 opening for Al Marjan Island resort — and eyes more UAE investment",
    summary: "Wynn Resorts CEO Craig Billings reaffirmed on the company's third-quarter earnings call that the US$5.7 billion Wynn Al Marjan Island resort in Ras Al Khaimah will open in September 2027, per GGRAsia on 6 November 2026. Fitting-out is under way, with the resort handed to its operations team in phases through July 2027; Billings said demand already exceeds supply at the 1,530-key resort. He added that Wynn holds a land bank in the UAE and 'should think about how we're going to use that land bank, because there's significant returns to be earned there.'",
    takeaway: "The opening date is now firm from the operator itself — for RAK off-plan buyers, the catalyst window is real, but check any project's handover against September 2027 and its price against Al Marjan's completed resale stock, not just the Wynn halo.",
    source: "GGRAsia (Wynn Resorts Q3 earnings call)",
    url: "https://www.ggrasia.com/enclave-hotel-in-macau-a-no-brainer-uae-resort-handed-to-ops-team-by-july-2027-wynn-ceo"
  },
  {
    date: "2026-11-05",
    tag: "dubai",
    tagLabel: "Dubai",
    title: "Dubai South leads off-plan sales for an eighth straight month — 720 deals in October",
    summary: "Dubai South recorded 720 off-plan sales worth AED 894.6 million in October 2026, keeping its lead as Dubai's top area for new-property purchases for an eighth consecutive month, per Dubai News Week on 5 November 2026, citing fäm Properties and DXBinteract data. Dubai recorded 11,974 sales worth AED 35.01 billion in October, up 18% in value on September, with off-plan accounting for 7,609 deals worth AED 19.2 billion. Freehold rental contracts also hit 44,841 in October, keeping 2026 on course for a record rental year.",
    takeaway: "Eight months at the top is a pattern, not a blip — Dubai South demand is tied to the Al Maktoum airport build-out, so compare launch prices there against the district's own recent sold prices before buying the airport story.",
    source: "Dubai News Week (fäm Properties / DXBinteract)",
    url: "https://dubainewsweek.com/dubai-south-leads-off-plan-property-sales-for-eighth-consecutive-month/"
  },
  {
    date: "2026-11-05",
    tag: "rak",
    tagLabel: "Ras Al Khaimah",
    title: "Playa Viva targets Q2 2027 handover — first Al Marjan Island homes delivered before Wynn opens",
    summary: "Uniestate's Playa Viva development on Al Marjan Island is on course for handover in Q2 2027, which the developer says would make it the first residential project delivered on the island ahead of the Wynn Al Marjan Island resort opening, per LanaTime on 5 November 2026. The project is in its final sales phase with a substantial majority of units already sold, and the developer says exclusive mortgage offers for non-resident buyers will be announced shortly. RAK recorded 1.35 million visitors in 2025 and targets more than 3.5 million a year by 2030.",
    takeaway: "First-mover handovers on Al Marjan Island are arriving months before the resort — for buyers, that means rental demand is still unproven until Wynn opens, so price the gap, not just the promise.",
    source: "LanaTime (Uniestate)",
    url: "https://en.lanatime.com/news/playa-viva-targets-q2-2027-handover-ahead-of-wynn-opening-2026-11-05/"
  },
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
  },];
