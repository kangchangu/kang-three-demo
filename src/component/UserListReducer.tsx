import { useCallback, useMemo, useReducer, useRef } from "react";

interface UserModel {
    id : number ;
    username ? : string;
    email : string;
    active : boolean;
}

interface  UserState {
    users : UserModel[] ,
    inputs : {
        username : string;
        email : string;
    }
}


const reducer = (state : UserState , action : any) => {
    switch(action.type){
        case 'INPUT_CHANGE' :
            return{
                ...state ,
                inputs : {
                    ...state.inputs,
                    [action.name] : action.value
                }
            }
        case 'USER_REMOVE' :
            return{
                ...state ,
                users : state.users.filter((user: { id: number; }) => {
                    return user.id !== action.id
                })
            }
        case 'USER_TOGGLE' :
            return{
                ...state ,
                users : state.users.map((item  => {
                    return(
                        item.id === action.id ? {...item , active : !item.active} : item
                    )
                }))
            }
            return state
        case 'USER_CREATE' :
            return{
                ...state , 
                users : [...state.users , action.user]
            }
        default :
            return state;
    }
}

const UserListReducer = () => {

    const nextId = useRef(4);

    const initalState = {
        inputs : {
            username : '',
            email : ''
        },
        users : [
            {
                id: 1,
                username: 'velopert',
                email: 'public.velopert@gmail.com',
                active : false,
            },
            {
                id: 2,
                username: 'tester',
                email: 'tester@example.com',
                active : false,
            },
            {
                id: 3,
                username: 'liz',
                email: 'liz@example.com',
                active : false,
            }

        ]
    }

    
    

    //const [state , dispatch] = useReducer(reducer , initalState);
    const [state, dispatch] = useReducer(reducer, initalState as any);

    const users : UserModel[]   = state.users;
    const {username , email} = state.inputs;

    const countActiveUsers  = (users : UserModel[]) => {
        console.log("활성 사용자 수 계산");
    
        return users.filter(user  => user.active).length;
        
    }

    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        console.log("onChange init");
        const {name , value} = e.target;
        dispatch({type : 'INPUT_CHANGE' , name , value})
    },[]);


    const onCreate = useCallback(() =>  {
        const user = {
            id : nextId.current ++ ,
            username ,
            email , 
            active : false
        }
        dispatch({type : 'USER_CREATE' , user});

    },[username , email]);

    const onRemove = useCallback((id : number) =>  {
        dispatch({type : 'USER_REMOVE' , id})
    },[])

    const onToggle = useCallback((id : number) =>  {
        dispatch({type : 'USER_TOGGLE' , id})
    },[])


    const activeCount : number = useMemo(()=> countActiveUsers(users) , [users]);

    return(
        <>
            <div>Test Array Sample</div>
            <CreateUserReducer onChange={onChange} onCreate={onCreate} />
            {users.map((item : any, index : any) => {
                //console.log(index);

                return <UserReducer user={item} key={index} onRemove={onRemove} onToggle={onToggle}/>
            })}
            
            <div>
                <p>활성화 사용자수 : {activeCount}</p>
            </div>
        </>
    )
}

const UserReducer = ({user , onRemove ,onToggle } : any) => {
    return(
        <div>
            <span style={{padding : 10}}>{user.id}</span> 
            <b style={{padding : 10 , cursor : 'pointer' , color : user.active ? 'green' : 'black'}} onClick={()=> onToggle(user.id)}>{user.username}</b>
            <span style={{padding : 10}}>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

const CreateUserReducer = ({username , email , onChange,onCreate} : any) => {
    return(
        <div>
            <input name="username" placeholder="이름" value={username} onChange={onChange}/>
            <input name="email" placeholder="이메일" value={email} onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default UserListReducer;