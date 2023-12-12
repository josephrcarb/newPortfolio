function ShowAndHide(id) {
    var x = document.getElementById(id);
    x.classList.toggle('hidden');
    if (id == 'projects'){
        var button = document.getElementById("projectsHideButton")
        if (x.classList.contains('hidden')) {
            button.innerText = 'Show Projects';
        } else {
            button.innerText = 'Hide Projects';
        }
    }
}