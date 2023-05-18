import { marked } from 'marked';
import type { Asset as ContentfulAsset } from 'contentful';
import { client, formatAsset } from '$lib/utils/contentful';

export async function load() {
	const aboutData = await client.getEntries({ content_type: 'about' });
	const aboutEntry = aboutData.items[0];
	const bioString = String(aboutEntry.fields.bio);
	marked.use({ mangle: false, headerIds: false });
	const parsedBio: string = marked.parse(bioString);

	return {
		profilePicture: formatAsset(aboutEntry.fields.profilePicture as ContentfulAsset),
		parsedBio,
		location: String(aboutEntry.fields.location),
		email: String(aboutEntry.fields.email)
	};
}
