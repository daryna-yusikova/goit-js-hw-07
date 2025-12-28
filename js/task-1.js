const listItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);
const titleOfItems = document.querySelectorAll('.item h2');
const listInsideItems = document.querySelectorAll('.item ul');
const titleAndCount = [...titleOfItems].forEach((item, index) => {
  console.log(`Category: ${item.textContent}`);
  const ul = listInsideItems[index];
  console.log(`Elements: ${ul.querySelectorAll('li').length}`);
});
