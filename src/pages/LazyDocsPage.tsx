
import { lazyLoad } from '@/utils/lazyLoad';
import { ComponentPageSkeleton } from '@/components/ui/skeleton-loaders';

export default lazyLoad(
  () => import('./DocsPage'),
  <ComponentPageSkeleton />
);
