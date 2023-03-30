let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#img").value;
    var generatedurl=`https://drive.google.com/file/d/1T2ySZN50tzQgcOZjT2PMQcYMOp3Lq6Kb/view?usp=share_link`;
   
   


    const data={
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);

   
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <img src="${generatedurl}" alt="image">
      <div class="NameContainer">${data.name}</div>
      <a href="mailto:gssingh6393@gmil.com">${data.email}</a><br>
      <a href="www.singhgeetanjali.com">${data.websitelink}</a>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);

    output.appendChild(newlist);
   
   
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})


