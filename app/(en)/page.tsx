import { HomeView } from '@/components/views/HomeView';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('en');

export default function Page() {
  return <HomeView lang="en" />;
}
