import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
   const data = useLoaderData();

   return (
     <div className="flex flex-col items-center  my-10">
       <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
         <div className="flex flex-col items-center mb-6">
           <img 
             className="w-32 h-32 rounded-full border-4 border-green-600 shadow-md" 
             src={data.avatar_url} 
             alt={data.name} 
           />
           <h1 className="text-3xl text-white font-bold mt-4">{data.name}</h1>
         </div>
         <div className="text-center text-white">
           <p className="text-xl mb-2">
             <span className="font-semibold">Username:</span> 
             <span className="text-green-400"> {data.login}</span>
           </p>
           <p className="text-xl mb-2">
             <span className="font-semibold">Followers:</span> 
             <span className="text-green-400"> {data.followers}</span>
           </p>
           <p className="text-xl mb-2">
             <span className="font-semibold">Following:</span> 
             <span className="text-green-400"> {data.following}</span>
           </p>
           <p className="text-xl mb-2">
             <span className="font-semibold">Public Repositories:</span> 
             <span className="text-green-400"> {data.public_repos}</span>
           </p>
         </div>
       </div>
     </div>
   );
}

export default Github;


export  const githubInfoLoder = async()=>{
   const response = await fetch("https://api.github.com/users/Raheemullah8")
   return response.json();

}
