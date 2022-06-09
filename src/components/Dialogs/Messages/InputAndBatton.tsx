import React, {ChangeEvent, KeyboardEvent} from 'react';
import {addMessageActionCreator, changeMessageTextActionCreator} from '../../../Redux/dialogsReducer';
import {ActionTypes} from "../../../Redux/store";

type inputAndButtonPropsType = {
    valueTextarea: string
    dispatch: (action: ActionTypes) => void
}

export const InputAndButton = (props: inputAndButtonPropsType) => {


        const onClickAddMessage = () => {
            if (props.valueTextarea) {
                props.dispatch(addMessageActionCreator())
                //props.dispatch({type: "ADD-MESSAGE"})
                // props.addMessage()
            }
        }
        const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter") {
                if (props.valueTextarea.trim()) {
                    props.dispatch(addMessageActionCreator())
                    //props.dispatch({type: "ADD-MESSAGE"})
                    //props.addMessage()
                }
            }
        }
        const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(changeMessageTextActionCreator(e.currentTarget.value))
            //props.dispatch({type: "CHANGE-MESSAGE-TEXT", newMessageText: e.currentTarget.value})
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

