import Link from "next/link";

function NavItem({
    path,
    label
} : {
    path: string,
    label: string
}) {
    return (
        <li className="h-full flex justify-center items-center">
            <Link href={path}>{label}</Link>
        </li>
    );
};

export default function Nav() {
    return (
        <nav className="flex justify-between flex-wrap p-3">
            <ul className="flex justify-center items-center gap-6">
                <NavItem path="/" label="Home"/>
                <NavItem path="/menu" label="Menu"/>
                <NavItem path="/about-us" label="About Us"/>
                <NavItem path="/contact-us" label="Contact Us"/>
            </ul>
        </nav>
    );
}
