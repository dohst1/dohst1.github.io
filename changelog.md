# Rai Website - changelog
### by: ///////// and dohst (all rights reserved)
### information format:
 - versions: {major}.{minor}.{patch}(-{type})(-{date})(-{name})
 - type: 'rel' or 'dev'
 - date: yyyymmdd
 - label: 'ix' 'bug' 'confirmed' 'critical' 'discussion' 'documentation' 'enhancement' 'suggestion' 'support'
 - names and words: always lower case (underscores for spaces if variable) (except public content) (mention information from macro to micro)
- version format:
## version {major} [{date_start} - {date_end}] {name}
### v{major.minor} [{date_start} - {date_end}] {name}
- #### v{major.minor.patch} [{date_release}] {type}
    - {changes}
- #### issues (check gitlab repository for up to date information)
    - v{version} [{label}] - {issues} ({status})


---



## version 0 Part 1 [20260213 - 20260223] alpha


### v0.0 [20260213] fork
    - fork of dohst aw2.2.0


### v0.1 [20260213 - 20260218] setup

- #### v0.1.0 [20260214]
    - files - removed all download files
    - files - added 'dohst23' group image as favicon (image is subject to change because it is just an ado plushie right now)
    - files - added 'rai_website' repository image as favicon and image (subject to change because it is just a copy of //////////'s profile picture since i did not know what to use)
    - files - moved all unused files to new 'unused' folder
    - files - deleted some files
    - files - added new changelog with slightly new format

- #### v0.1.1 [20260214]
    - main - added two images on the main page and credited sources
    - main - added unfinished notice
    - files - added 'main_script.js' for javascript
    - pages - removed footer and navigation bar code for all main pages (index, dohst, updates, 404), and added it to javascript classes, then ran it on every page in the same place
    - files - renamed 'images' folder to 'assets'
    - files - deleted some more unused files
    - updates - deleted some content

- #### issues
    - none / unknown


### v0.2 [20260218 - 20260220] alpha
- #### v0.2.02-0260220
    - files - updated changelog
    - script - added '"use strict";' for strict mode
    - script - reformated the code
    - script - added options for custom navbar active button
    - pages - reformated headers for main pages
    - pages - updated 404 page
    - files - rearranged some files
    - style - renamed the main file to "main_style.css"
    - style - updated color scheme to be neutral by default
    - style - updated some styles (mainly added border on navbar)

- #### v0.2.1-20260220
    - files - updated changelog
    - files - deleted everything from 'information' folder except 'main.html', 'rules.html' and 'updates.html'
    - files - moved 'main.html', 'rules.html' and 'updates.html' to root directory
    - pages - added new formatting to 'main.html', 'rules.html' and 'updates.html'
    - files - deleted 'information' folder
    - script - added function to load sidebar for information pages
    - some other small changes

- #### v0.2.2-20260220
    - files - updated changelog
    - pages - updated 404 page list
    - none

- #### v0.2.3-20260221
    - files - updated changelog
    - style - updated css
    - pages - updated main page
    - pages - updated all footers
    - pages - added new footer for information pages

- #### v0.2.4-20260222
    - files - updated changelog
    - pages - removed '### `<<< © 2026 Dohst >>>`' text from copyright notice
    - pages - finished updates section for information page
    - script - added fade function to fade in update information when object is clicked
    - script - added function to fill updates sections
    - pages - updated 'report / request' section on information page
    - pages - updated 'credit' section on information page
    - style - lots of small updates
    - style - added classes 'fade' 'fade_in' for fade animation
    - style - updated styling for small windows (for navbar now title stops being displayed and buttons are centered)
    - script - added a function 'recombine_string' to recombine the split strings when generating navbar and sidebar content
    - pages - removed sidebar from information pages
    - pages - removed unneeded content on home page
    - pages - removed all old updates on updates page
    - pages - reformated all pages to new format
    - files - some other changes

- #### v0.2.5-20260222
    - files - updated changelog
    - script - added 'sort_updates()' function to sort updates array in reverse date order
    - script - made updates array global and added dohst errors
    - style - fixed bug where link text in button is hard to see when hovering (now normal)
    - pages - reformated dohst page (removed old content and added links)
    - pages - added profile picture to dohst page
    - style - added two new style classes 'leftside' and 'rightside' used for making elements parallel 

- #### v0.2.6-20260223
    - files - updated changelog
    - style - added dropdown menu for color switching
    - style - added a total of 8 useable color schemes
    - script - added function for color switching functionality (the color is saved as a local variable in the client browser (unfortunately), but it allows reloading and page switching without losing color setting)
    - script - added function to make dropdown menu work (just adds/removes element classes)
    - script - added an initialise function to avoid script spamming in html files (since most functions have to be executed on every page) 
    - style - had to add a few classes to make the new features work
    - pages - added some content (that i commented) to contact page
    - script - added function which displays all updates (using my span format)
    - pages - added usernames to links on dohst page
    - files - removed blue lycoris art
    - files - renamed 'ado_plushie_square.ico' to 'favicon.ico' 
    - files - added dohst profile picture (herta kurukuru)
    - pages - removed references to blue lycoris art
    - pages - made the home page only have a stretched out version of ado plushie picture (stretching is intentional)

- #### v0.2.7-20260223
    - files - updated changelog
    - script - updated dohst errors
    - files - added products page
    - style - added an option to toggle color style (darkness) (changes lightness and saturation of original)
    - script - added an event check to allow color style toggle to work
    - pages - updated ado plushie image description
    - pages - removed color switching buttons from all except main information page
    - style - small changes
    - pages - added temporary products to products page
    - script - small changes
    - files - added 'products' folder
    - pages - added content to products page
    - pages - made space between navbar and main section at the top smaller for all pages

- #### issues
    - none / unknown


---



## version 0 Part 2 [20260228 - 202603//] beta


### v0.3 [20260228 - 202603//] beta
- #### v0.3.0-20260228
    - files - updated changelog
    - files - removed some pages
    - script - updated visual website title to 'dohst_website (beta)'
    - style - changed all background light colors to background dark
    - files - added dohst icon as an ico .file
    - files - swapped old ado plush icon for new dohst profile icon
    - pages - added some of the html from product pages onto the information page 
    - script - updated navbar and sidebar content
    - files - encrypted and compressed unused folder
    - pages - updates main page
    - pages - added amazonsmp section on dohst page
    - pages - commented out unused sections
    - pages - changed footer to be a paragraph instead of an address
    - files - some other small updates

- #### v0.3.1-20260301
    - files - updated changelog
    - pages - updated title to be 'dohst website'
    - script - fixed bug where color settings did not retain when switching pages
    - pages - fixed old footer link, now directs to main.html'updates
    - script - fixed incorrect date on v0.3.0 update
    - pages - updated credit section on information page
    - pages - updated dohst page
    - style - made all fonts 4 px smaller
    - style - updated style for lists

- #### v0.3.2-20260314
    - files - updated changelog
    - style - increased font size
    - style - some small changes
    - pages - added amazonsmp page
    - script - added amazonsmp page to the navbar
    - issue - fixed "v0.3.1 - font size is too small on mobile"

- #### v0.3.3-20260314
    - files - updated changelog
    - issue - fixed "v0.3.1 - should make it so clicking update descriptions again removes the description"
    - pages - updated ado plushie image on main page
    - pages - updated link to amazonsmp from main page
    - style - made border radius 10px and some small changes

- #### issues
    - v0.3.1 - font size is too small on mobile (fixed in v0.3.2)
    - v0.3.1 - main icon not showing even when enough space is available (moved to v0.3.3)
    - v0.3.1 - should make it so clicking update descriptions again removes the description (fixed in v0.3.3)


### v0.4 []
- #### v0.4.0-20260314
    - none

- #### issues
    - none


### v0.5 []
 - none


---



## updates overview

### 2026 (4 update)
 - v0.0 febraury 13 - fork
 - v0.1 february 14 - setup
 - v0.2 february 23 - alpha
 - v0.3 february 28 - beta
 - v0.4 march // - 
