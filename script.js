const budget1 = document.querySelector('#PleaseEnterYourBudget').value;
ci


document.getElementById('calculate').addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('budget').innerHTML = budget1;
})
