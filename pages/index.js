import Link from 'next/link'
import Head from "next/head";
import {MainLayout} from "../component/mainLayout";

export default function Index(){
    return (
        <MainLayout title={"Next"}>

        <h1>Hello Next.js</h1>
        <p><Link href={"/about"}>About</Link></p>
        <p><Link href={"/posts"}>Psots</Link></p>
    </MainLayout>
    )
}