// import React, {useEffect}  from "react";
// import { useParams } from "react-router-dom";

// const HouseDetails = () => {
//     const { id } = useParams();
//      const fetchData = () => {
//         fetch("http://localhost:3000/properties" + id)
//           .then((res) => res.json())
//       };
    
     
    
//       useEffect(() => {
//         fetchData();
//       }, []);

//     return ( 
//         <div className="md:m-24 m-6">
//             {/* test  details with id */}
//             <h1 className="md:text-3xl text-xl font-semibold md:mb-8 mb-4 text-gray-900">House Details</h1> 
            
          
//                 <div>
//                     <div className="md:flex rounded-xl bg-gray-800 md:p-8 p-6">
//                         <div>
//                             <p className="mb-4 text-light text-blue-400 md:text-2xl text-xl">{location}</p>
//                             <img className="mb-4 w-full rounded-lg" src={image} alt="" />
//                         </div>
//                         <aside className="md:p-8 md:mt-12">
//                             <p className="md:text-2xl font-light text-white my-8">
//                             <span className="text-blue-500 font-semibold">House Description: </span><br /> 
//                                 {description}
//                             </p>
//                             <p className="my-2 font-medium text-green-600 md:text-xl text-lg mb-4">
//                                 <span className="text-blue-500 font-semibold">Rent: </span><br /> 
//                                 $ {rent}
//                             </p>
//                             <button className="px-4 py-3 rounded-md bg-blue-400 hover:bg-blue-500 font-medium my-4">
                                
//                             </button>
//                         </aside>
//                     </div>
//                 </div>

           

//         </div>
//      );
// }
 
// export default HouseDetails;