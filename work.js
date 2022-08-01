
document.getElementById('btn').addEventListener('click',function(){
    let getName = document.getElementById('name');
    let getComment = document.getElementById('comment');
    
    if(getName.value=='' || getComment.value==''){
        
    }else{
        let createName = document.createElement('h5');
        createName.innerText = getName.value;
        
        let createComment = document.createElement('p');
        createComment.innerText = getComment.value;

        let commentDiv = document.createElement('div');
        commentDiv.appendChild(createComment);

        let nameDiv = document.createElement('div');
        nameDiv.classList.add('d-flex', 'justify-content-between');
        nameDiv.innerHTML = `
            <span><a href="#"><i class=" text-danger fa-solid fa-trash-can"></i></a></span>
        `;
        nameDiv.appendChild(createName);
        
        // comment box for packeting nameDiv & commentDiv together
        let commentBox = document.createElement('div');
        commentBox.classList.add('border','border-3','border-primary','py-3','px-3','rounded','my-3');
        commentBox.appendChild(commentDiv);
        commentBox.appendChild(nameDiv);

        document.getElementById('mainBox').appendChild(commentBox);
    }
})