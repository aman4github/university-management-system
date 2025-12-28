import { Link } from "react-router-dom";

const homeNav =
    [<>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/loginTeacher">Faculty</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/loginStudent">Student</Link>
            </li>
        </ul>
        <button type="button" class="btn btn-primary modal-login" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            LOGIN
        </button>
    </>]

const loginNav =
    [<>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="">Login</Link>
            </li>
        </ul>
    </>]

export {homeNav, loginNav};