
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
        
    }
})