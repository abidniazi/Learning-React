import React from "react";
import { useParams } from "react-router-dom";
function User() {
    const { userid } = useParams();
    return (
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-3xl font-bold underline text-center mt-10">
                User:{userid}
            </h1>
        </div>
    );
}

export default User;