import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type PropsDialogItemTypes = {
    linkID: number,
    userName: string
}

const DialogItem = (props: PropsDialogItemTypes) => {
    return (
        <div className={s.dialog + ' ' + s.activeDialog}>
            <NavLink to={"/dialogs/" + props.linkID}> {props.userName} </NavLink>
        </div>
    )
}
type PropsMessageTypes = {
    MessageText:string
}
const Message = (props:PropsMessageTypes) => {
    return (
        <div className={s.message}>{props.MessageText}</div>
    )
}




export const Dialogs = () => {
    return (

        <div className={s.content}>
            <div className={s.dialogList}>
                <DialogItem linkID={1} userName={'User 1'}/>
                <DialogItem linkID={2} userName={'User 2'}/>
                <DialogItem linkID={3} userName={'User 3'}/>
                <DialogItem linkID={4} userName={'User 4'}/>
                <DialogItem linkID={5} userName={'User 5'}/>
                <DialogItem linkID={6} userName={'User 6'}/>
            </div>

            <div className={s.messageList}>
                <Message MessageText={"Hello!"}/>
                <Message MessageText={"Hi!"}/>
                <Message MessageText={"yo"}/>
                <Message MessageText={"sdfl dj"}/>
                <Message MessageText={"||||||||||||||||||"}/>



            </div>


        </div>
    );
}

