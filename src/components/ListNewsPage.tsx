import React, {FC} from "react";
import {INews} from "../models/INews";
import SingleNewsPage from "./SingleNewsPage";

interface ListNewsProps {
    news: INews[];
}

const ListNewsPage: FC<any> = (props) => {
    return (
        (props.news.map((news: INews) => (
            <SingleNewsPage key={news.id} news={news}/>
        )))
    )
};

export default ListNewsPage;
