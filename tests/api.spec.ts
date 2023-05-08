import { test, expect } from '@playwright/test';


test('basic get API test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users', {
    params : {
      //endpoint: '/users',
    }
  });
if (response.ok()){
    const responseBody = await response.body();
    let data = await response.text();
    let dataj= await response.json();
    console.log(responseBody); 
    //console.log(data); 
    console.log(dataj);
    }
});

test('basic post API test', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
        id: 11,
        name: "Carlos Corrales",
        username: "cacr",
        email: "cacr@april.biz",
        address: {
            street: "Belen Light",
            suite: "Apt. 556",
            city: "Medellin",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }
    });
    if (response.ok()){
        const responseBody = await response.body();
        let data = await response.text();
        let dataj= await response.json();
        console.log(responseBody); 
        //console.log(data); 
        console.log(dataj);
        }

});