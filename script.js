// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Set default options
  let selectedOptions = {
      face: 'OATLing_Face_1.png',
      mouth: 'OATLing_Mouth_1.png',
      hair: 'OATLing_Hair_1.png',
      eyes: 'OATLing_Eyes_1.png',
      brows: 'OATLing_Brows_1.png'
  };

  // Update avatar based on selected options
  function updateAvatar() {
      const avatarImg = document.getElementById('avatar');
      const avatarSrc = `https://www.billerdesigns.com/wp-content/uploads/2024/04/${selectedOptions.face}-${selectedOptions.mouth}-${selectedOptions.hair}-${selectedOptions.eyes}-${selectedOptions.brows}.png`;
      avatarImg.src = avatarSrc;
  }

  // Set default avatar
  updateAvatar();

  // Event listeners for attribute selectors
  document.getElementById('face-selector').addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
          selectedOptions.face = event.target.getAttribute('data-src');
          updateAvatar();
      }
  });

  document.getElementById('mouth-selector').addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
          selectedOptions.mouth = event.target.getAttribute('data-src');
          updateAvatar();
      }
  });

  document.getElementById('hair-selector').addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
          selectedOptions.hair = event.target.getAttribute('data-src');
          updateAvatar();
      }
  });

  document.getElementById('eyes-selector').addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
          selectedOptions.eyes = event.target.getAttribute('data-src');
          updateAvatar();
      }
  });

  document.getElementById('brows-selector').addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
          selectedOptions.brows = event.target.getAttribute('data-src');
          updateAvatar();
      }
  });
});
