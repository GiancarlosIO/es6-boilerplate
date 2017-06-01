document.addEventListener('DOMContentLoaded', () => {
  // testing code
  console.log('hello from webpack');
  const newDiv = document.createElement('div');
  newDiv.className = 'my-div';
  newDiv.id = 'my-div';
  const text = 'Hello world';
  const newTitle = document.createElement('h1');
  newTitle.innerText = text;
  newDiv.appendChild(newTitle);
  document.getElementsByTagName('body')[0].appendChild(newDiv);
  const arr = [1, 3, 4, 5, 6];
  console.log('arr elements', ...arr);
});

