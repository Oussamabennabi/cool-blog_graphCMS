import React, { useEffect, useState } from 'react'
import { getComments } from '../services';
interface Props {
	slug: string;
}

function Comments({ slug }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  useEffect(() => {
    getComments(slug).then(results=>setComments(results)).catch(err=>console.log(err))
  },[])
  return (
		<>
			{comments.length > 0 && (
        <section className="bg-white shadow-2xl rounded-2xl p-5 lg:mr-10 my-20 ">
          <h3>{comments.length} Comments</h3>
        </section>
			)}
		</>
	);
}

export default Comments