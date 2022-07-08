import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategories } from '../services';
import { Categorie } from '../typings';

const Header = () => {
	const [categories, setCategories]= useState<[Categorie]>();
	useEffect(() => {
		getCategories().then(result=>setCategories(result))
	},[])
	return (
		<div className="container border-b  border-black mx-auto flex px-5 justify-between items-center">
			<Link href={'/'}>
				<img className="w-20 cursor-pointer" src="/logo1.png" alt="" />
			</Link>
			<div className="flex-wrap flex justify-end text-white font-semibold text-right">
				{categories&&categories.map((categorie) => (
					<Link key={ categorie.slug} href={`/categories/${categorie.slug}`}>
						<span className="cursor-pointer  p-1 m-1">{categorie.name}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Header;
