import BlockList from './blockList';
import { headers } from 'next/headers';
import { isMobileOnServer } from '@_utils/isMobile';
import fetchData from './mock';
export default async function BlocksPage() {
  const headersList = headers();
  const isMobile = isMobileOnServer(headersList);
  const data = await fetchData({ page: 1, pageSize: 25 });
  return <BlockList SSRData={data} isMobileSSR={isMobile} />;
}
