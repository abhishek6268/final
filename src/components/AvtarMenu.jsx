import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Avtar with darpdown menu
const AvatarMenue = () => {

    const [state, setState] = useState(false)
    const profileRef = useRef(null);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const navigation = [
        { title: "Profile", path: "javascript:void(0)" },
        { title: "Cart", path: "/cart" },
        { title: "Favourites", path: "/favrouites" },
        { title: "Settings", path: "settings" },
    ]


    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current?.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className="relative border-t lg:border-none">
            <div className="">
                <button ref={profileRef} className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                        className="w-full h-full rounded-full"
                    />
                </button>
            </div>
            <ul className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'} z-50`}>
                {
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3" href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
                <Link  to={"/signin"} className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                    SignIn
                </Link>
                <Link to={"/signup"} className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                    SignUp
                </Link>
            </ul>
        </div>
    )
}

export default () => {

    const [state, setState] = useState(false)


    return (
        <header className="text-base lg:text-sm">
            <div className={`bg-white items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${state ? "h-full fixed inset-x-0" : ""}`}>

                <div className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${state ? "" : "hidden"}`}>
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0"><AvatarMenue />
                    </ul>
                </div>
            </div>

        </header>
    )
}