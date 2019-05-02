export default (
    state={
        items:[], 
        isFetching : false
    },
         action)=> {
             switch(action.type){
                 case 'UPLOAD_ARTWORK':
                    return {
                        ...state,
                        items: action.payload,
                        isFetching:false
                    };
                 case 'REQUEST_DATA':
                    return {
                        ...state,
                        isFetching:true
                    };
                 default:
                    return state;
            }
}