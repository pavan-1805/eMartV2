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
                UserData : {
                    ...state.UserData,
                    Userdata : action.payload.USERDATA.userInfo,
                    UserfirstName : action.payload.USERDATA.firstName,
                    UserMiddleName : action.payload.USERDATA.middleName,
                    UserEmail : action.payload.USERDATA.email,
                    UserImageUrl : action.payload.USERDATA.imageUrl,                    
                }
            }
            
        }
        case "LOGOUT": {
            return {
                ...state,
                ProductCount : 0
            }
        }
        default :
            return state;   
    }
}
