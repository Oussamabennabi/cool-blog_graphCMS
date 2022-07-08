import React, { useEffect, useRef, useState } from 'react';
import { submitComment } from '../services';
import { Comment } from '../typings';
interface Props {
	slug: string;
}
const CommentForm = ({ slug }: Props) => {
	const [error, setError] = useState(false);
	const [localStorage, setLocalStorage] = useState(null);
	const [showSuccessMes, setShowSuccessMes] = useState(false);
	const commentEl:any = useRef();
	let nameEl:any = useRef();
	let emailEl:any = useRef();
  const storeDataEl: any = useRef();
  useEffect(() => {
      nameEl.current.value = window.localStorage.getItem('name' );
      emailEl.current.value = window.localStorage.getItem('email');
    
	}, [])
  

	function handleSubmit(e: any) {
		e.preventDefault();
    setError(false);
    console.log(nameEl.current.value);
		const { value: comment }: any = commentEl?.current;
		const { value: name }: any = nameEl?.current;
		const { value: email }: any = emailEl?.current;
		const { checked: storeData }: any = storeDataEl?.current;
		if (!comment || !name || !email) {
			setError(true);
			return;
		}
		const commentObj = {
			name,
			email,
			comment,
			slug,
      
		};
		if (storeData) {
			window.localStorage.setItem('name', name);
			window.localStorage.setItem('email', email);
		} else {
			window.localStorage.removeItem('name');
			window.localStorage.removeItem('email');
    }
    submitComment(commentObj).then(res => {
      setShowSuccessMes(true)
      let timer = setTimeout(() => {
      setShowSuccessMes(false);
        
			}, 2000);
			clearTimeout(timer)
    })
	}
	return (
		<form className="bg-white shadow-2xl  rounded-2xl p-5 lg:mr-10 my-20 ">
			<h3 className="text-xl font-bold ">post your comment</h3>
			<textarea
				ref={commentEl}
				className="outline outline-pink-500 outline-2 p-3 max-h-96  rounded-md w-full my-5"
				placeholder="Comment"
				name="comment"
			/>
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
				<label>
					<input
						type="text"
						className="outline outline-pink-500 outline-2 p-3 rounded-md w-full my-5 mt-2"
						placeholder="Name"
						name="name"
						ref={nameEl}
					/>
				</label>

				<label>
					<input
						type="email"
						className="outline outline-pink-500 outline-2 p-3 rounded-md w-full my-5 mt-2"
						placeholder="Email"
						name="email"
						ref={emailEl}
					/>
				</label>
			</div>
			<label className="cursor-pointer text-gray-500">
				<input
					type="checkbox"
					ref={storeDataEl}
					name="storeData"
					value="true"
					className="mr-4"
				/>
				Save my e-mail and name for the next time I comment.
			</label>

			{error && (
				<p className="text-red-500 text-sm">All fields are required !</p>
			)}
			<div className="text-center">
				<button
					type="submit"
					onClick={handleSubmit}
					className="bg-pink-700 hover:bg-blue-900 rounded-full px-5 py-4  transition-all ease-in-out duration-150 cursor-pointer mx-auto font-bold mt-5 text-white"
				>
					Submit My Comment
				</button>
			</div>
			{showSuccessMes && (
				<p className="mt-5 text-xl text-green-500">
					Comment submited for review.{' '}
				</p>
			)}
		</form>
	);
};

export default CommentForm;
