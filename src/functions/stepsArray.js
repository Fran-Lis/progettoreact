export default function stepsArray(arr){
    let steps = [];

    arr.map((el) => steps.push(el.step))

    return steps
}