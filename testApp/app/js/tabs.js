/**
 * Created by Vikas on 7/5/2016.
 */
function openCity(evt, cityName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for(i=0; i< tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for(i=0; i< tablinks;i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}