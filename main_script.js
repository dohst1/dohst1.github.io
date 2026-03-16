"use strict";
/* Dohst23 - rai_website - main javascript */


// variables
const version = "v0.3.5-20260315";
const updates = [
        // newest first (preferably, but the program sorts it either way)
        // shift all (except preset) down when adding new
        [20291231, "title", "description"], // preset (date title description)
        /* [20260399, "v0.4 beta release", "description4"], */
        [20260228, "v0.3 beta release", "description3"],
        [20260223, "v0.2.7 beta release", "description2"],
        [20260218, "v0.2", "description1"],
        [20260213, "v0.1", "description0"],
    ];
/* const amazonsmp_seasons = [
        // newest first (preferably, but the program sorts it either way)
        // shift all (except preset) down when adding new
        [20291231, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // preset (date title description)
        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season12p3
        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season12p2
        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season12p1

        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season11p2
        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season11p1
    ]; */
const dohst_error = {
    main: "Error (Please report this to Dohst) D - ",
    
    unknown: this.main + "1 ",
    invalid_data: this.main + "2 ",
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
    content_navigation: `<h1><strong><a href="index.html">dohst_website (beta)</a></strong></h1><br>
        <a href="index.html"><button|>Home</button></a>
        <a href="amazonsmp.html"><button|>AmazonSMP</button></a>
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
        else if (active == "amazonsmp")      {this.content_navigation = this.recombine_string(content_temporary, 1);}
        else if (active == "dohst")      {this.content_navigation = this.recombine_string(content_temporary, 2);}
        else if (active == "info")      {this.content_navigation = this.recombine_string(content_temporary, 3);}

        else {this.content_navigation = this.recombine_string(content_temporary, -1);}
        document.getElementById("nav").innerHTML = this.content_navigation
    },

    
    // footer
    content_footer: `<br>
    <p>Website <a href="/main.html#updates">Version ${version}</a>
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
                
                // insertion sort on the dates
                try {
                    if (list[i][0].toString().length != 8) {throw dohst_error.invalid_data + "(updates)";}
                    else {
                        for (let j = sorted.length-1; j < 0; j--) {
                            if (sorted[j][0] >= list[i][0]) {
                                sorted.unshift(list[i]);
                                done = true;
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


    // amazonsmp
    // unused seasons array (to future me: be a good girl and implement this, please)
    /* content_amazonsmp_seasons: [
        // newest first
        // shift all (except preset) down when adding new
        [20291231, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // preset (date title description)
        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season12p3
        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season12p2
        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season12p1

        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season11p2
        [, "title", "description", ["World Download (size MB)", "", "Required Mods (size MB)", "", "Recommended / Server Mods (size MB)", ""]], // season11p1
    ], */
    content_amazonsmp_as12p3_mods_required: [
    //['name', 'description', 'version', 'link', 'required'], 
    ['as12p3-mods_required', 'Season 12 Part 3 Required Mods', 'v1.20.1', 'v0.92.6'], 
    ['BClib', 'Library mod required for better end and better nether.', 'v3.0.14', 'https://modrinth.com/mod/bclib/version/3.0.14', true], 
    ['Better End', 'Overhauls the end dimension with new blocks, biomes and mobs.', 'v4.0.11', 'https://modrinth.com/mod/betterend/version/4.0.11', true], 
    ['Better Nether', 'Overhauls the nether dimension with new blocks, biomes and mobs.', 'v9.0.10', 'https://modrinth.com/mod/betternether/version/9.0.10', true], 
    ['Copper and Tuff Backport', 'Backports new 1.21 copper and tuff blocks to older versions.', 'v1.2', 'https://modrinth.com/mod/copper-and-tuff-backport/version/mc1.20.1-1.2.2-release-fabric', true], 
    ['Copycats Plus', "All the copycats you've ever wanted, combined into a single mod.", 'v2.2.2', 'https://modrinth.com/mod/copycats/version/2.2.2+mc.1.20.1-fabric', true], 
    ['Create Enchantment Industry', 'Adds more ways to manage experience with the Create mod.', 'v1.2.16', 'https://modrinth.com/mod/create-enchantment-industry-fabric/version/1.2.16', true], 
    ['Create Fabric', 'Building Tools and Aesthetic Technology.', 'v0.5.1j', 'https://modrinth.com/mod/create-fabric/version/0.5.1-j-build.1631+mc1.20.1', true], 
    ['Fabric API', 'Lightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric toolchain.', 'v0.92.6', 'https://modrinth.com/mod/fabric-api/version/0.92.6+1.20.1', true], 
    ['Faithful Mace', 'A fully combat accurate backport of the mace, its enchants, and the wind charge.', 'v1.0.9', 'https://modrinth.com/mod/faithful-mace/version/1.0.9', true], 
    ['Indium', 'Fixes some Create mod visual issues when used with sodium.', 'v1.0.36', 'https://modrinth.com/mod/indium/version/1.0.36+mc1.20.1', true], 
    ['Origins', 'Lets players pick what species they want to be, each having unique abilities and disabilities.', 'v1.10.2', 'https://modrinth.com/mod/origins/version/1.10.2+mc.1.20.1', true], 
    ['Platform Fabric', "idk, but its required for 'vanilla backport' mod.", 'v1.2.10.1', 'https://modrinth.com/mod/platform/version/1.20.1-1.2.10.1', true], 
    ['Sodium', 'The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric.', 'v0.5.12-beta.2', 'https://modrinth.com/mod/sodium/version/mc1.20.1-0.5.12-beta.2-fabric', true], 
    ['Create Steam and Rails', "Adding depth to Create's rail network and steam system.", 'v1.6.9', 'https://modrinth.com/mod/create-steam-n-rails/version/1.6.9+fabric-mc1.20.1', true], 
    ['Vanilla backport', 'Backports some newer vanilla features to older versions.', 'v1.1.4.3', 'https://modrinth.com/mod/vanillabackport/version/1.20.1-1.1.4.3', true], 
    ],
    //content_amazonsmp_mods_titles: [content_amazonsmp_as12p3_mods_required[0][0], content_amazonsmp_as12p3_mods_all[0][0], content_amazonsmp_as13p1_mods_required[0][0], content_amazonsmp_as13p1_mods_all[0][0]],
    /* set_amazonsmp_mods_text: function (type) {
        if (content_amazonsmp_as12p3_mods_required[0][0]) {
            DO RECOMBINATION LIKE FOR NAVIGATION BAR
        } else if {
            
        }
        text = `
                <thead>
                    <tr>
                        <th colspan="3">Required Mods (minecraft v1.20.1, fabric api v0.92.6)</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Version</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>$</th>
                        <td>version</td>
                        <td class="limited_big">description</td>
                    </tr>
                </tbody>`
    },

    set_amazonsmp: function (target, type = "required/all") {
        // old
        if (index == 0 || index >= updates.length || !index) {return null}
        else if (description) {document.getElementById(target).innerHTML = updates[index][2]} 
        else {document.getElementById(target).innerHTML = updates[index][0] + " - " + updates[index][1]}
        
        document.getElementById(target).innerHTML = set_amazonsmp_mods_text(type)
        
    }, */
    
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
}


function initialise() {
    /* PageContent.set_color_button();
    PageEvents.set_color_styling();
    PageEvents.set_dropdown();
    PageEvents.color_switching("grey");
    PageEvents.color_switching("red");
    PageEvents.color_switching("orange");
    PageEvents.color_switching("yellow");
    PageEvents.color_switching("green");
    PageEvents.color_switching("blue");
    PageEvents.color_switching("indigo");
    PageEvents.color_switching("violet"); */
    PageEvents.set_color()
    PageContent.set_footer();
}

