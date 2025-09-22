document.querySelector('.edit-button').addEventListener('click', function() {
  document.getElementById('activity_imgOverlay').classList.add('active');
});

document.getElementById('activity_imgCancel').addEventListener('click', function() {
  document.getElementById('activity_imgOverlay').classList.remove('active');
});

document.getElementById('activity_imgFile').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.querySelector('.addpost-image').src = event.target.result;
      document.getElementById('imageUrlHidden').value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('activity_imgConfirm').addEventListener('click', function() {
  document.getElementById('activity_imgOverlay').classList.remove('active');
});
