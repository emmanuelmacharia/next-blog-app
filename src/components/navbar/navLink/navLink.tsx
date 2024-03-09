"use client"
import Link from "next/link";
import { LinkItem } from "@/core/models/models";
import styles from "./navLink.module.css"
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";

const NavLink = (props: { item: LinkItem}) => {
    const pathName = usePathname();
    return <Link className={`${styles.container} ${pathName === props.item.path && styles.active}`} href={props.item.path}>{props.item.title}</Link>

}

export default NavLink;