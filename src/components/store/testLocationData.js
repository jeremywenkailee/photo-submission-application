const testLocationData = [
  {
    id: 1,
    submittedBy: "Jeremy",
    name: "English Bay",
    type: "Nature",
    description:
      "English Bay Beach, also called First Beach, located along Beach Ave between Gilford St and Bidwell St, is the most populated beach area in Vancouver's downtown area. The Stanley Park Seawall, a popular running and biking route, runs along the east side of the beach.",
    lat: 49.287572777666156,
    lon: -123.16171730717282,
  },
  {
    id: 2,
    submittedBy: "Nathan",
    name: "Science World",
    type: "Urban",
    description:
      "Visitors to our iconic geodesic dome explore interactive, hands-on exhibits and galleries that nurture their process of discovery and inspire connection with their natural, physical and built environments. Participants in our outreach programs—students, teachers and families in every region of BC—access the experience of Science World through virtual visits from scientists, livestream science shows, and weekly afterschool STEAM mentorship.",
    lat: 49.27342847956953,
    lon: -123.10385009506153,
  },
  {
    id: 3,
    submittedBy: "Kinza",
    name: "Steveston",
    type: "Nature",
    description:
      "Steveston, founded in the 1880s, is a neighbourhood of Richmond in Metro Vancouver. On the southwest tip of Lulu Island, the village is a historic port and salmon canning centre at the mouth of the South Arm of the Fraser River.",
    lat: 49.127502991123755,
    lon: -123.17444095821234,
  },
  {
    id: 4,
    submittedBy: "Aamir",
    name: "Richmond Center",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.16729152455648,
    lon: -123.13839982216372,
  },
  {
    id: 5,
    submittedBy: "Jakob",
    name: "Vancouver Island Downtown",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 48.42548092732006,
    lon: -123.36758241485666,
  },
  {
    id: 6,
    submittedBy: "Jeff",
    name: "Oakridge",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.22900284095893,
    lon: -123.12597728259856,
  },
  {
    id: 7,
    submittedBy: "Ellie",
    name: "Hotel Europe",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.28354774849563,
    lon: -123.1033328153694,
  },
  {
    id: 8,
    submittedBy: "Katherine",
    name: "Stanley Park",
    type: "Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.3043282699121,
    lon: -123.14416638420548,
  },
  {
    id: 9,
    submittedBy: "Sahil",
    name: "Vancouver Island",
    type: "Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.154537677227005,
    lon: -124.02501533194251,
  },
  {
    id: 10,
    submittedBy: "Noah",
    name: "Coquitlam Center",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.2790257723742,
    lon: -122.79757330187526,
  },
  {
    id: 11,
    submittedBy: "Jack",
    name: "Lions Gate Bridge",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.31309209585319,
    lon: -123.14055962149654,
  },
  {
    id: 12,
    submittedBy: "Alex",
    name: "Capilano Suspension Bridge",
    type: "Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.34291297945046,
    lon: -123.11498215227796,
  },
  {
    id: 13,
    submittedBy: "Ethan",
    name: "Vancouver City Hall",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.26087982973888,
    lon: -123.11406863024142,
  },
  {
    id: 14,
    submittedBy: "Mae",
    name: "English Bay",
    type: "Nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.27760658249573,
    lon: -123.14811314128669,
  },
  {
    id: 15,
    submittedBy: "James",
    name: "Science World",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.27201795362732,
    lon: -123.10584029406853,
  },
  {
    id: 16,
    submittedBy: "Angela",
    name: "Langley Mall",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.18913185525611,
    lon: -122.80233281537268,
  },
  {
    id: 17,
    submittedBy: "Tony",
    name: "False Creek",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.27181642954701,
    lon: -123.12145524221448,
  },
  {
    id: 18,
    submittedBy: "Christian",
    name: "Olympic Village",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.27061170916574,
    lon: -123.11394505930183,
  },
  {
    id: 19,
    submittedBy: "Roman",
    name: "Gastown",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.28298543178244,
    lon: -123.10762397688026,
  },
  {
    id: 20,
    submittedBy: "Stephy",
    name: "Jack Poole Plaza",
    type: "Urban",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    lat: 49.289349791168206,
    lon: -123.11776298605683,
  },
];

export default testLocationData;
