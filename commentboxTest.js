
const commentBox = document.getElementById('comment-box');

let deleteBtns = document.getElementsByClassName('delete-item');
for(let deleteBtn of deleteBtns){
    deleteBtn.addEventListener('click',function(event){
        event.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(commentBox);
        // console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
    })
}


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
        nameDiv.classList.add('name-div','d-flex', 'justify-content-between');
        nameDiv.innerHTML = `
            <span class="delete-item" ><a  id='delete' href="#"><i class=" text-danger fa-solid fa-trash-can"></i></a></span>
        `;
        nameDiv.appendChild(createName);
        
        // comment box for packeting nameDiv & commentDiv together
        let commentBox = document.createElement('div');
        commentBox.id = 'comment-box';
        commentBox.classList.add('comment-box','border','border-3','border-primary','py-3','px-3','rounded','my-3');
        commentBox.appendChild(commentDiv);
        commentBox.appendChild(nameDiv);

        // adding commentBox to the comment area
        document.getElementById('mainBox').appendChild(commentBox);

        // clearing the inputfield
        getName.value = '';
        getComment.value = '';          
                
    }
})

document.getElementById('btn').addEventListener('click',function(){

    let commentBoxed = document.getElementsByClassName('comment-box');
    document.getElementById('mainBox').addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);
        // event.stopImmediatePropagation();
        // console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
    })
})




//making delete button 
// let deleteItems = document.getElementsByClassName('delete-item');
// for(let deleteItem of deleteItems){
    
// }



