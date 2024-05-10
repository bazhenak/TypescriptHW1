"use strict";
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    console.log(response);
    response.json().then((data) => {
        console.log(data);
    });
});
console.log('mama');
//# sourceMappingURL=index.js.map