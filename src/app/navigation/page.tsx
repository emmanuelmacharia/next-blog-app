"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestComponent = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathname = usePathname();
    const query = useSearchParams();


    const handleCkick = (event: any) => {
        console.log('clicked');
        // router.push('/');
        // router.refresh();
        // router.back()
        // router.forward()
        router.replace('/');

    }
    return ( <div>
        <Link href="/" prefetch={false}>Click here</Link>
        <button onClick={handleCkick}>Write and redirect</button>
    </div> );
}
 
export default NavigationTestComponent;