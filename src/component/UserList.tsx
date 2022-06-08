
interface UserModel {
    id : number ;
    username ? : string;
    email : string;
}

const users  : UserModel[] = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ];

    
const UserList = () => {

  
    return(
        <>
            <div>Test Array Sample</div>
            {users.map((item , index) => {
                console.log(index);

                return <User user={item} key={index}/>
            })}
            
        
        </>
    )
}

const User = ({user} : any) => {
    
    return(
    <div>

        <b>{user.username}</b>
        <span>{user.email}</span>
    </div>
    )
}

export default UserList;