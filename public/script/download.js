const doc = new jsPDF();

function gen() {
    html2canvas(document.getElementById("resume")).then(function(canvas) {
        const img = canvas.toDataURL();
        const fullQuality = canvas.toDataURL('image/jpeg', 1.0);
        doc.addImage(img,"JPEG",0,0,210,297);
        doc.save('text.pdf')
    });
}

$(document).ready(()=>{
    $("#btn").click(()=>{
        gen();
    })
});