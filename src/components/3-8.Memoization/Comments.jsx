import React, {useCallback} from 'react';
import CommentItem from './CommentItem';

const Comments = ({commentList}) => {
	const onHandleClick = useCallback(() => {
		console.log('눌림');
	}, []);
	return (
		<div>
			{
				commentList.map(comment =>
					<CommentItem
						key={comment.title}
						title={comment.title}
						content={comment.content}
						likes={comment.likes}
						onClick={onHandleClick}
					/>
				)
			}
		</div>
	);
};

export default Comments;
