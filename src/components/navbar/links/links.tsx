"use client"
import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "../navLink/navLink";
import { useState } from "react";

const links = [
    {title: "Homepage", path: '/'},
    {title: "About", path: '/about'},
    {title: "Contact", path: '/contact'},
    {title: "Posts", path: '/blog'}
]

const session = true;
const isAdmin = true;

const Links = () => {
    const [open, setOpen] = useState(false); 

    return(
        <div className={styles.container}>
        <div className={styles.links}>{links.map(
            (link) => (<NavLink item={link} key={link.title}/>)
            )}
            {
                session ? (
                    <>                    
                    {
                        isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}} />)
                    }
                    <button className={styles.button}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "login", path: "/login"}} />
                )
            }
        </div>
        <button className={styles.humburgerMenu} onClick={() => setOpen((prev) =>  !prev)}>menu</button>
        { open && 
            <div className={styles.mobileLinks}> 
                {links.map((link) => (<NavLink item={link} key={link.title}/>))} 
            </div>
        }
        </div>
    )
}

export default Links;