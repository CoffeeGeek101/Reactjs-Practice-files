import React from "react"
import style from "../src/index.css"
import Header from "./Header"
import Content from "./Content"
import contentData from "./content-data"
export default function App(){
    const content_ele =  contentData.map(content =>{
        return <Content
                    img = {content.img}
                    loco_name = {content.loco_name}
                    location = {content.location}
                    dates = {content.dates}
                    des = {content.des}
                />
    });
    return( 
        <div>
            <Header/>
            {content_ele}
        </div>
    )
}

