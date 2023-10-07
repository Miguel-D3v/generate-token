const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numbers = [1,2,3,4,5,6,7,8,9]


export function generateTK():string{

    const tk: Array<string|number>=[];

    const randomLetter :string = letters[Math.floor(Math.random()*letters.length)];
     tk.push(randomLetter);

    const randomNumber :number = numbers[Math.floor(Math.random()*numbers.length)];
     tk.push(randomNumber)

    const randomLetter2 :string = letters[Math.floor(Math.random()*letters.length)];
     tk.push(randomLetter2)

    const randomNumber2 :number = numbers[Math.floor(Math.random()*numbers.length)];
     tk.push(randomNumber2)

    const randomLetter3 :string = letters[Math.floor(Math.random()*letters.length)];
    tk.push(randomLetter3);

    const randomNumber3 :number = numbers[Math.floor(Math.random()*numbers.length)];
    tk.push(randomNumber3)



       const token :string = tk.join('');
    return token
    
}

