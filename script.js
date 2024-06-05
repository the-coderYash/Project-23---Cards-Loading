const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fHww" alt="" />';
  title.innerHTML = 'Why mountains are needed?';
  excerpt.innerHTML =
    'Mountains are essential for biodiversity, climate regulation, water sources, and cultural heritage. They support diverse ecosystems, influence weather patterns, provide freshwater, and offer recreational opportunities, enhancing environmental and human well-being.';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="" />';
  name.innerHTML = 'Mohit Mishra';
  date.innerHTML = 'Jun 06, 2024';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
