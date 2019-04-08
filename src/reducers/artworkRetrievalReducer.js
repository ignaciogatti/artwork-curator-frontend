export default (state=[], action)=> {

    switch(action.type){
        case 'UPLOAD_ARTWORK':
            return action.payload;
        default:
            return state;
    }
}