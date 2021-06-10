(() => {


const countDownDate = new Date(1625148000000).getTime();
const countDowninterval = setInterval(function() {
const now = new Date().getTime();
let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countDowninterval);
    document.getElementById("countdown").innerHTML = "FESTIVAL IS LIVE!";
  }
},1000);

    let app = {
        group1: {
            artist: {
                naam: "Pearl Jam",
                synopsis: "Uitstel is geen afstel. Pearl Jam en Rock Werchter zijn voor mekaar gemaakt. Elke passage van de Amerikanen is nog beter. Pearl Jam toert in juni en juli 2021 kort door Europa. Amper 15 concerten staan op de planning. ",
                social: {
                    website: "https://pearljam.com/",
                    facebook: "facebook.com/pearljam",
                    twitter: "twitter.com/pearljam",
                    instagram: "instagram.com/pearljam",
                },
                picture: {
                    small: "https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a9355c4015.jpg" ,
                    large: "https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a9355c4015.jpg",
                },
                media:  {
                    type: "video",
                    sourceID: "https://www.youtube.com/embed/qM0zINtulhM",
                }
            },
            place: {
                naam: "Main Stage",
            },
            from: "Donderdag",
            to: "1604631273479",
            createdAt: "1604631273479",
            modifiedAt: "1604631273479",
            isHeadliner: true,
        },
        
        group2: {
            artist: {
                naam: "Alt-J",
                synopsis: "Tik Alt en J in op een toetsenbord van Apple en je krijgt Δ, de Griekse letter delta. Dat teken gebruikt men in de wiskunde en de fysica om de veranderingen van grootheden aan te geven. Met een lichte vrijheid kan je zeggen dat alt-J iets gelijkaardigs doet met de popgeschiedenis. Het Britse trio verzamelt de topmomenten van de afgelopen 60 jaar en zet die om in een eigen universum. Het is daarin even bedreven en vindingrijk als Sigur Rós of The xx. In Werchter komt hun sprookjesachtige wereld duidelijk goed tot haar recht. Dit schreef Humo na hun eerste doortocht in 2013: ‘Hoeveel tergende schoonheid kan een mens aan, en hoeveel suikerige ontroering? In The Barn veranderde alt-J uw leven.’ En dit zag Moustique in 2015: ‘alt_J rentre dans la cour des grands.’ Sinds hun laatste doortocht in 2017 is het veelbelovend stil rond alt-J…",
                social: {
                    website: "https://www.altjband.com/ ",
                    facebook: "facebook.com/altJ.band ",
                    twitter: "twitter.com/alt_J ",
                    instagram: "instagram.com/unrealalt ",
                },
                picture: {
                    small: "https://assets.rockwerchter.be/files/cache/medium/files/alt-j-5f030ee72f4ba.jpg" ,
                    large: "https://assets.rockwerchter.be/files/cache/medium/files/alt-j-5f030ee72f4ba.jpg",
                },
                media:  {
                    type: "video",
                    sourceID: "https://www.youtube.com/embed/GOJUNJ1o394",
                }
            },
            place: {
                naam: "Klub C",
            },
            from: "Donderdag",
            to: "1604631273479",
            createdAt: "1604631273479",
            modifiedAt: "1604631273479",
            isHeadliner: false,
        },
        
        group3: {
            artist: {
                naam: "Black Pumas",
                synopsis: "Alsof soulzanger Sam Cooke en oerrocker Neil Young lid geworden zijn van hiphopcollectief Wu-Tang Clan. Dat is een ruwe schets van Black Pumas, het project van een bijzonder duo uit de Texaanse hoofdstad Austin. Adrian Quesada is een veertiger die vroeger gitaar speelde bij Grupo Fantasma. Die negenkoppige bende wint in 2010 een Grammy Award voor Best Latin Album. Quesada had in zijn studio enkele instrumentale stukken liggen waar hij een soulstem voor zocht. Vrienden raadden hem Eric Burton aan, een busker die in downtown Austin speelde. Bingo! Het debuut van Black Pumas is zo goed als feilloos. De psychedelische soul bombardeerde de twee in de VS tot ‘breakout band of 2019’. Prima spul alleszins voor wie de voorbije jaren in Werchter genoten heeft van Alabama Shakes, Durand Jones & The Indications of Curtis Harding.",
                social: {
                    website: "https://www.theblackpumas.com/ ",
                    facebook: "facebook.com/theblackpumas ",
                    twitter: "twitter.com/blackpumasmusic ",
                    instagram: "",
                },
                picture: {
                    small: "https://assets.rockwerchter.be/files/cache/medium/files/black-pumas-5f030ee9dc31d.jpg" ,
                    large: "https://assets.rockwerchter.be/files/cache/medium/files/black-pumas-5f030ee9dc31d.jpg",
                },
                media:  {
                    type: "video",
                    sourceID: "https://www.youtube.com/embed/2EntxPIULUI", 
                }
            },
            place: {
                naam: "Klub C",
            },
            from: "Donderdag",
            to: "1604631273479",
            createdAt: "1604631273479",
            modifiedAt: "1604631273479",
            isHeadliner: false,
        },
    
        group4: {
            artist: {
                naam: "Gorillaz",
                synopsis: "Iedereen was het er in 2018 over eens na het concert van Gorillaz in Werchter. Het geesteskind van stripmaker Jamie Hewlett en Damon Albarn van Blur is een van de strafste live-acts ooit. Een greep uit de krantenkoppen: ‘Zoveel grandeur’. ‘Een aanstekelijke apekermis’. ‘Swingend naar een betere wereld’. Albarn kondigde kort nadien aan dat er de komende 10 jaar niet teveel moest verwacht worden. En kijk: in januari van dit jaar presenteren ze het muziekconcept ‘Song machine’. En volgend jaar gaat de eerste virtuele groep uit de geschiedenis weer op reis. Gorillaz brengt vanaf nu muziek uit in afleveringen. Die worden gelost van zodra er nieuw materiaal is. Elke episode heeft een andere gast. De lijst is heel uiteenlopend. Zo deden in 2020 slowthai, Fatoumata Diaware, Peter Hook (New Order), Georgia en Octavian al mee.",
                social: {
                    website: "https://www.gorillaz.com/ ",
                    facebook: "facebook.com/Gorillaz ",
                    twitter: "twitter.com/gorillaz ",
                    instagram: "instagram.com/gorillaz ",
                },
                picture: {
                    small: "https://assets.rockwerchter.be/files/cache/medium/files/gorillaz-5f030ee8605de.jpg" ,
                    large: "https://assets.rockwerchter.be/files/cache/medium/files/gorillaz-5f030ee8605de.jpg",
                },
                media:  {
                    type: "video",
                    sourceID: "https://www.youtube.com/embed/O1ALIgizTcc",
                }
            },
            place: {
                naam: "Klub C",
            },
            from: "Vrijdag",
            to: "1604631273479",
            createdAt: "1604631273479",
            modifiedAt: "1604631273479",
            isHeadliner: false,
        },
        
        group5: {
            artist: {
                naam: "Girl In Red",
                synopsis: "Marie Ulven Ringheim beseft in september 2017 dat ze stapelverliefd is op haar beste vriendin. Ze ziet haar in de verte op een concert en stuurt het sms-bericht ‘girl in red’. Er komt uiteindelijk niets van. Maar dat moment van opwinding en verlangen stuurt vanaf dan heel sterk haar muziek, zegt de Noorse twintiger. Ze had meteen ook een naam voor de liedjes die ze in haar slaapkamer maakt op de gitaar die ze als tiener als kerstcadeau kreeg van haar grootvader. Haar eerste single ‘I Wanna Be Your Girlfriend’ wordt bij de beste liedjes van 2018 gerekend. Hij vertaalt de verzuchtingen van veel van haar leeftijdsgenoten en maakt van Ringheim een baken binnen de LGBT-gemeenschap. Dat lijkt misschien gewichtig maar haar liedjes zijn in de eerste plaats heel lichtvoetig en grappig. In oktober brengt ze haar debuutplaat ‘World In Red’ uit.",
                social: {
                    website: "https://www.worldinred.com/ ",
                    facebook: "",
                    twitter: "twitter.com/_girlinred_ ",
                    instagram: "",
                },
                picture: {
                    small: "https://assets.rockwerchter.be/files/cache/medium/files/girl-in-redd-1-5f030ee7c3796.jpg" ,
                    large: "https://assets.rockwerchter.be/files/cache/medium/files/girl-in-redd-1-5f030ee7c3796.jpg",
                },
                media:  {
                    type: "video",
                    sourceID: "https://www.youtube.com/embed/Pzq4TEU-wHo",
                }
            },
            place: {
                naam: "Klub C",
            },
            from: "Vrijdag",
            to: "1604631273479",
            createdAt: "1604631273479",
            modifiedAt: "1604631273479",
            isHeadliner: false,
        },

        navigatie:{
            lijst:['home', 'lineUp', 'tickets', 'praktisch', 'camping', 'history', 'rwtv', 'nww', 'kooptickets']
        },

        filterBar:{
            lijst:['Overzicht A-Z','Donderdag','Vrijdag','Zaterdag','Zondag']
        },

        footerBar: {
            socials:['<svg xmlns="http://www.w3.org/2000/svg" width="100"" height="100"" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="100"" height="100"" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="100"" height="100"" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="100"" height="100"" viewbox="0 0 24 24"><path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-12-7c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.207-.394.271-.6.146-1.643-1.005-3.712-1.232-6.149-.675-.235.053-.469-.094-.522-.328-.054-.235.092-.469.328-.523 2.666-.609 4.954-.347 6.799.78.205.126.27.395.144.6zm.857-1.906c-.158.257-.494.338-.751.18-1.881-1.156-4.75-1.491-6.975-.816-.289.088-.594-.075-.681-.363-.087-.289.076-.593.364-.681 2.542-.771 5.703-.398 7.863.93.257.158.338.494.18.75zm.074-1.984c-2.257-1.34-5.979-1.464-8.133-.81-.345.105-.711-.09-.816-.436-.105-.346.09-.712.436-.817 2.473-.75 6.583-.605 9.181.937.311.184.413.586.229.897-.185.311-.587.413-.897.229z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="100"" height="100"" viewBox="0 0 24 24"><path d="M10.918 13.933h.706v3.795h-.706v-.419c-.13.154-.266.272-.405.353-.381.218-.902.213-.902-.557v-3.172h.705v2.909c0 .153.037.256.188.256.138 0 .329-.176.415-.284v-2.881zm.642-4.181c.2 0 .311-.16.311-.377v-1.854c0-.223-.098-.38-.324-.38-.208 0-.309.161-.309.38v1.854c-.001.21.117.377.322.377zm-1.941 2.831h-2.439v.747h.823v4.398h.795v-4.398h.821v-.747zm4.721 2.253v2.105c0 .47-.176.834-.645.834-.259 0-.474-.094-.671-.34v.292h-.712v-5.145h.712v1.656c.16-.194.375-.354.628-.354.517.001.688.437.688.952zm-.727.043c0-.128-.024-.225-.075-.292-.086-.113-.244-.125-.367-.062l-.146.116v2.365l.167.134c.115.058.283.062.361-.039.04-.054.061-.141.061-.262v-1.96zm10.387-2.879c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-10.746-2.251c0 .394.12.712.519.712.224 0 .534-.117.855-.498v.44h.741v-3.986h-.741v3.025c-.09.113-.291.299-.436.299-.159 0-.197-.108-.197-.269v-3.055h-.741v3.332zm-2.779-2.294v1.954c0 .703.367 1.068 1.085 1.068.597 0 1.065-.399 1.065-1.068v-1.954c0-.624-.465-1.071-1.065-1.071-.652 0-1.085.432-1.085 1.071zm-2.761-2.455l.993 3.211v2.191h.835v-2.191l.971-3.211h-.848l-.535 2.16-.575-2.16h-.841zm10.119 10.208c-.013-2.605-.204-3.602-1.848-3.714-1.518-.104-6.455-.103-7.971 0-1.642.112-1.835 1.104-1.848 3.714.013 2.606.204 3.602 1.848 3.715 1.516.103 6.453.103 7.971 0 1.643-.113 1.835-1.104 1.848-3.715zm-.885-.255v.966h-1.35v.716c0 .285.024.531.308.531.298 0 .315-.2.315-.531v-.264h.727v.285c0 .731-.313 1.174-1.057 1.174-.676 0-1.019-.491-1.019-1.174v-1.704c0-.659.435-1.116 1.071-1.116.678.001 1.005.431 1.005 1.117zm-.726-.007c0-.256-.054-.445-.309-.445-.261 0-.314.184-.314.445v.385h.623v-.385z"/></svg>'],
            info: ['Info','Over Rock Werchter','Conctact','Pers','Verkoopsvoorwaarden','Green','Disclaimer','Privacy policy','Cookies','Dank aan'],
            meerweten: ['Meer Weten?','Tickets','In het Festivalpark','Heen en weer','Camping','Frequently asked questions'],
            nieuws: ['NIEUWSBRIEF','Schrijf je in voor onze nieuwsbrief en blijf op de hoogte van het laatste nieuws.']
        },

        initialize: function() {
            
            let concertContainerDiv = document.querySelector('#container-concert');
            this.loadConcerts(this.group1, concertContainerDiv);
            this.loadConcerts(this.group2, concertContainerDiv);
            this.loadConcerts(this.group3, concertContainerDiv);
            this.loadConcerts(this.group4, concertContainerDiv);
            this.loadConcerts(this.group5, concertContainerDiv);
        
        let header = document.querySelector('#header');
        this.loadHeader(this.navigatie, header);

        let filter = document.querySelector('#concert-filter');
        this.loadFilter(this.filterBar, filter);

        let footer = document.querySelector('#concert-footer');
        this.loadFooter(this.footerBar, footer);
    },

        loadHeader: function(navigatie, divToAppendTo) {
            let showHeader = `

            <img class="logo" src="https://assets.rockwerchter.be/layout/frontend/img/svg/logo-2021.svg">
            <nav>
                <ul>
                    <li><a href="index.html">${navigatie.lijst[0]}</a></li>
                    <li><a href="#">${navigatie.lijst[1]}</a></li>
                    <li><a href="#">${navigatie.lijst[2]}</a></li>
                    <li><a href="#">${navigatie.lijst[3]}</a></li>
                    <li><a href="#">${navigatie.lijst[4]}</a></li>
                    <li><a href="#">${navigatie.lijst[5]}</a></li>
                    <li><a href="#">${navigatie.lijst[6]}</a></li>
                    <li><a href="#">${navigatie.lijst[7]}</a></li>
                    <li class="lijstKopen"><a href="#">${navigatie.lijst[8]}</a></li>
                </ul>
            </nav>`
            divToAppendTo.insertAdjacentHTML('beforeEnd', showHeader)
        },  

        loadFilter: function(filterBar, divToAppendTo) {
            let showFilter = `
            <ul class="filterFlex">
                <li><a href="#">${filterBar.lijst[0]}</a></li>
                <li><a href="#">${filterBar.lijst[1]}</a></li>
                <li><a href="#">${filterBar.lijst[2]}</a></li>
                <li><a href="#">${filterBar.lijst[3]}</a></li>
                <li><a href="#">${filterBar.lijst[04]}</a></li>
            </ul>`
            divToAppendTo.insertAdjacentHTML('beforeEnd', showFilter)
        },  

        
      loadConcerts: function(group, divToAppendTo) {
            let innerHTMLForOneConcert = `
            <article class="flexInfo">
                <div class="box" style="background-image: url(${group.artist.picture.small});">
                    <ul>
                        <li class="flexFirst">${group.from}</li> 
                        <li class="flexSecond">${group.place.naam}</li>
                    </ul>
                    
                    <h1>${group.artist.naam}</h1>
                </div>
            </article>`

            divToAppendTo.insertAdjacentHTML('beforeEnd', innerHTMLForOneConcert)

            let addedConcertImage = divToAppendTo.lastElementChild.querySelector('.box');
            addedConcertImage.addEventListener('click',(event)=>this.showSynopsis(event,group));
        },  

        showSynopsis: function(event, concertActive) {
            let innerHTMLDetails = `

            <div class="myDiv">
                <img class="afbeeldingInSynopsis" src="${concertActive.artist.picture.large}" alt="${concertActive.artist.media.type}"> 
                <ul>
                    <li class="flexFirst">${concertActive.from}</li> 
                </ul>

                <h1>${concertActive.artist.naam}</h1>
                <p class="synopsisTekst">${concertActive.artist.synopsis}</p>
                <iframe src=${concertActive.artist.media.sourceID}
                width="897,6" height="554,4" frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="socialsPerGroup">
                <p><strong>Meer Weten?</strong></p>
                <li><a href="${concertActive.artist.social.website}">${concertActive.artist.social.website}</a></li>
                <li><a href="${concertActive.artist.social.facebook}">${concertActive.artist.social.facebook}</a></li>
                <li><a href="${concertActive.artist.social.twitter}">${concertActive.artist.social.twitter}</a></li>
                <li><a href="${concertActive.artist.social.instagram}">${concertActive.artist.social.instagram}</a></li>

                <div class="socialsDelen">
                    <p>Delen</p>
                    <li class="firstDelenLink"><a href="https://twitter.com/intent/tweet?text=Pearl Jam https%3A%2F%2Fwww.rockwerchter.be%2Fnl%2Fline-up%2Fwiki%2Fpearl-jam"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg> <strong>Twitter</strong></a></li>
                    <li class="secondDelenLink"><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.rockwerchter.be%2Fnl%2Fline-up%2Fwiki%2Fpearl-jam&title=Pearl Jam&description=Pearl Jam"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg><strong>Facebook</strong></a></li>
                </div>

            </div>
            `
            document.querySelector('#concert-detail').innerHTML = innerHTMLDetails;
        },

        loadFooter: function(footerBar, divToAppendTo) {
            let showFooter = `
            <ul class="footerFlexSocials">
                <li><a href="https://www.facebook.com/rockwerchterfestival">${footerBar.socials[0]}</a></li>
                <li><a href="https://twitter.com/rockwerchter">${footerBar.socials[1]}</a></li>
                <li><a href="https://www.instagram.com/rockwerchterfestival/">${footerBar.socials[2]}</a></li>
                <li><a href="https://open.spotify.com/user/rockwerchterofficial">${footerBar.socials[3]}</a></li>
                <li><a href="https://www.youtube.com/user/rockwerchterfestival">${footerBar.socials[4]}</a></li>
            </ul>

            <div class="footerFlexInfo">
                <ul>
                    <h2><a href="#">${footerBar.info[0]}</a></h2>
                    <li><a href="https://www.rockwerchter.be/nl/over-rock-werchter">${footerBar.info[1]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/contact">${footerBar.info[2]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/pers">${footerBar.info[3]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/verkoopsvoorwaarden">${footerBar.info[4]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/green">${footerBar.info[5]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/disclaimer">${footerBar.info[6]}</a></li>
                    <li><a href="https://nl.livenation.be/privacy">${footerBar.info[7]}</a></li>
                    <li><a href="https://nl.livenation.be/cookies">${footerBar.info[8]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/dank-aan">${footerBar.info[9]}</a></li>
                </ul>
                <ul>
                    <h2><a href="https://www.rockwerchter.be/nl/praktisch/tickets">${footerBar.meerweten[0]}</a></h2>
                    <li><a href="https://www.rockwerchter.be/nl/praktisch/in-het-festivalpark">${footerBar.meerweten[1]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/praktisch/heen-en-weer">${footerBar.meerweten[2]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/praktisch/camping">${footerBar.meerweten[3]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/praktisch/camping">${footerBar.meerweten[4]}</a></li>
                    <li><a href="https://www.rockwerchter.be/nl/praktisch/frequently-asked-questions">${footerBar.meerweten[5]}</a></li>
                </ul>
                <ul>
                    <li>${footerBar.nieuws[0]}</li>
                    <li>${footerBar.nieuws[1]}</li>
                </ul>
            </div>
            `
  
            divToAppendTo.insertAdjacentHTML('beforeEnd', showFooter)
        },  
        
    }
    console.log('Application started!')
    app.initialize();
})();