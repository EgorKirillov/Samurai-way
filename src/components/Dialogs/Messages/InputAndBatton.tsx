import React, {useRef, useState} from 'react';

type inputAndButtonPropsType = {
    callback: (text: string) => void
}

export const InputAndButton = (props: inputAndButtonPropsType) => {
   // let [textValue, setTextValue] = useState("")
    let texareaValue = useRef<HTMLTextAreaElement>(null)

    const onClickAddMessage = () => {
       // debugger
        // console.log(texareaValue.current)
        if (texareaValue.current  && texareaValue.current.value.trim() !== '' ) {
            props.callback(texareaValue.current.value);
        texareaValue.current.value = ''
    }
}
return (
    <div>

        {/*<input type="text"/>*/}
        <textarea  ref={texareaValue} name="add message" id="123" cols={15} rows={3}></textarea>
        <button onClick={onClickAddMessage}>add message</button>

    </div>
);
}
;

