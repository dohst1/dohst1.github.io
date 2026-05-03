"use strict";
/* Dohst23 - rai_website - main javascript */



// variables
const dohst23 = {'creator': 'Dohst23', 'project': 'rai_website', 'project_part': 'main javascript', 'version': '4.3.2.alt0-20260503', 'dohst_error': {
    // 0NiDaa_1ErCora_2HaEri_3ReShya_4AbEzu_5Elkate_6PrDani_7DeRachi
    main: "Error (Please report this to Dohst) D-",
    unknown: this.main + "01-",
    invalid_data: this.main + "02-",}
};



// page
const DohstPage = {

    // content
    content: {
        'head': `
            <head id="head">
                <meta charset="UTF-8">
                <meta name="author" content="Dohst"> 
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
                <link rel="stylesheet" href="main_style.css" type="text/css">
                <script src="main_script.js"></script>
                <title>rai_website</title>
                <meta name="description" content="dohst23-rai_website-${dohst23['version']}">
            </head>`,

        'navigation': `<h1><strong><a href="index.html"|>Dohst Website</a></strong></h1><br>
            <a href="main.html"><button|>Information</button></a>
            <a href="updates.html"><button|>Updates</button></a>
            <a href="dohst.html"><button|>Dohst</button></a>
            <a href="amazonsmp.html"><button|>AmazonSMP</button></a>
            <a href="season13.html"><button|>Season13</button></a>`,

        'footer': `<br>
            <p>Website <a href="/main.html#updates">Version ${dohst23['version']}</a>
            - Written and Maintained by <!-- ///////// and --> <a href="https://github.com/dohst1">Dohst</a></p>
            <p>Copyright &copy;<a href="https://github.com/dohst1">Dohst</a> 2022-2026, All Rights Reserved.</p>
            <br>`,

        'sidebar': `<h1>Page List</h1>|
            <a href="index.html"><button|>Home</button></a>
            <a href="main.html"><button|>Information</button></a>
            <a href="updates.html"><button|>Updates</button></a>
            <a href="dohst.html"><button|>Dohst</button></a>
            <a href="404.html"><button|>404</button></a>
            <br>
            <a href="amazonsmp.html"><button|>AmazonSMP</button></a>

            <a href="season13.html"><button|>Season 13</button></a>
            <a href="season12.html"><button|>Season 12</button></a>
            <a href="season11.html"><button|>Season 11</button></a>
            <a href="season10.html"><button|>Season 10</button></a>
            <a href="season9.html"><button|>Season 09</button></a>
            <br><a href="seasons_old.html"><button|>Really Old Seasons</button></a>
            <a href="seasons_temporary.html"><button|>Temporary Seasons</button></a>

            <br><br>
            `,

        'color_button': `<div>
            <button id="dropdown_button" class="dropdown_button">Set Color</button>
            <div class="dropdown_content" id="dropdown_content">
            <a href=""><button id="grey">Grey</button></a>
            <a href=""><button id="red">Red</button></a>
            <a href=""><button id="orange">Orange</button></a>
            <a href=""><button id="yellow">Yellow</button></a>
            <a href=""><button id="green">Green</button></a>
            <a href=""><button id="blue">Blue</button></a>
            <a href=""><button id="indigo">Indigo</button></a>
            <a href=""><button id="violet">Violet</button></a>
            </div>
            <button id="toggle_style" class="toggle_style">Toggle Dark</button>
            </div>`,

    },


    // utilities

    recombine_string: function (text_temporary, active_index) {
        let text = ""
        for (let i = 0; i < text_temporary.length; i++) {
            text += text_temporary[i];
            if (i == active_index) {
                text += ' class="active"';
            };
        };
        return text;
    },


    // setters

    set_head: function () {document.getElementById("head").innerHTML = this.content["head"]},

    set_navigation: function set_navigation(active = "none") {
        let placement = -1
        // sets the active class to the button of the page selected before inserting the code
        // done by splitting the string by '|' the checking the input parameter and adding elements the active class tag to the end of the list element corresponding to that button (pipe '|' has been placed in the string like this: "<button|>", at every open button tag)
        if (active == "home") {placement = 0;}
        else if (active == "info") {placement = 1;}
        else if (active == "updates") {placement = 2;}
        else if (active == "dohst") {placement = 3;}
        else if (active == "amazonsmp") {placement = 4;}
        else if (active == "season13") {placement = 5;};
        document.getElementById("nav").innerHTML = this.recombine_string(this.content["navigation"].split("|"), placement);;
    },

    set_footer: function set_footer() {document.getElementById("footer").innerHTML = this.content["footer"]},
    
    set_sidebar: function set_sidebar(active = "none", title = true) {
        let placement = -1;
        if (active == "home") {placement = 1;}
        else if (active == "info") {placement = 2;}
        else if (active == "updates") {placement = 3;}
        else if (active == "dohst") {placement = 4;}
        else if (active == "404") {placement = 5;}
        else if (active == "amazonsmp") {placement = 6;};
        // TODO add new page active settings
        // 20260414 260026 Dohst: what do you mean
        
        let text = this.content["sidebar"].split("|");
        if (!title) {text[0] = "";};

        document.getElementById("sidebar").innerHTML = "<br><br>" + this.recombine_string(text, placement);
    },
    
    set_color_button: function set_footer() {document.getElementById("set_color").innerHTML = this.content["color_button"]},

};



// amazonsmp
// 20260502 260016 ///:『どういたしまして』


// events
const DohstEvent = {

    set_fade_in: function (button, target, index) {
        let effect_fade_target = document.getElementById(target);
        document.getElementById(button).addEventListener("click", function () {
            if (effect_fade_target.classList.contains("fade")) {
                PageContent.set_updates(target, index, true)
                effect_fade_target.classList.remove("fade");
                effect_fade_target.classList.add("fade_in");
            } else {
                document.getElementById(target).innerHTML = ""
                effect_fade_target.classList.remove("fade_in");
                effect_fade_target.classList.add("fade");
            };
        })
        /* PageContent.set_updates(target, index, true)
        effect_fade_target.classList.remove("fade");
        effect_fade_target.classList.add("fade_in");}) */
    },

    set_dropdown: function () {
        let dropdowns = document.getElementById("dropdown_content");
        document.getElementById("dropdown_button").addEventListener("click", function () {
            dropdowns.classList.toggle("dropdown_show");
            dropdowns.classList.toggle('active');
        });
        window.onclick = function (event) {
            if (!event.target.matches('.dropdown_button')) {
                //for (let i = 0; i < dropdowns.length; i++) {
                    if (dropdowns/* [i] */.classList.contains('dropdown_show')) {
                        dropdowns/* [i] */.classList.remove('dropdown_show');
                        dropdowns.classList.remove('active');
                    }
                //}
            }
        };
    },

    set_color: function () {
        document.body.setAttribute('color_mode', localStorage.getItem("color_mode"));
        document.body.setAttribute('color_style', localStorage.getItem("color_style"));
    },

    color_switching: function (color) {
        document.getElementById(color).addEventListener('click', () => {
            document.getElementById(color).classList.add("active")
            document.body.setAttribute('color_mode', color);
            localStorage.setItem('color_mode', color);});
    },

    set_color_styling: function () {
        document.getElementById("toggle_style").addEventListener('click', () => {
            if (localStorage.getItem("color_style") == "light") {
                document.body.setAttribute('color_style', "dark");
                localStorage.setItem('color_style', "dark");
            }
            else {
                document.body.setAttribute('color_style', "light");
                localStorage.setItem('color_style', "light");
            }
        })
    },

    
    set_clickable_section: function (targets) {
        // targets are all the element ids of all the elements which you want to be hidden
        // make sure there is also an element outside of the content element which is named '{content element id}-header' to act as a toggle button
        for (let i = 0; i < targets.length; i++) {
            //document.getElementById(targets[i]+"-header").classList.add("section_header")
            //console.log(targets[i]);
            
            document.getElementById(targets[i]+"-header").addEventListener('click', () => {
                document.getElementById(targets[i]).classList.toggle("fade_none");
            });
        };
        
    },
};



// initialise
const DohstMain = {

    initialise: function () {
        DohstEvent.set_color()
        DohstPage.set_footer();
    },

};


