import Router from "next/router";
import {MainLayout} from "../../component/mainLayout";

export default function Index(){
    const linkClickHandler=()=>{
        Router.push('/')
    }

    return(
        <MainLayout title={"About"}>
            <h1>About page!</h1>

            <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={()=>Router.push('/posts')}>Go back to home posts</button>
        </MainLayout>
    )
}