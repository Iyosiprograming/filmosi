function Nav() {
    return (
        <>
            <nav className="bg-gray-900 text-white p-4">
                <ul className="flex items-center justify-between">
                    <li className="text-2xl font-bold">Filmosi</li>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search Movies"
                            className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Search
                        </button>
                    </div>
                    <li>

                        <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">

                        </img>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
