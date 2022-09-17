import {Dialogs} from "./Dialogs";
import {addMessageActionCreator} from '../../Redux/dialogsReducer';
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";


const DialogsContainer = () => {
  const dialogsPage = useAppSelector(state => state.dialogsPage)
  
  const dispatch = useAppDispatch()
  
  const addNewMessageHandler = (newMessage: string) => {
    dispatch(addMessageActionCreator(newMessage))
  }
  
  return <Dialogs addNewMessage={addNewMessageHandler} dialogsPage={dialogsPage}/>
}

export default DialogsContainer;
