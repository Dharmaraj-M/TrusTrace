const URL = 'https://jsonplaceholder.typicode.com/posts/';

let display = document.querySelector('.display');
let myForm = document.querySelector('.myForm');

let output = '';
var tempVar = 1;
var dataVar = 1;
function cardDisplay(posts) {
    posts.forEach(post => {
        output += `
        <div class="col-md-6" dataid=${dataVar++}>
            <div class="card mt-5">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                    <a href="" class="card-link" id="deleteId">Delete</a>
                    <a href="" class="card-link" id="commentsId">Comments</a>
                    <div class="col-md" id="demo${tempVar++}"></div>
                    <div class="col-md" id="demo${tempVar++}"></div>
                    <div class="col-md" id="demo${tempVar++}"></div>
                    <div class="col-md" id="demo${tempVar++}"></div>
                    <div class="col-md" id="demo${tempVar++}"></div>
                </div>
            </div>
        </div>
        `;
    });
    display.innerHTML = output;
}

//Display all the available Posts when page load
//Method: GET
fetch(URL)
    .then(result => result.json())
    .then(data => cardDisplay(data))

//Create a new Post when click the submit
//Method: POST
myForm.addEventListener('submit', (preventReload) => {
    preventReload.preventDefault();
    let titleId = document.getElementById('titleId').value;
    let postId = document.getElementById('postId').value;

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title: titleId,
            body: postId
        })
    })
        .then(result => result.json())
        .then(data => {
            let array = [];
            array.push(data);
            cardDisplay(array);
        })
})

//Delete a Post when click Delete
//Method: DELETE
display.addEventListener('click', (clickId) => {
    clickId.preventDefault();
    if (clickId.target.id == "deleteId") {
        fetch(URL + `${clickId.target.parentNode.parentNode.parentNode.getAttribute("dataid")}`, {
            method: 'DELETE',
        });
        clickId.target.parentNode.parentNode.parentNode.remove();
    }
    if (clickId.target.id == "commentsId") {
        fetch(URL + `${clickId.target.parentNode.parentNode.parentNode.getAttribute("dataid")}/comments`)
            .then(result => result.json())
            .then(data => commentsCardDisplay(data))
    }
})

//Comments Display
//Method: GET
function commentsCardDisplay(posts) {
    posts.forEach(post => {        
        let output1 = `
            <div>
                <hr>
                <b>Name:</b> ${post.name}
                <br>
                <b>Email:</b> ${post.email}
                <br>
                <b>Comment:</b> ${post.body}
            </div>
        `;
        document.getElementById(`demo${post.id}`).innerHTML = output1;
    });
}