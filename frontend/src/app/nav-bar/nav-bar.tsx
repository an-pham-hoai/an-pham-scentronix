import './nav-bar.css'

interface NavBarProp {
    items: string[];
}

const NavBar = ({ items }: NavBarProp) => {

    return (
        <>
            <nav className="navbar flex flex-col items-center p-6">

                <div className="navbar2 w-full max-w-4xl text-center my-8">
                    <div className="navbar-left">
                        <a href='/'>
                            <img
                                src="/images/monkey.png"
                                alt="Monkey Logo"
                                className="monkey-logo"
                            />
                        </a>
                    </div>

                    <div className="navbar-right">
                        <ul className="nav-links">
                            {
                                items.map(item => (
                                    <li><a href={'/' + item.toLowerCase()}>{item}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    );
}
export default NavBar