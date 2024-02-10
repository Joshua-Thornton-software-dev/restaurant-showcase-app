export default function Nav() {
    return (
        <nav className="flex justify-between flex-wrap p-3">
            <ul className="flex">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
            </ul>

            <ul className="flex">
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}