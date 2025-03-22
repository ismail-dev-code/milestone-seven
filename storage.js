
const handleBtn = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const data = {name, email};
    localStorage.setItem(name, JSON.stringify(data));
}
const storedStorage = localStorage.getItem("hossain");
console.log(JSON.parse(storedStorage))

const clearBtn =()=>{
    localStorage.clear()
}