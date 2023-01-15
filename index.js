   // document exists
   let count=0;
   let consolEl=document.getElementById("count-el");
   console.log(consolEl);
   function increment(){
       count++;
       consolEl.innerText=count;
   }
   let saveEl=document.getElementById("save-el");
    //
    function save()
    {
        saveEl.textContent+=count + " - "
        console.log(count);
        count=0;
        consolEl.innerText=count;
    }