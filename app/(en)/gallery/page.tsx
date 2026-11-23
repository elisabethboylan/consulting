import { GalleryView } from '@/components/views/GalleryView';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('gallery', 'en');

export default function Page() {
  return <GalleryView lang="en" />;
}
