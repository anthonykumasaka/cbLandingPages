
// SECTION 6 DROPWDOWN FAQS
// NEEDS TO BE REFA

//GOT QUESTIONS? SECTION - SECTION 6
document.addEventListener('DOMContentLoaded', function () {
    //the event occurred

    // QUESTION 1
    const click1 = document.getElementById('click-1'); 
    const arrow1 = document.getElementById('arrow-1'); 
    // const content = document.getElementsByClassName('faq-flex'); 
    const content1 = document.getElementById('a'); 
    var node1 = document.createElement("p");
    let clicked1 = false; 
    node1.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support." 

    click1.addEventListener('click', () => {
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

    // QUESTION 2
    const click2 = document.getElementById('click-2'); 
    const arrow2 = document.getElementById('arrow-2'); 
    // const content = document.getElementsByClassName('faq-flex'); 
    const content2 = document.getElementById('b'); 
    var node2 = document.createElement("p");
    let clicked2 = false; 
    node2.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support." 

    click2.addEventListener('click', () => {
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

    // QUESTION 3
    const click3 = document.getElementById('click-3');
    const arrow3 = document.getElementById('arrow-3');
    // const content = document.getElementsByClassName('faq-flex'); 
    const content3 = document.getElementById('c');
    var node3 = document.createElement("p");
    let clicked3 = false;
    node3.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support."

    click3.addEventListener('click', () => {
        if (clicked3 === false) {
            content3.appendChild(node3);
            clicked3 = true;
            arrow3.className = "fas fa-sort-down";
        } else {
            content3.removeChild(node3);
            clicked3 = false;
            arrow3.className = "fas fa-sort-up";
        }
    })

    // QUESTION 4
    const click4 = document.getElementById('click-4');
    const arrow4 = document.getElementById('arrow-4');
    // const content = document.getElementsByClassName('faq-flex'); 
    const content4 = document.getElementById('d');
    var node4 = document.createElement("p");
    let clicked4 = false;
    node4.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support."

    click4.addEventListener('click', () => {
        if (clicked4 === false) {
            content4.appendChild(node4);
            clicked4 = true;
            arrow4.className = "fas fa-sort-down";
        } else {
            content4.removeChild(node4);
            clicked4 = false;
            arrow4.className = "fas fa-sort-up";
        }
    }) 

    // QUESTION 5
    const click5 = document.getElementById('click-5');
    const arrow5 = document.getElementById('arrow-5');
    // const content = document.getElementsByClassName('faq-flex'); 
    const content5 = document.getElementById('e');
    var node5 = document.createElement("p");
    let clicked5 = false;
    node5.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support."

    click5.addEventListener('click', () => {
        if (clicked5 === false) {
            content5.appendChild(node5);
            clicked5 = true;
            arrow5.className = "fas fa-sort-down";
        } else {
            content5.removeChild(node5);
            clicked5 = false;
            arrow5.className = "fas fa-sort-up";
        }
    })

    // QUESTION 6
    const click6 = document.getElementById('click-6');
    const arrow6 = document.getElementById('arrow-6');
    // const content = document.getElementsByClassName('faq-flex'); 
    const content6 = document.getElementById('f');
    var node6 = document.createElement("p");
    let clicked6 = false;
    node6.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support."

    click6.addEventListener('click', () => {
        if (clicked6 === false) {
            content6.appendChild(node6);
            clicked6 = true;
            arrow6.className = "fas fa-sort-down";
        } else {
            content6.removeChild(node6);
            clicked6 = false;
            arrow6.className = "fas fa-sort-up";
        }
    })

    // QUESTION 7
    const click7 = document.getElementById('click-7');
    const arrow7 = document.getElementById('arrow-7');
    // const content = document.getElementsByClassName('faq-flex'); 
    const content7 = document.getElementById('g');
    var node7 = document.createElement("p");
    let clicked7 = false;
    node7.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support."

    click7.addEventListener('click', () => {
        if (clicked7 === false) {
            content7.appendChild(node7);
            clicked7 = true;
            arrow7.className = "fas fa-sort-down";
        } else {
            content7.removeChild(node7);
            clicked7 = false;
            arrow7.className = "fas fa-sort-up";
        }
    })

    // QUESTION 8
    const click8 = document.getElementById('click-8');
    const arrow8 = document.getElementById('arrow-8');
    // const content = document.getElementsByClassName('faq-flex'); 
    const content8 = document.getElementById('h');
    var node8 = document.createElement("p");
    let clicked8 = false;
    node8.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support."

    click8.addEventListener('click', () => {
        if (clicked8 === false) {
            content8.appendChild(node8);
            clicked8 = true;
            arrow8.className = "fas fa-sort-down";
        } else {
            content8.removeChild(node8);
            clicked8 = false;
            arrow8.className = "fas fa-sort-up";
        }
    })

    // QUESTION 9
    const click9 = document.getElementById('click-9');
    const arrow9 = document.getElementById('arrow-9');
    // const content = document.getElementsByClassName('faq-flex'); 
    const content9 = document.getElementById('i');
    var node9 = document.createElement("p");
    let clicked9 = false;
    node9.innerText = "There could be several reasons why you didn’t get matched. For example, maybe there wasn’t an attorney available on your court date or maybe there wasn’t an attorney available in your location. We suggest editing your responses to questions so that you can get matched.  If you still cannot get matched, please contact customer support."

    click9.addEventListener('click', () => {
        if (clicked9 === false) {
            content9.appendChild(node9);
            clicked9 = true;
            arrow9.className = "fas fa-sort-down";
        } else {
            content9.removeChild(node9);
            clicked9 = false;
            arrow9.className = "fas fa-sort-up";
        }
    })
})