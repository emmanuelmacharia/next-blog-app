import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h3>Not Found</h3>
            <p>Sorry, we couldnt find what you are looking for</p>
            <Link href="/">Return home</Link>
        </div>
    )
}

export default NotFound;