fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    console.log(response);
    response.json().then(function (data) {
        console.log(data);
    });
});

