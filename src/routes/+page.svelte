<script>
  import { onMount } from "svelte";

    // import CategoryButton from '$lib/CategoryButton.svelte';
    // import StartGame from '../lib/StartGame.svelte';
    // import { onDestroy, onMount } from 'svelte';
    // import { SeedStore } from '../stores.js';

    // let seed;
    // let friendSeed = '';

    // // Subscribe to SeedStore to get the current seed value
    // const unsubscribe = SeedStore.subscribe(value => {
    //     seed = value;
    // });

    // onDestroy(() => {
    //     unsubscribe();
    // });

    // onMount(() => {
    //     // Generate a new seed if the current one is null
    //     if (seed === null) {
    //         const ns = "xxxxx".split('').map(() => Math.floor(Math.random() * 10));
    //         SeedStore.set(ns.join(''));
    //     }
    // });

    // // Update the seed in the store if the friendSeed input is changed
    // function updateSeed() {
    //     SeedStore.set(friendSeed);
    // }
    const data = {
    "Afghanistan": "https://en.wikipedia.org/wiki/History_of_Afghanistan",
    "Albania": "https://en.wikipedia.org/wiki/History_of_Albania",
    "Algeria": "https://en.wikipedia.org/wiki/History_of_Algeria",
    "Andorra": "https://en.wikipedia.org/wiki/History_of_Andorra",
    "Angola": "https://en.wikipedia.org/wiki/History_of_Angola",
    "Antigua and Barbuda": "https://en.wikipedia.org/wiki/History_of_Antigua_and_Barbuda",
    "Argentina": "https://en.wikipedia.org/wiki/History_of_Argentina",
    "Armenia": "https://en.wikipedia.org/wiki/History_of_Armenia",
    "Australia": "https://en.wikipedia.org/wiki/History_of_Australia",
    "Austria": "https://en.wikipedia.org/wiki/History_of_Austria",
    "Azerbaijan": "https://en.wikipedia.org/wiki/History_of_Azerbaijan",
    "Bahamas": "https://en.wikipedia.org/wiki/History_of_the_Bahamas",
    "Bahrain": "https://en.wikipedia.org/wiki/History_of_Bahrain",
    "Bangladesh": "https://en.wikipedia.org/wiki/History_of_Bangladesh",
    "Barbados": "https://en.wikipedia.org/wiki/History_of_Barbados",
    "Belarus": "https://en.wikipedia.org/wiki/History_of_Belarus",
    "Belgium": "https://en.wikipedia.org/wiki/History_of_Belgium",
    "Belize": "https://en.wikipedia.org/wiki/History_of_Belize",
    "Benin": "https://en.wikipedia.org/wiki/History_of_Benin",
    "Bhutan": "https://en.wikipedia.org/wiki/History_of_Bhutan",
    "Bolivia": "https://en.wikipedia.org/wiki/History_of_Bolivia",
    "Bosnia and Herzegovina": "https://en.wikipedia.org/wiki/History_of_Bosnia_and_Herzegovina",
    "Botswana": "https://en.wikipedia.org/wiki/History_of_Botswana",
    "Brazil": "https://en.wikipedia.org/wiki/History_of_Brazil",
    "Brunei": "https://en.wikipedia.org/wiki/History_of_Brunei",
    "Bulgaria": "https://en.wikipedia.org/wiki/History_of_Bulgaria",
    "Burkina Faso": "https://en.wikipedia.org/wiki/History_of_Burkina_Faso",
    "Burundi": "https://en.wikipedia.org/wiki/History_of_Burundi",
    "Cabo Verde": "Page not found",
    "Cambodia": "https://en.wikipedia.org/wiki/History_of_Cambodia",
    "Cameroon": "https://en.wikipedia.org/wiki/History_of_Cameroon",
    "Canada": "https://en.wikipedia.org/wiki/History_of_Canada",
    "Central African Republic": "https://en.wikipedia.org/wiki/History_of_the_Central_African_Republic",
    "Chad": "https://en.wikipedia.org/wiki/History_of_Chad",
    "Chile": "https://en.wikipedia.org/wiki/History_of_Chile",
    "China": "https://en.wikipedia.org/wiki/History_of_China",
    "Colombia": "https://en.wikipedia.org/wiki/History_of_Colombia",
    "Comoros": "https://en.wikipedia.org/wiki/History_of_the_Comoros",
    "Congo": "https://en.wikipedia.org/wiki/History_of_the_Congo",
    "Congo, Democratic Republic of the": "Page not found",
    "Costa Rica": "https://en.wikipedia.org/wiki/History_of_Costa_Rica",
    "Croatia": "https://en.wikipedia.org/wiki/History_of_Croatia",
    "Cuba": "https://en.wikipedia.org/wiki/History_of_Cuba",
    "Cyprus": "https://en.wikipedia.org/wiki/History_of_Cyprus",
    "Czech Republic": "https://en.wikipedia.org/wiki/History_of_the_Czech_lands",
    "Denmark": "https://en.wikipedia.org/wiki/History_of_Denmark",
    "Djibouti": "https://en.wikipedia.org/wiki/History_of_Djibouti",
    "Dominica": "https://en.wikipedia.org/wiki/History_of_Dominica",
    "Dominican Republic": "https://en.wikipedia.org/wiki/History_of_the_Dominican_Republic",
    "East Timor": "https://en.wikipedia.org/wiki/History_of_East_Timor",
    "Ecuador": "https://en.wikipedia.org/wiki/History_of_Ecuador",
    "Egypt": "https://en.wikipedia.org/wiki/History_of_Egypt",
    "El Salvador": "https://en.wikipedia.org/wiki/History_of_El_Salvador",
    "Equatorial Guinea": "https://en.wikipedia.org/wiki/History_of_Equatorial_Guinea",
    "Eritrea": "https://en.wikipedia.org/wiki/History_of_Eritrea",
    "Estonia": "https://en.wikipedia.org/wiki/History_of_Estonia",
    "Eswatini": "https://en.wikipedia.org/wiki/History_of_Eswatini",
    "Ethiopia": "https://en.wikipedia.org/wiki/History_of_Ethiopia",
    "Fiji": "https://en.wikipedia.org/wiki/History_of_Fiji",
    "Finland": "https://en.wikipedia.org/wiki/History_of_Finland",
    "France": "https://en.wikipedia.org/wiki/History_of_France",
    "Gabon": "https://en.wikipedia.org/wiki/History_of_Gabon",
    "Gambia": "https://en.wikipedia.org/wiki/History_of_the_Gambia",
    "Georgia": "https://en.wikipedia.org/wiki/History_of_Georgia",
    "Germany": "https://en.wikipedia.org/wiki/History_of_Germany",
    "Ghana": "https://en.wikipedia.org/wiki/History_of_Ghana",
    "Greece": "https://en.wikipedia.org/wiki/History_of_Greece",
    "Grenada": "https://en.wikipedia.org/wiki/History_of_Grenada",
    "Guatemala": "https://en.wikipedia.org/wiki/History_of_Guatemala",
    "Guinea": "https://en.wikipedia.org/wiki/History_of_Guinea",
    "Guinea-Bissau": "https://en.wikipedia.org/wiki/History_of_Guinea-Bissau",
    "Guyana": "https://en.wikipedia.org/wiki/History_of_Guyana",
    "Haiti": "https://en.wikipedia.org/wiki/History_of_Haiti",
    "Honduras": "https://en.wikipedia.org/wiki/History_of_Honduras",
    "Hungary": "https://en.wikipedia.org/wiki/History_of_Hungary",
    "Iceland": "https://en.wikipedia.org/wiki/History_of_Iceland",
    "India": "https://en.wikipedia.org/wiki/History_of_India",
    "Indonesia": "https://en.wikipedia.org/wiki/History_of_Indonesia",
    "Iran": "https://en.wikipedia.org/wiki/History_of_Iran",
    "Iraq": "https://en.wikipedia.org/wiki/History_of_Iraq",
    "Ireland": "https://en.wikipedia.org/wiki/History_of_Ireland",
    "Israel": "https://en.wikipedia.org/wiki/History_of_Israel",
    "Italy": "https://en.wikipedia.org/wiki/History_of_Italy",
    "Jamaica": "https://en.wikipedia.org/wiki/History_of_Jamaica",
    "Japan": "https://en.wikipedia.org/wiki/History_of_Japan",
    "Jordan": "https://en.wikipedia.org/wiki/History_of_Jordan",
    "Kazakhstan": "https://en.wikipedia.org/wiki/History_of_Kazakhstan",
    "Kenya": "https://en.wikipedia.org/wiki/History_of_Kenya",
    "Kiribati": "https://en.wikipedia.org/wiki/History_of_Kiribati",
    "Korea, North": "Page not found",
    "Korea, South": "Page not found",
    "Kosovo": "https://en.wikipedia.org/wiki/History_of_Kosovo",
    "Kuwait": "https://en.wikipedia.org/wiki/History_of_Kuwait",
    "Kyrgyzstan": "https://en.wikipedia.org/wiki/History_of_Kyrgyzstan",
    "Laos": "https://en.wikipedia.org/wiki/History_of_Laos",
    "Latvia": "https://en.wikipedia.org/wiki/History_of_Latvia",
    "Lebanon": "https://en.wikipedia.org/wiki/History_of_Lebanon",
    "Lesotho": "https://en.wikipedia.org/wiki/History_of_Lesotho",
    "Liberia": "https://en.wikipedia.org/wiki/History_of_Liberia",
    "Libya": "https://en.wikipedia.org/wiki/History_of_Libya",
    "Liechtenstein": "https://en.wikipedia.org/wiki/History_of_Liechtenstein",
    "Lithuania": "https://en.wikipedia.org/wiki/History_of_Lithuania",
    "Luxembourg": "https://en.wikipedia.org/wiki/History_of_Luxembourg",
    "Madagascar": "https://en.wikipedia.org/wiki/History_of_Madagascar",
    "Malawi": "https://en.wikipedia.org/wiki/History_of_Malawi",
    "Malaysia": "https://en.wikipedia.org/wiki/History_of_Malaysia",
    "Maldives": "https://en.wikipedia.org/wiki/History_of_the_Maldives",
    "Mali": "https://en.wikipedia.org/wiki/History_of_Mali",
    "Malta": "https://en.wikipedia.org/wiki/History_of_Malta",
    "Marshall Islands": "https://en.wikipedia.org/wiki/History_of_the_Marshall_Islands",
    "Mauritania": "https://en.wikipedia.org/wiki/History_of_Mauritania",
    "Mauritius": "https://en.wikipedia.org/wiki/History_of_Mauritius",
    "Mexico": "https://en.wikipedia.org/wiki/History_of_Mexico",
    "Micronesia": "https://en.wikipedia.org/wiki/Micronesia",
    "Moldova": "https://en.wikipedia.org/wiki/History_of_Moldova",
    "Monaco": "https://en.wikipedia.org/wiki/History_of_Monaco",
    "Mongolia": "https://en.wikipedia.org/wiki/History_of_Mongolia",
    "Montenegro": "https://en.wikipedia.org/wiki/History_of_Montenegro",
    "Morocco": "https://en.wikipedia.org/wiki/History_of_Morocco",
    "Mozambique": "https://en.wikipedia.org/wiki/History_of_Mozambique",
    "Myanmar": "https://en.wikipedia.org/wiki/History_of_Myanmar",
    "Namibia": "https://en.wikipedia.org/wiki/History_of_Namibia",
    "Nauru": "https://en.wikipedia.org/wiki/History_of_Nauru",
    "Nepal": "https://en.wikipedia.org/wiki/History_of_Nepal",
    "Netherlands": "https://en.wikipedia.org/wiki/History_of_the_Netherlands",
    "New Zealand": "https://en.wikipedia.org/wiki/History_of_New_Zealand",
    "Nicaragua": "https://en.wikipedia.org/wiki/History_of_Nicaragua",
    "Niger": "https://en.wikipedia.org/wiki/History_of_Niger",
    "Nigeria": "https://en.wikipedia.org/wiki/History_of_Nigeria",
    "North Macedonia": "https://en.wikipedia.org/wiki/History_of_North_Macedonia",
    "Norway": "https://en.wikipedia.org/wiki/History_of_Norway",
    "Oman": "https://en.wikipedia.org/wiki/History_of_Oman",
    "Pakistan": "https://en.wikipedia.org/wiki/History_of_Pakistan",
    "Palau": "https://en.wikipedia.org/wiki/History_of_Palau",
    "Palestine": "https://en.wikipedia.org/wiki/History_of_Palestine",
    "Panama": "https://en.wikipedia.org/wiki/History_of_Panama",
    "Papua New Guinea": "https://en.wikipedia.org/wiki/History_of_Papua_New_Guinea",
    "Paraguay": "https://en.wikipedia.org/wiki/History_of_Paraguay",
    "Peru": "https://en.wikipedia.org/wiki/History_of_Peru",
    "Philippines": "https://en.wikipedia.org/wiki/History_of_the_Philippines",
    "Poland": "https://en.wikipedia.org/wiki/History_of_Poland",
    "Portugal": "https://en.wikipedia.org/wiki/History_of_Portugal",
    "Qatar": "https://en.wikipedia.org/wiki/History_of_Qatar",
    "Romania": "https://en.wikipedia.org/wiki/History_of_Romania",
    "Russia": "https://en.wikipedia.org/wiki/History_of_Russia",
    "Rwanda": "https://en.wikipedia.org/wiki/History_of_Rwanda",
    "Saint Kitts and Nevis": "https://en.wikipedia.org/wiki/History_of_Saint_Kitts_and_Nevis",
    "Saint Lucia": "https://en.wikipedia.org/wiki/History_of_Saint_Lucia",
    "Saint Vincent and the Grenadines": "https://en.wikipedia.org/wiki/History_of_Saint_Vincent_and_the_Grenadines",
    "Samoa": "https://en.wikipedia.org/wiki/History_of_Samoa",
    "San Marino": "https://en.wikipedia.org/wiki/History_of_San_Marino",
    "Sao Tome and Principe": "https://en.wikipedia.org/wiki/History_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe",
    "Saudi Arabia": "https://en.wikipedia.org/wiki/History_of_Saudi_Arabia",
    "Senegal": "https://en.wikipedia.org/wiki/History_of_Senegal",
    "Serbia": "https://en.wikipedia.org/wiki/History_of_Serbia",
    "Seychelles": "https://en.wikipedia.org/wiki/History_of_Seychelles",
    "Sierra Leone": "https://en.wikipedia.org/wiki/History_of_Sierra_Leone",
    "Singapore": "https://en.wikipedia.org/wiki/History_of_Singapore",
    "Slovakia": "https://en.wikipedia.org/wiki/History_of_Slovakia",
    "Slovenia": "https://en.wikipedia.org/wiki/History_of_Slovenia",
    "Solomon Islands": "https://en.wikipedia.org/wiki/History_of_Solomon_Islands",
    "Somalia": "https://en.wikipedia.org/wiki/History_of_Somalia",
    "South Africa": "https://en.wikipedia.org/wiki/History_of_South_Africa",
    "South Sudan": "https://en.wikipedia.org/wiki/History_of_South_Sudan",
    "Spain": "https://en.wikipedia.org/wiki/History_of_Spain",
    "Sri Lanka": "https://en.wikipedia.org/wiki/History_of_Sri_Lanka",
    "Sudan": "https://en.wikipedia.org/wiki/History_of_Sudan",
    "Suriname": "https://en.wikipedia.org/wiki/History_of_Suriname",
    "Sweden": "https://en.wikipedia.org/wiki/History_of_Sweden",
    "Switzerland": "https://en.wikipedia.org/wiki/History_of_Switzerland",
    "Syria": "https://en.wikipedia.org/wiki/History_of_Syria",
    "Taiwan": "https://en.wikipedia.org/wiki/History_of_Taiwan",
    "Tajikistan": "https://en.wikipedia.org/wiki/History_of_Tajikistan",
    "Tanzania": "https://en.wikipedia.org/wiki/History_of_Tanzania",
    "Thailand": "https://en.wikipedia.org/wiki/History_of_Thailand",
    "Togo": "https://en.wikipedia.org/wiki/History_of_Togo",
    "Tonga": "https://en.wikipedia.org/wiki/History_of_Tonga",
    "Trinidad and Tobago": "https://en.wikipedia.org/wiki/History_of_Trinidad_and_Tobago",
    "Tunisia": "https://en.wikipedia.org/wiki/History_of_Tunisia",
    "Turkey": "https://en.wikipedia.org/wiki/History_of_Turkey",
    "Turkmenistan": "https://en.wikipedia.org/wiki/History_of_Turkmenistan",
    "Tuvalu": "https://en.wikipedia.org/wiki/History_of_Tuvalu",
    "Uganda": "https://en.wikipedia.org/wiki/History_of_Uganda",
    "Ukraine": "https://en.wikipedia.org/wiki/History_of_Ukraine",
    "United Arab Emirates": "https://en.wikipedia.org/wiki/History_of_the_United_Arab_Emirates",
    "United Kingdom": "https://en.wikipedia.org/wiki/History_of_the_United_Kingdom",
    "United States": "https://en.wikipedia.org/wiki/History_of_the_United_States",
    "Uruguay": "https://en.wikipedia.org/wiki/History_of_Uruguay",
    "Uzbekistan": "https://en.wikipedia.org/wiki/History_of_Uzbekistan",
    "Vanuatu": "https://en.wikipedia.org/wiki/History_of_Vanuatu",
    "Vatican City": "https://en.wikipedia.org/wiki/Vatican_City",
    "Venezuela": "https://en.wikipedia.org/wiki/History_of_Venezuela",
    "Vietnam": "https://en.wikipedia.org/wiki/History_of_Vietnam",
    "Yemen": "https://en.wikipedia.org/wiki/History_of_Yemen",
    "Zambia": "https://en.wikipedia.org/wiki/History_of_Zambia",
    "Zimbabwe": "https://en.wikipedia.org/wiki/History_of_Zimbabwe"
}

    // get a random country name and url from the data variable
    const country = Object.keys(data)[Math.floor(Math.random() * Object.keys(data).length)];
    let url = data[country];

    onMount(async () => {
        let resp = await fetch(url)
    })

    console.log(country + " " + url)
</script>

<div>
    <b><code>wiki<u>toc</u></code></b> — Guess Countries based on their Wikipedia Table Of Contents
</div>

<hr/>



