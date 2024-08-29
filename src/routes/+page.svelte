<script>
  import { onMount } from "svelte";

    const data = {
    "Afghanistan": "https://en.wikipedia.org/wiki/Afghanistan",
    "Albania": "https://en.wikipedia.org/wiki/Albania",
    "Algeria": "https://en.wikipedia.org/wiki/Algeria",
    "Andorra": "https://en.wikipedia.org/wiki/Andorra",
    "Angola": "https://en.wikipedia.org/wiki/Angola",
    "Antigua and Barbuda": "https://en.wikipedia.org/wiki/Antigua_and_Barbuda",
    "Argentina": "https://en.wikipedia.org/wiki/Argentina",
    "Armenia": "https://en.wikipedia.org/wiki/Armenia",
    "Australia": "https://en.wikipedia.org/wiki/Australia",
    "Austria": "https://en.wikipedia.org/wiki/Austria",
    "Azerbaijan": "https://en.wikipedia.org/wiki/Azerbaijan",
    "Bahamas": "https://en.wikipedia.org/wiki/The_Bahamas",
    "Bahrain": "https://en.wikipedia.org/wiki/Bahrain",
    "Bangladesh": "https://en.wikipedia.org/wiki/Bangladesh",
    "Barbados": "https://en.wikipedia.org/wiki/Barbados",
    "Belarus": "https://en.wikipedia.org/wiki/Belarus",
    "Belgium": "https://en.wikipedia.org/wiki/Belgium",
    "Belize": "https://en.wikipedia.org/wiki/Belize",
    "Benin": "https://en.wikipedia.org/wiki/Benin",
    "Bhutan": "https://en.wikipedia.org/wiki/Bhutan",
    "Bolivia": "https://en.wikipedia.org/wiki/Bolivia",
    "Bosnia and Herzegovina": "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina",
    "Botswana": "https://en.wikipedia.org/wiki/Botswana",
    "Brazil": "https://en.wikipedia.org/wiki/Brazil",
    "Brunei": "https://en.wikipedia.org/wiki/Brunei",
    "Bulgaria": "https://en.wikipedia.org/wiki/Bulgaria",
    "Burkina Faso": "https://en.wikipedia.org/wiki/Burkina_Faso",
    "Burundi": "https://en.wikipedia.org/wiki/Burundi",
    "Cabo Verde": "https://en.wikipedia.org/wiki/Cape_Verde",
    "Cambodia": "https://en.wikipedia.org/wiki/Cambodia",
    "Cameroon": "https://en.wikipedia.org/wiki/Cameroon",
    "Canada": "https://en.wikipedia.org/wiki/Canada",
    "Central African Republic": "https://en.wikipedia.org/wiki/Central_African_Republic",
    "Chad": "https://en.wikipedia.org/wiki/Chad",
    "Chile": "https://en.wikipedia.org/wiki/Chile",
    "China": "https://en.wikipedia.org/wiki/China",
    "Colombia": "https://en.wikipedia.org/wiki/Colombia",
    "Comoros": "https://en.wikipedia.org/wiki/Comoros",
    "Congo": "https://en.wikipedia.org/wiki/Congo",
    "Democratic Republic of the Congo": "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
    "Costa Rica": "https://en.wikipedia.org/wiki/Costa_Rica",
    "Croatia": "https://en.wikipedia.org/wiki/Croatia",
    "Cuba": "https://en.wikipedia.org/wiki/Cuba",
    "Cyprus": "https://en.wikipedia.org/wiki/Cyprus",
    "Czech Republic": "https://en.wikipedia.org/wiki/Czech_Republic",
    "Denmark": "https://en.wikipedia.org/wiki/Denmark",
    "Djibouti": "https://en.wikipedia.org/wiki/Djibouti",
    "Dominica": "https://en.wikipedia.org/wiki/Dominica",
    "Dominican Republic": "https://en.wikipedia.org/wiki/Dominican_Republic",
    "East Timor": "https://en.wikipedia.org/wiki/East_Timor",
    "Ecuador": "https://en.wikipedia.org/wiki/Ecuador",
    "Egypt": "https://en.wikipedia.org/wiki/Egypt",
    "El Salvador": "https://en.wikipedia.org/wiki/El_Salvador",
    "Equatorial Guinea": "https://en.wikipedia.org/wiki/Equatorial_Guinea",
    "Eritrea": "https://en.wikipedia.org/wiki/Eritrea",
    "Estonia": "https://en.wikipedia.org/wiki/Estonia",
    "Eswatini": "https://en.wikipedia.org/wiki/Eswatini",
    "Ethiopia": "https://en.wikipedia.org/wiki/Ethiopia",
    "Fiji": "https://en.wikipedia.org/wiki/Fiji",
    "Finland": "https://en.wikipedia.org/wiki/Finland",
    "France": "https://en.wikipedia.org/wiki/France",
    "Gabon": "https://en.wikipedia.org/wiki/Gabon",
    "Gambia": "https://en.wikipedia.org/wiki/The_Gambia",
    "Georgia": "https://en.wikipedia.org/wiki/Georgia",
    "Germany": "https://en.wikipedia.org/wiki/Germany",
    "Ghana": "https://en.wikipedia.org/wiki/Ghana",
    "Greece": "https://en.wikipedia.org/wiki/Greece",
    "Grenada": "https://en.wikipedia.org/wiki/Grenada",
    "Guatemala": "https://en.wikipedia.org/wiki/Guatemala",
    "Guinea": "https://en.wikipedia.org/wiki/Guinea",
    "Guinea-Bissau": "https://en.wikipedia.org/wiki/Guinea-Bissau",
    "Guyana": "https://en.wikipedia.org/wiki/Guyana",
    "Haiti": "https://en.wikipedia.org/wiki/Haiti",
    "Honduras": "https://en.wikipedia.org/wiki/Honduras",
    "Hungary": "https://en.wikipedia.org/wiki/Hungary",
    "Iceland": "https://en.wikipedia.org/wiki/Iceland",
    "India": "https://en.wikipedia.org/wiki/India",
    "Indonesia": "https://en.wikipedia.org/wiki/Indonesia",
    "Iran": "https://en.wikipedia.org/wiki/Iran",
    "Iraq": "https://en.wikipedia.org/wiki/Iraq",
    "Ireland": "https://en.wikipedia.org/wiki/Ireland",
    "Israel": "https://en.wikipedia.org/wiki/Israel",
    "Italy": "https://en.wikipedia.org/wiki/Italy",
    "Jamaica": "https://en.wikipedia.org/wiki/Jamaica",
    "Japan": "https://en.wikipedia.org/wiki/Japan",
    "Jordan": "https://en.wikipedia.org/wiki/Jordan",
    "Kazakhstan": "https://en.wikipedia.org/wiki/Kazakhstan",
    "Kenya": "https://en.wikipedia.org/wiki/Kenya",
    "Kiribati": "https://en.wikipedia.org/wiki/Kiribati",
    "North Korea": "https://en.wikipedia.org/wiki/North_Korea",
    "South Korea": "https://en.wikipedia.org/wiki/South_Korea",
    "Kosovo": "https://en.wikipedia.org/wiki/Kosovo",
    "Kuwait": "https://en.wikipedia.org/wiki/Kuwait",
    "Kyrgyzstan": "https://en.wikipedia.org/wiki/Kyrgyzstan",
    "Laos": "https://en.wikipedia.org/wiki/Laos",
    "Latvia": "https://en.wikipedia.org/wiki/Latvia",
    "Lebanon": "https://en.wikipedia.org/wiki/Lebanon",
    "Lesotho": "https://en.wikipedia.org/wiki/Lesotho",
    "Liberia": "https://en.wikipedia.org/wiki/Liberia",
    "Libya": "https://en.wikipedia.org/wiki/Libya",
    "Liechtenstein": "https://en.wikipedia.org/wiki/Liechtenstein",
    "Lithuania": "https://en.wikipedia.org/wiki/Lithuania",
    "Luxembourg": "https://en.wikipedia.org/wiki/Luxembourg",
    "Madagascar": "https://en.wikipedia.org/wiki/Madagascar",
    "Malawi": "https://en.wikipedia.org/wiki/Malawi",
    "Malaysia": "https://en.wikipedia.org/wiki/Malaysia",
    "Maldives": "https://en.wikipedia.org/wiki/Maldives",
    "Mali": "https://en.wikipedia.org/wiki/Mali",
    "Malta": "https://en.wikipedia.org/wiki/Malta",
    "Marshall Islands": "https://en.wikipedia.org/wiki/Marshall_Islands",
    "Mauritania": "https://en.wikipedia.org/wiki/Mauritania",
    "Mauritius": "https://en.wikipedia.org/wiki/Mauritius",
    "Mexico": "https://en.wikipedia.org/wiki/Mexico",
    "Micronesia": "https://en.wikipedia.org/wiki/Micronesia",
    "Moldova": "https://en.wikipedia.org/wiki/Moldova",
    "Monaco": "https://en.wikipedia.org/wiki/Monaco",
    "Mongolia": "https://en.wikipedia.org/wiki/Mongolia",
    "Montenegro": "https://en.wikipedia.org/wiki/Montenegro",
    "Morocco": "https://en.wikipedia.org/wiki/Morocco",
    "Mozambique": "https://en.wikipedia.org/wiki/Mozambique",
    "Myanmar": "https://en.wikipedia.org/wiki/Myanmar",
    "Namibia": "https://en.wikipedia.org/wiki/Namibia",
    "Nauru": "https://en.wikipedia.org/wiki/Nauru",
    "Nepal": "https://en.wikipedia.org/wiki/Nepal",
    "Netherlands": "https://en.wikipedia.org/wiki/Netherlands",
    "New Zealand": "https://en.wikipedia.org/wiki/New_Zealand",
    "Nicaragua": "https://en.wikipedia.org/wiki/Nicaragua",
    "Niger": "https://en.wikipedia.org/wiki/Niger",
    "Nigeria": "https://en.wikipedia.org/wiki/Nigeria",
    "North Macedonia": "https://en.wikipedia.org/wiki/North_Macedonia",
    "Norway": "https://en.wikipedia.org/wiki/Norway",
    "Oman": "https://en.wikipedia.org/wiki/Oman",
    "Pakistan": "https://en.wikipedia.org/wiki/Pakistan",
    "Palau": "https://en.wikipedia.org/wiki/Palau",
    "Palestine": "https://en.wikipedia.org/wiki/State_of_Palestine",
    "Panama": "https://en.wikipedia.org/wiki/Panama",
    "Papua New Guinea": "https://en.wikipedia.org/wiki/Papua_New_Guinea",
    "Paraguay": "https://en.wikipedia.org/wiki/Paraguay",
    "Peru": "https://en.wikipedia.org/wiki/Peru",
    "Philippines": "https://en.wikipedia.org/wiki/Philippines",
    "Poland": "https://en.wikipedia.org/wiki/Poland",
    "Portugal": "https://en.wikipedia.org/wiki/Portugal",
    "Qatar": "https://en.wikipedia.org/wiki/Qatar",
    "Romania": "https://en.wikipedia.org/wiki/Romania",
    "Russia": "https://en.wikipedia.org/wiki/Russia",
    "Rwanda": "https://en.wikipedia.org/wiki/Rwanda",
    "Saint Kitts and Nevis": "https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis",
    "Saint Lucia": "https://en.wikipedia.org/wiki/Saint_Lucia",
    "Saint Vincent and the Grenadines": "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines",
    "Samoa": "https://en.wikipedia.org/wiki/Samoa",
    "San Marino": "https://en.wikipedia.org/wiki/San_Marino",
    "Sao Tome and Principe": "https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe",
    "Saudi Arabia": "https://en.wikipedia.org/wiki/Saudi_Arabia",
    "Senegal": "https://en.wikipedia.org/wiki/Senegal",
    "Serbia": "https://en.wikipedia.org/wiki/Serbia",
    "Seychelles": "https://en.wikipedia.org/wiki/Seychelles",
    "Sierra Leone": "https://en.wikipedia.org/wiki/Sierra_Leone",
    "Singapore": "https://en.wikipedia.org/wiki/Singapore",
    "Slovakia": "https://en.wikipedia.org/wiki/Slovakia",
    "Slovenia": "https://en.wikipedia.org/wiki/Slovenia",
    "Solomon Islands": "https://en.wikipedia.org/wiki/Solomon_Islands",
    "Somalia": "https://en.wikipedia.org/wiki/Somalia",
    "South Africa": "https://en.wikipedia.org/wiki/South_Africa",
    "South Sudan": "https://en.wikipedia.org/wiki/South_Sudan",
    "Spain": "https://en.wikipedia.org/wiki/Spain",
    "Sri Lanka": "https://en.wikipedia.org/wiki/Sri_Lanka",
    "Sudan": "https://en.wikipedia.org/wiki/Sudan",
    "Suriname": "https://en.wikipedia.org/wiki/Suriname",
    "Sweden": "https://en.wikipedia.org/wiki/Sweden",
    "Switzerland": "https://en.wikipedia.org/wiki/Switzerland",
    "Syria": "https://en.wikipedia.org/wiki/Syria",
    "Taiwan": "https://en.wikipedia.org/wiki/Taiwan",
    "Tajikistan": "https://en.wikipedia.org/wiki/Tajikistan",
    "Tanzania": "https://en.wikipedia.org/wiki/Tanzania",
    "Thailand": "https://en.wikipedia.org/wiki/Thailand",
    "Togo": "https://en.wikipedia.org/wiki/Togo",
    "Tonga": "https://en.wikipedia.org/wiki/Tonga",
    "Trinidad and Tobago": "https://en.wikipedia.org/wiki/Trinidad_and_Tobago",
    "Tunisia": "https://en.wikipedia.org/wiki/Tunisia",
    "Turkey": "https://en.wikipedia.org/wiki/Turkey",
    "Turkmenistan": "https://en.wikipedia.org/wiki/Turkmenistan",
    "Tuvalu": "https://en.wikipedia.org/wiki/Tuvalu",
    "Uganda": "https://en.wikipedia.org/wiki/Uganda",
    "Ukraine": "https://en.wikipedia.org/wiki/Ukraine",
    "United Arab Emirates": "https://en.wikipedia.org/wiki/United_Arab_Emirates",
    "United Kingdom": "https://en.wikipedia.org/wiki/United_Kingdom",
    "United States": "https://en.wikipedia.org/wiki/United_States",
    "Uruguay": "https://en.wikipedia.org/wiki/Uruguay",
    "Uzbekistan": "https://en.wikipedia.org/wiki/Uzbekistan",
    "Vanuatu": "https://en.wikipedia.org/wiki/Vanuatu",
    "Vatican City": "https://en.wikipedia.org/wiki/Vatican_City",
    "Venezuela": "https://en.wikipedia.org/wiki/Venezuela",
    "Vietnam": "https://en.wikipedia.org/wiki/Vietnam",
    "Yemen": "https://en.wikipedia.org/wiki/Yemen",
    "Zambia": "https://en.wikipedia.org/wiki/Zambia",
    "Zimbabwe": "https://en.wikipedia.org/wiki/Zimbabwe"
}

    // get a random country name and url from the data variable
    const country = Object.keys(data)[Math.floor(Math.random() * Object.keys(data).length)];
    let url = data[country];

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
        fake_html.innerHTML = JSON.stringify(resp.parse.text["*"])
            .replaceAll("\\n", "")
            .replaceAll(`\\"`, `"`)
            .replaceAll(country,censor_text);

        // fake_html.querySelectorAll("*").forEach(el => {
        //     if(el.innerHTML.includes(country)) {
        //         el.innerHTML = el.innerHTML.replaceAll(country, "<span>XXXXX</span>")
        //     }
        // })


        fake_html.querySelectorAll("img").forEach(img => {
            if(img.src.includes(censor_text.slice(0,1))) {
                // this image contains the name of the country, replace with the temp
                img.src='/illegal_image.png'
                img.srcset=''
            }
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
    <b><code>wiki<u>toc</u></code></b> — Guess Countries based on their Wikipedia Table Of Contents
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

