import React from 'react'

export const MartReducer = (state,action) => {
    switch(action.type){
        case 'INCREMENT' : {
            console.log("val",action.payload.val);
            return {
                ...state,
                ProductCount : state.ProductCount + 1
            }        
        }   
        
        case 'USER-DATA': {
            console.log(action.payload);
            return {
                ...state,
                UserData : [ 
                    {UserData : action.payload.USERDATA.userInfo,
                    UserfirstName : action.payload.USERDATA.firstName,
                    UserMiddleName : action.payload.USERDATA.middleName,
                    UserEmail : action.payload.USERDATA.email,
                    UserImageUrl : action.payload.USERDATA.imageUrl,}                    
                ]
            }
            
        }
        default :
            return state;   
    }
}
