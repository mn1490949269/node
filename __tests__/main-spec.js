const add = require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

it ('should multiply two numbers', () => {
    //given
    const firstNumber=1;
    const secondNumber=2;

    //when
    const result =  multiply(firstNumber,secondNumber);

    //then
    expect(result.toBe("1*1=1,1*2=2,2*2=4"));
});

it ('should multiply two numbers', () => {
    //given
    const firstNumber=a;
    const secondNumber=b;

    //when
    const result =  multiply(firstNumber,secondNumber);

    //then
    expect(result.toBe("请输入正确参数"));
});