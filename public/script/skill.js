$(document).ready(()=>{
    var l=3;
    var x ;
    var z = $("#edit").prev();
    var a = $("body").height();
    var name_new,level_new;

   $("#add").click(()=>{
       if(l<6)
       {
           l=l+1;
           name_new = `skill_${l}`;
           level_new = `level_${l}`;
           console.log(l);
           $('<div class="skill">\n' +
               '            <label>SKILL</label>\n' +
               '            <input name=name_new class="skill_in" type="text">\n' +
               '            <label>LEVEL</label>\n' +
               '            <select class="select_in" name=level_new>\n' +
               '                <option>Select your skill level</option>\n' +
               '                <option value="1">★ ☆ ☆ ☆ ☆ – Novice</option>\n' +
               '                <option value="2">★ ★ ☆ ☆ ☆ – Beginner</option>\n' +
               '                <option value="3">★ ★ ★ ☆ ☆ – Skillful</option>\n' +
               '                <option value="4">★ ★ ★ ★ ☆ – Experienced</option>\n' +
               '                <option value="5">★ ★ ★ ★ ★ – Expert</option>\n' +
               '                <option value="0">- Don\'t show level</option>\n' +
               '            </select>\n' +
               '        </div>').insertBefore("#edit");
           let rr = $("#edit").prev();
           rr.children(".skill_in").attr("name",name_new);
           rr.children(".select_in").attr("name",level_new);
           a = a+85;
           $("body").css("height",a);
           a = $("body").height();
           z = z.next();
       }
       else{
           window.alert('MAX LIMIT REACHED');
       }
   });
    $("#remove").click(()=>{
        if(l>3){
            if(z.attr("class") === "skill"){
                x = z.prev();
                z.remove();
                z = x;
                l=l-1;
                a = a-85;
                $("body").css("height",a);
                a = $("body").height();
            }
        }
        else{
            window.alert("Minimum 3 skills required ")
        }
    })
});