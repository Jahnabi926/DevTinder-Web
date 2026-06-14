import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user?.user || store.user);
  console.log("Reading from the store", user);

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">👩‍💻 DevTinder</a>
      </div>
      <div className="flex-none">
        {user && (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium mr-2 hidden sm:inline">
              Welcome, {user.firstName}
            </span>

            <div className="dropdown dropdown-end mx-0">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border border-gray-400">
                  <img alt="user photo" src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between py-2">
                    Profile
                    <span className="badge badge-sm badge-secondary">New</span>
                  </a>
                </li>
                <li>
                  <a className="py-2">Settings</a>
                </li>
                <li>
                  <a className="py-2 text-error font-medium">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
