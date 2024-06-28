    function Navigate() {
        if (document.querySelector('#review').value.trim() === '' || star1.style.color === '') {
            alert("Please fill the review")
        } else {
            const anchor = document.createElement('a');
            anchor.href = "/Thanks.html";
            anchor.click();

        }
    }


    let star1 = document.querySelector('#star1');
    let star2 = document.querySelector('#star2');
    let star3 = document.querySelector('#star3');
    let star4 = document.querySelector('#star4');
    let star5 = document.querySelector('#star5');

    star1.addEventListener('click', function () {
        handleColor(1);

    });

    star2.addEventListener('click', function () {
        handleColor(2);
    });

    star3.addEventListener('click', function () {
        handleColor(3);
    });

    star4.addEventListener('click', function () {
        handleColor(4);
    });

    star5.addEventListener('click', function () {
        handleColor(5);
    });

    function handleColor(number) {
        resetStars();
        for (let i = 1; i <= number; i++) {
            document.querySelector(`#star${i}`).style.color = 'orange';
        }
    }

    function resetStars() {
        for (let i = 1; i <= 5; i++) {
            document.querySelector(`#star${i}`).style.color = '';
        }
    }
