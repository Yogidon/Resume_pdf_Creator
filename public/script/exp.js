$(document).ready(()=>{
    $('#present').change(function() {
        if($(this).is(":checked")) {
            $("#end").remove();
            $("#present_cont").css("display","inline")
            $("body").css("height","700px")
        }
        if(!($(this).is(":checked"))) {
            $('<div id="end">\n' +
                '            <label for="end_m">END DATE</label>\n' +
                '            <select id="end_m" name="end_month">\n' +
                '                <option value="January">January</option>\n' +
                '                <option value="February">February</option>\n' +
                '                <option value="March">March</option>\n' +
                '                <option value="April">April</option>\n' +
                '                <option value="May">May</option>\n' +
                '                <option value="June">June</option>\n' +
                '                <option value="July">July</option>\n' +
                '                <option value="August">August</option>\n' +
                '                <option value="September">September</option>\n' +
                '                <option value="October">October</option>\n' +
                '                <option value="November">November</option>\n' +
                '                <option value="December">December</option>\n' +
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
            $("body").css("height","750px")
        }
    });
});