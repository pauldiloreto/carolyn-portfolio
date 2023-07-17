export type Album = {
	name: string;
	photos: ImageType[];
};

export type Asset = {
	id: string;
	title: string;
	url: string;
};

export type ImageType = Asset & {
	width: number;
	height: number;
	placeholder: string;
	dominantColor?: string;
};

export type IconType = 'instagram' | 'linkedin';
export type ProjectType = 'All' | 'Design' | 'Film' | 'Interactive' | 'Animation';

export type SocialMedia = {
	id: string;
	title: IconType;
	link: string;
};

export type Project = {
	id: string;
	title: string;
	slug: string;
	coverImage: ImageType;
	description: string;
	role: string | null;
	videoLink: string | null;
	summary: string;
	projectType: ProjectType[];
	password: string | null;
};
