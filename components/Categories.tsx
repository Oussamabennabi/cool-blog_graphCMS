import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';
import { Categorie } from '../typings';

const Categories = () => {
	const [categories,setCategories] = useState<Categorie[]>([])
	useEffect(() => {
		async function getData() {
			await getCategories().then(result=>setCategories(result))
			
		}
		getData()
	},[])
	
	return (
		<div className=" bg-white  shadow-2xl rounded-2xl p-5 mb-10">
			<h2 className="font-bold pb-5 text-2xl">Categories</h2>
			<div className="">
				{categories.map((c) => (
					<Link key={c.slug} href={`categories/${c.slug}`}>
						<span className="block my-1 border-b py-1 transition duration-200 hover:text-pink-700 cursor-pointer">
							{c.name}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
