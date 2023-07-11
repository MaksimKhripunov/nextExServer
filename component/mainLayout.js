import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title='Basic'}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next"/>
                <meta name="description" content="example"/>
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={'/'}><p>Home</p></Link>
                <Link href={'/about'}><p>About</p></Link>
                <Link href={'/posts'}><p>Posts</p></Link>
            </nav>
            <main>
            {children}
            </main>

            <style jsx>
                {` 
                    nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    }

                    nav p { 
                    color: #fff;
                    text-decoration:none
                    }
                    
                    main {
                    margin-top: 60px;
                    padding: 1rem; 
                    }
                `}
            </style>
        </>
    )
}