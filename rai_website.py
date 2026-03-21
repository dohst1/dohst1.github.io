# Dohst23 - rai_website - main python script (v0.1.3)
print("\n\n\n - - - Dohst23 - - - \n\n")

dohst_error = {
    "main": "ERROR D - 0 ",

    "unknown": "1 ",
    "invalid_data": "2 ",
    "skill_issue": "3 ",
}


class rai_website():
    def __init__(self):
        while True:
            print("\n\n --- rai_website --- \n")
            mode = input("--Mode: ")

            if mode == "" or mode == "exit":
                break

            elif mode == "create array":
                self.create_new_array()

            else: print("\ninvalid input")
    
    def create_new_array(self):
        print("\n--create_new_array--")
        try:
            settings = input("-Settings (title, sub_array_count, sub_array_elements_count, [element_titles])\n : ")
            #settings = settings.split("/")
            settings = settings.split(", ", 3)
            settings[3] = settings[3][1:-1]
            settings[3] = settings[3].split(", ")
            print(settings)

            new_array = []
            new_array.append(settings[3])

            for i in range(1, int(settings[1])+1):
                print(f"\nsub array {i}:")
                while True:
                    pass_count = 0
                    sub_array = []
                    for j in range(len(settings[3])):
                        element = input(f"element {j} {settings[3][j]}: ")
                        sub_array.append(element)
                        if not element: 
                            pass_count += 1
                    if input() == "": break

                if pass_count < int(settings[2]):
                    print(f"completed: {sub_array}")
                    new_array.append(sub_array)

            print(f"-completed:\n {settings[0]} = {new_array}\n")
            print(f"{settings[0]} = [")
            for i in new_array: print(i + ", ")
            print("]")

        except TypeError: print(dohst_error["main"] + dohst_error["skill_issue"])



""" content = [
    // newest first
    // shift all (except preset) down when adding new
    [001, "name", "description", "version", "link"], // preset """

rai_website()

# as12p3
# amazonsmp, 15, 5, [name, description, version, link, required]
# amazonsmp, 33, 5, [name, description, version, link, required]


# as13p1-mods20260320, 36, 5, [name, description, version, link, required]
# as13p1-mods20260320 = [['name', 'description', 'version', 'link', 'required'], ['AmbientSounds', 'listentonature', '6.3.5', 'https://modrinth.com/mod/ambientsounds/version/JZUqW70J', 'client'], ['CreativeCore', 'A core mod', '2.14.11', 'https://modrinth.com/mod/creativecore/version/2.14.11', 'client'], ['Axiom', 'The all-in-one tool for editing Minecraft Worlds.', '5.3.0', 'https://modrinth.com/mod/axiom/version/uoTNUpOT', 'client'], ['BetterF3', "BetterF3 is a mod that replaces Minecraft's original debug HUD with a highly customizable, more human-readable HUD.", '17.0.0', 'https://modrinth.com/mod/betterf3/version/17.0.0', 'client'], ['Better Advancements', 'Better Advancements tries to improve the UI and UX for the advancements system in minecraft 1.12+ in a modded environment.', '0.4.8.51', 'https://modrinth.com/mod/better-advancements/version/wPZWTfJd', 'client'], ['Better Statistics Screen', 'A Minecraft mod that improves the statistics screen and makes it more useful.', '5.0.0-beta.6', 'https://modrinth.com/mod/better-stats/version/5.0.0-beta.6+fabric-1.21.11', 'client'], ['Distant Horizons', 'See farther without turning your game into a slide show', '2.4.5-b', 'https://modrinth.com/mod/distanthorizons/version/2.4.5-b-1.21.11', 'client'], ['Freecam', 'A highly customizable freecam mod.', '1.3.6', 'https://modrinth.com/mod/freecam/version/1.3.6+mc1.21.11', 'client'], ['Iris Shaders', 'A modern shader pack loader for Minecraft intended to be compatible with existing OptiFine shader packs', '1.10.6', 'https://modrinth.com/mod/iris/version/1.10.6+1.21.11-fabric', 'client'], ['Litematica', 'A client-side schematic mod with extra features for creative mode work', '0.26.1', 'https://modrinth.com/mod/litematica/version/0.26.1', 'client'], ['MaLiLib', "A library mod for client-side mods. Contains most of the common/shared code of masa's client mods, and adds some inter-operation support between the dependent mods.", '0.27.7', 'https://modrinth.com/mod/malilib/version/0.27.7', 'client'], ['MiniHUD', "A 'mini F3' HUD mod, also with various overlays like light level, spawn chunks, slime chunks etc.", '0.38.4', 'https://modrinth.com/mod/minihud/version/0.38.4', 'client'], ['Servux', 'Servux is a server-side mod that provides support for some client-side mods, such as sending structure bounding boxes for MiniHUD', '0.9.2', 'https://modrinth.com/mod/servux/version/0.9.2', 'server'], ['ReplayMod', 'A Minecraft Mod to record, relive and share your experience.', '2.6.25', 'https://modrinth.com/mod/replaymod/version/1.21.11-2.6.25', 'client'], ['Replay Voice Chat', 'A compatibility mod to record Simple Voice Chat with ReplayMod', '1.3.12', 'https://modrinth.com/mod/replay-voice-chat/version/fabric-1.21.11-1.3.12', 'client'], ['TCDCommons API', "TheCSDev's personal library mod for the Minecraft modding environment.", '5.0.0-beta.6', 'https://modrinth.com/mod/tcdcommons/version/5.0.0-beta.6+fabric-1.21.11', 'client'], ["Xaero's World Map", "Adds a full screen world map which shows you what you have explored in the world. Works great together with Xaero's Minimap.", '1.40.11', 'https://modrinth.com/mod/xaeros-world-map/version/fabric-1.21.11-1.40.11', 'client'], ["Xaero's Minimap", "Displays a map of the nearby world terrain, players, mobs, entities in the corner of your screen. Lets you create waypoints which help you find the locations you've marked.", '25.3.10', 'https://modrinth.com/mod/xaeros-minimap/version/fabric-1.21.11-25.3.10', 'client'], ['Entity Culling', 'Using async path-tracing to hide Block-/Entities that are not visible', '1.9.5', 'https://modrinth.com/mod/entityculling/version/Dx3xsUER', 'client'], ['No Chat Reports', 'Makes chat unreportable (where possible)', '2.18.0', 'https://modrinth.com/mod/no-chat-reports/version/Fabric-1.21.11-v2.18.0', 'both'], ['No Chat Restrictions', 'Restores access to game chat for all accounts', '1.0.0', 'https://modrinth.com/mod/no-chat-restrictions/version/Fabric-MC1.21.11-v1.0.0', 'client'], ['Sodium', 'The fastest and most compatible rendering optimization mod for Minecraft. Now available for both NeoForge and Fabric!', '0.8.6', 'https://modrinth.com/mod/sodium/version/mc1.21.11-0.8.6-fabric', 'client'], ['Fabric API', 'Lightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric toolchain.', '0.141.3', 'https://modrinth.com/mod/fabric-api/version/0.141.3+1.21.11', 'both'], ['Chunky', 'Pre-generates chunks, quickly and efficiently.', '1.4.55', 'https://modrinth.com/plugin/chunky/version/1CpEkmcD', 'server'], ['FerriteCore', 'Memory usage optimizations.', '8.2.0', 'https://modrinth.com/mod/ferrite-core/version/8.2.0-fabric', 'both'], ['Mod Menu', 'Adds a mod menu to view the list of mods you have installed.', 'v17.0.0-beta.2', 'https://modrinth.com/mod/modmenu/version/17.0.0-beta.2', 'client'], ['Text Placeholder API', 'Placeholder and Text manipulation library for your Minecraft mods.', '2.8.2', 'https://modrinth.com/mod/placeholder-api/version/2.8.2+1.21.10', 'client'], ['Lithium', 'No-compromises game logic optimization mod. Well suited for clients and servers of all kinds. Now available for Fabric and NeoForge!', '0.21.4', 'https://modrinth.com/mod/lithium/version/mc1.21.11-0.21.4-fabric', 'both'], ['Roughly Enough Items (REI)', 'Clean and Customizable. Alternative to Just Enough Items/JEI.', '12.1.785', 'https://modrinth.com/mod/rei/version/12.1.785+fabric', 'both'], ['Architectury API', 'An intermediary api aimed to ease developing multiplatform mods.', '19.0.1', 'https://modrinth.com/mod/architectury-api/version/19.0.1+fabric', 'both'], ['Cloth Config API', 'Configuration Library for Minecraft Mods.', '21.11.153', 'https://modrinth.com/mod/cloth-config/version/21.11.153+fabric', 'both'], ['Simple Voice Chat', 'A working voice chat in Minecraft.', '2.6.12', 'https://modrinth.com/plugin/simple-voice-chat/version/fabric-1.21.11-2.6.12', 'both'], ['ScalableLux', 'A Fabric mod based on Starlight that improves the performance of light updates in Minecraft.', '0.1.6', 'https://modrinth.com/mod/scalablelux/version/0.1.6+fabric.c25518a', 'both'], ['Concurrent Chunk Management Engine (Fabric)', 'A Fabric mod designed to improve the chunk performance of Minecraft.', '0.3.6.0.0', 'https://modrinth.com/mod/c2me-fabric/version/0.3.6.0.0', 'both'], ['GeyserMC fabric', 'Enable clients from Minecraft Bedrock Edition to join your Minecraft Java server.', 'Build 1099 14/03/2026', 'https://geysermc.org', 'server'], ['Floodgate fabric', 'Hybrid mode plugin to allow for connections from Geyser to join online mode servers.', '2.2.6-b54', 'https://modrinth.com/mod/floodgate/version/wzwExuYr', 'server']]

# content_amazonsmp_players, 10, 5, [name, username, uuid, admin, banned]
# a72d1775-1031-4937-9fcb-3296809ef742

# content_amazonsmp_datapacks, 35, 4, [name, description, author, link]
