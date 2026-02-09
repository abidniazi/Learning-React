import {React, useEffect,useState  } from "react";

function Github() {
    const [githubData, setGithubData] = useState([]);
useEffect(() => {
    fetch("https://api.github.com/users/abidniazi")
    .then((res) => res.json())
    .then((data) => {
        setGithubData(data);

    })
    document.title = "Github";
}, []);

    return (
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-3xl font-bold underline text-center mt-10">
                Github Name :{githubData.login}</h1>
                <br />
                 <h1 className="text-3xl font-bold underline text-center mt-10">
                Github id :{githubData.id}
            </h1>
        </div>
    );
}

export default Github;