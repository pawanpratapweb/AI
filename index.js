const brain = require("brain.js");
const net = new brain.recurrent.LSTM();

net.train(
  [
    {
      input: "capital of Afghanistan",
      output: "Kabul",
    },
    {
      input: "capital of Albania",
      output: "Tirana (Tirane)",
    },
    {
      input: "capital of Algeria",
      output: "Algiers",
    },
    {
      input: "capital of Andorra",
      output: "Andorra la Vella",
    },
    {
      input: "capital of Angola",
      output: "Luanda",
    },
    {
      input: "capital of Antigua and Barbuda",
      output: "Saint John's",
    },
    {
      input: "capital of Argentina",
      output: "Buenos Aires",
    },
    {
      input: "capital of Armenia",
      output: "Yerevan",
    },
    {
      input: "capital of Australia",
      output: "Canberra",
    },
    {
      input: "capital of Austria",
      output: "Vienna",
    },
    {
      input: "capital of Azerbaijan",
      output: "Baku",
    },
    {
      input: "capital of Bahamas",
      output: "Nassau",
    },
    {
      input: "capital of Bahrain",
      output: "Manama",
    },
    {
      input: "capital of Bangladesh",
      output: "Dhaka",
    },
    {
      input: "capital of Barbados",
      output: "Bridgetown",
    },
    {
      input: "capital of Belarus",
      output: "Minsk",
    },
    {
      input: "capital of Belgium",
      output: "Brussels",
    },
    {
      input: "capital of Belize",
      output: "Belmopan",
    },
    {
      input: "capital of Benin",
      output: "Porto Novo",
    },
    {
      input: "capital of Bhutan",
      output: "Thimphu",
    },
    {
      input: "capital of Bolivia",
      output: "La Paz (administrative), Sucre (official)",
    },
    {
      input: "capital of Bosnia and Herzegovina",
      output: "Sarajevo",
    },
    {
      input: "capital of Botswana",
      output: "Gaborone",
    },
    {
      input: "capital of Brazil",
      output: "Brasilia",
    },
    {
      input: "capital of Brunei",
      output: "Bandar Seri Begawan",
    },
    {
      input: "capital of Bulgaria",
      output: "Sofia",
    },
    {
      input: "capital of Burkina Faso",
      output: "Ouagadougou",
    },
    {
      input: "capital of Burundi",
      output: "Gitega",
    },
    {
      input: "capital of Cambodia",
      output: "Phnom Penh",
    },
    {
      input: "capital of Cameroon",
      output: "Yaounde",
    },
    {
      input: "capital of Canada",
      output: "Ottawa",
    },
    {
      input: "capital of Cape Verde",
      output: "Praia",
    },
    {
      input: "capital of Central African Republic",
      output: "Bangui",
    },
    {
      input: "capital of Chad",
      output: "N'Djamena",
    },
    {
      input: "capital of Chile",
      output: "Santiago",
    },
    {
      input: "capital of China",
      output: "Beijing",
    },
    {
      input: "capital of Colombia",
      output: "Bogota",
    },
    {
      input: "capital of Comoros",
      output: "Moroni",
    },
    {
      input: "capital of Congo, Democratic Republic of the",
      output: "Kinshasa",
    },
    {
      input: "capital of Congo, Republic of the",
      output: "Brazzaville",
    },
    {
      input: "capital of Costa Rica",
      output: "San Jose",
    },
    {
      input: "capital of Côte d'Ivoire (Ivory Coast)",
      output: "Yamoussoukro",
    },
    {
      input: "capital of Croatia",
      output: "Zagreb",
    },
    {
      input: "capital of Cuba",
      output: "Havana",
    },
    {
      input: "capital of Cyprus",
      output: "Nicosia",
    },
    {
      input: "capital of Czech Republic (Czechia)",
      output: "Prague",
    },
    {
      input: "capital of Denmark",
      output: "Copenhagen",
    },
    {
      input: "capital of Djibouti",
      output: "Djibouti",
    },
    {
      input: "capital of Dominica",
      output: "Roseau",
    },
    {
      input: "capital of Dominican Republic",
      output: "Santo Domingo",
    },
    {
      input: "capital of East Timor",
      output: "Dili",
    },
    {
      input: "capital of Ecuador",
      output: "Quito",
    },
    {
      input: "capital of Egypt",
      output: "Cairo",
    },
    {
      input: "capital of El Salvador",
      output: "San Salvador",
    },
    {
      input: "capital of England",
      output: "London",
    },
    {
      input: "capital of Equatorial Guinea",
      output: "Malabo",
    },
    {
      input: "capital of Eritrea",
      output: "Asmara",
    },
    {
      input: "capital of Estonia",
      output: "Tallinn",
    },
    {
      input: "capital of Eswatini (Swaziland)",
      output: "Mbabana",
    },
    {
      input: "capital of Ethiopia",
      output: "Addis Ababa",
    },
    {
      input: "capital of Federated States of Micronesia",
      output: "Palikir",
    },
    {
      input: "capital of Fiji",
      output: "Suva",
    },
    {
      input: "capital of Finland",
      output: "Helsinki",
    },
    {
      input: "capital of France",
      output: "Paris",
    },
    {
      input: "capital of Gabon",
      output: "Libreville",
    },
    {
      input: "capital of Gambia",
      output: "Banjul",
    },
    {
      input: "capital of Georgia",
      output: "Tbilisi",
    },
    {
      input: "capital of Germany",
      output: "Berlin",
    },
    {
      input: "capital of Ghana",
      output: "Accra",
    },
    {
      input: "capital of Greece",
      output: "Athens",
    },
    {
      input: "capital of Grenada",
      output: "Saint George's",
    },
    {
      input: "capital of Guatemala",
      output: "Guatemala City",
    },
    {
      input: "capital of Guinea",
      output: "Conakry",
    },
    {
      input: "capital of Guinea-Bissau",
      output: "Bissau",
    },
    {
      input: "capital of Guyana",
      output: "Georgetown",
    },
    {
      input: "capital of Haiti",
      output: "Port au Prince",
    },
    {
      input: "capital of Honduras",
      output: "Tegucigalpa",
    },
    {
      input: "capital of Hungary",
      output: "Budapest",
    },
    {
      input: "capital of Iceland",
      output: "Reykjavik",
    },
    {
      input: "capital of India",
      output: "New Delhi",
    },
    {
      input: "capital of Indonesia",
      output: "Jakarta",
    },
    {
      input: "capital of Iran",
      output: "Tehran",
    },
    {
      input: "capital of Iraq",
      output: "Baghdad",
    },
    {
      input: "capital of Ireland",
      output: "Dublin",
    },
    {
      input: "capital of Israel",
      output: "Jerusalem",
    },
    {
      input: "capital of Italy",
      output: "Rome",
    },
    {
      input: "capital of Jamaica",
      output: "Kingston",
    },
    {
      input: "capital of Japan",
      output: "Tokyo",
    },
    {
      input: "capital of Jordan",
      output: "Amman",
    },
    {
      input: "capital of Kazakhstan",
      output: "Nur-Sultan",
    },
    {
      input: "capital of Kenya",
      output: "Nairobi",
    },
    {
      input: "capital of Kiribati",
      output: "Tarawa Atoll",
    },
    {
      input: "capital of Kosovo",
      output: "Pristina",
    },
    {
      input: "capital of Kuwait",
      output: "Kuwait City",
    },
    {
      input: "capital of Kyrgyzstan",
      output: "Bishkek",
    },
    {
      input: "capital of Laos",
      output: "Vientiane",
    },
    {
      input: "capital of Latvia",
      output: "Riga",
    },
    {
      input: "capital of Lebanon",
      output: "Beirut",
    },
    {
      input: "capital of Lesotho",
      output: "Maseru",
    },
    {
      input: "capital of Liberia",
      output: "Monrovia",
    },
    {
      input: "capital of Libya",
      output: "Tripoli",
    },
    {
      input: "capital of Liechtenstein",
      output: "Vaduz",
    },
    {
      input: "capital of Lithuania",
      output: "Vilnius",
    },
    {
      input: "capital of Luxembourg",
      output: "Luxembourg",
    },
    {
      input: "capital of Madagascar",
      output: "Antananarivo",
    },
    {
      input: "capital of Malawi",
      output: "Lilongwe",
    },
    {
      input: "capital of Malaysia",
      output: "Kuala Lumpur",
    },
    {
      input: "capital of Maldives",
      output: "Male",
    },
    {
      input: "capital of Mali",
      output: "Bamako",
    },
    {
      input: "capital of Malta",
      output: "Valletta",
    },
    {
      input: "capital of Marshall Islands",
      output: "Majuro",
    },
    {
      input: "capital of Mauritania",
      output: "Nouakchott",
    },
    {
      input: "capital of Mauritius",
      output: "Port Louis",
    },
    {
      input: "capital of Mexico",
      output: "Mexico City",
    },
    {
      input: "capital of Moldova",
      output: "Chisinau",
    },
    {
      input: "capital of Monaco",
      output: "Monaco",
    },
    {
      input: "capital of Mongolia",
      output: "Ulaanbaatar",
    },
    {
      input: "capital of Montenegro",
      output: "Podgorica",
    },
    {
      input: "capital of Morocco",
      output: "Rabat",
    },
    {
      input: "capital of Mozambique",
      output: "Maputo",
    },
    {
      input: "capital of Myanmar (Burma)",
      output: "Nay Pyi Taw",
    },
    {
      input: "capital of Namibia",
      output: "Windhoek",
    },
    {
      input: "capital of Nauru",
      output: "No official capital",
    },
    {
      input: "capital of Nepal",
      output: "Kathmandu",
    },
    {
      input: "capital of Netherlands",
      output: "Amsterdam",
    },
    {
      input: "capital of New Zealand",
      output: "Wellington",
    },
    {
      input: "capital of Nicaragua",
      output: "Managua",
    },
    {
      input: "capital of Niger",
      output: "Niamey",
    },
    {
      input: "capital of Nigeria",
      output: "Abuja",
    },
    {
      input: "capital of North Korea",
      output: "Pyongyang",
    },
    {
      input: "capital of North Macedonia (Macedonia)",
      output: "Skopje",
    },
    {
      input: "capital of Northern Ireland",
      output: "Belfast",
    },
    {
      input: "capital of Norway",
      output: "Oslo",
    },
    {
      input: "capital of Oman",
      output: "Muscat",
    },
    {
      input: "capital of Pakistan",
      output: "Islamabad",
    },
    {
      input: "capital of Palau",
      output: "Melekeok",
    },
    {
      input: "capital of Palestine",
      output: "Jerusalem (very limited recognition)",
    },
    {
      input: "capital of Panama",
      output: "Panama City",
    },
    {
      input: "capital of Papua New Guinea",
      output: "Port Moresby",
    },
    {
      input: "capital of Paraguay",
      output: "Asuncion",
    },
    {
      input: "capital of Peru",
      output: "Lima",
    },
    {
      input: "capital of Philippines",
      output: "Manila",
    },
    {
      input: "capital of Poland",
      output: "Warsaw",
    },
    {
      input: "capital of Portugal",
      output: "Lisbon",
    },
    {
      input: "capital of Qatar",
      output: "Doha",
    },
    {
      input: "capital of Romania",
      output: "Bucharest",
    },
    {
      input: "capital of Russia",
      output: "Moscow",
    },
    {
      input: "capital of Rwanda",
      output: "Kigali",
    },
    {
      input: "capital of Saint Kitts and Nevis",
      output: "Basseterre",
    },
    {
      input: "capital of Saint Lucia",
      output: "Castries",
    },
    {
      input: "capital of Saint Vincent and the Grenadines",
      output: "Kingstown",
    },
    {
      input: "capital of Samoa",
      output: "Apia",
    },
    {
      input: "capital of San Marino",
      output: "San Marino",
    },
    {
      input: "capital of Sao Tome and Principe",
      output: "Sao Tome",
    },
    {
      input: "capital of Saudi Arabia",
      output: "Riyadh",
    },
    {
      input: "capital of Scotland",
      output: "Edinburgh",
    },
    {
      input: "capital of Senegal",
      output: "Dakar",
    },
    {
      input: "capital of Serbia",
      output: "Belgrade",
    },
    {
      input: "capital of Seychelles",
      output: "Victoria",
    },
    {
      input: "capital of Sierra Leone",
      output: "Freetown",
    },
    {
      input: "capital of Singapore",
      output: "Singapore",
    },
    {
      input: "capital of Slovakia",
      output: "Bratislava",
    },
    {
      input: "capital of Slovenia",
      output: "Ljubljana",
    },
    {
      input: "capital of Solomon Islands",
      output: "Honiara",
    },
    {
      input: "capital of Somalia",
      output: "Mogadishu",
    },
    {
      input: "capital of South Africa",
      output: "Pretoria, Bloemfontein, Cape Town",
    },
    {
      input: "capital of South Korea",
      output: "Seoul",
    },
    {
      input: "capital of South Sudan",
      output: "Juba",
    },
    {
      input: "capital of Spain",
      output: "Madrid",
    },
    {
      input: "capital of Sri Lanka",
      output: "Sri Jayawardenapura Kotte",
    },
    {
      input: "capital of Sudan",
      output: "Khartoum",
    },
    {
      input: "capital of Suriname",
      output: "Paramaribo",
    },
    {
      input: "capital of Sweden",
      output: "Stockholm",
    },
    {
      input: "capital of Switzerland",
      output: "Bern",
    },
    {
      input: "capital of Syria",
      output: "Damascus",
    },
    {
      input: "capital of Taiwan",
      output: "Taipei",
    },
    {
      input: "capital of Tajikistan",
      output: "Dushanbe",
    },
    {
      input: "capital of Tanzania",
      output: "Dodoma",
    },
    {
      input: "capital of Thailand",
      output: "Bangkok",
    },
    {
      input: "capital of Togo",
      output: "Lome",
    },
    {
      input: "capital of Tonga",
      output: "Nuku'alofa",
    },
    {
      input: "capital of Trinidad and Tobago",
      output: "Port of Spain",
    },
    {
      input: "capital of Tunisia",
      output: "Tunis",
    },
    {
      input: "capital of Türkiye (Turkey)",
      output: "Ankara",
    },
    {
      input: "capital of Turkmenistan",
      output: "Ashgabat",
    },
    {
      input: "capital of Tuvalu",
      output: "Funafuti",
    },
    {
      input: "capital of Uganda",
      output: "Kampala",
    },
    {
      input: "capital of Ukraine",
      output: "Kyiv or Kiev",
    },
    {
      input: "capital of United Arab Emirates",
      output: "Abu Dhabi",
    },
    {
      input: "capital of United Kingdom",
      output: "London",
    },
    {
      input: "capital of United States",
      output: "Washington D.C.",
    },
    {
      input: "capital of Uruguay",
      output: "Montevideo",
    },
    {
      input: "capital of Uzbekistan",
      output: "Tashkent",
    },
    {
      input: "capital of Vanuatu",
      output: "Port Vila",
    },
    {
      input: "capital of Vatican City",
      output: "Vatican City",
    },
    {
      input: "capital of Venezuela",
      output: "Caracas",
    },
    {
      input: "capital of Vietnam",
      output: "Hanoi",
    },
    {
      input: "capital of Wales",
      output: "Cardiff",
    },
    {
      input: "capital of Yemen",
      output: "Sana'a",
    },
    {
      input: "capital of Zambia",
      output: "Lusaka",
    },
    {
      input: "capital of Zimbabwe",
      output: "Harare",
    },
    {
      input: "capital of 201",
      output: "201",
    },
  ],
  { log: true, iterations: 50 }
);

console.log(net.run("what is capital of india"));
