"use strict";
/* Dohst23 - rai_website - main javascript */



// variables
const dohst23 = {'creator': 'Dohst23', 'project': 'rai_website', 'project_part': 'main javascript', 'version': '4.3.2-20260425', 'dohst_error': {
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
        // 20260414 - 230023 (Dohst): what do you mean
        
        let text = this.content["sidebar"].split("|");
        if (!title) {text[0] = "";};

        document.getElementById("sidebar").innerHTML = "<br><br>" + this.recombine_string(text, placement);
    },
    
    set_color_button: function set_footer() {document.getElementById("set_color").innerHTML = this.content["color_button"]},

};



// amazonsmp
let DohstAmazonsmp = {

    content: {
        // from dds3
        // 20260424
        "players": [['02 name surname username', '03 namemc uuid', '05 tag', '07 banned , date time reason, ...', '08 link', ], 
            //['unknown unknown unknown', 'unknown unknown', 'inactive', 'no, 20260320 0 none', 'unknown', ], 
            ['Dohst23', 'Dohst0 a72d1775-1031-4937-9fcb-3296809ef742', 'creator', 'no, 20260320 0 none', 'https://github.com/dohst1', ], 
            ['Secret7', 'Secret7 73045442-ec92-419c-a10c-d8efdab5f555', 'admin', 'no, 20260320 0 none', 'unknown', ], 
            ['CookieLotty12', 'CookieLotty12 193df712-49dd-4bd1-a21d-09cc6f953bd9', 'original', 'no, 20260320 0 none', 'unknown', ], 
            ['Tackzs', 'Tackzs d105fc83-6c49-4bfe-b8a3-0735cee598b4', 'admin', 'no, 20260320 0 none', 'unknown.html', ], 
            ['WhatCheeseburger', 'WhatCheeseburger 438f0db2-ad4f-44d8-8d21-2bbb5600e676', 'admin', 'no, 20260320 0 none', 'https://www.youtube.com/@whatcheeseburgertv', ], 
            ['MandoEAM', 'MandoEAM 9df74492-2311-483f-9f8b-4ba35d9af733', 'admin', 'no, 20260320 0 none', 'https://www.youtube.com/@MandoEAM', ], 
            ['ATAT66', 'ATAT66 0ca533c1-e6a6-486a-86d0-aabe670031b4', 'original', 'no, 20260320 0 none', 'unknown', ], 
            ['GappleJ', 'ImGapplejuice c50ab55c-a3b1-42e5-b2d5-772ddc3f5584', 'member', 'no, 20260320 0 none', 'unknown', ], 
            ['dannygpr', 'Danny_GPR 33a86567-4671-4bfe-b0cd-37d957c0d63a', 'member', 'no, 20260320 0 none', 'https://youtube.com/@danny_gpr', ], 
            ['unknown', 'Ilikekittensone b0c9a712-0db0-4f23-9e25-128e259f8223', 'member', 'no, 20260320 0 none', 'unknown', ], 
            ['lily_mjr', '.Lily_mjr 00000000-0000-0000-0009-01f6b26e63a3', 'admin', 'no, 20260320 0 none', 'unknown', ], 
            ['unknown', 'Madhatters33 666a4058-85ba-4755-bec0-de7d652493ab', 'inactive', 'no, 20260320 0 none', 'unknown', ], 
            ['cloopyster', '.Cloopyster 00000000-0000-0000-0009-01f438621ed5', 'member', 'no, 20260320 0 none', 'unknown', ], 
            ['UnkownPoint', 'UnkownPoint b00b9fdd-eb7a-446c-bd56-5aba5d0784a6', 'member', 'no, 20260320 0 none', 'unknown', ], 
            ['unknown', 'VaJdSvr25 1de8104f-23a9-4466-81a6-b62b265ccd11', 'inactive', 'no, 20260320 0 none', 'unknown', ], 
            ['unknown', 'FresherBerry686 unknown', 'inactive', 'no, 20260320 0 none', 'unknown', ], 
            ['unknown', 'unknown unknown', 'inactive', 'no, 20260320 0 none', 'unknown', ], 
            ['haru', 'pikapud1801 652b2374-6425-4fab-b5e1-9f672653b9b2', 'inactive', 'no, 20260320 0 none', 'unknown', ], 
            ['unknown', 'unknown unknown', 'inactive', 'no, 20260320 0 none', 'unknown', ], 
        ], 

        // NOT from dds3
        // 20260327
        "seasons": [['type', 'name', 'part', 'start', 'end', 'life', 'version', 'description', 'link'], 
            ['4', 'Season 13', 'none', '2026/03/20', 'present<!-- max 2028/02/29 -->', '&gt;35', '1.21.11 vanilla <br> (with crossplay)', 'World Download Unavailable<br><a href="assets/amazonsmp/as13p1-mods20260329-recommended.zip">Recommended Client Mods (2026/03/29) (12.5 MB)</a>', 'season13.html'], 

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
            ['2', 'Season 06', 'none', '2022/11/09', '2022/11/22', '13', '1.19.2', '<a href="https://www.mediafire.com/file/koa63zhwro7qued/season6.zip/file">World Download (94.3 MB)</a>', 'seasons_old.html#season6'], 
            ['2', 'Season 05', 'none', '2022/09/19', '2022/11/06', '48', '1.19.2', '<a href="https://www.mediafire.com/file/17sczuqf9kk5tkb/season5.zip/file">World Download (78.5 MB)</a>', 'seasons_old.html#season5'], 
            ['2', 'Season 04', 'none', '2022/08/20', '2022/09/16', '27', '1.19.0 modded', '<a href="https://www.mediafire.com/file/dgdwmcq92wgavpo/season4.zip/file">World Download (95.6 MB)</a>', 'seasons_old.html#season4'], 
            ['1', 'Season 03', 'none', '2022/06/18', '2022/08/18', '61', '1.18.2 - 1.19.2', '<a href="https://www.mediafire.com/file/evz7azbg4k07ztf/season3.zip/file">World Download (96.9 MB)</a>', 'seasons_old.html#season3'], 
            ['1', 'Season 02', 'none', '2022/05/03', '2022/06/05', '34', '1.18.1', 'Unavailable', 'seasons_old.html#season2'], 
            ['1', 'Season 01', 'none', '2022/03/16', '2022/05/02', '47', '1.18.0', 'Unavailable', 'seasons_old.html#season1'], 
            ['0', 'Seasons 00 <br> (not continuous)', 'none', '2020/03/00', '2022/03/10', 'unknown', '1.15.2 - 1.18.0', 'Unavailable', 'seasons_old.html#season0'],
        ],
        // 20260401
        "mods": [['name', 'description', 'version', 'link', 'required'], 
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
            //['GeyserMC fabric', 'Enable clients from Minecraft Bedrock Edition to join your Minecraft Java server.', 'Build 1099 14/03/2026<br>(outdated as of 2026/04/01)', 'https://geysermc.org', 'server'], 
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
            ['Simple Voice Chat', 'A working voice chat in Minecraft.', '2.6.12', 'https://modrinth.com/plugin/simple-voice-chat/version/fabric-1.21.11-2.6.12', 'both', false], 
            ['Sodium', 'The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric!', '0.8.6', 'https://modrinth.com/mod/sodium/version/mc1.21.11-0.8.6-fabric', 'client', true], 
            //['Styled Nicknames', `Simple, but configurable nicknaming mod allowing your server's players (and admins) to change their nickname with full formatting support.`, '1.11.1', 'https://modrinth.com/mod/styled-nicknames/version/1.11.1+1.21.11', 'server'], 
            ['TCDCommons API', "TheCSDev's personal library mod for the Minecraft modding environment.", '5.0.0-beta.6', 'https://modrinth.com/mod/tcdcommons/version/5.0.0-beta.6+fabric-1.21.11', 'client'], 
            ['Text Placeholder API', 'Placeholder and Text manipulation library for your Minecraft mods.', '2.8.2', 'https://modrinth.com/mod/placeholder-api/version/2.8.2+1.21.10', 'client'], 
            ['ViaBackwards', 'Allow older Java Edition clients to connect to newer servers.', '5.7.2', 'https://modrinth.com/plugin/viabackwards/version/5.7.2', 'server'],
            ['ViaFabric', 'Allows to connect to older servers with older versions.', '5.7.2', 'https://modrinth.com/mod/viafabric/version/0.4.21+139-1.14-1.21', 'both', false],
            ['ViaVersion', 'Allow newer Java Edition clients to connect to older servers.', '5.7.2', 'https://modrinth.com/plugin/viaversion/version/5.7.2', 'server'],
            ["Xaero's Minimap", "Displays a map of the nearby world terrain, players, mobs, entities in the corner of your screen. Lets you create waypoints which help you find the locations you've marked.", '25.3.10', 'https://modrinth.com/mod/xaeros-minimap/version/fabric-1.21.11-25.3.10', 'client', true], 
            ["Xaero's World Map", "Adds a full screen world map which shows you what you have explored in the world. Works great together with Xaero's Minimap.", '1.40.11', 'https://modrinth.com/mod/xaeros-world-map/version/fabric-1.21.11-1.40.11', 'client', true], 
        ],
        // 20260327
        "datapacks": [['name', 'description', 'author', 'link'], 
            ['afk display', "Changes a player's name color if they havent moved for over 5 minutes.", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['age lock', "Adds the ability to lock a mob's age using a name tag. 'Age lock', 'age lock', 'age_lock' are all acceptable names.", '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['armor statues', 'Adds a unique book that allows you to alter the properties of armor stands in survival.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['armored elytra', 'Drop an elytra and a chestplate on an anvil to merge them into one item. Drop the item above a grindstone to separate them again.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['cauldron concrete', 'Drop concrete powder into a water cauldron to instantly harden all of it.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['cauldron mud', 'Drop dirt into a water cauldron to instantly convert all of it into mud.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['classic fishing loot', 'Reverts the fishing look back to its per 1.16 loot table.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['coordinates hud', 'Adds information to your action bar. xyz coordinates and a 24 hour clock.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['custom nether portals', 'Ignite Nether portals of any shape and size you like, or use crying obsidian in the portal frame.', '<a href="https://vanillatweaks.net">VanillaTweaks</a>', 'https://vanillatweaks.net/picker/datapacks/'], 
            ['dohst enhancements', 'Makes netherite uncraftable (not after 2026/04/02), makes armor trim recipes cheaper, increases the build height in the nether, and more.', '<a href="https://github.com/dohst1">Dohst</a>', 'dohst.html#datapacks'],
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
            ['no ender eye (v2.2)<br>(Removed on 2026/04/02)', 'Makes eyes of ender uncraftable.', '<a href="https://github.com/dohst1">Dohst</a>', 'dohst.html#datapacks'], 
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

        // 20260327
        "details": {
            "versions": // season code, minecraft version, fabric version, fabric api version
                ["as13p1", "1.21.11", "0.18.4", "0.141.3"],
            "seasons": [['title', 'name', 'start', 'end', 'types'], 
                ['Really Old Worlds', 'seasons_really_old', '2022/03/00', '2023/02/28', '0 1 2'],
                ['Old Worlds', 'seasons_old', '2023/03/00', '2026/02/28', '3'], 
                ['New Worlds', 'seasons_new', '2026/03/00', 'Present<!-- 2028/02/29 -->', '4'], 
            ],

        },

        // 20260327
        "description": {
            "about": [
                `AmazonSMP is a private Minecraft server hosted by <a href="https://github.com/dohst1">Dohst</a>. This page is intended to be used only by current or past AmazonSMP Members.`,
                `Click on each section and subsection title (or table headers) to show or hide its content.`,
                `New: Pages for Season 13, Season 12, Season 11, Season 10, Season 09, Really Old Seasons, and Temporary Seasons have been updated with new links and format.`,
                //`New: The Information section has been updated.`,
                //`New: Links and details about ViaProxy and GeyserMC have been added.`,
                //`NEW: <a href="#rules_community">A Community Code of Conduct and General Rules have been added to the Rules section.</a>`,
                //`New: Pages with more details for each season have been added. You can find links to them from the season tables below (click on the season name).`,
                `Season 12 Part 3 has ended, you can find downloads and other information below.`,
            ],
            "seasons": [
                //`Season 12 Part 3 was compressed using <a href="https://www.7-zip.org">7zip</a> (you can extract it without downloading 7zip if you have another software which can unzip files).`,
                //`Seasons Parts which are not '1' have parts of their worlds which are not from the original seed, meaning that chunk boundaries may have weird generation.`,
                `Please note that some of the really old seasons (before 2023/03) may have incorrect dates and information.`,
                `'Unavailable' downloads for Season 1 and Season 2 (and Temporary Seasons) will not become available since the world files were not saved.`,
                //`Downloads (for world and mods) for the current Season will be updated every Sunday at around 22:00 UTC (These are temporary downloads and will be deleted once a new set is added).`,
                `All downloads are linked to <a href="https://www.mediafire.com">MediaFire</a>, or directly to this website.`,
            ],
            "mods": [
                `Geyser-Fabric is no longer used on the server. Instead, <a href="https://geysermc.org/download">Geyser-ViaProxy</a> is used on <a href="https://github.com/ViaVersion/ViaProxy">ViaProxy</a>, which is technically a separate program from the server. Please check <a href="#proxy">the ViaProxy section</a> for more information.`,
                `There are no required mods this season, you can join with a vanilla client. However, i recommend that you use at least the mods listed in the 'Recommended Mods' table (If you are not on 1.21.11, then you can use <a href="https://modrinth.com/mod/viafabric">ViaFabric</a> to join).`,
                `All mods are for <a href="https://fabricmc.net">the Fabric mod loader</a>, and each mod is made by its respective creator (which can be found on the modrinth page of that mod).`,
                `All mods are linked to <a href="https://modrinth.com">Modrinth</a>, except for GeyserMC which is linked to <a href="https://geysermc.org">GeyserMC</a>.`,
            ],
            "viaproxy": [
                `Link: <a href="https://github.com/ViaVersion/ViaProxy">https://github.com/ViaVersion/ViaProxy</a>`,
                `Description (from github): Standalone proxy which allows players to join EVERY Minecraft server version (Classic, Alpha, Beta, Release, Bedrock)`,
                `This proxy is used with <a href="https://geysermc.org">GeyserMC</a> and <a href="https://modrinth.com/mod/floodgate/version/wzwExuYr">Floodgate</a> to allow bedrock clients (who are on the latest minecraft version) join the server (which is on minecraft 1.21.11). <a href="https://geysermc.org/download">Geyser-ViaProxy</a> is used on <a href="https://github.com/ViaVersion/ViaProxy">ViaProxy</a>, which is technically a separate program from the server. However, because this is all still server sided, bedrock players will be able to join as they did before without any differences.`,
                `<a href="https://github.com/ViaVersion/ViaProxy">This program is NOT made by me, all credit for this goes to the developers on the github page</a>.`,
            ],
            "downloads": [
                `Worlds`,
                `Go to <a href="amazonsmp.html#links">the Seasons section</a> and download the 'World Download' for the season you want.`,
                `After it finishes downloading, extract the zip file, and move the new folder to your Minecraft saves folder (usually located at "%appdata%\.minecraft\saves").`,
                `Make sure the world folder inside of the 'saves' folder has a file called 'level.dat' (if it instead has another folder, then move the contents of that folder into the world folder (which should be in the 'saves' folder)).`,
                `When you open Minecraft it should be in your singleplayer worlds.`,
                `It is highly recommended that you play on the original version of that world with the same mods and datapacks.`,

                /* `Mods`,
                `Go to <a href="amazonsmp.html#links">the Seasons section</a> and download the mods you want.`,
                `If you have not already, download Fabric from <a href="https://fabricmc.net">the FabricMC website</a>, and install it on your client for the minecraft and fabric version required.`,
                `After the mods have finished downloading, extract the zip file, and move all the .jar files directly into your Minecraft client's mods folder (usually located at '%appdata%/.minecraft/mods').`,
                ``, */
            ],

        },

    },


    set_seasons: function (text_seasons = ``) {
        let type = 4;
        let parts = 0;
        let last = this.content["seasons"][0];
        for (let i = 1; i < this.content["seasons"].length; i++) {
            for (let j = 0; j < this.content["seasons"][0].length; j++) {
                if (this.content["seasons"][i][j] == "") {
                    this.content["seasons"][i][j] = last[j];
                };
            };

            if (this.content["seasons"][i][0] != last[0]) {
                type--;
                if (type < 0) {break;} else if (type != 0 && type != 3) {text_seasons += `</tbody></table>`;};
                // content_amazonsmp["details"]["seasons"] [0'title', 1'name', 2'start', 3'end', 4'types']
                if (type != 0) {
                    text_seasons += `
                        <table>
                        <thead id="${this.content["details"]["seasons"][type][1]}-header">
                            <tr>
                                <th colspan="5"><!-- Type ${this.content["details"]["seasons"][type][4]} -  -->${this.content["details"]["seasons"][type][0]} (${this.content["details"]["seasons"][type][2]} - ${this.content["details"]["seasons"][type][3]})</th>
                            </tr>
                            <tr>
                                <th colspan="2" style="min-width: 220px;">Name</th>
                                <th>Start Date - End Date (Lifetime)</th>
                                <th>Version</th>
                                <th>Links</th>
                            </tr>
                        </thead>`;
                    if (type == 1) { // was |= 3
                        text_seasons += `<tbody id="${this.content["details"]["seasons"][type][1]}" class="fade_none">`;
                    } else {
                        text_seasons += `<tbody id="${this.content["details"]["seasons"][type][1]}">`;
                    }
                };
            };

            // content_amazonsmp["seasons"] [0'type', 1'name', 2'part', 3'start', 4'end', 5'life', 6'version', 7'description', 8'link']
            text_seasons += `<tr>`
            if (this.content["seasons"][i][2] == 'none') {
                text_seasons += `<td rowspan="1" colspan="2"><a href="${this.content["seasons"][i][8]}">${this.content["seasons"][i][1]}</a></td>`
                parts++
            } else if (parts != 0) {
                text_seasons += `<td><a href="${this.content["seasons"][i][8]}">${this.content["seasons"][i][2]}</a></td>`
            } else if (this.content["seasons"][i][2] == 'Part 3') {
                parts = 3;
                text_seasons += `<td rowspan="3" colspan="1"><a href="${this.content["seasons"][i][8]}">${this.content["seasons"][i][1]}</a></td><td><a href="${this.content["seasons"][i][8]}">Part 3</a></td>`
            } else if (this.content["seasons"][i][2] == 'Part 2' || this.content["seasons"][i][2] == 'After 528') {
                parts = 2;
                text_seasons += `<td rowspan="2" colspan="1"><a href="${this.content["seasons"][i][8]}">${this.content["seasons"][i][1]}</a></td><td><a href="${this.content["seasons"][i][8]}">${this.content["seasons"][i][2]}</a></td>`
            }
            parts--;

            text_seasons += `<td>${this.content["seasons"][i][3]} - ${this.content["seasons"][i][4]} <br> (${this.content["seasons"][i][5]} days)</td>
                <td>${this.content["seasons"][i][6]}</td>
                <td class="limited_big">${this.content["seasons"][i][7]}</td>
            </tr>`;

            last = this.content["seasons"][i];
        };
        text_seasons += `</tbody></table>`;
        return text_seasons;
    },


    set_recommended: function (text_mods = ``) {
        text_mods += `
        <table>
        <thead id="links_recommended-header">
        <tr>
        <th colspan="3">Recommended Client Mods (minecraft ${this.content["details"]["versions"][1]}, fabric ${this.content["details"]["versions"][2]})</th>
        </tr>
        <tr>
        <th>Name</th>
        <th>Version</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody id="links_recommended">`;
        for (let i = 1; i < this.content["mods"].length; i++) {
            if (this.content["mods"][i][5]) {
                //[0'name', 1'description', 2'version', 3'link'], 
                text_mods += `<tr>
                <td><a href="${this.content["mods"][i][3]}">${this.content["mods"][i][0]}</a></td>
                <td>${this.content["mods"][i][2]}</td>
                <td class="limited_big">${this.content["mods"][i][1]}</td>
                </tr>`;
            }};
            text_mods += `</tbody>
        </table>`;
        return text_mods;
    },

    set_mods: function (text_mods = ``) {
        text_mods += `<table>
        <thead id="links_server-header">
        <tr>
        <th colspan="3">Server Mods (minecraft ${this.content["details"]["versions"][1]}, fabric ${this.content["details"]["versions"][2]})</th>
        </tr>
        <tr>
        <th>Name</th>
        <th>Version</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody id="links_server">` //  class="fade_none"
        for (let i = 1; i < this.content["mods"].length; i++) {
            if (this.content["mods"][i][4] != "client") {
                //[0'name', 1'description', 2'version', 3'link'], 
                text_mods += `<tr>
                <td><a href="${this.content["mods"][i][3]}">${this.content["mods"][i][0]}</a></td>
                <td>${this.content["mods"][i][2]}</td>
                <td class="limited_big">${this.content["mods"][i][1]}</td>
                </tr>`;
        }};
        text_mods += `</tbody>
        </table>`;
        return text_mods;
    },

    set_datapacks: function (text_mods = ``) {
        text_mods += `<table>
        <thead id="links_datapacks-header">
        <tr>
        <th colspan="3">Server Datapacks (minecraft ${this.content["details"]["versions"][1]})</th>
        </tr>
        <tr>
        <th>Name</th>
        <th>Author</th>
        <th>Description</th>
        </tr>
        </thead>
        <tbody id="links_datapacks">` // class="fade_none"
        for (let i = 1; i < this.content["datapacks"].length; i++) {
            //[0'name', 1'description', 2'version', 3'link'], 
            text_mods += `<tr>
            <td><a href="${this.content["datapacks"][i][3]}">${this.content["datapacks"][i][0]}</a></td>
            <td>${this.content["datapacks"][i][2]}</td>
            <td class="limited_big">${this.content["datapacks"][i][1]}</td>
            </tr>`;
        };
        text_mods += `</tbody></table>`;
        return text_mods;
    },

    set_players: function (text_players = ``) {
        text_players = `
            <table>
                <thead id="link_players-header">
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>UUID</th>
                        <th>Admin</th>
                        <th>Banned<!-- <br>(currently banned, last ban date, <br>length in days, reason) --></th>
                    </tr>
                </thead>
                <tbody id="link_players">`

        for (let i = 1; i < this.content["players"].length; i++) {
            // [['02 name surname username', '03 namemc uuid', '05 tag', '07 banned , date time reason, ...', '08 link', ], 
            let name = this.content["players"][i][0]//.split(" ")[0] // 2
            let username = this.content["players"][i][1].split(" ")[0]
            let uuid = this.content["players"][i][1].split(" ")[1]
            let link = this.content["players"][i][4]
            let admin = this.content["players"][i][2]
            let banned = this.content["players"][i][3]

            if (name == username) {
                text_players += `<tr>
                        <td colspan="2"><a href="${link}">${name}</a></td>`;
            } else {
                text_players += `<tr>
                        <td><a href="${link}">${name}</a></td> 
                        <td>${username}</td>`
            }
            text_players += `<td>${uuid}</td>`
            if (admin == "admin" || admin == "creator"/* admin == "3" */) {
                text_players += `<td>yes</td>`
            } else {
                text_players += `<td>no</td>`
            }
            text_players += `<td>${banned}</td>
                </tr>`;
        };
        text_players += `</tbody></table>`;
        return text_players;
    },

    set_mods_description: function (text_mods = ``) {
        for (let i = 0; i < this.content["description"]["mods"].length; i++) {
            text_mods += `<p>${this.content["description"]["mods"][i]}</p>`
        };
        return text_mods;
    },
    set_seasons_description: function (text_seasons = ``) {
        for (let i = 0; i < this.content["description"]["seasons"].length; i++) {
            text_seasons += `<p>${this.content["description"]["seasons"][i]}</p>`
        };
        return text_seasons;
    },

    set_proxy: function (text_proxy = ``) {
        for (let i = 0; i < this.content["description"]["viaproxy"].length; i++) {
            text_proxy += `<p>${this.content["description"]["viaproxy"][i]}</p>`
        };
        return text_proxy;
    },

    set_downloads: function (text_downloads = ``) {
        for (let i = 0; i < this.content["description"]["downloads"].length; i++) {
            text_downloads += `<p>${this.content["description"]["downloads"][i]}</p>`
        };
        return text_downloads;
    },

    // about
    


    set_amazonsmp: function (options = "all", targets = [2, "about", "seasons", "mods", "players", "proxy", "downloads"]) {
        // targets are the elements which you want the content to be printed in, index 1 is for mods, and index 2 is for players
        // options can be: 'seasons' 'players' 'datapacks' 'server' 'recommended' 'mods' 'all', if multiple, separate each with a space ' '

        let text_seasons = ``;
        let text_mods = ``;
        let text_players = ``;
        let text_proxy = ``;
        let text_downloads = ``;

        let text_about = ``;
        for (let i = 0; i < this.content["description"]["about"].length; i++) {text_about += `<p>${this.content["description"]["about"][i]}</p>`;};

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
                text_proxy = ``;
                text_downloads = ``;
                text_seasons += this.set_seasons();
                text_mods += this.set_recommended();
                text_mods += this.set_mods();
                text_mods += this.set_datapacks();
                text_players += this.set_players();
                text_mods += this.set_mods_description();
                text_proxy += this.set_proxy();
                text_downloads += this.set_downloads();
                text_seasons += this.set_seasons_description();
                document.getElementById(targets[1]).innerHTML = text_about;
                document.getElementById(targets[2]).innerHTML = text_seasons;
                document.getElementById(targets[3]).innerHTML = text_mods;
                document.getElementById(targets[4]).innerHTML = text_players;
                document.getElementById(targets[5]).innerHTML = text_proxy;
                document.getElementById(targets[6]).innerHTML = text_downloads;
                break;
            } else if (options[i] == "mods") {
                text_mods += this.set_recommended();
                text_mods += this.set_mods();
                text_proxy += this.set_proxy();
                text_mods += this.set_mods_description();
                document.getElementById(targets[3]).innerHTML = text_mods;
                document.getElementById(targets[5]).innerHTML = text_proxy;
            } else if (options[i] == "players") {
                text_players += this.set_players();
                document.getElementById(targets[4]).innerHTML = text_players;
            } else if (options[i] == "datapacks") {
                text_mods += this.set_datapacks();
                document.getElementById(targets[3]).innerHTML = text_mods;
                //set_mods_description()
            } /* else if (options[i] == "seasons") {
                set_seasons();
                set_seasons_description()
            } else if (options[i] == "recommended") {
                set_recommended();
                set_mods_description()
            } else if (options[i] == "server") {
                set_mods();
                set_descriptions()
                set_mods_description()
            }; */
            last = options[i];
        };
        
    },
    
};



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


