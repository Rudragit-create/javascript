let x = 10;

function a(){
    console.log(x);
}

function b(){
    let x = 20;
    a(); // 10
    console.log(x);
}

b();