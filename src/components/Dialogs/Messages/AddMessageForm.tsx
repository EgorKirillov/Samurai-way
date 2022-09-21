// import React from 'react';
// import {SubmitHandler, useForm} from "react-hook-form";
//
// export type AddMessageFormDataType = {
//     addMessageText: string
// }
//
// export const AddMessageForm = (props:{onSubmit:(newMessage:string)=>void}) => {
//     const {register,resetField, handleSubmit, watch, formState: {errors}} = useForm<AddMessageFormDataType>();
//
//     const onSubmit: SubmitHandler<AddMessageFormDataType> = (data) => {
//         console.log(data);
//         props.onSubmit(data.addMessageText)
//         resetField("addMessageText")
//     }
//
//         return (
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <textarea key={"dfsgdfg"}
//                        placeholder={"enter your message"}
//                        id="123" cols={15} rows={3}
//                           {...register("addMessageText",
//                               {
//                                   required: {value: true, message: 'this field is required'},
//                                   maxLength: {value: 15, message: 'max length 255'}
//                               })
//                           }/>
//                 {errors.addMessageText && <span>This field is required</span>}
//                 <button>add message</button>
//             </form>
//         );
//     };
import { Avatar, Button, Comment, Form, Input, List } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import {useAppSelector} from "../../../Redux/hooks";

const { TextArea } = Input;

interface CommentItem {
    author: string;
    avatar: string;
    content: React.ReactNode;
    datetime: string;
}

interface EditorProps {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    submitting: boolean;
    value: string;
}

const CommentList = ({ comments }: { comments: CommentItem[] }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }: EditorProps) => (
  <>
      <Form.Item>
          <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
              Add Comment
          </Button>
      </Form.Item>
  </>
);



export const AddMessageForm = ( props:{onSubmit:(newMessage:string)=>void} ) => {

  const author = useAppSelector(state => state.auth.login)
  const avatar = useAppSelector(state => state.auth.photo)
    const [comments, setComments] = useState<CommentItem[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        if (!value) return;

        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                    author: author,
                    avatar: avatar,
                    content: <p>{value}</p>,
                    datetime: moment('2022-09-20').fromNow(),
                },
            ]);
        }, 200);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
      <>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            avatar={<Avatar src={avatar} alt={author} />}
            content={
                <Editor
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  submitting={submitting}
                  value={value}
                />
            }
          />
      </>
    );
};

