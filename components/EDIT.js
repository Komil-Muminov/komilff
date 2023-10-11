import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Edit = () => {
    const [userInput, setUserInput] = React.useState({
        id: uuidv4(),
        todo: '',
    });

    const handleChange = (e) => {
        setUserInput((prev) => ({ ...prev, todo: e.target.value }));
    };

    const [objUserInput, setObjUserInput] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setObjUserInput((prev) => [...prev, userInput]);
        setUserInput((prev) => ({ ...prev, todo: '' }));
    };

    const [isEditing, setIsEditing] = React.useState({id:''})
    const handleIsEditing=(itemId,newValue)=>{
        setObjUserInput((prev)=>(
            prev.map((prevItem)=>(
                prevItem.id === itemId ?{...prevItem,todo:newValue}:prevItem
            ))
        ))
    }

    return (
        <>
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={userInput.todo} />
            <button>Отправить</button>
            </form>
            {objUserInput.map((item) => (
            <>
            <li>{item.todo}{isEditing.id === item.id ?(
                    <>
                    <input type="text" value={item.todo} onChange={(e)=>{
                        const {value}=e.target
                        handleIsEditing(item.id, value)
                    }} />
                    <button onClick={()=>setIsEditing({id:''})}>Сохранить</button>
                    </>
                ):<>
                    {item.todo}
                    <button onClick={()=>setIsEditing({id:item.id})}>Редактировать</button>
                </>}</li>
            
            </>
            
            ))}
        </div>
        </>
    );
};
export default Edit;
