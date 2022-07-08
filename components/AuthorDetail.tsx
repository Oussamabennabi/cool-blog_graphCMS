import Image from 'next/image';
import React from 'react'
import { Author } from '../typings'

interface Props {
  author:Author
}
const AuthorDetail = ({author}:Props) => {

  return (
		<div className="bg-gradient-to-l  relative pt-20  from-pink-500 to-blue-800 shadow-2xl  rounded-2xl p-5 lg:mr-10 my-20 ">
			<div className="absolute -top-12 ">
				<Image
					className="bg-white rounded-full object-cover  "
					unoptimized
					width={100}
					height={100}
					src={author.photo.url}
					alt={author.name}
				/>
			</div>
			<h3 className="font-bold text-white text-xl ">
				{author.name}
			</h3>
			<p className="text-white text-xl  my-5">{author.bio}</p>
		</div>
	);
}

export default AuthorDetail