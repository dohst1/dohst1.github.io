"use strict";
/* Dohst23 - rai_website - main javascript */


// variables
const version = 'v0.3.0-20260228';
const updates = [
        // newest first (preferably, but the program sorts it either way)
        // shift all (except preset) down when adding new
        [20291231, "title", "description"], // preset (date title description)
        [20260223, "v0.3.0 beta release", "description2"],
        [20260223, "v0.2.7 beta release", "description1"],
        [20260213, "started project", "description"],
    ];
const dohst_error = {
    main: "Error (Please report this to Dohst) D - ",
    
    unknown: this.main + "2 ",
    invalid_data: this.main + "3 ",
}



// generate page content
const PageContent = {

    // other
    recombine_string: function (content_temporary, active_index) {
        let content = ""
        for (let i = 0; i < content_temporary.length; i++) {
            content += content_temporary[i];
            if (i == active_index) {
                content += ' class="active"';
            };
        };
        return content;
    },


    // head
    content_head: `
        <head id="head">
            <meta charset="UTF-8">
            <meta name="author" content="Dohst"> 
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
            <link rel="stylesheet" href="main_style.css" type="text/css">
            <script src="main_script.js"></script>
            <title>rai_website</title>
            <meta name="description" content="dohst23-rai_website-${version}">
        </head>`,
    set_head: function () {document.getElementById("head").innerHTML = this.content_head},


    // nav bar
    /* content_navigation_original: `
        <h1><strong><a href="index.html">rai_website (beta)</a></strong></h1>
        <a href="index.html"><button class="active">Home</button></a>
        <a href="dohst.html"><button>Dohst</button></a>
        <a href="information/main.html"><button>Information</button></a>`, */
    content_navigation: `<h1><strong><a href="index.html">dohst_website (beta)</a></strong></h1>
        <a href="index.html"><button|>Home</button></a>
        <a href="dohst.html"><button|>Dohst</button></a>
        <a href="main.html"><button|>Information</button></a>`,
    /* content_navigation: `<h1><strong><a href="index.html">dohst_website (beta)</a></strong></h1>
        <a href="index.html"><button|>Home</button></a>
        <a href="products.html"><button|>Products</button></a>
        <a href="help.html"><button|>Help</button></a>
        <a href="contact.html"><button|>Contact</button></a>
        <a href="main.html"><button|>Information</button></a>`, */
    // sets the active class to the button of the page selected before inserting the code
    // done by splitting the string by '|' the checking the input parameter and adding elements the active class tag to the end of the list element corresponding to that button (pipe '|' has been placed in the string like this: "<button|>", at every open button tag)
    set_navigation: function set_navigation(active = "none") {
        let content_temporary = this.content_navigation.split("|")
        if (active == "home") {this.content_navigation = this.recombine_string(content_temporary, 0);}
        /* else if (active == "products")   {this.content_navigation = this.recombine_string(content_temporary, 1);}
        else if (active == "help")      {this.content_navigation = this.recombine_string(content_temporary, 2);}
        else if (active == "contact")   {this.content_navigation = this.recombine_string(content_temporary, 3);}
        else if (active == "info")      {this.content_navigation = this.recombine_string(content_temporary, 4);} */
        else if (active == "dohst")      {this.content_navigation = this.recombine_string(content_temporary, 1);}
        else if (active == "info")      {this.content_navigation = this.recombine_string(content_temporary, 2);}

        else {this.content_navigation = this.recombine_string(content_temporary, -1);}
        document.getElementById("nav").innerHTML = this.content_navigation
    },

    
    // footer
    content_footer: `<br>
    <p>Website <a href="/updates.html#latest_web">Version ${version}</a>
    - Written and Maintained by <!-- ///////// and --> <a href="https://github.com/dohst1">Dohst</a></p>
    <p>Copyright &copy;<a href="https://github.com/dohst1">Dohst</a> 2022-2026, All Rights Reserved.</p>
    <br>`,
    //<code> &lt;&lt;&lt;<a href="https://www.gov.uk/copyright" target="_blank">&copy;</a><a href="https://github.com/dohst1">2026 Dohst</a> &gt;&gt;&gt; </code>
    // ### `<<< © 2026 Dohst >>>`
    set_footer: function set_footer() {document.getElementById("footer").innerHTML = this.content_footer},
    
    
    // sidebar information
    content_sidebar: `
        <h1>Page List</h1>|
        <a href="index.html"><button|>Home</button></a>
        <a href="main.html"><button|>Information</button></a>
        <a href="dohst.html"><button|>Dohst</button></a>
        <a href="404.html"><button|>404</button></a>
        <br><br>
    `,
    /* content_sidebar: `
        <h1>Page List</h1>|
        <a href="index.html"><button|>Home</button></a>
        <a href="products.html"><button|>Products</button></a>
        <a href="help.html"><button|>help</button></a>
        <a href="contact.html"><button|>contact</button></a>
        <a href="main.html"><button|>Information</button></a>
        <br><br><br>
        <a href="dohst.html"><button|>Dohst</button></a>
        <a href="updates.html"><button|>Updates</button></a>
        <a href="rules.html"><button|>Rules</button></a>
        <a href="404.html"><button|>404</button></a>
        <br><br>
    `, */
    set_sidebar: function set_sidebar(active = "none", title = true) {
        let content_temporary = this.content_sidebar.split("|");
        if (!title) {content_temporary[0] = "";}
        if (active == "home")           {this.content_sidebar = this.recombine_string(content_temporary, 1);}
        else if (active == "info")      {this.content_sidebar = this.recombine_string(content_temporary, 2);}
        else if (active == "dohst")     {this.content_sidebar = this.recombine_string(content_temporary, 3);}
        else if (active == "404")       {this.content_sidebar = this.recombine_string(content_temporary, 4);}
        
        else {this.content_sidebar = this.recombine_string(content_temporary, -1);};
        document.getElementById("sidebar").innerHTML = "<br><br>" + this.content_sidebar;
    },
    
    
    
    // updates
    //content_updates: updates,
    set_updates: function (target, index, description = false) { // why does vs code show errors here, it works fine
        if (index == 0 || index >= updates.length || !index) {return null}
        else if (description) {document.getElementById(target).innerHTML = updates[index][2]} 
        else {document.getElementById(target).innerHTML = updates[index][0] + " - " + updates[index][1]}
    },
    
    set_updates_all: function (target, range = [1, updates.length]) { // target is section block id where you want the update spans to be added (string)
        let text = "";
        let text_format = "";
        for (let i = range[0]; i < range[1]; i++) {
            text_format = `<span id="fade${i}">
            <h3 id="update${i}"></h3>
            <p id="fade${i}_text" class="fade"></p>
            </span>`;
            text += text_format
        }
        document.getElementById(target).innerHTML = text;
        
        for (let i = range[0]; i < range[1]; i++) {
            PageContent.set_updates(`update${i}`, i);
            PageEvents.set_fade_in(`fade${i}`, `fade${i}_text`, i);
        }
    },
    
    sort_updates: function (type = "date") { // avoid use, updates will already be sorted anyways
        let list = updates;
        let sorted = [];
        sorted.push(updates[0]);
        
        if (type == "date") {
            for (let i = 1; i < updates.length; i++) {
                // console.log(list[i][0]);
                let done = false;
                
                try {
                    if (list[i][0].toString().length != 8) {throw dohst_error.invalid_data + "(updates)";}
                    else {
                        for (let j = sorted.length-1; j < 0; j--) {
                            if (sorted[j][0] >= list[i][0]) {
                                sorted.unshift(list[i]);
                                let done = true;
                                break;
                            }
                        }
                        if (!done) {
                            sorted[i] = list[i];
                        }
                    }
                }
                catch (error) {
                    console.log(dohst_error.invalid_data + "(updates)");
                    return dohst_error.invalid_data + "(updates)";
                };
            }
            for (let i of sorted) {
                console.log(i);
            }
            return sorted;
        }
        return dohst_error.unknown + "(updates)";
    },
    
    
    // color button
    content_color_button: `<div>
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
    set_color_button: function set_footer() {document.getElementById("set_color").innerHTML = this.content_color_button},
    
}



// events
const PageEvents = {

    // fade out effect
    /* effect_fade_out: function (target) {
        var fadeTarget = document.getElementById("fade");
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 20);
    }, */
    
    // assigns fade out effect
    /* set_fade_out: function () {
        document.getElementById("fade").addEventListener('click', this.effect_fade_out);
    }, */

    /* effect_text_fade_in: function (button) {
        let text = document.getElementById(button);
        text.classList.remove("hide");
        setTimeout(function () {
          text.classList.add("fade_in");
          setTimeout(function () {
            text.classList.remove("fade_in");
            setTimeout(function () {
              text.classList.add("fade_hide");
            }, 1000);
          }, 2000);
        });
    }, */

    set_fade_in: function (button, target, index) {
        let effect_fade_target = document.getElementById(target);
        document.getElementById(button).addEventListener("click", function () {
        PageContent.set_updates(target, index, true)
        effect_fade_target.classList.remove("fade");
        effect_fade_target.classList.add("fade_in");})
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

    set_color_switching: function (color) {
        document.body.setAttribute('color_mode', localStorage.getItem("color_mode"));
        document.getElementById(color).addEventListener('click', () => {
            document.getElementById(color).classList.add("active")
            document.body.setAttribute('color_mode', color);
            localStorage.setItem('color_mode', color);});
    },

    set_color_styling: function () {
        document.body.setAttribute('color_style', localStorage.getItem("color_style"));
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
}


function initialise() {
    /* PageContent.set_color_button();
    PageEvents.set_color_styling();
    PageEvents.set_dropdown();
    PageEvents.set_color_switching("grey");
    PageEvents.set_color_switching("red");
    PageEvents.set_color_switching("orange");
    PageEvents.set_color_switching("yellow");
    PageEvents.set_color_switching("green");
    PageEvents.set_color_switching("blue");
    PageEvents.set_color_switching("indigo");
    PageEvents.set_color_switching("violet"); */
    PageContent.set_footer();
}

