function show_hide(id) 
{ 
    var elem = document.getElementById( id ); 
    if( elem.style.display == "block" ) 
        elem.style.display = "none"; 
    else elem.style.display = "block"; 
}
