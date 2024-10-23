import { useEffect, useState } from "react";
import List from "../List/List";

const CategoryList = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])


    return (
        <div className="">
            <h2 className="text-5xl mt-10  p-2 text-center font-semibold"> Job Category list</h2>
            <p className="text-xl text-center p-2 font-light">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
                {
                    lists.map(list => <List key={list.id} list={list}></List>)
                }
            </div>


        </div>
    );
};

export default CategoryList;