"use strict";
/* Dohst23 - rai_website - main javascript */


// variables
const version = "v3.4.3-20260319";
const updates = [
        // newest first (preferably, but the program sorts it either way)
        [20291231, "title", "description"], // preset (date title description)
        // shift all (except preset) down when adding new

        [20260320, "AmazonSMP Season 13 Start", "description"],
        [20260320, "Website Version 4.0 Release", "description"],
        [20260319, "Website Moved To Gitlab", 'The main repository for website project files will now be on Gitlab since <a href="https://gitlab.com/dohst1">Dohst</a> has had issues with github recently. The Github version will still be occasionally updated, although mostly only for major updates or patches.'],
        [20260318, "Website Version 3.4 Beta Release", "description4"],
        [20260316, "Website Version Renaming", "AmazonSMP Website versions stay as x.y.z (extras, such as x.y.z.v.w, become x.y.(z+v+w)). Dohst Website (rai_website) versions all go from 0.y.z to 3.y.z. Then official release for Dohst Website will be 4.0.0."],
        [20260301, "Dohst23 Type04 Beginning", "From 20260301 to 20280229, supervised by 230023 and 260026, directed by e16, funded by /////////."],

        //[20260228, "v3.3 beta release", "description3"],
        [20260228, "AmazonSMP Website Deletion", "Removed the old website. This is also the end of AmazonSMP Type03"],
        //[20260223, "v3.2.7 beta release", "description2"],
        //[20260218, "v3.2", "description1"],
        //[20260213, "v3.1", "description0"],
        [20260210, "AmazonSMP Season 12 Part 3 End", "Season 12 Part 3 has now permanently ended. You can find downloads for the world, required mods and server mods on the AmazonSMP page. This world was the most successful AmazonSMP season. This will also be the last Type03 world."],
    ];
    // 私の名前を書いないで.
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
    - Written and Maintained by <!-- ///////// and --> <a href="https://gitlab.com/dohst1">Dohst</a></p>
    <p>Copyright &copy;<a href="https://gitlab.com/dohst1">Dohst</a> 2022-2026, All Rights Reserved.</p>
    <br>`,
    //<code> &lt;&lt;&lt;<a href="https://www.gov.uk/copyright" target="_blank">&copy;</a><a href="https://gitlab.com/dohst1">2026 Dohst</a> &gt;&gt;&gt; </code>
    // ### `<<< © 2026 Dohst >>>`
    set_footer: function set_footer() {document.getElementById("footer").innerHTML = this.content_footer},
    
    
    // sidebar information
    content_sidebar: `
        <h1>Page List</h1>|
        <a href="index.html"><button|>Home</button></a>
        <a href="main.html"><button|>Information</button></a>
        <a href="dohst.html"><button|>Dohst</button></a>
        <a href="amazonsmp.html"><button|>AmazonSMP</button></a>
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
        else if (active == "amazonsmp")     {this.content_sidebar = this.recombine_string(content_temporary, 4);}
        else if (active == "404")       {this.content_sidebar = this.recombine_string(content_temporary, 5);}
        
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
    /* content_amazonsmp_as12p3_mods_required: [
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
    ], */
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
    }, */
    // season name, minecraft version, fabric version, fabric api version
    content_amazonsmp_mods_details: ["as13p1", "1.21.11", "0.18.4", "0.141.3"],
    //[0'name', 1'description', 2'version', 3'link'], 
    //content_amazonsmp_mods_required: [[]],
    content_amazonsmp_mods_all: [['name', 'description', 'version', 'link', 'required'], 
    ['Fabric API', 'Lightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric toolchain.', '0.141.3', 'https://modrinth.com/mod/fabric-api/version/0.141.3+1.21.11', 'both', true], 
    ['AmbientSounds', 'listentonature', '6.3.5', 'https://modrinth.com/mod/ambientsounds/version/JZUqW70J', 'client'], 
    ['Architectury API', 'An intermediary api aimed to ease developing multiplatform mods.', '19.0.1', 'https://modrinth.com/mod/architectury-api/version/19.0.1+fabric', 'both'], 
    ['Axiom', 'The all-in-one tool for editing Minecraft Worlds.', '5.3.0', 'https://modrinth.com/mod/axiom/version/uoTNUpOT', 'client'], 
    ['BetterF3', "BetterF3 is a mod that replaces Minecraft's original debug HUD with a highly customizable, more human-readable HUD.", '17.0.0', 'https://modrinth.com/mod/betterf3/version/17.0.0', 'client'], 
    ['Better Advancements', 'Better Advancements tries to improve the UI and UX for the advancements system in minecraft 1.12+ in a modded environment.', '0.4.8.51', 'https://modrinth.com/mod/better-advancements/version/wPZWTfJd', 'client'], 
    ['Better Statistics Screen', 'A Minecraft mod that improves the statistics screen and makes it more useful.', '5.0.0-beta.6', 'https://modrinth.com/mod/better-stats/version/5.0.0-beta.6+fabric-1.21.11', 'client'], 
    ['Chunky', 'Pre-generates chunks, quickly and efficiently.', '1.4.55', 'https://modrinth.com/plugin/chunky/version/1CpEkmcD', 'server'], 
    ['Cloth Config API', 'Configuration Library for Minecraft Mods.', '21.11.153', 'https://modrinth.com/mod/cloth-config/version/21.11.153+fabric', 'both'], 
    ['Concurrent Chunk Management Engine (Fabric)', 'A Fabric mod designed to improve the chunk performance of Minecraft.', '0.3.6.0.0', 'https://modrinth.com/mod/c2me-fabric/version/0.3.6.0.0', 'both'], 
    ['CreativeCore', 'A core mod', '2.14.11', 'https://modrinth.com/mod/creativecore/version/2.14.11', 'client'], 
    ['Distant Horizons', 'See farther without turning your game into a slide show', '2.4.5-b', 'https://modrinth.com/mod/distanthorizons/version/2.4.5-b-1.21.11', 'client'], 
    ['Entity Culling', 'Using async path-tracing to hide Block-/Entities that are not visible', '1.9.5', 'https://modrinth.com/mod/entityculling/version/Dx3xsUER', 'client'], 
    ['FerriteCore', 'Memory usage optimizations.', '8.2.0', 'https://modrinth.com/mod/ferrite-core/version/8.2.0-fabric', 'both'], 
    ['Floodgate fabric', 'Hybrid mode plugin to allow for connections from Geyser to join online mode servers.', '2.2.6-b54', 'https://modrinth.com/mod/floodgate/version/wzwExuYr', 'server'],
    ['Freecam', 'A highly customizable freecam mod.', '1.3.6', 'https://modrinth.com/mod/freecam/version/1.3.6+mc1.21.11', 'client'], 
    ['GeyserMC fabric', 'Enable clients from Minecraft Bedrock Edition to join your Minecraft Java server.', 'Build 1099 14/03/2026', 'https://geysermc.org', 'server'], 
    ['Iris Shaders', 'A modern shader pack loader for Minecraft intended to be compatible with existing OptiFine shader packs', '1.10.6', 'https://modrinth.com/mod/iris/version/1.10.6+1.21.11-fabric', 'client'], 
    ['Litematica', 'A client-side schematic mod with extra features for creative mode work', '0.26.1', 'https://modrinth.com/mod/litematica/version/0.26.1', 'client'], 
    ['Lithium', 'No-compromises game logic optimization mod. Well suited for clients and servers of all kinds. Now available for Fabric and NeoForge!', '0.21.4', 'https://modrinth.com/mod/lithium/version/mc1.21.11-0.21.4-fabric', 'both', true], 
    ['MaLiLib', "A library mod for client-side mods. Contains most of the common/shared code of masa's client mods, and adds some inter-operation support between the dependent mods.", '0.27.7', 'https://modrinth.com/mod/malilib/version/0.27.7', 'client'], 
    ['MiniHUD', "A 'mini F3' HUD mod, also with various overlays like light level, spawn chunks, slime chunks etc.", '0.38.4', 'https://modrinth.com/mod/minihud/version/0.38.4', 'client'], 
    ['Mod Menu', 'Adds a mod menu to view the list of mods you have installed.', 'v17.0.0-beta.2', 'https://modrinth.com/mod/modmenu/version/17.0.0-beta.2', 'client'], 
    ['No Chat Reports', 'Makes chat unreportable (where possible)', '2.18.0', 'https://modrinth.com/mod/no-chat-reports/version/Fabric-1.21.11-v2.18.0', 'both', true], 
    ['No Chat Restrictions', 'Restores access to game chat for all accounts', '1.0.0', 'https://modrinth.com/mod/no-chat-restrictions/version/Fabric-MC1.21.11-v1.0.0', 'client', true], 
    ['ReplayMod', 'A Minecraft Mod to record, relive and share your experience.', '2.6.25', 'https://modrinth.com/mod/replaymod/version/1.21.11-2.6.25', 'client'], 
    ['Replay Voice Chat', 'A compatibility mod to record Simple Voice Chat with ReplayMod', '1.3.12', 'https://modrinth.com/mod/replay-voice-chat/version/fabric-1.21.11-1.3.12', 'client'], 
    ['Roughly Enough Items (REI)', 'Clean and Customizable. Alternative to Just Enough Items/JEI.', '21.11.814', 'https://modrinth.com/mod/rei/version/21.11.814+fabric', 'both', true], 
    ['ScalableLux', 'A Fabric mod based on Starlight that improves the performance of light updates in Minecraft.', '0.1.6', 'https://modrinth.com/mod/scalablelux/version/0.1.6+fabric.c25518a', 'both'], 
    ['Servux', 'Servux is a server-side mod that provides support for some client-side mods, such as sending structure bounding boxes for MiniHUD', '0.9.2', 'https://modrinth.com/mod/servux/version/0.9.2', 'server'], 
    ['Simple Voice Chat', 'A working voice chat in Minecraft.', '2.6.12', 'https://modrinth.com/plugin/simple-voice-chat/version/fabric-1.21.11-2.6.12', 'both'], 
    ['Sodium', 'The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric!', '0.8.6', 'https://modrinth.com/mod/sodium/version/mc1.21.11-0.8.6-fabric', 'client', true], 
    ['TCDCommons API', "TheCSDev's personal library mod for the Minecraft modding environment.", '5.0.0-beta.6', 'https://modrinth.com/mod/tcdcommons/version/5.0.0-beta.6+fabric-1.21.11', 'client'], 
    ['Text Placeholder API', 'Placeholder and Text manipulation library for your Minecraft mods.', '2.8.2', 'https://modrinth.com/mod/placeholder-api/version/2.8.2+1.21.10', 'client'], 
    ["Xaero's Minimap", "Displays a map of the nearby world terrain, players, mobs, entities in the corner of your screen. Lets you create waypoints which help you find the locations you've marked.", '25.3.10', 'https://modrinth.com/mod/xaeros-minimap/version/fabric-1.21.11-25.3.10', 'client', true], 
    ["Xaero's World Map", "Adds a full screen world map which shows you what you have explored in the world. Works great together with Xaero's Minimap.", '1.40.11', 'https://modrinth.com/mod/xaeros-world-map/version/fabric-1.21.11-1.40.11', 'client', true], 
    ],
    // content_amazonsmp_datapacks, 35, 4, [name, description, author, link]
    content_amazonsmp_datapacks: [['name', 'description', 'author', 'link'], 
                               ['afk display', "Changes a player's name color if they havent moved for over 5 minutes.", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['age lock', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['armor statues', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['armored elytra', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['cauldron concrete', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['cauldron mud', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['classic fishing loot', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['coordinates hud', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['custom nether portals', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['double shulker shells', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['dragon drops', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['durability ping', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['glass always drops', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['husks drop sand', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['mini blocks', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['more effective tools', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['more mob heads', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['name colors', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['nether portal coords', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['no ender eye (v2.1)', 'Makes eyes of ender uncraftable.', '<a href="https://gitlab.com/dohst1">Dohst</a>', 'dohst.html#datapacks'], 
                               ['painting picker', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['player head drops', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['silence mobs', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['silk touch budding amethyst', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['spectator conduit power', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['spectator night vision', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['storm channeling', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['track raw statistics', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['unlock all recipes', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['crafting tweaks', 'Everything except rabbit hide buddles and three by three coral blocks.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/crafting-tweaks/'], 
                               ['villager death messages', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['wandering trader announcements', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['wandering trades', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['xp bottling', '', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
                               ['amplified nether', 'The nether explorers simple dream, doubled height and amplified terrain.', '<a href="https://www.stardustlabs.net">Stardust Labs</a>', 'https://modrinth.com/datapack/amplified-nether/version/oZdWnGL8']],

    content_amazonsmp_players: [['name', 'username', 'uuid', 'admin', 'banned', 'link'], 
                             ['Dohst', 'Dohst0', 'a72d1775-1031-4937-9fcb-3296809ef742', 'yes', 'no', 'https://gitlab.com/dohst1'], 
                             ['Secret7', 'Secret7', '73045442-ec92-419c-a10c-d8efdab5f555', 'yes', 'no', ''], 
                             ['Cookielotty12', 'Cookielotty12', '193df712-49dd-4bd1-a21d-09cc6f953bd9', 'no', 'no', ''], 
                             ['Tackzs', 'Tackzs', 'd105fc83-6c49-4bfe-b8a3-0735cee598b4', 'no', 'no', ''], 
                             ['WhatCheeseburger', 'WhatCheeseburger', '438f0db2-ad4f-44d8-8d21-2bbb5600e676', 'yes', 'no', 'https://www.twitch.tv/whatcheeseburgertv'], 
                             ['MandoEAM', 'MandoEAM', '9df74492-2311-483f-9f8b-4ba35d9af733', 'yes', 'no', 'https://www.youtube.com/@MandoEAM'], 
                             ['ATAT66', 'ATAT66', '0ca533c1-e6a6-486a-86d0-aabe670031b4', 'no', 'no', ''], 
                             ['GoGapplejuice', 'GoGapplejuice', 'c50ab55c-a3b1-42e5-b2d5-772ddc3f5584', 'no', 'no', ''], 
                             ['Dannygpr', '.Dannygpr00981', '00000000-0000-0000-0009-01f66bfb89a7', 'no', 'no', 'https://youtube.com/@danny_gpr'], 
                             ['Filterrs', 'Filterrs', 'b0c9a712-0db0-4f23-9e25-128e259f8223', 'no', 'no', ''], 
                             /* ['230023', 'unknown', 'unknown', '0', 'yes'] */],
                             /* 
                            <tr>
                            <th>Dohst_</th>
                            <th>414ccf90-f3cb-4c38-a3b1-ebeacb4f5882</th>
                            <th><a href="https://gitlab.com/dohst1">Dohst</a></th>
                            <th>yes</th> <!-- A3 -->
                        </tr>   
                             <tr>
                            <th>EndaDwagon</th>
                            <th>3465711c-9766-4f21-87ff-491155d7a591</th>
                            <th><a href="https://www.youtube.com/@endadwagon">Enda</a></th>
                            <th>no</th>
                        </tr> */

    set_amazonsmp: function (target_mods, target_players, option = "all") {
        // old
        /* if (index == 0 || index >= updates.length || !index) {return null}
        else if (description) {document.getElementById(target).innerHTML = updates[index][2]} 
        else {document.getElementById(target).innerHTML = updates[index][0] + " - " + updates[index][1]} */
        
        if (option == "all") {
            let text = `
                <h2>Mods and Datapacks</h2>
                <table>
                <thead>
                    <tr>
                        <th colspan="3">Recommended Mods (minecraft ${this.content_amazonsmp_mods_details[1]}, fabric ${this.content_amazonsmp_mods_details[2]})</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Version</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>`;
            for (let i = 1; i < this.content_amazonsmp_mods_all.length; i++) {
                if (this.content_amazonsmp_mods_all[i][5]) {
                //[0'name', 1'description', 2'version', 3'link'], 
                text += `<tr>
                            <td><a href="${this.content_amazonsmp_mods_all[i][3]}">${this.content_amazonsmp_mods_all[i][0]}</a></td>
                            <td>${this.content_amazonsmp_mods_all[i][2]}</td>
                            <td class="limited_big">${this.content_amazonsmp_mods_all[i][1]}</td>
                        </tr>`;
            }};
            text += `</tbody>
            </table>`;

            text += `<table>
                    <thead>
                        <tr>
                            <th colspan="3">Server Mods (minecraft ${this.content_amazonsmp_mods_details[1]}, fabric ${this.content_amazonsmp_mods_details[2]})</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Version</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                <tbody>`
            for (let i = 1; i < this.content_amazonsmp_mods_all.length; i++) {
                if (this.content_amazonsmp_mods_all[i][4] != "client") {
                //[0'name', 1'description', 2'version', 3'link'], 
                text += `<tr>
                            <td><a href="${this.content_amazonsmp_mods_all[i][3]}">${this.content_amazonsmp_mods_all[i][0]}</a></td>
                            <td>${this.content_amazonsmp_mods_all[i][2]}</td>
                            <td class="limited_big">${this.content_amazonsmp_mods_all[i][1]}</td>
                        </tr>`;
            }};
            text += `</tbody>
            </table>`;

            text += `<table>
                    <thead>
                        <tr>
                            <th colspan="3">Server Datapacks (minecraft ${this.content_amazonsmp_mods_details[1]})</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                <tbody>`
            for (let i = 1; i < this.content_amazonsmp_datapacks.length; i++) {
                //[0'name', 1'description', 2'version', 3'link'], 
                text += `<tr>
                            <td><a href="${this.content_amazonsmp_datapacks[i][3]}">${this.content_amazonsmp_datapacks[i][0]}</a></td>
                            <td>${this.content_amazonsmp_datapacks[i][2]}</td>
                            <td class="limited_big">${this.content_amazonsmp_datapacks[i][1]}</td>
                        </tr>`;
            };
            text += `</tbody></table>`;


            let text_players = `
            <h2>Players</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <!-- <th>UUID</th> -->
                            <th>Admin</th>
                            <th>Banned</th>
                        </tr>
                    </thead>
                    <tbody>
            `
            for (let i = 1; i < this.content_amazonsmp_players.length; i++) {
                //[0'name', 1'description', 2'version', 3'link'], 
                if (this.content_amazonsmp_players[i][0] == this.content_amazonsmp_players[i][1]) {
                    text_players += `<tr>
                            <td colspan="2"><a href="${this.content_amazonsmp_players[i][5]}">${this.content_amazonsmp_players[i][0]}</a></td>
                            <!-- <td>${this.content_amazonsmp_players[i][2]}</td> -->
                            <td>${this.content_amazonsmp_players[i][3]}</td>
                            <td>${this.content_amazonsmp_players[i][4]}</td>
                        </tr>`;
                } else {
                    text_players += `<tr>
                            <td><a href="${this.content_amazonsmp_players[i][5]}">${this.content_amazonsmp_players[i][0]}</a></td> 
                            <td>${this.content_amazonsmp_players[i][1]}</td>
                            <!-- <td>${this.content_amazonsmp_players[i][2]}</td> -->
                            <td>${this.content_amazonsmp_players[i][3]}</td>
                            <td>${this.content_amazonsmp_players[i][4]}</td>
                        </tr>`;
                }
            };
            text_players += `</tbody></table>`;

            document.getElementById(target_mods).innerHTML = text;
            document.getElementById(target_players).innerHTML = text_players;
        };
        
        
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

