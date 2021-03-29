var count = 0, max = 12, reduce = false, devtext = true, developertext="Developer!!",designertext="Designer!!";
function text()
{
    if(count < max && !reduce)
        count++;
    else if(count == max && !reduce)
        reduce = true;
    else if(count > 3 && reduce)
        count--;
    else if(count == 3 && reduce)
    {
        reduce = false;
        devtext = !devtext;
        if(devtext)
            max = 12;
        else
            max = 11;
    }
    console.log(count);
    if(devtext)
        return developertext.substr(0, count - 1);
    return designertext.substr(0, count - 1);
    
}
function style_text()
{
    setInterval(function() {
            document.getElementById('textstyle').innerHTML = "<b style=\"font-size:3vw;\" class=\"font-monospace\" id=\"textstyle\">I'm a " + text() + "</b>|"
    }, 200);

    document.getElementById("Git").addEventListener('click', function()
    {
        window.location.href = "https://bit.ly/VikramSGIT";
    });
};