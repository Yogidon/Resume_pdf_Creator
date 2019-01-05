function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
var countries = [
    "Traveling","3D printing", "amateur radio", "scrapbook", "Amateur radio", "Acting", "Baton twirling", "Board games", "Book restoration", "Cabaret", "Calligraphy", "Candle making", "Computer programming", "Coffee roasting", "Cooking", "Coloring", "Cosplaying", "Couponing", "Creative writing", "Crocheting", "Cryptography", "Dance", "Digital arts", "Drama", "Drawing", "Do it yourself", "Electronics", "Embroidery", "Fashion", "Flower arranging", "Foreign language learning", "Gaming", "tabletop games", "role-playing games", "Gambling", "Genealogy", "Glassblowing", "Gunsmithing", "Homebrewing", "Ice skating", "Jewelry making", "Jigsaw puzzles","Art & Craft", "Juggling", "Knapping", "badminton",'Knitting', "Kabaddi", "Knife making", "Lacemaking", "Leather crafting", "Lego building", "Lockpicking", "Machining", "Metalworking", "Magic", "Model building", "Listening to music", "Origami", "Painting", "Playing musical instruments", "Pet", "Pottery", "Puzzles", "Quilting", "Reading", "Scrapbooking", "Sculpting", "Sewing", "Singing", "Sketching", "Soapmaking", "Sports", "Stand-up comedy", "Sudoku", "Table tennis", "Video gaming", "Watching movies", "Web surfing", "Whittling", "Wood carving", "Woodworking", "Writing","Yoga","Yo-yoing","Air sports","Archery","Astronomy","Backpacking","BASE jumping","Baseball","Basketball","Beekeeping","Bird watching","Blacksmithing","Board sports","Bodybuilding" ,"jiu-jitsu","Community","Cycling","Dowsing","Driving","Fishing","Football","Flying disc","Foraging","Gardening","Geocaching","Ghost hunting","Graffiti","Handball","Hiking","Hooping","Horseback riding","Hunting","Inline skating","Jogging","Kayaking","Kite flying","Kitesurfing","LARPing","Letterboxing","Metal detecting","Motor sports","Mountain biking","Mountaineering",'Mushroom hunting',"Mycology","Netball","Nordic skating","Orienteering","Paintball","Parkour",'Photography',"Polo","Rafting",'Rappelling',"Rock climbing",'Roller skating','Rugby','Running',"Sailing","Sand art","Scouting","Scuba diving","Sculling","Rowing","Shooting","Shopping","Skateboarding","Skiing","Skimboarding","Skydiving","Slacklining","Snowboarding","Stone skipping","Surfing","Swimming","Taekwondo","Tai chi","Urban exploration","Vacation","Vehicle restoration","Water sports"
];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("hobbies1"), countries);
autocomplete(document.getElementById("hobbies2"), countries);
autocomplete(document.getElementById("hobbies3"), countries);