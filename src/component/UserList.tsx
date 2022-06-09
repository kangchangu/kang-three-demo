import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CreateUser from "./CreateUser";

interface UserModel {
    id : number ;
    username ? : string;
    email : string;
    active : boolean;
}

    
const UserList = () => {
    const nextId = useRef(4);
    type test = string[];
    type test2 = number[];

    let testdata : test & test2 = [];

    testdata.push("11");
    testdata.push(11);

    
    const [users, setUsers] = useState([
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
      ]) ;

    const [inputs , setInputs] = useState({
        username : '',
        email : '' ,
        active : false
        
    })

    const activeCount : number = useMemo(()=> countActiveUsers(users) , [users]);

    const {username , email} : any= inputs;

    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {

        console.log("onChange init");
        const {name , value} = e.target;

        setInputs({
            ...inputs ,
            [name] : value
        })  
    },[inputs]);

   
    const onRemove = useCallback((id : number) => {
        console.log("onRemove init");
        setUsers(users.filter(item => {
            return item.id !== id
        }))
    } ,[users]);

    const onToggle = useCallback((id : number) => {
        console.log("onToggle init");
        setUsers(
            users.map(user =>
              user.id === id ? { ...user, active: !user.active } : user
            )
          );
    },[users]);
        

    const onCreate = useCallback(() => {
        console.log("onCreate init");
        const user = {
            id : nextId.current ++ ,
            username ,
            email , 
            active : false
        }
        
        setUsers([...users , user]);
        
    } , [users , username , email] );

    return(
        <>
            <div>Test Array Sample</div>
            <CreateUser onChange={onChange} onCreate={onCreate} />
            {users.map((item , index) => {
                //console.log(index);

                return <User user={item} key={index} onRemove={onRemove} onToggle={onToggle}/>
            })}
            
            <div>
                <p>활성화 사용자수 : {activeCount}</p>
            </div>
        </>
    )
}

const User = ({user , onRemove , onToggle} : any) => {

    

    useEffect(() => {
        //console.log('user 값이 설정됨');
        //console.log(user);
        return () => {
          //console.log('user 가 바뀌기 전..');
          //console.log(user);
        };
      }, [user]);
    return(
    <div>
        <span style={{padding : 10}}>{user.id}</span> 
        <b style={{padding : 10 , cursor : 'pointer' , color : user.active ? 'green' : 'black'}} onClick={()=> onToggle(user.id)}>{user.username}</b>
        <span style={{padding : 10}}>{user.email}</span>
        <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
    )
}

//활성 사용자 수 계산

const countActiveUsers  = (users : UserModel[]) => {
    console.log("활성 사용자 수 계산");

    return users.filter(user => user.active).length;
    
    
}

export default UserList;