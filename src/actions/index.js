export const USERNAME = 'USERNAME';

export const saveUser = (name) =>{
        return{
            type: USERNAME,
            value: name
        };
};
