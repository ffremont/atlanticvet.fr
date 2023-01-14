$(document).ready(function () {
  $("ul.gallery").lightGallery({
    getCaptionFromTitleOrAlt: false,
    thumbnail:false
  });
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
});
