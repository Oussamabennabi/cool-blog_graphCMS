import React from 'react'
import { PostDetail } from '../typings'
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
interface Props {
  post:PostDetail
} 

const PostDetailPage = ({ post }: Props) => {
  
    const getContentFragment = (index:any, text:any, obj:any, type?:any) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

		
  return (
		<article className="bg-white shadow-2xl  rounded-2xl p-5 lg:mr-10 mb-10">
			<div className="overflow-hidden h-2/5 rounded-2xl">
				<img
					className="w-full h-full object-cover"
					src={post.featuredPhoto.url}
					alt={post.title}
				/>
			</div>
			<h1 className="text-4xl text-center font-bold pt-4 pb-8 ">
				{post.title}
			</h1>

			{/* AUTHOR */}
			<div className="flex justify-center items-center gap-10">
				<div className="flex justify-center items-center gap-2 cursor-pointer">
					<img
						className="rounded-full h-8 w-8 object-cover"
						src={post.author.photo.url}
						alt={post.author.name}
					/>
					<span className="text-gray-500">{post.author.name}</span>
				</div>
				{/* CREATED AT */}
				<div className="flex justify-center items-center gap-2">
					<FaCalendarAlt className="text-pink-500" />
					<span>
						{new Date(post.createdAt).toLocaleString('en-us', {
							month: 'short',
							day: '2-digit',
							year: 'numeric',
						})}
					</span>
				</div>
			</div>

			<p className="text-gray-700 text-center my-5">{post.excerpt}</p>
			<div>
				{post.content.raw.children.map((typeObj: any, i: any) => {
					const children = typeObj.children.map((item: any, j: any) =>
						getContentFragment(j, item.text, item)
					);
					return getContentFragment(i, children, typeObj, typeObj.type);
				})}
			</div>
		</article>
	);
}

export default PostDetailPage