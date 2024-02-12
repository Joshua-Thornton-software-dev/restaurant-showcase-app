import Logo from "../logo/logo";
import Nav from "../nav/nav";

export default function Header() {
    return (
        <div className="flex justify-between content-center mx-6 py-2">
            <div className="w-1/4">
                <Logo />
            </div>
            <div className="flex justify-center">
                <Nav/>
            </div>
        </div>
    );
};