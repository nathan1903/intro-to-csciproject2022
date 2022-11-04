window.addEventListener("load", function()
{
    //Get click elementt references.
    let clickCounterElement = this.document.getElementById("click-counter");
    let clickButtonElement = this.document.getElementById("click-button");

    //Click button function.
    let clickButtonFunction = function ()
    {
        //Increment counter.
        counter++;

        //Update counter value.
        clickCounterElement.innerHTML = counter;
    };

    //Attach button function.
    clickButtonElement.addEventListener("click", clickButtonFunction);
});