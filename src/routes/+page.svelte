<script>
  import { onMount } from "svelte";

    const data = {
    "Afghanistan": {
        "url": "https://en.wikipedia.org/wiki/Afghanistan",
        "banned_words": ["Afghanistan", "Afghan"]
    },
    "Albania": {
        "url": "https://en.wikipedia.org/wiki/Albania",
        "banned_words": ["Albania", "Albanian"]
    },
    "Algeria": {
        "url": "https://en.wikipedia.org/wiki/Algeria",
        "banned_words": ["Algeria", "Algerian"]
    },
    "Andorra": {
        "url": "https://en.wikipedia.org/wiki/Andorra",
        "banned_words": ["Andorra", "Andorran"]
    },
    "Angola": {
        "url": "https://en.wikipedia.org/wiki/Angola",
        "banned_words": ["Angola", "Angolan"]
    },
    "Antigua and Barbuda": {
        "url": "https://en.wikipedia.org/wiki/Antigua_and_Barbuda",
        "banned_words": ["Antigua and Barbuda", "Antiguan", "Barbudan"]
    },
    "Argentina": {
        "url": "https://en.wikipedia.org/wiki/Argentina",
        "banned_words": ["Argentina", "Argentine"]
    },
    "Armenia": {
        "url": "https://en.wikipedia.org/wiki/Armenia",
        "banned_words": ["Armenia", "Armenian"]
    },
    "Australia": {
        "url": "https://en.wikipedia.org/wiki/Australia",
        "banned_words": ["Australia", "Australian", "Aussie"]
    },
    "Austria": {
        "url": "https://en.wikipedia.org/wiki/Austria",
        "banned_words": ["Austria", "Austrian"]
    },
    "Azerbaijan": {
        "url": "https://en.wikipedia.org/wiki/Azerbaijan",
        "banned_words": ["Azerbaijan", "Azerbaijani"]
    },
    "Bahamas": {
        "url": "https://en.wikipedia.org/wiki/The_Bahamas",
        "banned_words": ["Bahamas", "Bahamian"]
    },
    "Bahrain": {
        "url": "https://en.wikipedia.org/wiki/Bahrain",
        "banned_words": ["Bahrain", "Bahraini"]
    },
    "Bangladesh": {
        "url": "https://en.wikipedia.org/wiki/Bangladesh",
        "banned_words": ["Bangladesh", "Bangladeshi"]
    },
    "Barbados": {
        "url": "https://en.wikipedia.org/wiki/Barbados",
        "banned_words": ["Barbados", "Barbadian"]
    },
    "Belarus": {
        "url": "https://en.wikipedia.org/wiki/Belarus",
        "banned_words": ["Belarus", "Belarusian"]
    },
    "Belgium": {
        "url": "https://en.wikipedia.org/wiki/Belgium",
        "banned_words": ["Belgium", "Belgian"]
    },
    "Belize": {
        "url": "https://en.wikipedia.org/wiki/Belize",
        "banned_words": ["Belize", "Belizean"]
    },
    "Benin": {
        "url": "https://en.wikipedia.org/wiki/Benin",
        "banned_words": ["Benin", "Beninese"]
    },
    "Bhutan": {
        "url": "https://en.wikipedia.org/wiki/Bhutan",
        "banned_words": ["Bhutan", "Bhutani"]
    },
    "Bolivia": {
        "url": "https://en.wikipedia.org/wiki/Bolivia",
        "banned_words": ["Bolivia", "Bolivian"]
    },
    "Bosnia and Herzegovina": {
        "url": "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina",
        "banned_words": ["Bosnia and Herzegovina", "Bosnian", "Herzegovinian"]
    },
    "Botswana": {
        "url": "https://en.wikipedia.org/wiki/Botswana",
        "banned_words": ["Botswana", "Botswana"]
    },
    "Brazil": {
        "url": "https://en.wikipedia.org/wiki/Brazil",
        "banned_words": ["Brazil", "Brazilian"]
    },
    "Brunei": {
        "url": "https://en.wikipedia.org/wiki/Brunei",
        "banned_words": ["Brunei", "Bruneian"]
    },
    "Bulgaria": {
        "url": "https://en.wikipedia.org/wiki/Bulgaria",
        "banned_words": ["Bulgaria", "Bulgarian"]
    },
    "Burkina Faso": {
        "url": "https://en.wikipedia.org/wiki/Burkina_Faso",
        "banned_words": ["Burkina Faso", "Burkinabe"]
    },
    "Burundi": {
        "url": "https://en.wikipedia.org/wiki/Burundi",
        "banned_words": ["Burundi", "Burundian"]
    },
    "Cabo Verde": {
        "url": "https://en.wikipedia.org/wiki/Cape_Verde",
        "banned_words": ["Cabo Verde", "Cape Verdean"]
    },
    "Cambodia": {
        "url": "https://en.wikipedia.org/wiki/Cambodia",
        "banned_words": ["Cambodia", "Cambodian"]
    },
    "Cameroon": {
        "url": "https://en.wikipedia.org/wiki/Cameroon",
        "banned_words": ["Cameroon", "Cameroonian"]
    },
    "Canada": {
        "url": "https://en.wikipedia.org/wiki/Canada",
        "banned_words": ["Canada", "Canadian", "CA"]
    },
    "Central African Republic": {
        "url": "https://en.wikipedia.org/wiki/Central_African_Republic",
        "banned_words": ["Central African Republic", "Central African"]
    },
    "Chad": {
        "url": "https://en.wikipedia.org/wiki/Chad",
        "banned_words": ["Chad", "Chadian"]
    },
    "Chile": {
        "url": "https://en.wikipedia.org/wiki/Chile",
        "banned_words": ["Chile", "Chilean"]
    },
    "China": {
        "url": "https://en.wikipedia.org/wiki/China",
        "banned_words": ["China", "Chinese", "People's Republic of", "CCP"]
    },
    "Colombia": {
        "url": "https://en.wikipedia.org/wiki/Colombia",
        "banned_words": ["Colombia", "Colombian"]
    },
    "Comoros": {
        "url": "https://en.wikipedia.org/wiki/Comoros",
        "banned_words": ["Comoros", "Comorian"]
    },
    "Congo": {
        "url": "https://en.wikipedia.org/wiki/Congo",
        "banned_words": ["Congo", "Congolese"]
    },
    "Democratic Republic of the Congo": {
        "url": "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
        "banned_words": ["Democratic Republic of the Congo", "DRC", "Congolese"]
    },
    "Costa Rica": {
        "url": "https://en.wikipedia.org/wiki/Costa_Rica",
        "banned_words": ["Costa Rica", "Costa Rican"]
    },
    "Croatia": {
        "url": "https://en.wikipedia.org/wiki/Croatia",
        "banned_words": ["Croatia", "Croatian"]
    },
    "Cuba": {
        "url": "https://en.wikipedia.org/wiki/Cuba",
        "banned_words": ["Cuba", "Cuban"]
    },
    "Cyprus": {
        "url": "https://en.wikipedia.org/wiki/Cyprus",
        "banned_words": ["Cyprus", "Cypriot"]
    },
    "Czech Republic": {
        "url": "https://en.wikipedia.org/wiki/Czech_Republic",
        "banned_words": ["Czech Republic", "Czech"]
    },
    "Denmark": {
        "url": "https://en.wikipedia.org/wiki/Denmark",
        "banned_words": ["Denmark", "Danish"]
    },
    "Djibouti": {
        "url": "https://en.wikipedia.org/wiki/Djibouti",
        "banned_words": ["Djibouti", "Djiboutian"]
    },
    "Dominica": {
        "url": "https://en.wikipedia.org/wiki/Dominica",
        "banned_words": ["Dominica", "Dominican"]
    },
    "Dominican Republic": {
        "url": "https://en.wikipedia.org/wiki/Dominican_Republic",
        "banned_words": ["Dominican Republic", "Dominican"]
    },
    "East Timor": {
        "url": "https://en.wikipedia.org/wiki/East_Timor",
        "banned_words": ["East Timor", "Timor-Leste", "Timorese"]
    },
    "Ecuador": {
        "url": "https://en.wikipedia.org/wiki/Ecuador",
        "banned_words": ["Ecuador", "Ecuadorian"]
    },
    "Egypt": {
        "url": "https//en.wikipedia.org/wiki/Egypt",
        "banned_words": ["Egypt", "Egyptian"]
    },
    "El Salvador": {
        "url": "https://en.wikipedia.org/wiki/El_Salvador",
        "banned_words": ["El Salvador", "Salvadoran"]
    },
    "Equatorial Guinea": {
        "url": "https://en.wikipedia.org/wiki/Equatorial_Guinea",
        "banned_words": ["Equatorial Guinea", "Equatoguinean"]
    },
    "Eritrea": {
        "url": "https://en.wikipedia.org/wiki/Eritrea",
        "banned_words": ["Eritrea", "Eritrean"]
    },
    "Estonia": {
        "url": "https://en.wikipedia.org/wiki/Estonia",
        "banned_words": ["Estonia", "Estonian"]
    },
    "Eswatini": {
        "url": "https://en.wikipedia.org/wiki/Eswatini",
        "banned_words": ["Eswatini", "Swazi"]
    },
    "Ethiopia": {
        "url": "https://en.wikipedia.org/wiki/Ethiopia",
        "banned_words": ["Ethiopia", "Ethiopian"]
    },
    "Fiji": {
        "url": "https://en.wikipedia.org/wiki/Fiji",
        "banned_words": ["Fiji", "Fijian"]
    },
    "Finland": {
        "url": "https://en.wikipedia.org/wiki/Finland",
        "banned_words": ["Finland", "Finnish"]
    },
    "France": {
        "url": "https://en.wikipedia.org/wiki/France",
        "banned_words": ["France", "French"]
    },
    "Gabon": {
        "url": "https://en.wikipedia.org/wiki/Gabon",
        "banned_words": ["Gabon", "Gabonese"]
    },
    "Gambia": {
        "url": "https://en.wikipedia.org/wiki/The_Gambia",
        "banned_words": ["Gambia", "Gambian"]
    },
    "Georgia": {
        "url": "https://en.wikipedia.org/wiki/Georgia_(country)",
        "banned_words": ["Georgia", "Georgian"]
    },
    "Germany": {
        "url": "https://en.wikipedia.org/wiki/Germany",
        "banned_words": ["Germany", "German"]
    },
    "Ghana": {
        "url": "https://en.wikipedia.org/wiki/Ghana",
        "banned_words": ["Ghana", "Ghanaian"]
    },
    "Greece": {
        "url": "https://en.wikipedia.org/wiki/Greece",
        "banned_words": ["Greece", "Greek"]
    },
    "Grenada": {
        "url": "https://en.wikipedia.org/wiki/Grenada",
        "banned_words": ["Grenada", "Grenadian"]
    },
    "Guatemala": {
        "url": "https://en.wikipedia.org/wiki/Guatemala",
        "banned_words": ["Guatemala", "Guatemalan"]
    },
    "Guinea": {
        "url": "https://en.wikipedia.org/wiki/Guinea",
        "banned_words": ["Guinea", "Guinean"]
    },
    "Guinea-Bissau": {
        "url": "https://en.wikipedia.org/wiki/Guinea-Bissau",
        "banned_words": ["Guinea-Bissau", "Bissauan"]
    },
    "Guyana": {
        "url": "https://en.wikipedia.org/wiki/Guyana",
        "banned_words": ["Guyana", "Guyanese"]
    },
    "Haiti": {
        "url": "https://en.wikipedia.org/wiki/Haiti",
        "banned_words": ["Haiti", "Haitian"]
    },
    "Honduras": {
        "url": "https://en.wikipedia.org/wiki/Honduras",
        "banned_words": ["Honduras", "Honduran"]
    },
    "Hungary": {
        "url": "https://en.wikipedia.org/wiki/Hungary",
        "banned_words": ["Hungary", "Hungarian"]
    },
    "Iceland": {
        "url": "https://en.wikipedia.org/wiki/Iceland",
        "banned_words": ["Iceland", "Icelander"]
    },
    "India": {
        "url": "https://en.wikipedia.org/wiki/India",
        "banned_words": ["India", "Indian"]
    },
    "Indonesia": {
        "url": "https://en.wikipedia.org/wiki/Indonesia",
        "banned_words": ["Indonesia", "Indonesian"]
    },
    "Iran": {
        "url": "https://en.wikipedia.org/wiki/Iran",
        "banned_words": ["Iran", "Iranian"]
    },
    "Iraq": {
        "url": "https://en.wikipedia.org/wiki/Iraq",
        "banned_words": ["Iraq", "Iraqi"]
    },
    "Ireland": {
        "url": "https://en.wikipedia.org/wiki/Ireland",
        "banned_words": ["Ireland", "Irish"]
    },
    "Israel": {
        "url": "https://en.wikipedia.org/wiki/Israel",
        "banned_words": ["Israel", "Israeli"]
    },
    "Italy": {
        "url": "https://en.wikipedia.org/wiki/Italy",
        "banned_words": ["Italy", "Italian"]
    },
    "Jamaica": {
        "url": "https://en.wikipedia.org/wiki/Jamaica",
        "banned_words": ["Jamaica", "Jamaican"]
    },
    "Japan": {
        "url": "https://en.wikipedia.org/wiki/Japan",
        "banned_words": ["Japan", "Japanese"]
    },
    "Jordan": {
        "url": "https://en.wikipedia.org/wiki/Jordan",
        "banned_words": ["Jordan", "Jordanian"]
    },
    "Kazakhstan": {
        "url": "https://en.wikipedia.org/wiki/Kazakhstan",
        "banned_words": ["Kazakhstan", "Kazakh"]
    },
    "Kenya": {
        "url": "https://en.wikipedia.org/wiki/Kenya",
        "banned_words": ["Kenya", "Kenyan"]
    },
    "Kiribati": {
        "url": "https://en.wikipedia.org/wiki/Kiribati",
        "banned_words": ["Kiribati", "I-Kiribati"]
    },
    "North Korea": {
        "url": "https://en.wikipedia.org/wiki/North_Korea",
        "banned_words": ["North Korea", "North Korean", "DPRK"]
    },
    "South Korea": {
        "url": "https://en.wikipedia.org/wiki/South_Korea",
        "banned_words": ["South Korea", "South Korean", "ROK"]
    },
    "Kosovo": {
        "url": "https://en.wikipedia.org/wiki/Kosovo",
        "banned_words": ["Kosovo", "Kosovar"]
    },
    "Kuwait": {
        "url": "https://en.wikipedia.org/wiki/Kuwait",
        "banned_words": ["Kuwait", "Kuwaiti"]
    },
    "Kyrgyzstan": {
        "url": "https://en.wikipedia.org/wiki/Kyrgyzstan",
        "banned_words": ["Kyrgyzstan", "Kyrgyz"]
    },
    "Laos": {
        "url": "https://en.wikipedia.org/wiki/Laos",
        "banned_words": ["Laos", "Laotian"]
    },
    "Latvia": {
        "url": "https://en.wikipedia.org/wiki/Latvia",
        "banned_words": ["Latvia", "Latvian"]
    },
    "Lebanon": {
        "url": "https://en.wikipedia.org/wiki/Lebanon",
        "banned_words": ["Lebanon", "Lebanese"]
    },
    "Lesotho": {
        "url": "https://en.wikipedia.org/wiki/Lesotho",
        "banned_words": ["Lesotho", "Basotho"]
    },
    "Liberia": {
        "url": "https://en.wikipedia.org/wiki/Liberia",
        "banned_words": ["Liberia", "Liberian"]
    },
    "Libya": {
        "url": "https://en.wikipedia.org/wiki/Libya",
        "banned_words": ["Libya", "Libyan"]
    },
    "Liechtenstein": {
        "url": "https://en.wikipedia.org/wiki/Liechtenstein",
        "banned_words": ["Liechtenstein", "Liechtensteiner"]
    },
    "Lithuania": {
        "url": "https://en.wikipedia.org/wiki/Lithuania",
        "banned_words": ["Lithuania", "Lithuanian"]
    },
    "Luxembourg": {
        "url": "https://en.wikipedia.org/wiki/Luxembourg",
        "banned_words": ["Luxembourg", "Luxembourger"]
    },
    "Madagascar": {
        "url": "https://en.wikipedia.org/wiki/Madagascar",
        "banned_words": ["Madagascar", "Malagasy"]
    },
    "Malawi": {
        "url": "https://en.wikipedia.org/wiki/Malawi",
        "banned_words": ["Malawi", "Malawian"]
    },
    "Malaysia": {
        "url": "https://en.wikipedia.org/wiki/Malaysia",
        "banned_words": ["Malaysia", "Malaysian"]
    },
    "Maldives": {
        "url": "https://en.wikipedia.org/wiki/Maldives",
        "banned_words": ["Maldives", "Maldivian"]
    },
    "Mali": {
        "url": "https://en.wikipedia.org/wiki/Mali",
        "banned_words": ["Mali", "Malian"]
    },
    "Malta": {
        "url": "https://en.wikipedia.org/wiki/Malta",
        "banned_words": ["Malta", "Maltese"]
    },
    "Marshall Islands": {
        "url": "https://en.wikipedia.org/wiki/Marshall_Islands",
        "banned_words": ["Marshall Islands", "Marshallese"]
    },
    "Mauritania": {
        "url": "https://en.wikipedia.org/wiki/Mauritania",
        "banned_words": ["Mauritania", "Mauritanian"]
    },
    "Mauritius": {
        "url": "https://en.wikipedia.org/wiki/Mauritius",
        "banned_words": ["Mauritius", "Mauritian"]
    },
    "Mexico": {
        "url": "https://en.wikipedia.org/wiki/Mexico",
        "banned_words": ["Mexico", "Mexican"]
    },
    "Micronesia": {
        "url": "https://en.wikipedia.org/wiki/Micronesia",
        "banned_words": ["Micronesia", "Micronesian"]
    },
    "Moldova": {
        "url": "https://en.wikipedia.org/wiki/Moldova",
        "banned_words": ["Moldova", "Moldovan"]
    },
    "Monaco": {
        "url": "https://en.wikipedia.org/wiki/Monaco",
        "banned_words": ["Monaco", "Monegasque"]
    },
    "Mongolia": {
        "url": "https://en.wikipedia.org/wiki/Mongolia",
        "banned_words": ["Mongolia", "Mongolian"]
    },
    "Montenegro": {
        "url": "https://en.wikipedia.org/wiki/Montenegro",
        "banned_words": ["Montenegro", "Montenegrin"]
    },
    "Morocco": {
        "url": "https://en.wikipedia.org/wiki/Morocco",
        "banned_words": ["Morocco", "Moroccan"]
    },
    "Mozambique": {
        "url": "https://en.wikipedia.org/wiki/Mozambique",
        "banned_words": ["Mozambique", "Mozambican"]
    },
    "Myanmar": {
        "url": "https://en.wikipedia.org/wiki/Myanmar",
        "banned_words": ["Myanmar", "Burmese"]
    },
    "Namibia": {
        "url": "https://en.wikipedia.org/wiki/Namibia",
        "banned_words": ["Namibia", "Namibian"]
    },
    "Nauru": {
        "url": "https://en.wikipedia.org/wiki/Nauru",
        "banned_words": ["Nauru", "Nauruan"]
    },
    "Nepal": {
        "url": "https://en.wikipedia.org/wiki/Nepal",
        "banned_words": ["Nepal", "Nepali"]
    },
    "Netherlands": {
        "url": "https://en.wikipedia.org/wiki/Netherlands",
        "banned_words": ["Netherlands", "Dutch"]
    },
    "New Zealand": {
        "url": "https://en.wikipedia.org/wiki/New_Zealand",
        "banned_words": ["New Zealand", "Kiwi"]
    },
    "Nicaragua": {
        "url": "https://en.wikipedia.org/wiki/Nicaragua",
        "banned_words": ["Nicaragua", "Nicaraguan"]
    },
    "Niger": {
        "url": "https://en.wikipedia.org/wiki/Niger",
        "banned_words": ["Niger", "Nigerien"]
    },
    "Nigeria": {
        "url": "https://en.wikipedia.org/wiki/Nigeria",
        "banned_words": ["Nigeria", "Nigerian"]
    },
    "North Macedonia": {
        "url": "https://en.wikipedia.org/wiki/North_Macedonia",
        "banned_words": ["North Macedonia", "Macedonian"]
    },
    "Norway": {
        "url": "https://en.wikipedia.org/wiki/Norway",
        "banned_words": ["Norway", "Norwegian"]
    },
    "Oman": {
        "url": "https://en.wikipedia.org/wiki/Oman",
        "banned_words": ["Oman", "Omani"]
    },
    "Pakistan": {
        "url": "https://en.wikipedia.org/wiki/Pakistan",
        "banned_words": ["Pakistan", "Pakistani"]
    },
    "Palau": {
        "url": "https://en.wikipedia.org/wiki/Palau",
        "banned_words": ["Palau", "Palauan"]
    },
    "Panama": {
        "url": "https://en.wikipedia.org/wiki/Panama",
        "banned_words": ["Panama", "Panamanian"]
    },
    "Papua New Guinea": {
        "url": "https://en.wikipedia.org/wiki/Papua_New_Guinea",
        "banned_words": ["Papua New Guinea", "Papuan"]
    },
    "Paraguay": {
        "url": "https://en.wikipedia.org/wiki/Paraguay",
        "banned_words": ["Paraguay", "Paraguayan"]
    },
    "Peru": {
        "url": "https://en.wikipedia.org/wiki/Peru",
        "banned_words": ["Peru", "Peruvian"]
    },
    "Philippines": {
        "url": "https://en.wikipedia.org/wiki/Philippines",
        "banned_words": ["Philippines", "Filipino"]
    },
    "Poland": {
        "url": "https://en.wikipedia.org/wiki/Poland",
        "banned_words": ["Poland", "Polish"]
    },
    "Portugal": {
        "url": "https://en.wikipedia.org/wiki/Portugal",
        "banned_words": ["Portugal", "Portuguese"]
    },
    "Qatar": {
        "url": "https://en.wikipedia.org/wiki/Qatar",
        "banned_words": ["Qatar", "Qatari"]
    },
    "Romania": {
        "url": "https://en.wikipedia.org/wiki/Romania",
        "banned_words": ["Romania", "Romanian"]
    },
    "Russia": {
        "url": "https://en.wikipedia.org/wiki/Russia",
        "banned_words": ["Russia", "Russian"]
    },
    "Rwanda": {
        "url": "https://en.wikipedia.org/wiki/Rwanda",
        "banned_words": ["Rwanda", "Rwandan"]
    },
    "Saint Kitts and Nevis": {
        "url": "https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis",
        "banned_words": ["Saint Kitts and Nevis", "Kittitian", "Nevisian"]
    },
    "Saint Lucia": {
        "url": "https://en.wikipedia.org/wiki/Saint_Lucia",
        "banned_words": ["Saint Lucia", "Lucian"]
    },
    "Saint Vincent and the Grenadines": {
        "url": "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines",
        "banned_words": ["Saint Vincent and the Grenadines", "Vincentian"]
    },
    "Samoa": {
        "url": "https://en.wikipedia.org/wiki/Samoa",
        "banned_words": ["Samoa", "Samoan"]
    },
    "San Marino": {
        "url": "https://en.wikipedia.org/wiki/San_Marino",
        "banned_words": ["San Marino", "Sammarinese"]
    },
    "Sao Tome and Principe": {
        "url": "https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe",
        "banned_words": ["Sao Tome and Principe", "Sao Tomean", "Principean"]
    },
    "Saudi Arabia": {
        "url": "https://en.wikipedia.org/wiki/Saudi_Arabia",
        "banned_words": ["Saudi Arabia", "Saudi"]
    },
    "Senegal": {
        "url": "https://en.wikipedia.org/wiki/Senegal",
        "banned_words": ["Senegal", "Senegalese"]
    },
    "Serbia": {
        "url": "https://en.wikipedia.org/wiki/Serbia",
        "banned_words": ["Serbia", "Serbian"]
    },
    "Seychelles": {
        "url": "https://en.wikipedia.org/wiki/Seychelles",
        "banned_words": ["Seychelles", "Seychellois"]
    },
    "Sierra Leone": {
        "url": "https://en.wikipedia.org/wiki/Sierra_Leone",
        "banned_words": ["Sierra Leone", "Sierra Leonean"]
    },
    "Singapore": {
        "url": "https://en.wikipedia.org/wiki/Singapore",
        "banned_words": ["Singapore", "Singaporean"]
    },
    "Slovakia": {
        "url": "https://en.wikipedia.org/wiki/Slovakia",
        "banned_words": ["Slovakia", "Slovak"]
    },
    "Slovenia": {
        "url": "https://en.wikipedia.org/wiki/Slovenia",
        "banned_words": ["Slovenia", "Slovenian"]
    },
    "Solomon Islands": {
        "url": "https://en.wikipedia.org/wiki/Solomon_Islands",
        "banned_words": ["Solomon Islands", "Solomon Islander"]
    },
    "Somalia": {
        "url": "https://en.wikipedia.org/wiki/Somalia",
        "banned_words": ["Somalia", "Somali"]
    },
    "South Africa": {
        "url": "https://en.wikipedia.org/wiki/South_Africa",
        "banned_words": ["South Africa", "South African"]
    },
    "South Sudan": {
        "url": "https://en.wikipedia.org/wiki/South_Sudan",
        "banned_words": ["South Sudan", "South Sudanese"]
    },
    "Spain": {
        "url": "https://en.wikipedia.org/wiki/Spain",
        "banned_words": ["Spain", "Spanish"]
    },
    "Sri Lanka": {
        "url": "https://en.wikipedia.org/wiki/Sri_Lanka",
        "banned_words": ["Sri Lanka", "Sri Lankan"]
    },
    "Sudan": {
        "url": "https://en.wikipedia.org/wiki/Sudan",
        "banned_words": ["Sudan", "Sudanese"]
    },
    "Suriname": {
        "url": "https://en.wikipedia.org/wiki/Suriname",
        "banned_words": ["Suriname", "Surinamese"]
    },
    "Sweden": {
        "url": "https://en.wikipedia.org/wiki/Sweden",
        "banned_words": ["Sweden", "Swedish"]
    },
    "Switzerland": {
        "url": "https://en.wikipedia.org/wiki/Switzerland",
        "banned_words": ["Switzerland", "Swiss"]
    },
    "Syria": {
        "url": "https://en.wikipedia.org/wiki/Syria",
        "banned_words": ["Syria", "Syrian"]
    },
    "Taiwan": {
        "url": "https://en.wikipedia.org/wiki/Taiwan",
        "banned_words": ["Taiwan", "Taiwanese"]
    },
    "Tajikistan": {
        "url": "https://en.wikipedia.org/wiki/Tajikistan",
        "banned_words": ["Tajikistan", "Tajik"]
    },
    "Tanzania": {
        "url": "https://en.wikipedia.org/wiki/Tanzania",
        "banned_words": ["Tanzania", "Tanzanian"]
    },
    "Thailand": {
        "url": "https://en.wikipedia.org/wiki/Thailand",
        "banned_words": ["Thailand", "Thai"]
    },
    "Timor-Leste": {
        "url": "https://en.wikipedia.org/wiki/Timor-Leste",
        "banned_words": ["Timor-Leste", "Timorese"]
    },
    "Tunisia": {
        "url": "https://en.wikipedia.org/wiki/Tunisia",
        "banned_words": ["Tunisia", "Tunisian"]
    },
    "Turkey": {
        "url": "https://en.wikipedia.org/wiki/Turkey",
        "banned_words": ["Turkey", "Turkish"]
    },
    "Turkmenistan": {
        "url": "https://en.wikipedia.org/wiki/Turkmenistan",
        "banned_words": ["Turkmenistan", "Turkmen"]
    },
    "Tuvalu": {
        "url": "https://en.wikipedia.org/wiki/Tuvalu",
        "banned_words": ["Tuvalu", "Tuvaluan"]
    },
    "Uganda": {
        "url": "https://en.wikipedia.org/wiki/Uganda",
        "banned_words": ["Uganda", "Ugandan"]
    },
    "Ukraine": {
        "url": "https://en.wikipedia.org/wiki/Ukraine",
        "banned_words": ["Ukraine", "Ukrainian"]
    },
    "United Arab Emirates": {
        "url": "https://en.wikipedia.org/wiki/United_Arab_Emirates",
        "banned_words": ["United Arab Emirates", "UAE", "Emirati"]
    },
    "United Kingdom": {
        "url": "https://en.wikipedia.org/wiki/United_Kingdom",
        "banned_words": ["United Kingdom", "UK", "British"]
    },
    "United States": {
        "url": "https://en.wikipedia.org/wiki/United_States",
        "banned_words": ["United States", "USA", "American"]
    },
    "Uruguay": {
        "url": "https://en.wikipedia.org/wiki/Uruguay",
        "banned_words": ["Uruguay", "Uruguayan"]
    },
    "Uzbekistan": {
        "url": "https://en.wikipedia.org/wiki/Uzbekistan",
        "banned_words": ["Uzbekistan", "Uzbek"]
    },
    "Vanuatu": {
        "url": "https://en.wikipedia.org/wiki/Vanuatu",
        "banned_words": ["Vanuatu", "Ni-Vanuatu"]
    },
    "Vatican City": {
        "url": "https://en.wikipedia.org/wiki/Vatican_City",
        "banned_words": ["Vatican City", "Vatican", "Holy See"]
    },
    "Venezuela": {
        "url": "https://en.wikipedia.org/wiki/Venezuela",
        "banned_words": ["Venezuela", "Venezuelan"]
    },
    "Vietnam": {
        "url": "https://en.wikipedia.org/wiki/Vietnam",
        "banned_words": ["Vietnam", "Vietnamese"]
    },
    "Yemen": {
        "url": "https://en.wikipedia.org/wiki/Yemen",
        "banned_words": ["Yemen", "Yemeni"]
    },
    "Zambia": {
        "url": "https://en.wikipedia.org/wiki/Zambia",
        "banned_words": ["Zambia", "Zambian"]
    },
    "Zimbabwe": {
        "url": "https://en.wikipedia.org/wiki/Zimbabwe",
        "banned_words": ["Zimbabwe", "Zimbabwean"]
    }
}

    // get a random country name and url from the data variable
    const country = Object.keys(data)[Math.floor(Math.random() * Object.keys(data).length)];
    let url = data[country].url;

    onMount(async () => {
        const url_2 =`https://en.wikipedia.org/w/api.php?
            action=parse&
            page=${url.replace("https://en.wikipedia.org/wiki/", "")}&
            redirects=1&disableeditsection=true&
            format=json&origin=*&
            prop=text&
            useskin=vector`
        console.log(url_2)
        let resp = await (await fetch(url_2)).json()

        const censor_text = "█".repeat(country.length);

        const fake_html = document.createElement( 'html' );
        let html_string = JSON.stringify(resp.parse.text["*"])
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replaceAll("\\n", "")
            .replaceAll(`\\"`, `"`)
            .replaceAll("Republic of ", censor_text)

        data[country].banned_words.forEach(word => {
            html_string = html_string.replaceAll(word, censor_text)
        })

        fake_html.innerHTML = html_string;

        // fake_html.querySelectorAll("*").forEach(el => {
        //     if(el.innerHTML.includes(country)) {
        //         el.innerHTML = el.innerHTML.replaceAll(country, "<span>XXXXX</span>")
        //     }
        // })


        fake_html.querySelectorAll("img").forEach(img => {
            if(
                img.src.includes("█") || 
                img.srcset.includes("█") || 

                img.src.includes("orthographic") || 
                img.srcset.includes("orthographic") || 
                
                img.src.includes("flag") ||
                img.srcset.includes("flag")
            ) {
                // this image contains the name of the country, replace with the temp
                img.src='/illegal_image.png'
                img.srcset=''
                img.style.color="black"
            }

            ["A"]
        })

        fake_html.querySelectorAll("a").forEach(a => {
            if(a.innerText.includes(censor_text.slice(0,1))) {
                // this image contains the name of the country, replace with the temp
                a.style.color="black"
            }
        })

        fake_html.querySelectorAll("[role=note]").forEach(note => {
            note.parentElement.removeChild(note)
        })

        document.body.appendChild(fake_html)
        console.log(fake_html.getElementsByClassName("toc"))
    })

    console.log(country + " " + url)
</script>

<svelte:head>
    <link rel="stylesheet" href="https://en.wikipedia.org/w/load.php?lang=en&modules=codex-search-styles%7Cext.cite.styles%7Cext.discussionTools.init.styles%7Cext.echo.styles.badge%7Cext.pygments%2CwikimediaBadges%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cjquery.makeCollapsible.styles%7Cjquery.tablesorter.styles%7Cmediawiki.widgets.styles%7Coojs-ui-core.icons%2Cstyles%7Coojs-ui.styles.icons-alerts%2Cindicators%7Cskins.vector.styles.legacy%7Cwikibase.client.init&only=styles&skin=vector">
    <link rel="stylesheet" href="https://en.wikipedia.org/w/load.php?lang=en&modules=site.styles&only=styles&skin=vector">
</svelte:head>

<div class="WTRC_rootdiv">
    <b><code>wiki<u>toc</u></code></b> — Guess Countries based on their Wikipedia, but the name is censored
</div>

<hr/>

<style>
    .WTRC_rootdiv {
        padding: 1rem;
        overflow-y: hidden;
    }

    .WTRC_black {
        background-color: black;
    }
</style>

