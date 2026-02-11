import {React, useEffect,useState  } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [githubData, setGithubData] = useState([]);
    const data=useLoaderData()
// useEffect(() => {
//     fetch("https://api.github.com/users/abidniazi")
//     .then((res) => res.json())
//     .then((data) => {
//         setGithubData(data);

//     })
//     document.title = "Github";
// }, []);


    return (
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-3xl font-bold underline text-center mt-10">
                Github Name :{data.login}</h1>
                <br />
                 <h1 className="text-3xl font-bold underline text-center mt-10">
                Github id :{data.id}
            </h1>
        </div>
    );
}


export default Github;

export const Githubloader =async()=>{
    const res= await fetch("https://api.github.com/users/abidniazi")
    console.log((res));
    return res.json();
    
};
