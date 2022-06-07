import { useRef, useState } from "react";


const InputSample = () => {
    
    const [inputs , setInputs] = useState({ 
        name : '',
        nickname : ''
     });    

    const {name , nickname} = inputs;

    const nameInput = useRef<HTMLInputElement>(null);


    //Input Change Event
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {value , name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    //Input Click Event
    const onReset = () => {
        console.log(inputs);
        setInputs({
            name : '',
            nickname :''
        });
        
        nameInput.current?.focus();

    }
    

    return (
        <div>
            <input placeholder="이름" name="name" onChange={onChange} value={name} ref={nameInput}/>
            <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default InputSample;