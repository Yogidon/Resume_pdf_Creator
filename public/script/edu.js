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

const degree = [
    "A.A.",
    "A.A.&Q.M.G.",
    "A.A.A",
    "A.A.A.",
    "A.A.G.",
    "A.A.O.N.M.S.",
    "A.B.",
    "A.B.C.",
    "A.C.",
    "A.C.A.",
    "A.C.B.A.",
    "A.C.C.O.",
    "A.C.D.",
    "A.C.I.S.",
    "A.C.P.",
    "A.C.T.R.A.",
    "A.D.C.",
    "A.D.M.S.",
    "A.F.&A.M.",
    "A.F.C.",
    "A.F.L.",
    "A.F.M.",
    "A.F.P.",
    "A.F.T.R.A.",
    "A.I.A.",
    "A.I.A.",
    "A.I.C.B.",
    "A.I.C.E.",
    "A.I.Ch.E.",
    "A.I.I.A.",
    "A.I.I.C.",
    "A.I.M.E.",
    "A.I.S.A.",
    "A.L.A.",
    "A.L.H.C.",
    "A.M.",
    "A.M.C.",
    "A.M.C.T.",
    "A.M.P.",
    "A.Mus.",
    "A.O.C.",
    "A.O.C.A.",
    "A.O.C.A.D.",
    "A.O.C.-in-C.",
    "A.O.E.",
    "A.P.E.O.",
    "A.P.R.",
    "A.Q.M.G.",
    "A.R.A.",
    "A.R.A.M.",
    "A.R.C.A.",
    "A.R.C.C.O.",
    "A.R.C.O.",
    "A.R.C.S.",
    "A.R.C.T.",
    "A.R.I.B.A.",
    "A.R.S.M.",
    "A.S.A.",
    "A.S.C.",
    "A.S.H.R.A.E.",
    "A.S.L.A.",
    "A.T.C.M.",
    "A.U.C.C.",
    "A.V.C.M.",
    "A/V/M",
    "Acad.",
    "Acc.FM.",
    "ACCME",
    "ACCUTE",
    "Adeund.",
    "Ad.E.",
    "Adjt.",
    "Adm.",
    "Admin.",
    "Adv.Dip.Sw",
    "Ag.del’U.(Paris)",
    "Ag.dePhil.",
    "Agron.",
    "Alta.",
    "Anat.",
    "AOAIEA",
    "Art.Dip.Mus.",
    "Arty.",
    "ASL",
    "Atty.",
    "b.",
    "B.A.",
    "B.A.&Sc.",
    "B.A.(Ph.)",
    "B.A.A.",
    "B.A.Econ.",
    "B.A.Ed.",
    "B.A.O.",
    "B.A.P.",
    "B.A.R.",
    "B.A.S.",
    "B.A.Sc.",
    "B.Arch.",
    "B.ArtsSc.",
    "B.B.A.",
    "B.B.C.",
    "B.B.M.",
    "B.Bibl.",
    "B.C.",
    "B.C.D.",
    "B.C.E.",
    "B.C.L.",
    "B.C.S.",
    "B.Ch.,B.Chir.",
    "B.Ch.E.",
    "B.Chr.Ed.",
    "B.Com.,B.Comm.",
    "B.D.",
    "B.D.C.",
    "B.D.S.",
    "B.Des.",
    "B.Div.",
    "B.E.",
    "B.E.D.S.",
    "B.E.E.",
    "B.E.F.",
    "B.E.P.",
    "B.E.S.",
    "B.E.Sc.",
    "B.Ec.",
    "B.Ed.",
    "B.enPh.",
    "B.enSc.Com.",
    "B.Eng.",
    "B.èsA.",
    "B.èsL.",
    "B.èsSc.",
    "B.èsSc.App.",
    "B.F.",
    "B.F.A.",
    "B.G.S.",
    "B.H.E.",
    "B.H.K.",
    "B.H.Sc.",
    "B.I.D.",
    "B.I.S.",
    "B.J.",
    "B.J.C.",
    "B.L.",
    "B.L.A.",
    "B.L.S.",
    "B.Litt.",
    "B.M.",
    "B.M.E.",
    "B.M.V.",
    "B.Math.",
    "B.Mgmt.",
    "B.Mus.",
    "B.N.",
    "B.N.A.",
    "B.P.A.",
    "B.P.E.",
    "B.P.H.E.",
    "B.P.R.",
    "B.Paed.,B.Péd.",
    "B.Ph.",
    "B.Q.",
    "B.R.E.",
    "B.S.",
    "B.S.A.,B.Sc.A.",
    "B.S.B.A.",
    "B.S.C.E.",
    "B.S.E.E.,B.Sc.E.E.",
    "B.S.Ed.,B.S.E.",
    "B.S.F.",
    "B.S.M.E.",
    "B.S.N.",
    "B.S.P.",
    "B.S.S.",
    "B.S.T.",
    "B.S.W.",
    "B.Sc.",
    "B.Sc.A.",
    "B.Sc.Agr.",
    "B.Sc.Com.",
    "B.Sc.D.",
    "B.Sc.Eng.",
    "B.Sc.F.,B.S.F.",
    "B.Sc.Kin.",
    "B.Sc.N.,B.S.N.",
    "B.Sc.Phm.",
    "B.Sc.Soc.",
    "B.Soc.Sc.",
    "B.T.",
    "B.T.,B.Th.",
    "B.Tech.",
    "B.V.A.",
    "B.V.Sc.",
    "B.W.I.",
    "Bacc.",
    "Barr.",
    "Bart.",
    "Batty.",
    "Bgde.",
    "Bn.",
    "Bot.",
    "Brig.",
    "Brig.-Gen.",
    "Bt.",
    "by-el.",
    "(C)",
    "C.inC.",
    "C.ofC.",
    "C.ofE.",
    "C.A.",
    "C.A.A.",
    "C.A.A.A.",
    "C.A.A.P.",
    "C.A.C.E.",
    "C.A.D.C.",
    "C.A.E.",
    "C.A.F.A.D.",
    "C.A.M.C.",
    "C.A.P.",
    "C.A.P.C.",
    "C.A.S.C.",
    "C.A.S.W.",
    "C.A.T.M.",
    "C.A.U.T.",
    "C.B.",
    "C.B.C.",
    "C.B.C.P.",
    "C.B.E.",
    "C.B.S.E.",
    "C.B.V.",
    "C.Biol.",
    "C.C.",
    "C.C.E.",
    "C.C.F.P.",
    "C.C.H.S.E.",
    "C.C.L.",
    "C.C.O.",
    "C.Cri.",
    "C.D.",
    "C.Dir.",
    "C.E.",
    "C.E.C.",
    "C.E.F.",
    "C.E.N.",
    "C.E.O.",
    "C.E.R.A.",
    "C.E.S.",
    "C.E.S.A.",
    "C.E.S.O.",
    "C.Eng.",
    "C.F.A.",
    "C.F.E.",
    "C.F.L.",
    "C.F.O.",
    "C.F.P.",
    "C.F.R.E.",
    "C.G.A.",
    "C.G.F.M.",
    "C.H.",
    "C.H.A.",
    "C.H.E.",
    "C.H.F.C.,Ch.F.C.",
    "C.H.R.P.",
    "C.I.A.",
    "C.I.A.R.",
    "C.I.B.",
    "C.I.C.",
    "C.I.C.A.",
    "C.I.D.A.",
    "C.I.F.",
    "C.I.H.R.",
    "C.I.L.T.",
    "C.I.M.",
    "C.I.O.",
    "C.I.P.",
    "C.I.S.A.",
    "C.I.T.P.",
    "C.J.G.C.",
    "C.L.A.",
    "C.L.C.",
    "C.L.J.",
    "C.L.U.",
    "C.M.",
    "C.M.A.",
    "C.M.C.",
    "C.M.G.",
    "C.M.H.C.",
    "C.M.M.",
    "C.M.O.S.",
    "C.M.R.P.",
    "C.N.I.B.",
    "C.N.R.",
    "C.O.",
    "C.O.F.",
    "C.O.M.",
    "C.O.O.",
    "C.O.T.C.",
    "C.P.",
    "C.P.A.",
    "C.P.C.",
    "C.P.H.",
    "C.P.I.",
    "C.P.R.",
    "C.P.S.M.",
    "C.Psych.",
    "C.Q.",
    "C.R.",
    "C.R.A.",
    "C.R.M.",
    "C.R.S.P.",
    "C.R.T.C.",
    "C.S.C.,c.s.c.",
    "C.S.C.E.",
    "C.S.I.",
    "C.S.O.",
    "C.S.P.",
    "C.S.P.Q.",
    "C.S.P.W.C.",
    "C.S.R.",
    "C.St.J.",
    "C.T.C.",
    "C.T.F.",
    "C.U.P.E.",
    "C.U.S.O.",
    "C.V.O.",
    "C.V.S.M.",
    "CANSCAIP",
    "CAPAC",
    "CARAS",
    "CARFAC",
    "CCLP",
    "Cer.E.",
    "Cert.",
    "Ch.B.",
    "Ch.M.",
    "Chev.",
    "Chim.",
    "Chirurg.",
    "Chrmn.",
    "Cie.",
    "CIPP/C",
    "Clin.",
    "Clk.",
    "Co.",
    "Coll.",
    "Cons.",
    "Cpl.",
    "cr.",
    "Cytol.",
    "d.",
    "D.A.",
    "D.A.",
    "D.A.A.&Q.M.G.",
    "D.A.A.G.",
    "D.A.B.P.N.",
    "D.A.D.M.S.",
    "D.A.G.",
    "D.A.Q.M.G.",
    "D.A.Sc.",
    "D.Adm.",
    "D.Av.Med.",
    "D.B.A.",
    "D.C.",
    "D.C.H.",
    "D.C.L.",
    "D.C.M.",
    "D.C.S.",
    "D.C.T.",
    "D.Child.Psych.",
    "D.Cl.Chem.",
    "D.Cn.L.",
    "D.Comm.",
    "D.D.",
    "D.D.C.",
    "D.D.M.S.",
    "D.D.P.H.",
    "D.D.S.",
    "D.D.Sc.",
    "D.del’Un.",
    "D.E.A.",
    "D.E.C.",
    "D.E.S.",
    "D.E.S.S.",
    "D.Ed.",
    "D.enMéd.Vét.",
    "D.enPh.",
    "D.Eng.",
    "D.Env.Sts.",
    "D.èsA.",
    "D.èsL.",
    "D.F.A.",
    "D.F.C.",
    "D.F.S.",
    "D.F.Sc.",
    "D.G.M.",
    "D.Gén.",
    "D.H.",
    "D.H.L.",
    "D.Hum.L.,D.Hum.Litt.",
    "D.I.C.",
    "D.I.H.",
    "D.Ing.",
    "D.J.C.",
    "D.L.",
    "D.L.F.A.P.A.",
    "D.L.S.",
    "D.Lit.,D.Litt.",
    "D.Litt.S.",
    "D.M.",
    "D.M.A.",
    "D.M.D.",
    "D.M.R.",
    "D.M.S.",
    "D.Man.Sc.",
    "D.Mus.",
    "D.Mus.É.",
    "D.O.",
    "D.O.C.",
    "D.P.A.",
    "D.P.H.",
    "D.P.H.N.",
    "D.P.S.",
    "D.P.Sc.",
    "D.Paed.(Péd.)",
    "D.Ph.,D.Phil.",
    "D.Psych.",
    "D.S.A.",
    "D.S.C.",
    "D.S.E.F.",
    "D.S.L.",
    "D.S.O.",
    "D.S.S.",
    "D.S.W.",
    "D.Sc.",
    "D.Sc.Adm.",
    "D.Sc.C(om).",
    "D.Sc.Fin.",
    "D.Sc.Mil.",
    "D.Sc.Nat.",
    "D.Sc.P.",
    "D.Sc.Soc.",
    "D.St.J.",
    "D.Th.,D.Theol.",
    "D.U.",
    "D.Univ.(Paris)",
    "D.V.M.",
    "D.V.Sc.",
    "D-ABFDE",
    "dec’d.",
    "def.",
    "Dent.",
    "DGC",
    "D-I.I.F.E.S.",
    "Dip.Bus.Admin.",
    "Dip.C.S.",
    "Dip.Crim.",
    "Dip.Ed.",
    "Dip.L.A.T.",
    "Dip.Lsc.",
    "Dip.Operat.Perf.",
    "Dip.Psych.",
    "Dip.R.E.E.S.",
    "Dip.R.M.",
    "Dip.Tech.Ed.",
    "Dip.Trl.",
    "Doct.Arch.",
    "Dom.",
    "Dr.del’U.",
    "Dr.èsLettres",
    "Dr.Com.Sc.",
    "Dr.-Ing.",
    "Dr.jur.",
    "Dr.P.H.",
    "Dr.rer.nat.",
    "Dr.rer.pol.",
    "Drs.",
    "E.",
    "e.",
    "é.",
    "E.C.E.",
    "E.D.",
    "E.E.",
    "E.E.C.",
    "E.M.",
    "Ecol.",
    "Econ.",
    "Ed.D.",
    "Ed.M.",
    "el.",
    "ép.",
    "Epis.",
    "EPSRC",
    "ESSEC",
    "Ethnol.",
    "f.",
    "F.A.A.A.",
    "F.A.A.A.S.",
    "F.A.A.N.",
    "F.A.A.O.",
    "F.A.A.P.",
    "F.A.A.S.",
    "F.A.B.M.G.",
    "F.A.C.C.",
    "F.A.C.D.",
    "F.A.C.E.",
    "F.A.C.H.A.",
    "F.A.C.H.E.",
    "F.A.C.M.I.",
    "F.A.C.O.G.",
    "F.A.C.P.",
    "F.A.C.R.",
    "F.A.C.S.",
    "F.A.C.S.M.",
    "F.A.C.T.L.",
    "F.A.E.",
    "F.A.G.O.",
    "F.A.G.S.",
    "F.A.H.A.",
    "F.A.H.P.",
    "F.A.I.A.",
    "F.A.I.C.",
    "F.A.P.H.A.",
    "F.A.P.S.",
    "F.A.S.A.B.E.",
    "F.A.S.C.E.",
    "F.A.S.C.P.",
    "F.A.S.M.",
    "F.A.S.M.E.",
    "F.A.Z.R.A.",
    "F.AINA",
    "F.ASTM",
    "F.B.A.",
    "F.B.O.A.",
    "F.B.O.U.",
    "F.B.Ps.S.",
    "F.B.S.C.",
    "F.Brit.I.R.E.",
    "F.C.A.",
    "F.C.A.E.",
    "F.C.A.H.S.",
    "F.C.A.S.I.",
    "F.C.B.A.",
    "F.C.B.V.",
    "F.C.C.A.",
    "F.C.C.H.S.E.",
    "F.C.C.M.G.",
    "F.C.C.O.",
    "F.C.F.P.",
    "F.C.G.A.",
    "F.C.I.",
    "F.C.I.A.",
    "F.C.I.A.R.",
    "F.C.I.Arb.",
    "F.C.I.C.",
    "F.C.I.I.",
    "F.C.I.P.orFCIP",
    "F.C.I.S.",
    "F.C.M.A.",
    "F.C.N.R.S.",
    "F.C.P.A.",
    "F.C.S.",
    "F.C.S.A.",
    "F.C.S.B.E.",
    "F.C.S.C.E.",
    "F.C.S.I.",
    "F.C.S.L.A.",
    "F.C.S.M.E.",
    "F.C.S.S.E.",
    "F.CIFST",
    "F.E.",
    "F.E.C.S.",
    "F.E.I.C.",
    "F.E.S.",
    "F.E.S.C.",
    "F.F.A.",
    "F.F.P.S.",
    "F.F.R.",
    "F.G.A.",
    "F.G.D.C.",
    "F.G.S.",
    "F.G.S.A.",
    "F.H.S.C.",
    "F.I.A.",
    "F.I.A.B.S.",
    "F.I.A.Fo.S.T",
    "F.I.A.L.",
    "F.I.A.S.",
    "F.I.Ae.S.",
    "F.I.C.",
    "F.I.C.B.",
    "F.I.C.D.",
    "F.I.E.",
    "F.I.E.E.",
    "F.I.I.A.",
    "F.I.I.C.",
    "F.I.I.F.C.",
    "F.I.I.S.L.",
    "F.I.Inst.",
    "F.I.L.A.",
    "F.I.M.",
    "F.I.M.C.",
    "F.I.M.M.M.",
    "F.I.R.E.",
    "F.I.S.A.",
    "F.I.S.A.E.",
    "F.I.T.",
    "F.Inst.P.",
    "F.Inst.Pet.",
    "F.ISHMII.",
    "F.L.A.",
    "F.L.C.M.",
    "F.L.M.I.",
    "F.L.S.",
    "F.M.S.A.",
    "F.N.A.",
    "F.N.A.A.S.",
    "F.N.C.M.",
    "F.N.F.C.F.",
    "F.P.S.",
    "F.Phys.S.",
    "F.R.A.I.",
    "F.R.A.I.C.",
    "F.R.A.M.",
    "F.R.A.S.",
    "F.R.Ae.S.",
    "F.R.B.S.",
    "F.R.C.C.O.",
    "F.R.C.D.(C)",
    "F.R.C.M.",
    "F.R.C.O.",
    "F.R.C.O.G.",
    "F.R.C.P.",
    "F.R.C.S.",
    "F.R.C.S.(C)",
    "F.R.C.V.S.",
    "F.R.E.S.",
    "F.R.G.D.",
    "F.R.G.S.",
    "F.R.G.S.(C)",
    "F.R.H.S.C.",
    "F.R.Hist.S.,F.R.H.S.",
    "F.R.Hort.S.",
    "F.R.I.B.A.",
    "F.R.I.C.",
    "F.R.I.C.S.",
    "F.R.I.P.H.H.",
    "F.R.M.S.",
    "F.R.Met.S.",
    "F.R.N.S.",
    "F.R.P.S.L.",
    "F.R.S.",
    "F.R.S.",
    "F.R.S.A.",
    "F.R.S.C.",
    "F.R.S.C.,F.R.S.Chem.",
    "F.R.S.E.",
    "F.R.S.H.",
    "F.R.S.L.",
    "F.R.S.M.",
    "F.R.S.T.M.&H.",
    "F.S.A.",
    "F.S.A.A.",
    "F.S.B.",
    "F.S.E.",
    "F.S.M.A.C.",
    "F.S.P.I.E.",
    "F.S.S.",
    "F.T.C.L.",
    "F.Z.S.",
    "FCAOT",
    "FEC",
    "FFSSoc.",
    "FGC",
    "FIIE",
    "FISEAM",
    "FNASc.",
    "FRCPC,F.R.C.P.(C)",
    "FSSocDip.",
    "G.B.E.",
    "G.C.",
    "G.C.F.C.",
    "G.C.I.E.",
    "G.C.M.G.",
    "G.C.S.I.",
    "G.C.St.J.",
    "G.C.V.O.",
    "G.D.P.A.",
    "g.e.",
    "G.H.Q.",
    "G.J.",
    "G.M.",
    "G.O.C.",
    "G.O.Q.",
    "G.S.O.",
    "Gaz.",
    "Geneal.",
    "Geol.",
    "GM.P.I.P.S.C.",
    "H.B.A.",
    "HBSc",
    "h.c.",
    "H.E.",
    "H.E.C.",
    "Histol.",
    "H.M.",
    "H.M.C.S.",
    "H.M.S.",
    "H.O.",
    "H.ofC.",
    "Homoeo.",
    "Hon.",
    "Hons.",
    "Hortic.",
    "H.Q.",
    "H.R.H.",
    "Hts.",
    "I.C.A.O.",
    "I.E.E.E.",
    "I.I.S.D.",
    "I.L.O.",
    "I.O.D.E.",
    "I.O.F.",
    "I.O.O.F.",
    "I.P.C.",
    "I.S.O.",
    "I.S.P.",
    "i/c",
    "ICD.D",
    "Inf.",
    "Ing.",
    "ing.f.",
    "Ins.",
    "Inspr.",
    "Inst.",
    "Instr.",
    "Int.A.I.A.",
    "Invest.",
    "Investig.",
    "J.B.",
    "J.C.B.",
    "J.C.D.",
    "J.C.L.",
    "J.C.Q.",
    "J.D.",
    "J.D.S.",
    "J.P.",
    "J.S.D.",
    "J.U.L.",
    "JChLJ",
    "Jos.",
    "Jt.",
    "Jur.utr.Dr.",
    "K.ofC.",
    "K.B.E.",
    "K.C.",
    "K.C.B.",
    "K.C.H.S.",
    "K.C.L.J.",
    "K.C.M.G.",
    "K.C.S.G.",
    "K.C.S.I.",
    "K.C.V.O.",
    "K.G.",
    "K.H.S.",
    "K.J.G.C.",
    "K.L.J.",
    "K.St.J.",
    "K.T.",
    "Kt.",
    "L.Cdr.",
    "L.Ch.",
    "L.Col.",
    "L.D.C.",
    "L.D.S.",
    "L.Div.",
    "L.E.L.",
    "L.èsD.",
    "L.èsL.",
    "L.èsSc.",
    "L.G.S.M.",
    "L.Gen.",
    "L.J.C.",
    "L.M.C.C.",
    "L.M.C.H.(Cantab)",
    "L.Mus.",
    "L.O.L.",
    "l.p.",
    "L.P.N.",
    "L.Péd.",
    "L.Ph.",
    "L.Psych.",
    "L.R.A.M.",
    "L.R.C.P.",
    "L.R.C.S.",
    "L.R.C.T.",
    "L.R.C.V.S.",
    "L.R.H.S.C.",
    "L.R.S.M.",
    "L.S.",
    "L.S.A.",
    "L.S.Sc.",
    "L.Sc.Adm.",
    "L.Sc.Comm.",
    "L.Sc.O.",
    "L.Sc.Soc.",
    "L.T.C.L.",
    "L.T.C.M.",
    "L.Th.",
    "L.V.C.M.",
    "L.V.O.",
    "Ldr.",
    "LEEDAP",
    "LF.I.E.E.E.",
    "Lib.",
    "Lic.",
    "Lic.Med.",
    "Lit.hum.",
    "Litt.",
    "Litt.B.",
    "Litt.D.",
    "LL.B.",
    "LL.D.",
    "LL.L.",
    "LL.M.",
    "LSLSCert.AVT",
    "LSM",
    "Lt.",
    "m.",
    "M.A.",
    "M.A.A.A.",
    "M.A.C.P.",
    "M.A.C.S.S.    ",
    "M.A.I.",
    "M.A.I.B.C.",
    "M.A.L.D.",
    "M.A.L.S.",
    "M.A.O.",
    "M.A.Sc.",
    "M.A.T.",
    "M.Acc.",
    "M.Arch.",
    "M.B.",
    "M.B.A.",
    "M.B.B.S.",
    "M.B.E.",
    "M.C.",
    "M.C.E.",
    "M.C.G.I.",
    "M.C.I.",
    "M.C.I.Arb.",
    "M.C.I.C.",
    "M.C.I.PorMCIP",
    "M.C.L.",
    "M.C.P.",
    "M.C.Psyc",
    "M.C.S.",
    "M.Ch.,M.Chir.",
    "M.Cl.Sc.",
    "M.Com.,M.Comm.",
    "M.D.",
    "M.D.C.",
    "M.D.S.",
    "M.D.Y.",
    "M.Div.",
    "M.E.",
    "M.E.A.",
    "M.E.E.",
    "M.E.S.",
    "M.Ec.",
    "M.Ed.",
    "M.Eng.",
    "M.èsA.",
    "M.èsL.",
    "M.F.",
    "M.F.A.",
    "M.Fisc.",
    "M.H.A.",
    "M.H.C.M.",
    "M.H.K.",
    "M.H.L.",
    "M.H.Sc.",
    "M.I.Biol.",
    "M.I.P.P.",
    "M.I.S.",
    "M.I.St.",
    "M.I.T.",
    "M.Ind.R.,M.I.R.",
    "M.Inst.R.",
    "M.J.",
    "M.Kin.",
    "M.L.",
    "M.L.A.",
    "M.L.I.S.",
    "M.L.S.",
    "M.Leg.St.",
    "M.Litt.",
    "M.M.",
    "M.M.M.",
    "M.M.St.",
    "M.Mus.",
    "M.N.",
    "M.N.A.",
    "M.O.",
    "M.O.M.",
    "M.P.",
    "M.P.A.",
    "M.P.E.",
    "M.P.E.P.",
    "M.P.H.",
    "M.P.M.",
    "M.P.P.",
    "M.Ph.,M.Phil.",
    "M.PL.",
    "M.Ps.",
    "M.R.C.",
    "M.R.C.O.G.",
    "M.R.C.P.",
    "M.R.C.S.",
    "M.R.C.V.S.",
    "M.R.E.",
    "M.R.I.A.",
    "M.R.M.",
    "M.R.S.H.",
    "M.S.",
    "M.S.A.",
    "M.S.C.",
    "M.S.D.",
    "M.S.D.T.",
    "M.S.E.E.",
    "M.S.Ed.",
    "M.S.F.",
    "M.S.J.",
    "M.S.L.",
    "M.S.M.",
    "M.S.O.D.",
    "M.S.R.C.",
    "M.S.S.",
    "M.S.W.",
    "M.Sc.",
    "M.Sc.A.",
    "M.Sc.Ag.",
    "M.Sc.Com.",
    "M.Sc.F.,M.sc.for.",
    "M.Sc.N.,M.S.N.",
    "M.Sc.Phm.",
    "M.Sc.Pl.",
    "M.Sc.Soc.",
    "M.Soc.",
    "M.Tax.",
    "M.Trad.",
    "M.U.Dr.",
    "M.U.P.,M.Urb.",
    "M.V.A.",
    "M.V.O.",
    "MAA",
    "MAIB",
    "Man.",
    "Meth.",
    "Metrop.",
    "MIET",
    "Mil.",
    "MIMech.E.",
    "Min.",
    "Msgr.",
    "Mun.",
    "Mus.B(ac).",
    "Mus.B(ac).Perf.",
    "Mus.D(oc).",
    "Mus.M.",
    "Mycol.",
    "N.",
    "N.A.T.O.",
    "N.B.",
    "N.D.",
    "N.D.D.",
    "N.D.E.E.",
    "N.D.G.",
    "N.D.P.",
    "N.E.B.",
    "N.F.B.",
    "N.F.U.",
    "N.G.O.",
    "N.H.L.",
    "N.I.M.H.",
    "N.L.S.",
    "N.O.A.A.",
    "N.P.",
    "N.P.A.M.",
    "N.R.C.",
    "N.S.",
    "N.S.C.A.D.",
    "N.S.E.R.C.",
    "n.s.s.",
    "N.S.W.",
    "N.W.T.",
    "N.Z.",
    "ndc",
    "Neurol.",
    "Nfld.&Lab.",
    "No.",
    "Numis.",
    "o.",
    "O.A.A.",
    "O.A.Q.",
    "O.A.S.",
    "O.B.C.",
    "O.B.E.",
    "O.C.",
    "O.D.",
    "O.E.C.D.",
    "O.M.",
    "O.M.C.",
    "O.M.I.",
    "O.M.L.J.",
    "O.M.M.",
    "O.M.R.I.",
    "O.N.B.",
    "O.N.G.",
    "O.N.L.",
    "O.N.Q.",
    "O.N.S.",
    "O.O.M.",
    "O.Ont.",
    "O.P.E.I.",
    "O.Q.",
    "O.S.A.",
    "O.St.J.",
    "O.U.Q.",
    "Offr.",
    "Ont.",
    "Op.Dip.Perf.",
    "Ophthal(mol).",
    "OPM",
    "Orgn.",
    "Ornithol.",
    "OSPE",
    "OTReg.PE,",
    "Otol.",
    "P.Adm.",
    "P.Ag.",
    "P.C.",
    "P.C.J.",
    "p.c.s.c.",
    "P.Dt.",
    "P.E.I.",
    "P.E.N.",
    "P.E.O.",
    "P.Eng.",
    "P.G.C.E.",
    "P.Geo.",
    "P.M.",
    "P.M.P.",
    "P.O.W.",
    "P.P.C.L.I.",
    "p.s.",
    "p.s.a.",
    "p.s.c.",
    "Pac.",
    "Parliam.",
    "Parlty.",
    "Path(ol).",
    "PEBC",
    "Perm.",
    "PG.Dip",
    "Ph.B.",
    "Ph.C.",
    "Ph.D.",
    "Ph.L.",
    "Pharm.D.",
    "Phil.M.",
    "Philol.",
    "Philos.",
    "Phm.B.",
    "Phys.",
    "Physiol.",
    "Phytopath(ol).",
    "PLC,plc",
    "Pol.",
    "Polytech.",
    "Pomol.",
    "Prep.",
    "Pres.",
    "Presb.",
    "Presby.",
    "Prop.",
    "Prot.",
    "Psychol.",
    "Pte.",
    "PTY,pty",
    "Q.C.",
    "Q.H.S.",
    "Q.L.S.",
    "Q.M.",
    "Q.M.G.",
    "Q.O.R.",
    "Que.",
    "R.A.",
    "R.A.F.",
    "R.A.I.C.",
    "R.A.M.",
    "R.A.M.C.",
    "R.A.S.C.",
    "R.B.A.",
    "R.C.A.",
    "R.C.A.C.",
    "R.C.A.F.",
    "R.C.A.M.C.",
    "R.C.D.",
    "R.C.E.",
    "R.C.E.M.E.",
    "R.C.F.A.",
    "R.C.G.A.",
    "R.C.M.",
    "R.C.M.P.",
    "R.C.N.",
    "R.C.N.V.R.",
    "R.C.O.C.",
    "R.C.R.",
    "R.C.Y.C.",
    "R.E.",
    "R.F.A.",
    "R.F.C.",
    "R.F.P.",
    "R.I.A.",
    "R.I.B.",
    "R.M.C.",
    "R.N.",
    "R.N.S.Y.S.",
    "R.O.",
    "R.P.",
    "R.P.A.",
    "R.P.Bio.",
    "R.P.F.",
    "R.Ph.",
    "R.R.",
    "R.S.W.",
    "R22eR",
    "Regt.",
    "Res.",
    "Res.Dip.S.W.",
    "Rev.",
    "Rhinol.",
    "RI",
    "Röntgenol.",
    "Rt.",
    "S.",
    "s.",
    "S.A.A.",
    "S.A.F.A.",
    "S.B.",
    "S.B.St.J.",
    "S.C.",
    "S.C.A.",
    "S.D.",
    "S.J.",
    "S.J.D.",
    "S.M.",
    "S.O.M.",
    "S.P.H.R.",
    "S.R.C.",
    "S.S.B.",
    "S.S.C.",
    "S.S.F.C.",
    "S.S.L.",
    "S.S.St.J.",
    "S.T.B.,S.Th.B.",
    "S.T.D.,S.Th.D.",
    "S.T.L.,S.Th.L.",
    "S.T.M.",
    "S.V.M.",
    "Sask.",
    "Sc.D.",
    "Sc.L.",
    "Sc.Soc.B.",
    "Sc.Soc.D.",
    "Sc.Soc.L.",
    "Sec.",
    "Sém.",
    "Semy.",
    "Soc.",
    "SOCAN",
    "Sociol.",
    "SODRAC",
    "Solr.",
    "Sqdn.",
    "Sr.",
    "SSHRCC",
    "Stat.",
    "T.E.P.",
    "T.E.S.L.",
    "Th.B.",
    "Th.D.",
    "Theol.",
    "Th.L.",
    "Topog.",
    "Toxicol.",
    "Twp.",
    "U.A.A.C.",
    "U.E.,U.E.L.",
    "U.K.",
    "U.M.W.A.",
    "U.N.",
    "U.N.S.M.(Korea)",
    "U.O.M.",
    "U.S.N.",
    "Un.",
    "UNESCO",
    "UNICEF",
    "UNO",
    "UNRRA",
    "Urol.",
    "V.C.",
    "V.D.",
    "Ven.",
    "VeryRev.",
    "Vet.",
    "V.G.",
    "Vol.",
    "V.Q.M.G.",
    "V.R.D.",
    "V.S.",
    "W.",
    "W.H.O.",
    "W.I.P.O.",
    "W.P.T.B.",
    "W.T.O.",
    "Y.M.C.A.",
    "Y.M.H.A.",
    "Y.W.C.A.",
    "Y.W.H.A."
];

autocomplete(document.getElementById("under_degree"), degree);

$(document).ready(()=>{

    let x = $("#main").height();

    $(document).on('click',"#add_img",()=>{
        console.log('YogiDon');
        $("#add").remove();
        x = x+200;
        $("body").css("height",x);
        $('<div id="postgrad">\n' +
            '            <h3>POSTGRADUATE DETAILS</h3>\n' +
            '            <label for="p_clg_name">COLLAGE NAME</label>\n' +
            '            <input id="p_clg_name" type="text" name="p_clg">\n' +
            '            <br>\n' +
            '            <div class="start">\n' +
            '                <label>START DATE</label>\n' +
            '                <select name="post_start_month">\n' +
            '                    <option value="January">January</option>\n' +
            '                    <option value="February">February</option>\n' +
            '                    <option value="March">March</option>\n' +
            '                    <option value="April">April</option>\n' +
            '                    <option value="May">May</option>\n' +
            '                    <option value="June">June</option>\n' +
            '                    <option value="July">July</option>\n' +
            '                    <option value="August">August</option>\n' +
            '                    <option value="September">September</option>\n' +
            '                    <option value="October">October</option>\n' +
            '                    <option value="November">November</option>\n' +
            '                    <option value="December">December</option>\n' +
            '                </select>\n' +
            '                <select name="post_start_year">\n' +
            '                    <option value="2018">2018</option>\n' +
            '                    <option value="2017">2017</option>\n' +
            '                    <option value="2016">2016</option>\n' +
            '                    <option value="2015">2015</option>\n' +
            '                    <option value="2014">2014</option>\n' +
            '                    <option value="2013">2013</option>\n' +
            '                    <option value="2012">2012</option>\n' +
            '                    <option value="2011">2011</option>\n' +
            '                    <option value="2010">2010</option>\n' +
            '                    <option value="2009">2009</option>\n' +
            '                    <option value="2008">2008</option>\n' +
            '                    <option value="2007">2007</option>\n' +
            '                    <option value="2006">2006</option>\n' +
            '                    <option value="2005">2005</option>\n' +
            '                    <option value="2004">2004</option>\n' +
            '                    <option value="2003">2003</option>\n' +
            '                    <option value="2002">2002</option>\n' +
            '                    <option value="2001">2001</option>\n' +
            '                    <option value="2000">2000</option>\n' +
            '                    <option value="1999">1999</option>\n' +
            '                    <option value="1998">1998</option>\n' +
            '                    <option value="1997">1997</option>\n' +
            '                    <option value="1996">1996</option>\n' +
            '                    <option value="1995">1995</option>\n' +
            '                    <option value="1994">1994</option>\n' +
            '                    <option value="1993">1993</option>\n' +
            '                    <option value="1992">1992</option>\n' +
            '                    <option value="1991">1991</option>\n' +
            '                    <option value="1990">1990</option>\n' +
            '                    <option value="1989">1989</option>\n' +
            '                    <option value="1988">1988</option>\n' +
            '                    <option value="1987">1987</option>\n' +
            '                    <option value="1986">1986</option>\n' +
            '                    <option value="1985">1985</option>\n' +
            '                    <option value="1984">1984</option>\n' +
            '                    <option value="1983">1983</option>\n' +
            '                    <option value="1982">1982</option>\n' +
            '                    <option value="1981">1981</option>\n' +
            '                    <option value="1980">1980</option>\n' +
            '                    <option value="1979">1979</option>\n' +
            '                    <option value="1978">1978</option>\n' +
            '                    <option value="1977">1977</option>\n' +
            '                    <option value="1976">1976</option>\n' +
            '                    <option value="1975">1975</option>\n' +
            '                    <option value="1974">1974</option>\n' +
            '                    <option value="1973">1973</option>\n' +
            '                    <option value="1972">1972</option>\n' +
            '                    <option value="1971">1971</option>\n' +
            '                    <option value="1970">1970</option>\n' +
            '                    <option value="1969">1969</option>\n' +
            '                    <option value="1968">1968</option>\n' +
            '                    <option value="1967">1967</option>\n' +
            '                    <option value="1966">1966</option>\n' +
            '                    <option value="1965">1965</option>\n' +
            '                    <option value="1964">1964</option>\n' +
            '                    <option value="1963">1963</option>\n' +
            '                    <option value="1962">1962</option>\n' +
            '                    <option value="1961">1961</option>\n' +
            '                    <option value="1960">1960</option>\n' +
            '                    <option value="1959">1959</option>\n' +
            '                    <option value="1958">1958</option>\n' +
            '                </select>\n' +
            '            </div>\n' +
            '            <div class="end">\n' +
            '                <label>END DATE</label>\n' +
            '                <select name="post_end_month">\n' +
            '                    <option value="January">January</option>\n' +
            '                    <option value="February">February</option>\n' +
            '                    <option value="March">March</option>\n' +
            '                    <option value="April">April</option>\n' +
            '                    <option value="May">May</option>\n' +
            '                    <option value="June">June</option>\n' +
            '                    <option value="July">July</option>\n' +
            '                    <option value="August">August</option>\n' +
            '                    <option value="September">September</option>\n' +
            '                    <option value="October">October</option>\n' +
            '                    <option value="November">November</option>\n' +
            '                    <option value="December">December</option>\n' +
            '                </select>\n' +
            '                <select name="post_end_year">\n' +
            '                    <option value="2018">2018</option>\n' +
            '                    <option value="2017">2017</option>\n' +
            '                    <option value="2016">2016</option>\n' +
            '                    <option value="2015">2015</option>\n' +
            '                    <option value="2014">2014</option>\n' +
            '                    <option value="2013">2013</option>\n' +
            '                    <option value="2012">2012</option>\n' +
            '                    <option value="2011">2011</option>\n' +
            '                    <option value="2010">2010</option>\n' +
            '                    <option value="2009">2009</option>\n' +
            '                    <option value="2008">2008</option>\n' +
            '                    <option value="2007">2007</option>\n' +
            '                    <option value="2006">2006</option>\n' +
            '                    <option value="2005">2005</option>\n' +
            '                    <option value="2004">2004</option>\n' +
            '                    <option value="2003">2003</option>\n' +
            '                    <option value="2002">2002</option>\n' +
            '                    <option value="2001">2001</option>\n' +
            '                    <option value="2000">2000</option>\n' +
            '                    <option value="1999">1999</option>\n' +
            '                    <option value="1998">1998</option>\n' +
            '                    <option value="1997">1997</option>\n' +
            '                    <option value="1996">1996</option>\n' +
            '                    <option value="1995">1995</option>\n' +
            '                    <option value="1994">1994</option>\n' +
            '                    <option value="1993">1993</option>\n' +
            '                    <option value="1992">1992</option>\n' +
            '                    <option value="1991">1991</option>\n' +
            '                    <option value="1990">1990</option>\n' +
            '                    <option value="1989">1989</option>\n' +
            '                    <option value="1988">1988</option>\n' +
            '                    <option value="1987">1987</option>\n' +
            '                    <option value="1986">1986</option>\n' +
            '                    <option value="1985">1985</option>\n' +
            '                    <option value="1984">1984</option>\n' +
            '                    <option value="1983">1983</option>\n' +
            '                    <option value="1982">1982</option>\n' +
            '                    <option value="1981">1981</option>\n' +
            '                    <option value="1980">1980</option>\n' +
            '                    <option value="1979">1979</option>\n' +
            '                    <option value="1978">1978</option>\n' +
            '                    <option value="1977">1977</option>\n' +
            '                    <option value="1976">1976</option>\n' +
            '                    <option value="1975">1975</option>\n' +
            '                    <option value="1974">1974</option>\n' +
            '                    <option value="1973">1973</option>\n' +
            '                    <option value="1972">1972</option>\n' +
            '                    <option value="1971">1971</option>\n' +
            '                    <option value="1970">1970</option>\n' +
            '                    <option value="1969">1969</option>\n' +
            '                    <option value="1968">1968</option>\n' +
            '                    <option value="1967">1967</option>\n' +
            '                    <option value="1966">1966</option>\n' +
            '                    <option value="1965">1965</option>\n' +
            '                    <option value="1964">1964</option>\n' +
            '                    <option value="1963">1963</option>\n' +
            '                    <option value="1962">1962</option>\n' +
            '                    <option value="1961">1961</option>\n' +
            '                    <option value="1960">1960</option>\n' +
            '                    <option value="1959">1959</option>\n' +
            '                    <option value="1958">1958</option>\n' +
            '                </select>\n' +
            '            </div>\n' +
            '            <!--<div id="post_present_cont">\n' +
            '                <label for="post_present">PRESENTLY STUDYING</label>\n' +
            '                <input id="post_present" type="checkbox">\n' +
            '            </div>-->\n' +
            '            <div class="autocomplete">\n' +
            '                <label for="post_degree">DEGREE</label>\n' +
            '                <input id="post_degree" name="post_degree" type="text">\n' +
            '            </div>\n' +
            '            <label for="post_course">COURSE</label>\n' +
            '            <input id="post_course" name="post_course" type="text" >\n' +
            '        </div>').insertAfter("#undergrad");

        autocomplete(document.getElementById("post_degree"), degree);

        $('<img id="remove" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8_Z_TMafUiiQcYQXaRtD9RgMqua66v--ZdSx0D4j3M_oOOe2" alt="minus">').appendTo("#remove_cont")
    }) ;
    $(document).on('click','#remove',()=>{
        $("#postgrad").remove();
        $("#remove_cont").empty();
        x = x-200;
        $("body").css("height",x);
        $('<div id="add">\n' +
            '            <p>POSTGRADUATE</p>\n' +
            '            <img id="add_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAb1BMVEUAAAD////FxcU5OTkzMzORkZHX19f19fXQ0NB3d3dERETJycmioqIpKSns7Oxubm4ICAhOTk69vb20tLSGhoaZmZny8vKrq6vk5OTe3t5VVVUfHx9ISEg2NjYlJSVbW1thYWEQEBCAgIAYGBhmZmbuBZlbAAAD/klEQVR4nO3d3XaiMBSG4URRVBC1yo+Ig23n/q9xtNqqCDVgNtnJfO/hHGTtZ+myCpkgZG1JEI7K4W4pbOj9c/gRTpJ6iaj5tywuTM/cpTyMlICDmelJuzcbPAWu96aHfK0H4j0wW5ke8PXyrBmYmh5OT2kT8GB6Ml2VtcDE4g+XaoX/CIz+mJ5KZ55fBSZO+YQY+hWgQ+/Pc8U98K/pefS3uAWuTU9DUXoFRqZnoSn6AZamR6Gp/Aa+mZ6EquACHJoehKriDHT2BRRi8AW0/AfSb+Un4Nb0FJRFR+DI9BCUhUegc1/SbiulcPSP/HeJcPgz9NRYxKZHoC0VU9Mj0LYRzn6NOZeLnekRaPPEu+kRaLPj7gpCCCFktDgYsCvQ+TPh8dY3gwLXgQMAAdQF9BtyA5htvKZlvc3WeqC/+H3lRfeXkQUwmj9bel63wcweoMLWBs9moNIlu429wExt9Y5vUgZAxfs6obVAxXv/C2uBiheVi+cr2Q3s+DkKIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCKBbwD0v4DYdqab4ny93ygumW3Lg2vDZT3/WpECfwcl5uU8H9J/u3+0jjw540LjkCy2ogDpXfKkJEZDNsR4lDZDRsR4+CXCiccEXG7sOnADYMgB7DsC2AdhzALYNwJ4DsG0A9hyAbQOw5wBsG4A9B2DbAOw5ANv2BWR04viW5tI9m7NW34nuTWw0rvhSGyIgm5sTERGQy6NhLnexKW5hs3iTjiQdkMHj35Y/uxBodln4sdF9CHl4PaaMbCOQn40Vazwx7r656nrZ3SFs9ux0cn4rF4AAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAKjE7MKdFipuiVtYClZ7OJ8TUWuCb2upv1gLlp8riu46LcwAqvYRdF+cAVNlBO3q+CmOg/Hi2dNcngHIBysmv5witJt1XZgI8nTQ3bSh95UHKfIBUAQggc2CgERgHA3YFsUYgQgih/7Wl6QGoU7qqYG9LweJcYrrmojA9Am2FeHpNwe6mIjQ9Am2h0Pmjg2GBSEyPQFsipNOfMisppNO/G+MjMDM9BGXZEcjnhHf9reQJyOaMfv0FX0C5Nz0HVYU8AxXvU9pXcAGq3ku3rYP8BjI6b0tn0Q+QwTk4BJ1P1jkDZWl6Gv1dngxzAaru2bGnmbwHRo5dm5n7FaBjwnkkq0AZOXR1ZnY9/OkKlH5uei5dLW7uIt4ApSu/nNayCSi3DnyYlpFsBkq5VjwLjWuz6s6+KvD41dvi34erx80Ej0Apxx9WvlPzOKvB1AGPZev4sN9Z8qdx6eWbdJzUS/4BHdtTzBgi4nsAAAAASUVORK5CYII=" alt="Plus">\n' +
            '        </div>').insertBefore("#remove_cont");
    });
    $('#present').change(function() {
        if($(this).is(":checked")) {
            $("#end").remove();
            $("#present_cont").css("display","inline");
        }
        if(!($(this).is(":checked"))) {
            $('<div id="end">\n' +
                '            <label for="end_m">END DATE</label>\n' +
                '            <select id="end_m" name="end_month">\n' +
                '                <option value="1">January</option>\n' +
                '                <option value="2">February</option>\n' +
                '                <option value="3">March</option>\n' +
                '                <option value="4">April</option>\n' +
                '                <option value="5">May</option>\n' +
                '                <option value="6">June</option>\n' +
                '                <option value="7">July</option>\n' +
                '                <option value="8">August</option>\n' +
                '                <option value="9">September</option>\n' +
                '                <option value="10">October</option>\n' +
                '                <option value="11">November</option>\n' +
                '                <option value="12">December</option>\n' +
                '            </select>\n' +
                '            <select id="end_y" name="end_year">\n' +
                '                <option value="2018">2018</option>\n' +
                '                <option value="2017">2017</option>\n' +
                '                <option value="2016">2016</option>\n' +
                '                <option value="2015">2015</option>\n' +
                '                <option value="2014">2014</option>\n' +
                '                <option value="2013">2013</option>\n' +
                '                <option value="2012">2012</option>\n' +
                '                <option value="2011">2011</option>\n' +
                '                <option value="2010">2010</option>\n' +
                '                <option value="2009">2009</option>\n' +
                '                <option value="2008">2008</option>\n' +
                '                <option value="2007">2007</option>\n' +
                '                <option value="2006">2006</option>\n' +
                '                <option value="2005">2005</option>\n' +
                '                <option value="2004">2004</option>\n' +
                '                <option value="2003">2003</option>\n' +
                '                <option value="2002">2002</option>\n' +
                '                <option value="2001">2001</option>\n' +
                '                <option value="2000">2000</option>\n' +
                '                <option value="1999">1999</option>\n' +
                '                <option value="1998">1998</option>\n' +
                '                <option value="1997">1997</option>\n' +
                '                <option value="1996">1996</option>\n' +
                '                <option value="1995">1995</option>\n' +
                '                <option value="1994">1994</option>\n' +
                '                <option value="1993">1993</option>\n' +
                '                <option value="1992">1992</option>\n' +
                '                <option value="1991">1991</option>\n' +
                '                <option value="1990">1990</option>\n' +
                '                <option value="1989">1989</option>\n' +
                '                <option value="1988">1988</option>\n' +
                '                <option value="1987">1987</option>\n' +
                '                <option value="1986">1986</option>\n' +
                '                <option value="1985">1985</option>\n' +
                '                <option value="1984">1984</option>\n' +
                '                <option value="1983">1983</option>\n' +
                '                <option value="1982">1982</option>\n' +
                '                <option value="1981">1981</option>\n' +
                '                <option value="1980">1980</option>\n' +
                '                <option value="1979">1979</option>\n' +
                '                <option value="1978">1978</option>\n' +
                '                <option value="1977">1977</option>\n' +
                '                <option value="1976">1976</option>\n' +
                '                <option value="1975">1975</option>\n' +
                '                <option value="1974">1974</option>\n' +
                '                <option value="1973">1973</option>\n' +
                '                <option value="1972">1972</option>\n' +
                '                <option value="1971">1971</option>\n' +
                '                <option value="1970">1970</option>\n' +
                '                <option value="1969">1969</option>\n' +
                '                <option value="1968">1968</option>\n' +
                '                <option value="1967">1967</option>\n' +
                '                <option value="1966">1966</option>\n' +
                '                <option value="1965">1965</option>\n' +
                '                <option value="1964">1964</option>\n' +
                '                <option value="1963">1963</option>\n' +
                '                <option value="1962">1962</option>\n' +
                '                <option value="1961">1961</option>\n' +
                '                <option value="1960">1960</option>\n' +
                '                <option value="1959">1959</option>\n' +
                '                <option value="1958">1958</option>\n' +
                '            </select>\n' +
                '        </div>').insertAfter("#start");
            $("#present_cont").css("display","block");
        }
    });
});