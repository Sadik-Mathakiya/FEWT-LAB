arr = []
function create(){
    username = document.getElementById('name')
    if(username.value==''){
        alert('!!!please enter name first!!!')
    }
    else{
        arr.push(username.value);
        display();
    }
}
function display(){
    for(i=0;i<arr.length;i++){
        tem+=`
        <tr>
            <td>${i+1}</td>
            <td>${arr[i]}</td>
            <td>
                <button onclick="Edit" id="edit">Edit</button>
                <button onclick="Delete" id="delete">Delete</button>
            </td>
            
        </tr>
        `
    }
}
