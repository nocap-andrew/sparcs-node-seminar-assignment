import React from "react";
import axios from "axios";
import "./css/feed.css";
import { SAPIBase } from "../tools/api";

interface IAPIResponse  { id: number, title: string, content: string }
interface Props { val: IAPIResponse, Test: any, setTest: any}

const EditPost = ({ val, Test, setTest }: Props) => {
    const [SEditTitle, setSEditTitle] = React.useState<string>("");
    const [SEditContent, setSEditContent] = React.useState<string>("");

    const editThisPost = (id: string) => {
        const asyncFun = async () => {
            await axios.post( SAPIBase + '/feed/editFeed', { id: id, title: SEditTitle, content: SEditContent} );
            setSEditTitle("");
            setSEditContent("");
            setTest(!Test);
        }
        asyncFun().catch(e => window.alert(`AN ERROR OCCURED! ${e}`));
    }

    return (
        <div>
            Title: <input type={"text"} value={SEditTitle} onChange={(e) => setSEditTitle(e.target.value)}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            Content: <input type={"text"} value={SEditContent} onChange={(e) => setSEditContent(e.target.value)}/>
            <div className={"post-edit-button"} onClick={(e) => editThisPost(`${val.id}`)}>Edit Post!</div>
        </div>
    );
}

export default EditPost;