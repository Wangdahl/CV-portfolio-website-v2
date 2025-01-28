/* PDF download button */
document.getElementById('cv-button').addEventListener('click', function() {
    const pdfPath = '../resources/cv-melker-wangdahl.pdf';
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'cv-melker-wangdahl.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
})

