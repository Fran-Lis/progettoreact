export default function noRepeat(elements){
    let toRender = [];

    for(let element of elements){
        if(!toRender.includes(element)){
            toRender.push(element)
        }
    }
    
    return toRender
}