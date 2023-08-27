const div = document.getElementById("table")
for (let i=1;i<=100;i++){
    div.innerHTML += `<br/>`;
    for(let j=1;j<=10;j++){
        // div.innerHTML += `${j} <br>`
        div.innerHTML += `${i} x ${j} = ${i*j} <br/>`;
    }
}