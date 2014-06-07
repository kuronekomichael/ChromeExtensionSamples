var altEmptyTags = document.querySelectorAll('*[alt=""]');
for (var i = 0; i < altEmptyTags.length; i++) {
    altEmptyTags[i].className =altEmptyTags[i].className + ' alt-blank-checked';
}
