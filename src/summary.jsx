fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

const loadData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = res.json();
  return data;
};
loadData();
