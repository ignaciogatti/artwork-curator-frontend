export default (state=[], action)=> {

    switch(action.type){
        case 'UPLOAD_ARTWORK':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}