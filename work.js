
document.getElementById('btn').addEventListener('click',function(){
    let getName = document.getElementById('name');
    let getComment = document.getElementById('comment');

    let createName = document.createElement('h5');
        createName.innerText = getName.value;
        
        let createComment = document.createElement('p');
        createComment.innerText = getComment.value;

        let commentDiv = document.createElement('div');
        commentDiv.appendChild(createComment);

        let nameDiv = document.createElement('div');
        nameDiv.classList.add('d-flex', 'justify-content-between');
        nameDiv.innerHTML = `
            <span class="deleteBtn" ><a href="#"><i class=" text-danger fa-solid fa-trash-can"></i></a></span>
        `;
        nameDiv.appendChild(createName);
        
        // comment box for packeting nameDiv & commentDiv together
        let commentBox = document.createElement('div');
        commentBox.classList.add('comment-box','border','border-3','border-primary','py-3','px-3','rounded','my-3');
        commentBox.appendChild(commentDiv);
        commentBox.appendChild(nameDiv);
    
    if(getName.value=='' || getComment.value==''){
        
    }else{        

        // adding commentBox to the comment area
        let mainBox = document.getElementById('mainBox');
        mainBox.appendChild(commentBox);        
        
    }  
    // clearing the inputfield
    getName.value = '';
    getComment.value = '';

    // making delete button working
    let deleteBtns = document.getElementsByClassName('deleteBtn');
    for(let deleteBtn of deleteBtns){
        deleteBtn.addEventListener('click',function(event){
            event.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(commentBox);
            // console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
        })
    }
})

//making delete button 


// document.getElementById('delete').addEventListener('click', function(){
//     document.getElementById('comment-box').style.display = 'none';
// })