export interface Post {
	node: {
		title: string;
		slug: string;
		featuredPost: boolean;
		author: Author;
		id: string;

		categories: [Categorie];
		createdAt: Date;
		excerpt: string;
		featuredPhoto: {
			url: string;
		};
	};
}
export interface PostDetail {
	title: string;
	slug: string;
	featuredPost: boolean;
	author: Author;
	id: string;
	content: { raw: { children: any } };
	categories: [Categorie];
	createdAt: Date;
	excerpt: string;
	featuredPhoto: {
		url: string;
	};
}

export interface Author {
	bio: string;
	name: string;
	id: string;
	photo: {
		url: string;
	};
}
export interface Categorie {
	name: string;
	slug: string;
}

export interface RelatedPost {
	id: string;
	title: string;
	featuredPhoto: {
		url: string;
	};
	createdAt: Date;
	slug: string;
}

export interface Comment {
	name:any;
	email:any;
	comment:any;
	slug:any;
}