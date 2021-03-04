

export const Plus=()=>{
    return{
        type:"PLUS"
    }
}

export const Minus=()=>{
    return{
        type:"MINUS"
    }
}

export const Multiply=(x)=>{
    return{
        type: "MULTIPLY",
        payload: x
    }
}

export const Zero=()=>{
    return{
        type: "ZERO"
    }
}

export const ToTwo=()=>{
    return{
        type: "*2"
    }
}
