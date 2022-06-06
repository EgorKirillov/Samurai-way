import React, {ChangeEvent, KeyboardEvent} from 'react';

type inputAndButtonPropsType = {
    addMessage: (text: string) => void
    valueTextarea: string
    changeMessageText: (valueTextarea: string) => void
}

export const InputAndButton = (props: inputAndButtonPropsType) => {


        const onClickAddMessage = () => {

            if (props.valueTextarea.trim()) {
                props.addMessage(props.valueTextarea.trim())
            } else {
                // props.changeMessageText("")
            }

        }
        const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter") {
                if (props.valueTextarea.trim()) {
                    props.addMessage(props.valueTextarea.trim())
                    props.changeMessageText("")
                }
                // props.changeMessageText("")
            }
        }
        const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.changeMessageText(e.currentTarget.value)
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

