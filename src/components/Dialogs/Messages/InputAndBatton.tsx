import React, {ChangeEvent, KeyboardEvent} from 'react';
import {ActionTypes} from "../../../Redux/stateApp";

type inputAndButtonPropsType = {
    valueTextarea: string
    dispatch: (action: ActionTypes) => void
}

export const InputAndButton = (props: inputAndButtonPropsType) => {


        const onClickAddMessage = () => {
            if (props.valueTextarea) {
                props.dispatch({type: "ADD-MESSAGE"})
                // props.addMessage()
            }
        }
        const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter") {
                if (props.valueTextarea.trim()) {
                    props.dispatch({type: "ADD-MESSAGE"})
                    //props.addMessage()
                }
            }
        }
        const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch({type: "CHANGE-MESSAGE-TEXT", newMessageText: e.currentTarget.value})
            //props.changeMessageText(e.currentTarget.value)
        }

        return (
            <div>
                <textarea
                    placeholder={"enter your message"}
                    value={props.valueTextarea}
                    onChange={onChangeTextArea}
                    onKeyPress={onKeyPressHandler}
                    id="123" cols={15} rows={3}> </textarea>
                <button onClick={onClickAddMessage}>add message</button>
            </div>
        );
    }
;

