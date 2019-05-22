
// SECTION 6 DROPWDOWN FAQS

document.addEventListener('DOMContentLoaded', function () {
    //the event occurred
    const arrow1 = document.getElementById('arrow-1'); 
    // const content = document.getElementsByClassName('faq-flex'); 
    const content1 = document.getElementById('a'); 
    var node1 = document.createElement("p");
    let clicked1 = false; 
    node1.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support." 

    arrow1.addEventListener('click', () => {
        if (clicked1 === false) {
            content1.appendChild(node1); 
            clicked1 = true; 
            arrow1.className = "fas fa-sort-down"; 
        } else {
            content1.removeChild(node1); 
            clicked1 = false; 
            arrow1.className = "fas fa-sort-up"; 

        }
    })


    const arrow2 = document.getElementById('arrow-2'); 
    // const content = document.getElementsByClassName('faq-flex'); 
    const content2 = document.getElementById('b'); 
    var node2 = document.createElement("p");
    let clicked2 = false; 
    node2.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support." 

    arrow2.addEventListener('click', () => {
        if (clicked2 === false) {
            content2.appendChild(node2); 
            clicked2 = true; 
            arrow2.className = "fas fa-sort-down"; 

        } else {
            content2.removeChild(node2); 
            clicked2 = false; 
            arrow2.className = "fas fa-sort-up"; 

        }
    })
})