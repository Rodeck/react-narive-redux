export interface UserState {
    isLoggedIn: boolean;
}

export const initialUserState: UserState = {
    isLoggedIn: false
}

const userReducer = (state: UserState = initialUserState, action): UserState => {
    // console.log(action);
    switch(action.type) {
        default:
            return state;
    }
} 

export default userReducer;