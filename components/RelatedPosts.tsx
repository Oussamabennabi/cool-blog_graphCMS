import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';
import { Categorie, Post, RelatedPost } from '../typings';

interface Props {
	categories?: any;
	slug?: string;
}
const RelatedPosts = ({categories, slug }: Props) => {

	const [posts, setPosts] = useState<[RelatedPost]>();

	useEffect(() => {
		const getPosts = async () => {
			if (slug) {
				getSimilarPosts(categories, slug)
					.then((result) => setPosts(result))
					.catch((err) => console.log(err));
			} else {

				getRecentPosts()
					.then((result) => setPosts(result))
					.catch((err) => console.log(err));
				
			}

		};
		getPosts();
	}, [slug]);

	return (
		<div className="bg-white top-8  shadow-2xl rounded-2xl p-5 mb-8">
			<h2 className="font-bold pb-5 text-2xl">
				{slug ? 'Related Posts' : 'Recent Posts'}
			</h2>
			<div className="">
				{posts&&posts.map((post) => (
					<Link key={post.id}  href={post.slug }>
						<div className="cursor-pointer flex mb-5 items-center  gap-4">
							<img
								className="w-8 h-8 rounded-full object-cover"
								src={post.featuredPhoto.url}
								alt={post.title}
							/>
							<div className="">
								<span className="text-gray-500 text-sm">
									{new Date(post.createdAt).toLocaleString('en-us', {
										month: 'short',
										day: '2-digit',
										year: 'numeric',
									})}
								</span>
								<h3 className="">{post.title}</h3>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default RelatedPosts;
