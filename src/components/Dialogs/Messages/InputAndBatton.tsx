import React, {ChangeEvent, KeyboardEvent} from 'react';

type inputAndButtonPropsType = {
   valueTextarea: string
   addMessage: () => void
   changeMessageValue: (valueTextarea: string) => void
}

export const InputAndButton = (props: inputAndButtonPropsType) => {
     
     
     const onClickAddMessage = () => {
        if (props.valueTextarea) {
           // props.dispatch(addMessageActionCreator())
           //props.dispatch({type: "ADD-MESSAGE"})
           props.addMessage()
        }
     }
     const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
           if (props.valueTextarea.trim()) {
              // props.dispatch(addMessageActionCreator())
              //props.dispatch({type: "ADD-MESSAGE"})
              props.addMessage()
           }
        }
     }
     const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(changeMessageTextActionCreator(e.currentTarget.value))
        //props.dispatch({type: "CHANGE-MESSAGE-TEXT", newMessageText: e.currentTarget.value})
        props.changeMessageValue(e.currentTarget.value)
     }
     
     return (
       <div>
                <textarea placeholder={"enter your message"}
                          value={props.valueTextarea}
                          onChange={onChangeTextArea}
                          onKeyPress={onKeyPressHandler}
                          id="123" cols={15} rows={3}> </textarea>
          <button onClick={onClickAddMessage}>add message</button>
       </div>
     );
  }
;

