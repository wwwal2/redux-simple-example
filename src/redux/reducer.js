const initialState = {
    doSomethingOne: "1 2",
    doSomethingTwo: "3 4"
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONE":
            return { ...state, doSomethingOne: action.payload }       
        case "TWO":
            return { ...state, doSomethingTwo: action.payload }       
        default: 
            return state;
    }
};