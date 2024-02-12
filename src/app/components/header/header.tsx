import Logo from '../logo/logo';
import Nav from '../nav/nav';

export default function Header() {
    return (
        <div className='flex justify-between content-center py-6 px-6 bg-red-950/55 border-b-2 border-black/30'>
            <div className='w-1/4'>
                <Logo />
            </div>
            <div className='flex justify-center'>
                <Nav/>
            </div>
        </div>
    );
};