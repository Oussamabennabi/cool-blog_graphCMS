import React from 'react';
import { Post } from '../typings';
import {FaCalendarAlt} from 'react-icons/fa'
import Link from 'next/link';
interface Props {
	post: Post;
	key?: string;
}

const PostCard = ({ post,key }: Props) => {
	const { node } = post;
  return (
    
		<article key={key} className="bg-white shadow-2xl text-center rounded-2xl p-5 lg:mr-10 mb-10">
			<div className="overflow-hidden h-2/5 rounded-2xl">
				<img
					className="w-full h-full object-cover"
					src={node.featuredPhoto.url}
					alt={node.title}
				/>
      </div>
			<Link href={`post/${node.slug}`}>
			    <h1 className="text-4xl font-bold pt-4 pb-8 hover:text-pink-500 transition-all duration-500 cursor-pointer ease-in-out">{node.title}</h1>
      </Link>
			{/* AUTHOR */}
			<div className="flex justify-center items-center gap-10">
				<div className="flex justify-center items-center gap-2 cursor-pointer">
					<img
						className="rounded-full h-8 w-8 object-cover"
						src={node.author.photo.url}
						alt={node.author.name}
					/>
					<span className="text-gray-500">{node.author.name}</span>
				</div>
				{/* CREATED AT */}
				<div className="flex justify-center items-center gap-2">
					<FaCalendarAlt className="text-pink-500" />
					<span>
						{new Date(node.createdAt).toLocaleString('en-us', {
							month: 'short',
							day: '2-digit',
							year: 'numeric',
						})}
					</span>
				</div>
			</div>

			<p className="text-gray-700  mt-5">{node.excerpt}</p>
			<Link href={`post/${node.slug}`}>
				<button className="bg-pink-700 rounded-full px-5 py-4 hover:-translate-y-0.5 transition-all ease-in-out duration-150 cursor-pointer mx-auto font-bold mt-5 text-white">
					Continue Reading
				</button>
			</Link>
		</article>
	);
};

export default PostCard;
