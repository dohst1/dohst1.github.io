"use strict";
/* Dohst23 - rai_website - main javascript */


// variables
const creator = 'Dohst23';
const project = 'rai_website';
const project_part = 'main javascript';
const version = '4.1.4-20260329';
const updates = [
        // newest first (preferably, but the program sorts it either way)
        [20291231, "title", "description"], // preset (date title description)
        // shift all (except preset) down when adding new
        [20260329, "Website Version 4.1.2 to 4.1.4 Patch", `
Main Updates: updated amazonsmp page season 13 information, updated amazonsmp page rules, updated amazonsmp player information, updated amazonsmp season 13 recommended mods table and zip file

<br><br>Raw Changelog file:
<br>- #### v4.1.2-20260326
<br>- files - updated changelog
<br>- files - added scripts
<br>- #### v4.1.3-20260327
<br>- files - updated changelog
<br>- script - added more constants for project data
<br>- pages - updated rules section on amazonsmp page
<br>- files - updated python script and data
<br>- #### v4.1.4-20260329
<br>- files - updated changelog
<br>- files - updated script
<br>- script - updated amazonsmp player list
<br>- script - updated amazonsmp player table generator (to be compatible with dds2)
<br>- script - updated amazonsmp season 13 part 1 recommended mods link
<br>- files - added new amazonsmp season 13 part 1 recommended mods zip file
<br>- pages - updated amazonsmp recommended mods table
<br>- pages - updated rules section on amazonsmp page
<br>- script - updated updates
<br>- files - updated links for github version
<br>- #### issues and suggestions
<br>- v4.1.0-20260322 - some amazonsmp season pages have outdated download links (moved to v4.1.4)
<br>- v4.1.0-20260322 - amazonsmp season 13 page is missing (moved to v4.1.4)
            `],
        [20260325, "Website Version 4.1.1 Patch", `
Main Updates: updated amazonsmp page rules section, updated amazonsmp data, fixed issue where some content on amazonsmp page was not showing, added viaproxy section to amazonsmp page, updated some descriptions around the website.

<br><br>Raw Changelog File:
<br>- #### v4.1.1-20260325
<br>- files - updated changelog
<br>- script - updated amazonsmp players 
<br>- script - updated updates
<br>- script - updated amazonsmp mods
<br>- script - updated recommended client mods header
<br>- pages - fixed seasons tables headers on amazonsmp page
<br>- pages - fixed modifications section description text not appearing on amazonsmp page
<br>- pages - fixed season 09 information in seasons section on amazonsmp page
<br>- pages - fixed seasons section description text not appearing on amazonsmp page
<br>- pages - added viaproxy section to amazonsmp page
<br>- pages - fixed the seasons table displaying "Part Part 1" instead of "Part 1" in some cases on the amazonsmp page
<br>- script - made it so 'rules' header is no longer clickable, now 'main rules', 'community code of conduct' and 'new members' are clickable, on amazonsmp page 
<br>- pages - updated rules section on amazonsmp page
<br>- pages - updated about section on amazonsmp page
<br>- style - fixed an issue where tables and other elements would not cover the whole screen even when squished
<br>- files - updated links for github version of website`
        ],
        [20260322, "Website Version 4.1.0 Release", `
Main Updates: added separate amazonsmp season pages (for temporary world, really old worlds, season9, season10, season 11, season 12), updated dohst page, updated amazonsmp page, added toggleable sections to amazonsmp page for better navigation, added amazonsmp community code of conduct, updated style.
            
<br><br>Raw Changelog File (sorry in advance if it contains anything inappropriate):<br>
<br>### v4.0 [20260320 - 20260321]
<br>- #### v4.0.0-20260320
<br>- files - updated changelog
<br>- script - updated amazonsmp player list
<br>- script - updates mods list
<br>- pages - updated 'about' heading on main page
<br>- other - rest of 4.0 updates will be in 4.0.1
<br>- #### v4.0.1-20260321
<br>- files - updated changelog
<br>- style - reduced left margin to 5% (and 10px on small windows)
<br>- script - updated mods list
<br>- script - updated player list
<br>- script - updated 
<br>- issues - fixed 'v4.0.0 - dohst datapack 'no ender eye v2.1' does not work'
<br>- script - added 'set_clickable_section' function which makes section titles clickable to show and hide the content
<br>- pages - amazonsmp page now uses 'set_clickable_section' for all h1 and h2 sections
<br>- pages - updated about section on amazonsmp page
<br>- script - updated website title to be 'Dohst Website'
<br>- pages - removed mods description from amazonsmp page and added it into the 'set_amazonsmp' function in script
<br>- pages - updated the amazonsmp page
<br>- pages - updated credit section on information page
<br>- pages - updated updates section on information page
<br>- files - renamed 'changelog.md' to 'changelog.txt'
<br>- files - added amazonsmp_website changelog as 'changelog_old.txt'
<br>- files - added amazonsmp images 
<br>- files - added amazonsmp recommended mods download
<br>- pages - updated information page
<br>- pages - updated about section on all pages
<br>- script - added amazonsmp datapack descriptions
<br>- issues - fixed "v3.4.3 - amazonsmp datapacks are missing descriptions"
<br>- files - made most gitlab links be github links for the github version
<br>- #### issues and suggestions
<br>- v3.3.7 - should make mods list on amazonsmp page clickable to show / hide it (fixed in v4.0.1)
<br>- v3.4.3 - amazonsmp datapacks are missing descriptions (fixed in v4.0.1)
<br>- v4.0.0 - dohst datapack 'no ender eye v2.1' does not work (fixed in v4.0.1)
<br>- v4.0.0 - github version has gitlab links (fixed in v4.0.1)
<br>
<br>### v4.1 [20260322 - 2026040?] 
<br>- #### v4.1.0-20260322
<br>- files - updated changelog
<br>- pages - updated announcements on amazonsmp page
<br>- style - updated 'row' and 'row_item' classes for information page styling
<br>- style - updated margins and paddings
<br>- files - removed some unnecessary commended code
<br>- pages - readded player uuids to players table on amazonsmp page
<br>- style - fixed some styling issues when using small windows
<br>- style - added medium window section to avoid information page content from being shown incorrectly
<br>- pages - added contribution section to about section on information page
<br>- script - removed season tables from amazonsmp page, and updated set_amazonsmp function to also add the seasons table
<br>- files - added amazonsmp season pages (directly from amazonsmp_website v2.2.0-20260213) 'season12' 'season11' 'season10.html' 'season9.html' 'seasons_old.html' 'seasons_temporary.html'
<br>- pages - updated amazonsmp season pages to have new header and footer, and added a note 'Has not been updated since 2026/02/13.' at the top of each page
<br>- pages - updated amazonsmp season pages to have updated links to images
<br>- script - updated updates to include changelog for 4.0 and 4.1 versions
<br>- pages - made main tiles of amazonsmp season pages be similar to dohst page with their respective season icons
<br>- pages - updated information page credit section
<br>- #### issues and suggestions
<br>- v4.1.0-20260322 - some amazonsmp season pages have outdated download links (new)
<br>- v4.1.0-20260322 - amazonsmp season 13 page is missing (new)
            `],
        [20260320, "AmazonSMP Season 13 Start", "Started a new world on vanilla minecraft 1.21.11."],
        [20260320, "Website Version 4.0 Release", "Changelog for v4.0.x will be merged with v4.1.0 changes. Please check that for full changes."],
        [20260319, "Website Moved To Gitlab", 'The main repository for website project files will now be on Gitlab since <a href="https://gitlab.com/dohst1">Dohst</a> has had issues with github recently. The Github version will still be occasionally updated, although mostly only for major updates or patches.'],
        [20260318, "Website Version 3.4 Beta Release", "description4"],
        [20260316, "Website Version Renaming", "AmazonSMP Website versions stay as x.y.z (extras, such as x.y.z.v.w, become x.y.(z+v+w)). Dohst Website (rai_website) versions all go from 0.y.z to 3.y.z. Then official release for Dohst Website will be 4.0.0."],
        //[20260301, "Dohst23 Type04 Beginning", "From 20260301 to 20280229, supervised by 230023 and 260026, directed by e16, funded by /////////."],

        [20260228, "v3.3 beta release", "description3"],
        [20260228, "AmazonSMP Website Deletion", "Removed the old website. This is also the end of AmazonSMP Type03"],
        [20260223, "v3.2.7 beta release", "description2"],
        [20260218, "v3.2", "description1"],
        [20260213, "v3.1", "description0"],
        [20260210, "AmazonSMP Season 12 Part 3 End", "Season 12 Part 3 has now permanently ended. You can find downloads for the world, required mods and server mods on the AmazonSMP page. This world was the most successful AmazonSMP season. This will also be the last Type03 world."],
    ];
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
    //content_navigation: `<h1><strong><a href="index.html">dohst_website (beta)</a></strong></h1><br>
    content_navigation: `<h1><strong><a href="index.html">Dohst Website</a></strong></h1><br>
        <a href="index.html"><button|>Home</button></a>
        <a href="dohst.html"><button|>Dohst</button></a>
        <a href="amazonsmp.html"><button|>AmazonSMP</button></a>
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
        else if (active == "amazonsmp")      {this.content_navigation = this.recombine_string(content_temporary, 2);}
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
        <br>
        <a href="amazonsmp.html"><button|>AmazonSMP</button></a>

        <a href="season12.html"><button|>Season 12</button></a>
        <a href="season11.html"><button|>Season 11</button></a>
        <a href="season10.html"><button|>Season 10</button></a>
        <a href="season9.html"><button|>Season 09</button></a>
        <a href="seasons_old.html"><button|>Really Old Seasons</button></a>
        <a href="seasons_temporary.html"><button|>Temporary Seasons</button></a>

        <br><br>
    `,
    set_sidebar: function set_sidebar(active = "none", title = true) {
        let content_temporary = this.content_sidebar.split("|");
        if (!title) {content_temporary[0] = "";}
        if (active == "home")           {this.content_sidebar = this.recombine_string(content_temporary, 1);}
        else if (active == "info")      {this.content_sidebar = this.recombine_string(content_temporary, 2);}
        else if (active == "dohst")     {this.content_sidebar = this.recombine_string(content_temporary, 3);}
        else if (active == "404")       {this.content_sidebar = this.recombine_string(content_temporary, 4);}
        else if (active == "amazonsmp")     {this.content_sidebar = this.recombine_string(content_temporary, 5);}
        // TODO add new page active settings
        
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
    
    set_updates_all: function (target, range = updates.length) { // target is section block id where you want the update spans to be added (string)
        range = [1, range]
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
    /* content_amazonsmp_as12p3_mods_required: [['name', 'description', 'version', 'link', 'required'], 
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
    ], */
    
    content_amazonsmp_details: ["as13p1", "1.21.11", "0.18.4", "0.141.3"],
    content_amazonsmp_description_mods: [
        `Geyser-Fabric is no longer used on the server. Instead, <a href="https://geysermc.org/download">Geyser-ViaProxy</a> is used on <a href="https://github.com/ViaVersion/ViaProxy">ViaProxy</a>, which is technically a separate program from the server. Please check <a href="#proxy">the ViaProxy section</a> for more information.`,
        `There are no required mods this season, you can join with a vanilla client. However, i recommend that you use at least the mods listed in the 'Recommended Mods' table (If you are not on 1.21.11, then you can use <a href="https://modrinth.com/mod/viafabric">ViaFabric</a> to join).`,
        `All mods are for <a href="https://fabricmc.net">the Fabric mod loader</a>, and each mod is made by its respective creator (which can be found on the modrinth page of that mod).`,
        `All mods are linked to <a href="https://modrinth.com">Modrinth</a>, except for GeyserMC which is linked to <a href="https://geysermc.org">GeyserMC</a>.`,
    ],
    content_amazonsmp_mods: [['name', 'description', 'version', 'link', 'required'], 
        ['Fabric API', 'Lightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric toolchain.', '0.141.3', 'https://modrinth.com/mod/fabric-api/version/0.141.3+1.21.11', 'both', true], 
        ['AmbientSounds', 'listentonature', '6.3.5', 'https://modrinth.com/mod/ambientsounds/version/JZUqW70J', 'client'], 
        ['Architectury API', 'An intermediary api aimed to ease developing multiplatform mods.', '19.0.1', 'https://modrinth.com/mod/architectury-api/version/19.0.1+fabric', 'both', true], 
        ['Axiom', 'The all-in-one tool for editing Minecraft Worlds.', '5.3.0', 'https://modrinth.com/mod/axiom/version/uoTNUpOT', 'client'], 
        ['BanHammer', 'Simple, customisable punishment utility mod for Fabric.', '0.16.2', 'https://modrinth.com/mod/banhammer/version/0.16.2+1.21.11', 'server'], 
        ['BetterF3', "BetterF3 is a mod that replaces Minecraft's original debug HUD with a highly customizable, more human-readable HUD.", '17.0.0', 'https://modrinth.com/mod/betterf3/version/17.0.0', 'client'], 
        ['Better Advancements', 'Better Advancements tries to improve the UI and UX for the advancements system in minecraft 1.12+ in a modded environment.', '0.4.8.51', 'https://modrinth.com/mod/better-advancements/version/wPZWTfJd', 'client'], 
        ['Better Statistics Screen', 'A Minecraft mod that improves the statistics screen and makes it more useful.', '5.0.0-beta.6', 'https://modrinth.com/mod/better-stats/version/5.0.0-beta.6+fabric-1.21.11', 'client'], 
        ['Chunky', 'Pre-generates chunks, quickly and efficiently.', '1.4.55', 'https://modrinth.com/plugin/chunky/version/1CpEkmcD', 'server'], 
        ['Cloth Config API', 'Configuration Library for Minecraft Mods.', '21.11.153', 'https://modrinth.com/mod/cloth-config/version/21.11.153+fabric', 'both', true], 
        ['Concurrent Chunk Management Engine (Fabric)', 'A Fabric mod designed to improve the chunk performance of Minecraft.', '0.3.6.0.0', 'https://modrinth.com/mod/c2me-fabric/version/0.3.6.0.0', 'both'], 
        ['CreativeCore', 'A core mod', '2.14.11', 'https://modrinth.com/mod/creativecore/version/2.14.11', 'client'], 
        ['Distant Horizons', 'See farther without turning your game into a slide show', '2.4.5-b', 'https://modrinth.com/mod/distanthorizons/version/2.4.5-b-1.21.11', 'client'], 
        ['Entity Culling', 'Using async path-tracing to hide Block-/Entities that are not visible', '1.9.5', 'https://modrinth.com/mod/entityculling/version/Dx3xsUER', 'client'], 
        ['FerriteCore', 'Memory usage optimizations.', '8.2.0', 'https://modrinth.com/mod/ferrite-core/version/8.2.0-fabric', 'both'], 
        ['Floodgate fabric', 'Hybrid mode plugin to allow for connections from Geyser to join online mode servers.', '2.2.6-b54', 'https://modrinth.com/mod/floodgate/version/wzwExuYr', 'server'],
        ['Forge Config API Port', `NeoForge's & Forge's config systems provided to other modding ecosystems. Designed for a multiloader architecture.`, '21.11.1', 'https://modrinth.com/mod/forge-config-api-port/version/uXrWPsCu', 'server', true],
        //['GeyserMC fabric', 'Enable clients from Minecraft Bedrock Edition to join your Minecraft Java server.', 'Build 1099 14/03/2026', 'https://geysermc.org', 'server'], 
        ['Iris Shaders', 'A modern shader pack loader for Minecraft intended to be compatible with existing OptiFine shader packs', '1.10.6', 'https://modrinth.com/mod/iris/version/1.10.6+1.21.11-fabric', 'client'], 
        ['Litematica', 'A client-side schematic mod with extra features for creative mode work', '0.26.1', 'https://modrinth.com/mod/litematica/version/0.26.1', 'client'], 
        ['Lithium', 'No-compromises game logic optimization mod. Well suited for clients and servers of all kinds. Now available for Fabric and NeoForge!', '0.21.4', 'https://modrinth.com/mod/lithium/version/mc1.21.11-0.21.4-fabric', 'both', false], 
        ['MaLiLib', "A library mod for client-side mods. Contains most of the common/shared code of masa's client mods, and adds some inter-operation support between the dependent mods.", '0.27.7', 'https://modrinth.com/mod/malilib/version/0.27.7', 'client'], 
        ['MiniHUD', "A 'mini F3' HUD mod, also with various overlays like light level, spawn chunks, slime chunks etc.", '0.38.4', 'https://modrinth.com/mod/minihud/version/0.38.4', 'client'], 
        ['Mod Menu', 'Adds a mod menu to view the list of mods you have installed.', 'v17.0.0-beta.2', 'https://modrinth.com/mod/modmenu/version/17.0.0-beta.2', 'client'], 
        ['No Chat Reports', 'Makes chat unreportable (where possible)', '2.18.0', 'https://modrinth.com/mod/no-chat-reports/version/Fabric-1.21.11-v2.18.0', 'both', true], 
        ['No Chat Restrictions', 'Restores access to game chat for all accounts', '1.0.0', 'https://modrinth.com/mod/no-chat-restrictions/version/Fabric-MC1.21.11-v1.0.0', 'client', true], 
        ['Open Parties and Claims', `Adds the ability to claim chunks and make player parties, integrates with Xaero's Minimap and World Map.`, '0.25.10', 'https://modrinth.com/mod/open-parties-and-claims/version/fabric-1.21.11-0.25.10', 'server', true],
        ['Player Roles', 'Role & permission management for Fabric servers.', '1.8.1', 'https://modrinth.com/mod/player-roles/version/1.8.1+1.21.11', 'server'], 
        ['ReplayMod', 'A Minecraft Mod to record, relive and share your experience.', '2.6.25', 'https://modrinth.com/mod/replaymod/version/1.21.11-2.6.25', 'client'], 
        ['Replay Voice Chat', 'A compatibility mod to record Simple Voice Chat with ReplayMod', '1.3.12', 'https://modrinth.com/mod/replay-voice-chat/version/fabric-1.21.11-1.3.12', 'client'], 
        ['Roughly Enough Items (REI)', 'Clean and Customizable. Alternative to Just Enough Items/JEI.', '21.11.814', 'https://modrinth.com/mod/rei/version/21.11.814+fabric', 'both', true], 
        ['ScalableLux', 'A Fabric mod based on Starlight that improves the performance of light updates in Minecraft.', '0.1.6', 'https://modrinth.com/mod/scalablelux/version/0.1.6+fabric.c25518a', 'both'], 
        ['Servux', 'Servux is a server-side mod that provides support for some client-side mods, such as sending structure bounding boxes for MiniHUD', '0.9.2', 'https://modrinth.com/mod/servux/version/0.9.2', 'server'], 
        ['Simple Voice Chat', 'A working voice chat in Minecraft.', '2.6.12', 'https://modrinth.com/plugin/simple-voice-chat/version/fabric-1.21.11-2.6.12', 'both'], 
        ['Sodium', 'The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric!', '0.8.6', 'https://modrinth.com/mod/sodium/version/mc1.21.11-0.8.6-fabric', 'client', true], 
        ['Styled Nicknames', `Simple, but configurable nicknaming mod allowing your server's players (and admins) to change their nickname with full formatting support.`, '1.11.1', 'https://modrinth.com/mod/styled-nicknames/version/1.11.1+1.21.11', 'server'], 
        ['TCDCommons API', "TheCSDev's personal library mod for the Minecraft modding environment.", '5.0.0-beta.6', 'https://modrinth.com/mod/tcdcommons/version/5.0.0-beta.6+fabric-1.21.11', 'client'], 
        ['Text Placeholder API', 'Placeholder and Text manipulation library for your Minecraft mods.', '2.8.2', 'https://modrinth.com/mod/placeholder-api/version/2.8.2+1.21.10', 'client'], 
        ['ViaBackwards', 'Allow older Java Edition clients to connect to newer servers.', '5.7.2', 'https://modrinth.com/plugin/viabackwards/version/5.7.2', 'server'],
        ['ViaFabric', 'Allows to connect to older servers with older versions.', '5.7.2', 'https://modrinth.com/mod/viafabric/version/0.4.21+139-1.14-1.21', 'both', false],
        ['ViaVersion', 'Allow newer Java Edition clients to connect to older servers.', '5.7.2', 'https://modrinth.com/plugin/viaversion/version/5.7.2', 'server'],
        ["Xaero's Minimap", "Displays a map of the nearby world terrain, players, mobs, entities in the corner of your screen. Lets you create waypoints which help you find the locations you've marked.", '25.3.10', 'https://modrinth.com/mod/xaeros-minimap/version/fabric-1.21.11-25.3.10', 'client', true], 
        ["Xaero's World Map", "Adds a full screen world map which shows you what you have explored in the world. Works great together with Xaero's Minimap.", '1.40.11', 'https://modrinth.com/mod/xaeros-world-map/version/fabric-1.21.11-1.40.11', 'client', true], 
        ],
    content_amazonsmp_datapacks: [['name', 'description', 'author', 'link'], 
        ['afk display', "Changes a player's name color if they havent moved for over 5 minutes.", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['age lock', "Adds the ability to lock a mob's age using a name tag. 'Age lock', 'age lock', 'age_lock' are all acceptable names.", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['armor statues', 'Adds a unique book that allows you to alter the properties of armor stands in survival.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['armored elytra', 'Drop an elytra and a chestplate on an anvil to merge them into one item. Drop the item above a grindstone to separate them again.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['cauldron concrete', 'Drop concrete powder into a water cauldron to instantly harden all of it.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['cauldron mud', 'Drop dirt into a water cauldron to instantly convert all of it into mud.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['classic fishing loot', 'Reverts the fishing look back to its per 1.16 loot table.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['coordinates hud', 'Adds information to your action bar. xyz coordinates and a 24 hour clock.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['custom nether portals', 'Ignite Nether portals of any shape and size you like, or use crying obsidian in the portal frame.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['dohst enhancements', 'Makes netherite uncraftable, makes armor trim recipes cheaper, increases the build height in the nether, and more.', '<a href="https://github.com/dohst1">Dohst</a>', 'unavailable.html'],
        ['double shulker shells', 'Makes all shulkers drop two shells.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['dragon drops', 'Makes the ender dragon drop an elytra on death (original also drops a dragon egg).', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['durability ping', "Get notified when you damage an item with less than 10% durability. Fully customisable per player with '/trigger duraPing'", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['ender chest always drops', 'Now ender chests drop without silk touch.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['fast leaf decay', 'Leaves decay much faster when trees are mined in survival mode.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['glass always drops', 'Makes all types of glass drop without silk touch.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['husks drop sand', 'Husks drop zero to two sand on death, making it renewable (with looting, the amount is up to two plus the looting level).', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['mini blocks', 'Use a stone cutter to craft certain bocks into mini blocks (heads textured like blocks).', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['more effective tools', 'Sets an effective tool for blocks that do not have one. This excludes blocks specifically designed to have no effective tool.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['more mob heads', "Adds a chance to receive a mob's head upon killing it", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['name colors', "Ender '/trigger color' to list the colors you can set your username to (this gets reset due to afk display if you go afk).", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['nether portal coords', 'Adds a trigger that calculates where a nether portal should be paced in the other dimension.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['no ender eye (v2.2)', 'Makes eyes of ender uncraftable.', '<a href="https://github.com/dohst1">Dohst</a>', 'dohst.html#datapacks'], 
        ['painting picker', "Use a stone cutter to choose a painting's variant.", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['player head drops', 'A player will drop their head when killed by another player. The item displays who the killer is.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['silence mobs', "Adds the ability to silence mobs using a name tag. 'silence me', 'Silence me', 'silence_me' are all acceptable names.", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['silk touch budding amethyst', 'Lets you collect budding amethyst using silk touch.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['spectator conduit power', 'Easily toggle conduit power when in spectator.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['spectator night vision', 'Easily toggle night vision when in spectator.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['storm channeling', 'Start a thunder storm by throwing a channeling trident upward from the top of the world, consuming 150 (60%) durability.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['track raw statistics', 'Adds over one hundred scoreboards that track many different statistics. Especially useful for multiplayer.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['unlock all recipes', 'Automatically unlocks all recipes as soon as you start playing.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['crafting tweaks', 'Everything except rabbit hide buddles and three by three coral blocks.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/crafting-tweaks/'], 
        ['villager death messages', 'Notifies the server in chat when a villager is killed. Displays coordinates and dimension that it died in.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['wandering trader announcements', 'Notifies nearby players in chat when a wandering trader arrives.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['wandering trades', "Adds mini blocks to the wandering trader's trades.", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['xp bottling', 'Right click an enchanting table with an empty bottle to fill it with some of your xp. smelt an xp bottle in a furnace to losslessly get your xp back.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
        ['amplified nether', 'The nether explorers simple dream, doubled height and amplified terrain.', '<a href="https://www.stardustlabs.net">Stardust Labs</a>', 'https://modrinth.com/datapack/amplified-nether/version/oZdWnGL8'],
    ],
    content_amazonsmp_players: [['04 username', '08 link', '10 namemc', '11 uuid', '12 admin', '13 banned , date time reason, ...', ],
        ['Dohst', 'https://github.com/dohst1', 'Dohst0', 'a72d1775-1031-4937-9fcb-3296809ef742', '3', 'no, 20260320 0 none', ],
        ['Secret7', 'unknown', 'Secret7', '73045442-ec92-419c-a10c-d8efdab5f555', '3', 'no, 20260320 0 none', ],
        ['Cookielotty12', 'unknown', 'Cookielotty12', '193df712-49dd-4bd1-a21d-09cc6f953bd9', '1', 'no, 20260320 0 none', ],
        ['Tackzs', 'unknown.html', 'Tackzs', 'd105fc83-6c49-4bfe-b8a3-0735cee598b4', '1', 'no, 20260320 0 none', ],
        ['WhatCheeseburger', 'https://www.twitch.tv/whatcheeseburgertv', 'WhatCheeseburger', '438f0db2-ad4f-44d8-8d21-2bbb5600e676', '3', 'no, 20260320 0 none', ],
        ['MandoEAM', 'https://www.youtube.com/@MandoEAM', 'MandoEAM', '9df74492-2311-483f-9f8b-4ba35d9af733', '3', 'no, 20260320 0 none', ],
        ['ATAT66', 'unknown', 'ATAT66', '0ca533c1-e6a6-486a-86d0-aabe670031b4', '0', 'no, 20260320 0 none', ],
        ['unknown', 'unknown', 'ImGapplejuice', 'c50ab55c-a3b1-42e5-b2d5-772ddc3f5584', '0', 'no, 20260320 0 none', ],
        ['dannygpr', 'https://youtube.com/@danny_gpr', 'Danny_GPR', '33a86567-4671-4bfe-b0cd-37d957c0d63a', '0', 'no, 20260320 0 none', ],
        ['unknown', 'unknown', 'Filterrs', 'b0c9a712-0db0-4f23-9e25-128e259f8223', '0', 'no, 20260320 0 none', ],
        ['unknown', 'unknown.html', 'Madhatters33', '666a4058-85ba-4755-bec0-de7d652493ab', '0', 'no, 20260320 0 none', ],
        //['lily_mjr', 'unknown.html', '.Lily_mjr', '00000000-0000-0000-0009-01f6b26e63a3', '1', 'no, 20260320 0 none', ],
        ['cloopyster', 'unknown', '.Cloopyster', '00000000-0000-0000-0009-01f438621ed5', '0', 'no, 20260320 0 none', ],
        ['UnkownPoint', 'unknown', 'UnkownPoint', 'b00b9fdd-eb7a-446c-bd56-5aba5d0784a6', '0', 'no, 20260320 0 none', ],
        ['unknown', 'unknown', 'VaJdSvr25', '1de8104f-23a9-4466-81a6-b62b265ccd11', '0', 'no, 20260320 0 none', ],
        ['unknown', 'unknown', 'unknown', 'unknown', '0', 'no, 20260320 0 none', ],
        //['unknown', 'unknown', 'unknown', 'unknown', '0', 'no, 20260320 0 none', ],
        ['unknown', 'unknown', '.Mercuti-oh', 'unknown', '0', 'no, 20260320 0 none', ],
        //['unknown', 'unknown', 'unknown', 'unknown', '0', 'no, 20260320 0 none', ]
    ],
    content_amazonsmp_about: [
        `AmazonSMP is a private Minecraft server hosted by <a href="https://github.com/dohst1">Dohst</a>. This page is intended to be used only by current or past AmazonSMP Members.`,
        `Click on each section and subsection title (or table headers) to show or hide its content.`,
        `New: The Rules section has been updated.`,
        //`New: Links and details about ViaProxy and GeyserMC have been added.`,
        //`NEW: <a href="#rules_community">A Community Code of Conduct and General Rules have been added to the Rules section.</a>`,
        `New: Pages with more details for each season have been added. You can find links to them from the season tables below (click on the season name).`,
        `Season 12 Part 3 has ended, you can find downloads and other information below.`,
    ],
    content_amazonsmp_seasons_details: [['title', 'name', 'start', 'end', 'types'], 
        ['Really Old Worlds', 'seasons_really_old', '2020/03/00', '2023/02/28', '0 1 2'],
        ['Old Worlds', 'seasons_old', '2023/03/00', '2026/02/28', '3'], 
        ['New Worlds', 'seasons_new', '2026/03/00', 'Present<!-- 2028/02/29 -->', '4'], 
    ],
    content_amazonsmp_seasons: [['type', 'name', 'part', 'start', 'end', 'life', 'version', 'description', 'link'], 
        ['4', 'Season 13', 'none', '2026/03/20', 'present<!-- max 2028/02/29 -->', '&gt;10', '1.21.11 vanilla <br> (with crossplay)', 'World Download Unavailable<br><a href="assets/amazonsmp/as13p1-mods20260329-recomended.zip">Recommended Client Mods (2026/03/21) (12.5 MB)</a>', 'season13.html'], 
        
        ['3', 'Temporary 04', 'none', '2025/07/12', '2025/07/22', '10', '1.21.6 - 1.21.7', 'Unavailable', 'seasons_temporary.html#temporary4'], 
        ['3', 'Season 12', 'Part 3', '2025/07/22', '2026/02/10', '203', '1.20.1 modded', '<a href="https://www.mediafire.com/file/2i03ah993otr8f8/season12p3-world_final.zip/file">World Download (1 290 MB)</a><br><a href="https://www.mediafire.com/file/ru4533taoswplkg/as12p3-mods-202511.zip/file">Required Mods (153 MB)</a><br><a href="https://www.mediafire.com/file/9tgz47ufs5smnqb/season12p3-mods_full.zip/file">Server Mods (544 MB)</a>', 'season12.html#part3'], 
        ['3', '', 'Part 2', '2025/06/14', '2025/07/11', '27', '1.21.5 - 1.21.6', '<a href="https://www.mediafire.com/file/hecgl593yvencay/season12p2_full.zip/file">World Download (468 MB)</a>', 'season12.html#part2'], 
        ['3', '', 'Part 1', '2024/12/15', '2025/03/30', '105', '1.21.4', '<a href="https://www.mediafire.com/file/e33mrx8x6z0g1ki/season12p1_full.zip/file">World Download (370 MB)</a>', 'season12.html#part1'], 
        ['3', 'Season 11', 'Part 2', '2024/05/06', '2024/09/20', '137', '1.20.1 modded', '<a href="https://www.mediafire.com/file/57ibdj7byntvwch/season11p2_full.zip/file">World Download (395 MB)</a>', 'season11.html#part2'], 
        ['3', '', 'Part 1', '2024/02/22', '2024/05/05', '73', '1.20.1', '<a href="https://www.mediafire.com/file/c3nzt5j5uqsjqzh/season11p1_full.zip/file">World Download (296 MB)</a>', 'season11.html#part1'], 
        ['3', 'Temporary 03', 'none', '2023/10/??', '2023/11/??', '&lt;50', '1.20.1 modded', 'Unavailable', 'seasons_temporary.html#temporary3'], 
        ['3', 'Season 10', 'Part 2', '2023/12/02', '2024/02/20', '80', '1.20.4', '<a href="https://www.mediafire.com/file/i9o0nj6qafc11cb/season10p2_full.zip/file">World Download (252 MB)</a>', 'season10.html#part2'], 
        ['3', '', 'Part 1', '2023/06/10', '2023/10/01', '113', '1.20.1 - 1.20.4', '<a href="https://www.mediafire.com/file/dggv5d0npgsl1lb/season10p1_full.zip/file">World Download (195 MB)</a>', 'season10.html#part1'], 
        ['3', 'Temporary 02', 'none', '2023/05/??', '2023/05/??', '&lt;20', 'Unknown', 'Unavailable', 'seasons_temporary.html#temporary2'], 
        ['3', 'Season 09', '', '2023/03/01', '2023/06/10', '101', '1.19.3 - 1.19.4', 'After 528:<br><a href="https://www.mediafire.com/file/49i3pubuxhrwt4s/season9p2_full.zip/file">World Download (145 MB)</a> <br>Before 528:<br><a href="https://www.mediafire.com/file/qw5hp6crqlq76ow/season9p1_full.zip/file">World Download (198 MB)</a>', 'season9.html'], 

        ['2', 'Season 08', 'none', '2023/01/10', '2023/02/26', '47', '1.19.2 modded', '<a href="https://www.mediafire.com/file/gzs8vlz07g51och/season8.zip/file">World Download (85.9 MB)</a>', 'seasons_old.html#season8'], 
        ['2', 'Season 07', 'none', '2022/12/11', '2022/12/23', '12', '1.19.3', '<a href="https://www.mediafire.com/file/2ftn95ch840un5n/season7_full.zip/file">World Download (151 MB)</a>', 'seasons_old.html#season7'], 
        ['2', 'Temporary 01', 'none', '2022/11/??', '2022/12/??', '&lt;20', '1.19.1 modded', 'Unavailable', 'seasons_temporary.html#temporary1'], 
        ['2', 'Season 06', 'none', '2022/11/09', '2022/11/22', '13', '1.19.2 - 1.19.3', '<a href="https://www.mediafire.com/file/koa63zhwro7qued/season6.zip/file">World Download (94.3 MB)</a>', 'seasons_old.html#season6'], 
        ['2', 'Season 05', 'none', '2022/09/19', '2022/11/06', '48', '1.19.2', '<a href="https://www.mediafire.com/file/17sczuqf9kk5tkb/season5.zip/file">World Download (78.5 MB)</a>', 'seasons_old.html#season5'], 
        ['2', 'Season 04', 'none', '2022/08/20', '2022/09/16', '27', '1.19.0 modded', '<a href="https://www.mediafire.com/file/dgdwmcq92wgavpo/season4.zip/file">World Download (95.6 MB)</a>', 'seasons_old.html#season4'], 
        ['1', 'Season 03', 'none', '2022/06/18', '2022/08/18', '61', '1.18.2 - 1.19.2', '<a href="https://www.mediafire.com/file/evz7azbg4k07ztf/season3.zip/file">World Download (96.9 MB)</a>', 'seasons_old.html#season3'], 
        ['1', 'Season 02', 'none', '2022/05/03', '2022/06/05', '34', '1.18.1', 'Unavailable', 'seasons_old.html#season2'], 
        ['1', 'Season 01', 'none', '2022/03/16', '2022/05/02', '47', '1.18.0', 'Unavailable', 'seasons_old.html#season1'], 
        ['0', 'Seasons 00 <br> (not continuous)', 'none', '2020/03/00', '2022/03/10', 'unknown', '1.15.2 - 1.18.0', 'Unavailable', 'seasons_old.html#season0'],
    ],
    content_amazonsmp_description_seasons: [
        //`Season 12 Part 3 was compressed using <a href="https://www.7-zip.org">7zip</a> (you can extract it without downloading 7zip if you have another software which can unzip files).`,
        //`Seasons Parts which are not '1' have parts of their worlds which are not from the original seed, meaning that chunk boundaries may have weird generation.`,
        `Please note that some of the really old seasons (before 2023/03) may have incorrect dates and information.`,
        `'Unavailable' downloads for Season 1 and Season 2 (and Temporary Seasons) will not become available since the world files were not saved.`,
        //`Downloads (for world and mods) for the current Season will be updated every Sunday at around 22:00 UTC (These are temporary downloads and will be deleted once a new set is added).`,
        `All downloads are linked to <a href="https://www.mediafire.com">MediaFire</a>, or directly to this website.`,
    ],
    content_amazonsmp_viaproxy: [
        `Link: <a href="https://github.com/ViaVersion/ViaProxy">https://github.com/ViaVersion/ViaProxy</a>`,
        `Description (from github): Standalone proxy which allows players to join EVERY Minecraft server version (Classic, Alpha, Beta, Release, Bedrock)`,
        `This proxy is used with <a href="https://geysermc.org">GeyserMC</a> and <a href="https://modrinth.com/mod/floodgate/version/wzwExuYr">Floodgate</a> to allow bedrock clients (who are on the latest minecraft version) join the server (which is on minecraft 1.21.11). <a href="https://geysermc.org/download">Geyser-ViaProxy</a> is used on <a href="https://github.com/ViaVersion/ViaProxy">ViaProxy</a>, which is technically a separate program from the server. However, because this is all still server sided, bedrock players will be able to join as they did before without any differences.`,
        `<a href="https://github.com/ViaVersion/ViaProxy">This program is NOT made by me, all credit for this goes to the developers on the github page</a>.`,
    ],

    set_amazonsmp: function (targets = [2, "about", "seasons", "mods", "players", "proxy"], options = "all") {
        // targets are the elements which you want the content to be printed in, index 1 is for mods, and index 2 is for players
        // options can be: 'seasons' 'players' 'datapacks' 'server' 'recommended' 'mods' 'all', if multiple, separate each with a space ' '

        let text_seasons = ``;
        let set_seasons = function () {
            let type = 4;
            let parts = 0;
            let last = PageContent.content_amazonsmp_seasons[0];
            for (let i = 1; i < PageContent.content_amazonsmp_seasons.length; i++) {
                for (let j = 0; j < PageContent.content_amazonsmp_seasons[0].length; j++) {
                    if (PageContent.content_amazonsmp_seasons[i][j] == "") {
                        PageContent.content_amazonsmp_seasons[i][j] = last[j];
                    };
                };

                if (PageContent.content_amazonsmp_seasons[i][0] != last[0]) {
                    type--;
                    if (type < 0) {break;} else if (type != 0 && type != 3) {text_seasons += `</tbody></table>`;};
                    // content_amazonsmp_seasons_details [0'title', 1'name', 2'start', 3'end', 4'types']
                    if (type != 0) {
                        text_seasons += `
                            <table>
                            <thead id="${PageContent.content_amazonsmp_seasons_details[type][1]}-header">
                                <tr>
                                    <th colspan="5"><!-- Type ${PageContent.content_amazonsmp_seasons_details[type][4]} -  -->${PageContent.content_amazonsmp_seasons_details[type][0]} (${PageContent.content_amazonsmp_seasons_details[type][2]} - ${PageContent.content_amazonsmp_seasons_details[type][3]})</th>
                                </tr>
                                <tr>
                                    <th colspan="2" style="min-width: 220px;">Name</th>
                                    <th>Start Date - End Date (Lifetime)</th>
                                    <th>Version</th>
                                    <th>Links</th>
                                </tr>
                            </thead>`;
                        if (type != 3) {
                            text_seasons += `<tbody id="${PageContent.content_amazonsmp_seasons_details[type][1]}" class="fade_none">`;
                        } else {
                            text_seasons += `<tbody id="${PageContent.content_amazonsmp_seasons_details[type][1]}">`;
                        }
                    };
                };

                // content_amazonsmp_seasons [0'type', 1'name', 2'part', 3'start', 4'end', 5'life', 6'version', 7'description', 8'link']
                text_seasons += `<tr>`
                if (PageContent.content_amazonsmp_seasons[i][2] == 'none') {
                    text_seasons += `<th rowspan="1" colspan="2"><a href="${PageContent.content_amazonsmp_seasons[i][8]}">${PageContent.content_amazonsmp_seasons[i][1]}</a></th>`
                    parts++
                } else if (parts != 0) {
                    text_seasons += `<td><a href="${PageContent.content_amazonsmp_seasons[i][8]}">${PageContent.content_amazonsmp_seasons[i][2]}</a></td>`
                } else if (PageContent.content_amazonsmp_seasons[i][2] == 'Part 3') {
                    parts = 3;
                    text_seasons += `<th rowspan="3" colspan="1"><a href="${PageContent.content_amazonsmp_seasons[i][8]}">${PageContent.content_amazonsmp_seasons[i][1]}</a></th><td><a href="${PageContent.content_amazonsmp_seasons[i][8]}">Part 3</a></td>`
                } else if (PageContent.content_amazonsmp_seasons[i][2] == 'Part 2' || PageContent.content_amazonsmp_seasons[i][2] == 'After 528') {
                    parts = 2;
                    text_seasons += `<th rowspan="2" colspan="1"><a href="${PageContent.content_amazonsmp_seasons[i][8]}">${PageContent.content_amazonsmp_seasons[i][1]}</a></th><td><a href="${PageContent.content_amazonsmp_seasons[i][8]}">${PageContent.content_amazonsmp_seasons[i][2]}</a></td>`
                }
                parts--;

                text_seasons += `<td>${PageContent.content_amazonsmp_seasons[i][3]} - ${PageContent.content_amazonsmp_seasons[i][4]} <br> (${PageContent.content_amazonsmp_seasons[i][5]} days)</td>
                    <td>${PageContent.content_amazonsmp_seasons[i][6]}</td>
                    <td class="limited_big">${PageContent.content_amazonsmp_seasons[i][7]}</td>
                </tr>`;

                last = PageContent.content_amazonsmp_seasons[i];
            };
            text_seasons += `</tbody></table>`;
        };


        let text_mods = ``;
        let set_recommended = function () {
            text_mods += `
            <table>
            <thead id="links_recommended-header">
            <tr>
            <th colspan="3">Recommended Client Mods (minecraft ${PageContent.content_amazonsmp_details[1]}, fabric ${PageContent.content_amazonsmp_details[2]})</th>
            </tr>
            <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Description</th>
            </tr>
            </thead>
            <tbody id="links_recommended">`;
            for (let i = 1; i < PageContent.content_amazonsmp_mods.length; i++) {
                if (PageContent.content_amazonsmp_mods[i][5]) {
                    //[0'name', 1'description', 2'version', 3'link'], 
                    text_mods += `<tr>
                    <td><a href="${PageContent.content_amazonsmp_mods[i][3]}">${PageContent.content_amazonsmp_mods[i][0]}</a></td>
                    <td>${PageContent.content_amazonsmp_mods[i][2]}</td>
                    <td class="limited_big">${PageContent.content_amazonsmp_mods[i][1]}</td>
                    </tr>`;
                }};
                text_mods += `</tbody>
            </table>`;
        };

        let set_mods = function () {
            text_mods += `<table>
            <thead id="links_server-header">
            <tr>
            <th colspan="3">Server Mods (minecraft ${PageContent.content_amazonsmp_details[1]}, fabric ${PageContent.content_amazonsmp_details[2]})</th>
            </tr>
            <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Description</th>
            </tr>
            </thead>
            <tbody id="links_server" class="fade_none">`
            for (let i = 1; i < PageContent.content_amazonsmp_mods.length; i++) {
                if (PageContent.content_amazonsmp_mods[i][4] != "client") {
                    //[0'name', 1'description', 2'version', 3'link'], 
                    text_mods += `<tr>
                    <td><a href="${PageContent.content_amazonsmp_mods[i][3]}">${PageContent.content_amazonsmp_mods[i][0]}</a></td>
                    <td>${PageContent.content_amazonsmp_mods[i][2]}</td>
                    <td class="limited_big">${PageContent.content_amazonsmp_mods[i][1]}</td>
                    </tr>`;
            }};
            text_mods += `</tbody>
            </table>`;
        };

        let set_datapacks = function () {
            text_mods += `<table>
            <thead id="links_datapacks-header">
            <tr>
            <th colspan="3">Server Datapacks (minecraft ${PageContent.content_amazonsmp_details[1]})</th>
            </tr>
            <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Description</th>
            </tr>
            </thead>
            <tbody id="links_datapacks" class="fade_none">`
            for (let i = 1; i < PageContent.content_amazonsmp_datapacks.length; i++) {
                //[0'name', 1'description', 2'version', 3'link'], 
                text_mods += `<tr>
                <td><a href="${PageContent.content_amazonsmp_datapacks[i][3]}">${PageContent.content_amazonsmp_datapacks[i][0]}</a></td>
                <td>${PageContent.content_amazonsmp_datapacks[i][2]}</td>
                <td class="limited_big">${PageContent.content_amazonsmp_datapacks[i][1]}</td>
                </tr>`;
            };
            text_mods += `</tbody></table>`;
        };

        let text_players = ``
        let set_players = function () {
            text_players = `
                <table>
                    <thead id="link_players-header">
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>UUID</th>
                            <th>Admin</th>
                            <th>Banned</th>
                        </tr>
                    </thead>
                    <tbody id="link_players">
            `
            for (let i = 1; i < PageContent.content_amazonsmp_players.length; i++) {
                //['0username', '1link', '2namemc', '3uuid', '4admin', '5banned', ],
                if (PageContent.content_amazonsmp_players[i][0] == PageContent.content_amazonsmp_players[i][2]) {
                    text_players += `<tr>
                            <td colspan="2"><a href="${PageContent.content_amazonsmp_players[i][1]}">${PageContent.content_amazonsmp_players[i][0]}</a></td>`;
                } else {
                    text_players += `<tr>
                            <td><a href="${PageContent.content_amazonsmp_players[i][1]}">${PageContent.content_amazonsmp_players[i][0]}</a></td> 
                            <td>${PageContent.content_amazonsmp_players[i][2]}</td>`
                }
                text_players += `<td>${PageContent.content_amazonsmp_players[i][3]}</td>`
                if (PageContent.content_amazonsmp_players[i][4] == "3") {
                    text_players += `<td>yes</td>`
                } else {
                    text_players += `<td>no</td>`
                }
                text_players += `<td>${PageContent.content_amazonsmp_players[i][5]}</td>
                        </tr>`;
            };
            text_players += `</tbody></table>`;
        };

        let set_mods_description = function () {
            for (let i = 0; i < PageContent.content_amazonsmp_description_mods.length; i++) {
                text_mods += `<p>${PageContent.content_amazonsmp_description_mods[i]}</p>`
            };
        }
        let set_seasons_description = function () {
            for (let i = 0; i < PageContent.content_amazonsmp_description_seasons.length; i++) {
                text_seasons += `<p>${PageContent.content_amazonsmp_description_seasons[i]}</p>`
            };
        }

        let text_proxy = ``
        let set_viaproxy_description = function () {
            for (let i = 0; i < PageContent.content_amazonsmp_viaproxy.length; i++) {
                text_proxy += `<p>${PageContent.content_amazonsmp_viaproxy[i]}</p>`
            };
        }
        
        // old
        /* if (index == 0 || index >= updates.length || !index) {return null}
        else if (description) {document.getElementById(target).innerHTML = updates[index][2]} 
        else {document.getElementById(target).innerHTML = updates[index][0] + " - " + updates[index][1]} */
        options = options.split(" ");
        let last = "";
        for (let i = 0; i < options.length; i++) {
            if (options[i] == last) {
                
            } else if (options[i] == "all") {
                text_seasons = ``;
                text_mods = ``;
                text_players = ``;
                set_seasons();
                set_recommended();
                set_mods();
                set_datapacks();
                set_players();
                set_mods_description()
                set_viaproxy_description()
                set_seasons_description()
                break;
            } else if (options[i] == "mods") {
                set_recommended();
                set_mods();
                set_viaproxy_description()
                set_mods_description()
            } else if (options[i] == "seasons") {
                set_seasons();
                set_seasons_description()
            } else if (options[i] == "recommended") {
                set_recommended();
                set_mods_description()
            } else if (options[i] == "server") {
                set_mods();
                set_viaproxy_description()
                set_mods_description()
            } else if (options[i] == "datapacks") {
                set_datapacks();
                //set_mods_description()
            } else if (options[i] == "players") {
                set_players();
            };
            last = options[i];
        };
        
        // about
        let text_about = ``
        for (let i = 0; i < this.content_amazonsmp_about.length; i++) {
            text_about += `<p>${this.content_amazonsmp_about[i]}</p>`
        };
        
        document.getElementById(targets[1]).innerHTML = text_about;
        document.getElementById(targets[2]).innerHTML = text_seasons;
        document.getElementById(targets[3]).innerHTML = text_mods;
        document.getElementById(targets[4]).innerHTML = text_players;
        document.getElementById(targets[5]).innerHTML = text_proxy;
        
    },
    
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

    
    set_clickable_section: function (targets) {
        // targets are all the element ids of all the elements which you want to be hidden
        // make sure there is also an element outside of the content element which is named '{content element id}-header' to act as a toggle button
        for (let i = 0; i < targets.length; i++) {
            document.getElementById(targets[i]+"-header").addEventListener('click', () => {
                document.getElementById(targets[i]).classList.toggle("fade_none");
            });
        };
        
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

