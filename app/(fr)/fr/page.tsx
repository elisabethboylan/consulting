import { HomeView } from '@/components/views/HomeView';
import { pageMetadata } from '@/content/metadata';

export const metadata = pageMetadata('fr');

export default function Page() {
  return <HomeView lang="fr" />;
}
