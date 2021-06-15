const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.indianexpress.com/2020/10/Untitled-design-2020-10-13T231619.223.jpg" alt="" />'
  title.innerHTML = 'Apple iPhone 12 Launch'
  excerpt.innerHTML =
    'iPhone 12 price in India starts at Rs 69,900'
  profile_img.innerHTML =
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjPbRyuM66bt-0-U73RuddvNBkvMsVdg52A&usqp=CAU" alt="" />'
  name.innerHTML = 'Nik'
  date.innerHTML = 'June 12, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
