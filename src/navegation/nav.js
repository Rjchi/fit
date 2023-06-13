import { Link } from "react-router-dom";

function nav() {
    return (
        <div>
            <div>-----</div>
            <Link to="/show_membership">MEMBRESIA</Link>
            <div>-----</div>
            <Link to="/class">CLASES</Link>
            <div>-----</div>
            <Link to="/profile">PERFIL</Link>
            <div>-----</div>
        </div>
    );
};

export default nav;